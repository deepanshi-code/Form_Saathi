// "Ask Saathi": a small helper that finds the right form (or the right box on an open form)
// from what the user types or says, in English, Hindi or Hinglish.
// It only points to the verified guides on this site; it never writes its own answers,
// so it cannot invent rules. Loaded after app.js and uses its helpers (UI, lang, el, icon, $ ...).

const ASK = {
  en: {
    open: "Ask Saathi",
    title: "Ask Saathi",
    sub: "Type or speak. I'll find the right form.",
    placeholder: "e.g. I want to open a bank account",
    send: "Send",
    mic: "Speak",
    listening: "Listening…",
    close: "Close",
    hello: "Namaste! Tell me what you need to do, in English or Hindi. I'll open the right form for you.",
    helloForm: name => `You're on "${name}". Ask about any box, like "what to write in date of birth".`,
    try: ["Open a bank account", "PAN card banwana hai", "Going abroad to study", "Name change after marriage"],
    found: "These forms look right:",
    foundOne: "This form looks right:",
    seeAll: (n, group) => `See all ${n} ${group} forms`,
    situation: name => `For "${name}", people usually need:`,
    box: (n, label) => `Box ${n}: ${label}`,
    boxIntro: "In this form, look at:",
    showBox: "Show me this box",
    openForm: "Open guide",
    none: "Sorry, I couldn't find that. Try simple words like PAN, bank account, passport, scholarship or marriage.",
    noMic: "Voice input isn't supported in this browser. Please type instead.",
    micError: "I couldn't hear that. Please try again or type.",
    note: "Answers come only from the verified guides on this site.",
    aiLabel: "Saathi AI (beta)",
    aiThinking: "Reading the guides…",
    aiLimit: "You've reached today's limit for AI answers. The search results above still work.",
    aiOpenBox: (n) => `Show box ${n}`,
    aiNote: "AI answers use Google Gemini and only the guides on this site. Don't type personal numbers."
  },
  hi: {
    open: "साथी से पूछें",
    title: "साथी से पूछें",
    sub: "लिखें या बोलें। मैं सही फॉर्म ढूँढ दूँगा।",
    placeholder: "जैसे: मुझे बैंक खाता खोलना है",
    send: "भेजें",
    mic: "बोलें",
    listening: "सुन रहा हूँ…",
    close: "बंद करें",
    hello: "नमस्ते! बताइए आपको क्या करना है, हिंदी या अंग्रेज़ी में। मैं सही फॉर्म खोल दूँगा।",
    helloForm: name => `आप "${name}" पर हैं। किसी भी खाने के बारे में पूछें, जैसे "जन्म तिथि में क्या लिखूँ"।`,
    try: ["बैंक खाता खोलना है", "पैन कार्ड बनवाना है", "पढ़ाई के लिए विदेश जाना है", "शादी के बाद नाम बदलना"],
    found: "ये फॉर्म सही लगते हैं:",
    foundOne: "यह फॉर्म सही लगता है:",
    seeAll: (n, group) => `${group} के सभी ${n} फॉर्म देखें`,
    situation: name => `"${name}" के लिए आम तौर पर ये फॉर्म चाहिए:`,
    box: (n, label) => `खाना ${n}: ${label}`,
    boxIntro: "इस फॉर्म में यह देखें:",
    showBox: "यह खाना दिखाएँ",
    openForm: "गाइड खोलें",
    none: "माफ़ कीजिए, यह नहीं मिला। आसान शब्द लिखें, जैसे पैन, बैंक खाता, पासपोर्ट, छात्रवृत्ति या शादी।",
    noMic: "इस ब्राउज़र में बोलकर पूछना नहीं चलता। कृपया लिखकर पूछें।",
    micError: "आवाज़ साफ़ नहीं आई। फिर से कोशिश करें या लिखें।",
    note: "जवाब सिर्फ़ इस साइट की जाँची हुई गाइड से आते हैं।",
    aiLabel: "साथी AI (बीटा)",
    aiThinking: "गाइड पढ़ रहा हूँ…",
    aiLimit: "आज के AI जवाबों की सीमा पूरी हो गई। ऊपर के खोज नतीजे अब भी काम करते हैं।",
    aiOpenBox: (n) => `खाना ${n} दिखाएँ`,
    aiNote: "AI जवाब Google Gemini से और सिर्फ़ इस साइट की गाइड से आते हैं। निजी नंबर न लिखें।"
  }
};

// ---------- Chat panel ----------

const askState = { open: false, listening: false, rec: null };

function askAdd(who, nodes) {
  const msg = el("div", "ask-msg ask-" + who);
  msg.append(...nodes);
  $("ask-log").append(msg);
  msg.scrollIntoView({ block: "nearest" });
  return msg;
}

function askText(text) { return el("p", null, text); }

