// Builds two things from the form guides (forms/<id>.js). Run again after changing or adding any guide:
//   node tools/build-data.mjs
//
// 1. forms/bundle.js: every guide in one file, in the order of forms/catalog.js, so the page
//    downloads one file instead of one per form. index.html loads this file.
// 2. data/<id>.json: each guide as plain JSON. The optional AI server reads these from the live
//    site, so it can only ever talk about the verified guides.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const formsDir = path.join(root, "forms");
const outDir = path.join(root, "data");
fs.mkdirSync(outDir, { recursive: true });

// The catalog lists every form once; its order is the order shown on the site.
const catalogBox = { window: {} };
vm.createContext(catalogBox);
vm.runInContext(fs.readFileSync(path.join(formsDir, "catalog.js"), "utf8"), catalogBox);
const order = Object.keys(catalogBox.window.CATALOG);

const skip = new Set(["catalog.js", "layout.js", "registry.js", "bundle.js"]);
const files = fs.readdirSync(formsDir).filter(f => f.endsWith(".js") && !skip.has(f));
const missing = files.map(f => f.replace(/\.js$/, "")).filter(id => !order.includes(id));
if (missing.length) {
  console.error("These guides have no entry in forms/catalog.js: " + missing.join(", "));
  process.exit(1);
}

// 1. The bundle. Each guide's leading comment (its source notes) stays in the guide file only.
const stripNotes = src => src.replace(/^(\s*\/\/[^\n]*\n)+/, "");
const parts = ["// Built by tools/build-data.mjs from the files in forms/. Do not edit by hand.", "window.FORMS = [];"];
for (const id of order) {
  const file = path.join(formsDir, id + ".js");
  if (!fs.existsSync(file)) { console.error(`forms/catalog.js lists "${id}" but forms/${id}.js is missing`); process.exit(1); }
  parts.push(stripNotes(fs.readFileSync(file, "utf8")).trim());
}
fs.writeFileSync(path.join(formsDir, "bundle.js"), parts.join("\n") + "\n");

// Load the guides the same way the page does, to build the JSON files.
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(parts.join("\n"), sandbox, { filename: "bundle.js" });

// 2. Only what the AI needs to answer: names, notes and every box's explanation.
const pick = (o, keys) => Object.fromEntries(keys.filter(k => o[k] !== undefined).map(k => [k, o[k]]));
const index = [];
for (const form of sandbox.window.FORMS) {
  const data = {
    ...pick(form, ["id", "verified", "source", "lastChecked", "caution", "category", "name", "about"]),
    fields: form.fields.map(f => pick(f, ["label", "quick", "meaning", "write", "documents", "mistakes", "changed"]))
  };
  fs.writeFileSync(path.join(outDir, form.id + ".json"), JSON.stringify(data));
  index.push(form.id);
}
fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index.sort()));

// 3. One small page per form (f/<id>.html) for sharing and search engines. It has the form's
//    own title, description and preview picture (WhatsApp/Google read these), lists every box,
//    and sends people straight on to the full guide.
const SITE = "https://deepanshi-code.github.io/Form_Saathi";
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s);
const pagesDir = path.join(root, "f");
fs.mkdirSync(pagesDir, { recursive: true });
const urls = [SITE + "/"];
for (const form of sandbox.window.FORMS) {
  const short = catalogBox.window.CATALOG[form.id].short;
  const title = `${short.en}: how to fill it, box by box | Form Saathi`;
  const desc = clip(form.about.en, 160);
  const url = `${SITE}/f/${form.id}.html`;
  const boxes = form.fields.map(f => `      <li><strong>${esc(f.label.en)}</strong>: ${esc(f.quick ? f.quick.en : f.write.en)}<br><span lang="hi">${esc(f.label.hi)}: ${esc(f.quick ? f.quick.hi : f.write.hi)}</span></li>`).join("\n");
  fs.writeFileSync(path.join(pagesDir, form.id + ".html"), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Form Saathi">
  <meta property="og:title" content="${esc(`${short.en} · ${short.hi}: box by box`)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/img/preview.png">
  <meta name="twitter:card" content="summary_large_image">
  <style>body{font:17px/1.6 system-ui,"Noto Sans Devanagari",sans-serif;max-width:720px;margin:40px auto;padding:0 16px;color:#0f1f3a;background:#fff}a{color:#2563eb}li{margin-bottom:10px}</style>
  <script>location.replace("../#form/${form.id}");</script>
</head>
<body>
  <p><a href="../#form/${form.id}">Open the step-by-step guide →</a></p>
  <h1>${esc(short.en)} <span lang="hi">(${esc(short.hi)})</span></h1>
  <p>${esc(form.name.en)}</p>
  <p>${esc(form.about.en)}</p>
  <h2>What to write in each box</h2>
  <ol>
${boxes}
  </ol>
  <p>Checked against the official source: <a href="${esc(form.source.url)}" rel="noopener">${esc(form.source.title)}</a> (last checked ${esc(form.lastChecked)}). Form Saathi is an independent guide, not a government website.</p>
</body>
</html>
`);
  urls.push(url);
}
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`);
console.log(`Bundled ${order.length} guides into forms/bundle.js, wrote data/, f/ pages and sitemap.xml`);
