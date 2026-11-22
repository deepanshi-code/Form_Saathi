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
console.log(`Bundled ${order.length} guides into forms/bundle.js and wrote data/`);