function askFormButton(form) {
  const a = el("a", "ask-form");
  a.href = "#form/" + form.id;
  a.append(iconBox(form, "small"), el("span", null, meta(form).short[lang]), icon("arrow", "icon ask-arrow"));
  a.addEventListener("click", () => { if (window.matchMedia("(max-width: 640px)").matches) askToggle(false); });
  return a;
}

function askGreet() {
  $("ask-log").replaceChildren();
  const form = currentForm();
  const t = ASK[lang];
  askAdd("bot", [askText(form ? t.helloForm(meta(form).short[lang]) : t.hello)]);
  const chips = el("div", "ask-chips");
  t.try.forEach(q => {
    const b = el("button", "ask-chip", q);
    b.type = "button";
    b.addEventListener("click", () => askHandle(q));
    chips.append(b);
  });
  if (!form) askAdd("bot", [chips]);
}

function askHandle(query) {
  query = query.trim();
  if (!query) return;
  askAdd("user", [askText(query)]);
  const forms = askSearch(query);
  askAI(query, forms);
}

// Instant answer from the guides on this device. Returns the ids of the guides it pointed to,
// so the AI (when switched on) can read the same guides.
function askSearch(query) {
  const t = ASK[lang];
  const form = currentForm();
  const match = findMatch(query, form ? form.id : null);

  if (match.kind === "box") {
    const field = match.form.fields[match.index];
    const quick = field.quick ? field.quick[lang] : field.write[lang];
    const show = el("button", "ask-action", t.showBox);
    show.type = "button";
    show.addEventListener("click", () => askShowBox(match.form, match.index));
    const row = el("div", "ask-row");
    row.append(show, speakButton(quick));
    askAdd("bot", [askText(t.boxIntro), el("strong", "ask-box", t.box(match.index + 1, field.label[lang])), askText(quick), row]);
    askShowBox(match.form, match.index);
    return [match.form.id];
  }
  if (match.kind === "event") {
    askAdd("bot", [askText(t.situation(match.event.title[lang])), ...match.list.map(askFormButton)]);
    return (form ? [form] : []).concat(match.list).map(f => f.id).slice(0, 3);
  }
  if (match.kind === "none") {
    askAdd("bot", [askText(t.none)]);
    return form ? [form.id] : [];
  }
  const nodes = [askText(match.picks.length === 1 ? t.foundOne : t.found), ...match.picks.map(askFormButton)];
  // Many equally good matches in one group (e.g. eight bank accounts): offer the whole group too.
  if (match.group) {
    const group = match.group;
    const more = el("button", "ask-action ask-more", t.seeAll(formsInChip(group).length, group.label[lang]));
    more.type = "button";
    more.addEventListener("click", () => {
      chip = group.key;
      showAllForms = true;
      location.hash = "forms";
      renderChips();
      renderGrid();
      if (window.matchMedia("(max-width: 640px)").matches) askToggle(false);
    });
    nodes.push(more);
  }
  askAdd("bot", nodes);
  return [...new Set((form ? [form] : []).concat(match.picks).map(f => f.id))].slice(0, 3);
}

// ---------- Optional AI answers ----------
// Switched on only when config.js sets window.SAATHI_AI_URL to the deployed worker.
// The worker reads the same verified guides and answers only from them (see worker/src/index.mjs).

const AI_URL = (window.SAATHI_AI_URL || "").replace(/\/$/, "");

async function askAI(query, formIds) {
  if (!AI_URL || !formIds.length) return;
  const t = ASK[lang];
  const askedLang = lang;
  const msg = askAdd("bot", [el("span", "ask-ai-label", t.aiLabel), askText(t.aiThinking)]);
  msg.classList.add("ask-ai", "is-loading");
  const stop = new AbortController();
  const timer = setTimeout(() => stop.abort(), 15000);
  try {
    const res = await fetch(AI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: askRedact(query), lang: askedLang, forms: formIds }),
      signal: stop.signal
    });
    if (res.status === 429) { msg.classList.remove("is-loading"); msg.replaceChildren(el("span", "ask-ai-label", t.aiLabel), askText(t.aiLimit)); return; }
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    if (!data.answer) throw new Error("empty");
    const nodes = [el("span", "ask-ai-label", t.aiLabel), askText(data.answer)];
    const row = el("div", "ask-row");
    const target = data.form_id && window.FORMS.find(f => f.id === data.form_id);
    const here = currentForm();
    if (target && data.box && here && here.id === target.id) {
      const show = el("button", "ask-action", t.aiOpenBox(data.box));
      show.type = "button";
      show.addEventListener("click", () => askShowBox(target, data.box - 1));
      row.append(show);
    } else if (target) {
      nodes.push(askFormButton(target));
    }
    row.append(speakButton(data.answer));
    nodes.push(row);
    msg.classList.remove("is-loading");
    msg.replaceChildren(...nodes);
    msg.scrollIntoView({ block: "nearest" });
  } catch {
    // The instant answer above is already shown, so a failed AI call just disappears.
    msg.remove();
  } finally {
    clearTimeout(timer);
  }
}

