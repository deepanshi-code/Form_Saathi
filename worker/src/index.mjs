// Form Saathi AI helper: a small Cloudflare Worker that sits between the website and Google Gemini.
//
// Why it exists: the Gemini API key must stay secret, and the website is public.
// What it does, for each question:
//   1. Accepts only requests from the Form Saathi website, and only a few per person per day.
//   2. Loads the verified guide text itself (data/<id>.json on the live site), for at most
//      three guides the website suggests. The browser never sends guide text, so nobody can use
//      this as a free general chatbot.
//   3. Asks Gemini to answer ONLY from that text, in the user's language, and to say so when the
//      guides don't cover the question.
//   4. Checks the answer points to a real guide and box before sending it back.
//
// Settings (wrangler.toml / Cloudflare dashboard):
//   GEMINI_API_KEY  secret, from Google AI Studio (set with: npx wrangler secret put GEMINI_API_KEY)
//   GEMINI_MODEL    model name, e.g. "gemini-2.5-flash" (check the current list in Google AI Studio)
//   SITE_URL        where data/<id>.json lives, e.g. "https://deepanshi-code.github.io/Form_Saathi"
//   ALLOWED_ORIGINS comma-separated sites allowed to call this, e.g. the GitHub Pages site and localhost
//   DAILY_LIMIT     questions per person (IP address) per day, e.g. "30"
//   LIMITS          a KV namespace used to count questions (see worker/README.md)

const MAX_QUESTION = 300;   // characters
const MAX_FORMS = 3;        // guides sent to the model per question
const ID_PATTERN = /^[a-z0-9-]{2,60}$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0] || "",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return reply(405, { error: "method" });
    if (!allowed.includes(origin)) return reply(403, { error: "origin" });

    // 1. Read and check the request.
    let body;
    try { body = await request.json(); } catch { return reply(400, { error: "json" }); }
    const question = cleanQuestion(String(body.question || ""));
    const lang = body.lang === "hi" ? "hi" : "en";
    const ids = [...new Set(Array.isArray(body.forms) ? body.forms : [])].filter(id => ID_PATTERN.test(id)).slice(0, MAX_FORMS);
    if (!question || !ids.length) return reply(400, { error: "input" });

    // 2. A daily limit per person, so the free quota lasts.
    if (env.LIMITS) {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const key = `q:${new Date().toISOString().slice(0, 10)}:${ip}`;
      const used = Number(await env.LIMITS.get(key)) || 0;
      if (used >= Number(env.DAILY_LIMIT || 30)) return reply(429, { error: "limit" });
      await env.LIMITS.put(key, String(used + 1), { expirationTtl: 60 * 60 * 26 });
    }

    // 3. Load the verified guides from the live site.
    const guides = (await Promise.all(ids.map(id => loadGuide(env.SITE_URL, id)))).filter(Boolean);
    if (!guides.length) return reply(502, { error: "guides" });

    // 4. Ask Gemini, then check what it says.
    let result;
    try {
      result = await askGemini(env, question, lang, guides);
    } catch (e) {
      return reply(502, { error: "model" });
    }
    return reply(200, checkResult(result, guides));
  }
};

// Removes things that look like personal numbers or emails before anything leaves this server.
export function cleanQuestion(text) {
  return text
    .slice(0, MAX_QUESTION)
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, "[email]")
    .replace(/\b[A-Z]{5}[0-9]{4}[A-Z]\b/gi, "[PAN]")
    .replace(/\d[\d\s-]{5,}\d/g, "[number]")
    .trim();
}

async function loadGuide(siteUrl, id) {
  try {
    const res = await fetch(`${siteUrl}/data/${id}.json`, { cf: { cacheTtl: 3600 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Only the text in the user's language, numbered the way the website numbers boxes.
function guideText(guide, lang) {
  const t = v => (v && typeof v === "object" ? v[lang] : v);
  const list = v => (Array.isArray(t(v)) ? t(v).join("; ") : "");
  const lines = [
    `GUIDE id="${guide.id}" name="${t(guide.name)}" category="${t(guide.category)}" verified=${guide.verified} last_checked=${guide.lastChecked}`,
    `About: ${t(guide.about)}`
  ];
  if (guide.caution) lines.push(`Caution: ${t(guide.caution)}`);
  guide.fields.forEach((f, i) => {
    lines.push(`Box ${i + 1}: ${t(f.label)}`);
    if (f.quick) lines.push(`  Short answer: ${t(f.quick)}`);
    lines.push(`  What to write: ${t(f.write)}`);
    lines.push(`  Meaning: ${t(f.meaning)}`);
    if (list(f.documents)) lines.push(`  Documents: ${list(f.documents)}`);
    if (list(f.mistakes)) lines.push(`  Common mistakes: ${list(f.mistakes)}`);
    if (f.changed) lines.push(`  Recently changed: ${t(f.changed)}`);
  });
  return lines.join("\n");
}

const RULES = {
  en: "Reply in simple English.",
  hi: "Reply in simple, natural Hindi (Devanagari). Keep terms like PAN, Aadhaar, IFSC as they are."
};

export function buildRequest(question, lang, guides) {
  const system = [
    "You are Form Saathi, a helper that explains Indian official forms to first-time applicants and their parents.",
    "Answer ONLY using the GUIDES given below. Do not use any other knowledge, even if you think you know the answer.",
    "If the guides do not answer the question, set found=false and say briefly that this site's guides don't cover it and the person should ask the office or bank.",
    "Never invent fees, dates, deadlines, document lists or rules. If a guide says to ask the office, say that.",
    "Never ask for or repeat personal details (Aadhaar, PAN, account or phone numbers).",
    "Keep the answer under 80 words. Point to the guide and box number the answer comes from.",
    RULES[lang]
  ].join("\n");
  const context = guides.map(g => guideText(g, lang)).join("\n\n");
  return {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text: `GUIDES:\n${context}\n\nQUESTION: ${question}` }] }],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 1024,
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          found: { type: "BOOLEAN" },
          answer: { type: "STRING" },
          form_id: { type: "STRING", nullable: true },
          box: { type: "INTEGER", nullable: true }
        },
        required: ["found", "answer"]
      }
    }
  };
}

async function askGemini(env, question, lang, guides) {
  const model = env.GEMINI_MODEL || "gemini-2.5-flash";
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
    body: JSON.stringify(buildRequest(question, lang, guides))
  });
  if (!res.ok) throw new Error("gemini " + res.status);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
  return JSON.parse(text);
}

// The model's answer is only trusted as text; the guide and box it points to must really exist.
export function checkResult(result, guides) {
  const answer = typeof result?.answer === "string" ? result.answer.slice(0, 1200) : "";
  const guide = guides.find(g => g.id === result?.form_id) || null;
  const box = guide && Number.isInteger(result?.box) && result.box >= 1 && result.box <= guide.fields.length ? result.box : null;
  return {
    found: Boolean(result?.found) && Boolean(answer),
    answer,
    form_id: guide ? guide.id : null,
    box
  };
}