function askShowBox(form, i) {
  if (view === "guide" && layoutOf(form)) goToStep(form, i);
  else if (openField !== i) setOpen(form, i);
  if (window.matchMedia("(max-width: 640px)").matches) askToggle(false);
}

function askToggle(open) {
  askState.open = open;
  $("ask-panel").hidden = !open;
  $("ask-fab").setAttribute("aria-expanded", open);
  $("ask-fab").classList.toggle("is-open", open);
  if (open) {
    if (!$("ask-log").children.length) askGreet();
    setTimeout(() => $("ask-input").focus(), 50);
  } else {
    askStopMic();
  }
}

// ---------- Voice input (speech to text, done by the browser) ----------

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

function askStopMic() {
  if (askState.rec) { try { askState.rec.stop(); } catch { /* already stopped */ } }
  askState.listening = false;
  $("ask-mic").classList.remove("on");
  $("ask-input").placeholder = ASK[lang].placeholder;
}

function askMic() {
  if (!SpeechRec) { askAdd("bot", [askText(ASK[lang].noMic)]); return; }
  if (askState.listening) { askStopMic(); return; }
  const rec = new SpeechRec();
  rec.lang = lang === "hi" ? "hi-IN" : "en-IN";
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  askState.rec = rec;
  askState.listening = true;
  $("ask-mic").classList.add("on");
  $("ask-input").value = "";
  $("ask-input").placeholder = ASK[lang].listening;
  rec.onresult = e => {
    const text = Array.from(e.results).map(r => r[0].transcript).join(" ");
    $("ask-input").value = text;
    if (e.results[e.results.length - 1].isFinal) {
      askStopMic();
      askHandle(text);
      $("ask-input").value = "";
    }
  };
  rec.onerror = () => { askStopMic(); askAdd("bot", [askText(ASK[lang].micError)]); };
  rec.onend = () => { if (askState.listening) askStopMic(); };
  try { rec.start(); } catch { askStopMic(); }
}

// ---------- Build the widget once ----------

function askRenderText() {
  const t = ASK[lang];
  $("ask-fab-label").textContent = t.open;
  $("ask-title").textContent = t.title;
  $("ask-sub").textContent = t.sub;
  $("ask-input").placeholder = t.placeholder;
  $("ask-input").setAttribute("aria-label", t.placeholder);
  $("ask-send").setAttribute("aria-label", t.send);
  $("ask-mic").setAttribute("aria-label", t.mic);
  $("ask-close").setAttribute("aria-label", t.close);
  $("ask-note").textContent = AI_URL ? t.aiNote : t.note;
}

(function askInit() {
  const fab = el("button", "ask-fab");
  fab.id = "ask-fab";
  fab.type = "button";
  fab.setAttribute("aria-expanded", "false");
  fab.setAttribute("aria-controls", "ask-panel");
  const fabLabel = el("span", "ask-fab-label");
  fabLabel.id = "ask-fab-label";
  fab.append(icon("chat", "icon ask-fab-icon"), fabLabel);
  fab.addEventListener("click", () => askToggle(!askState.open));

  const panel = el("section", "ask-panel");
  panel.id = "ask-panel";
  panel.hidden = true;
  panel.setAttribute("aria-labelledby", "ask-title");

  const head = el("div", "ask-head");
  const titles = el("div");
  const h = el("h2", "ask-title"); h.id = "ask-title";
  const sub = el("p", "ask-sub"); sub.id = "ask-sub";
  titles.append(h, sub);
  const close = el("button", "ask-close");
  close.id = "ask-close";
  close.type = "button";
  close.append(icon("close"));
  close.addEventListener("click", () => askToggle(false));
  head.append(titles, close);

  const log = el("div", "ask-log");
  log.id = "ask-log";
  log.setAttribute("aria-live", "polite");

  const formEl = el("form", "ask-form-row");
  const input = el("input", "ask-input");
  input.id = "ask-input";
  input.type = "text";
  input.autocomplete = "off";
  input.setAttribute("aria-label", ASK[lang].placeholder);
  const mic = el("button", "ask-mic");
  mic.id = "ask-mic";
  mic.type = "button";
  mic.append(icon("mic"));
  mic.hidden = !SpeechRec;
  mic.addEventListener("click", askMic);
  const send = el("button", "ask-send");
  send.id = "ask-send";
  send.type = "submit";
  send.append(icon("send"));
  formEl.append(input, mic, send);
  formEl.addEventListener("submit", e => {
    e.preventDefault();
    const q = input.value;
    input.value = "";
    askHandle(q);
  });

  const note = el("p", "ask-note"); note.id = "ask-note";
  panel.append(head, log, formEl, note);
  document.body.append(panel, fab);
  askRenderText();

  // Keep the widget's language and greeting in step with the rest of the page.
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => { askRenderText(); askGreet(); }));
  window.addEventListener("hashchange", () => { if (askState.open) askGreet(); else $("ask-log").replaceChildren(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && askState.open) askToggle(false); });
})();
