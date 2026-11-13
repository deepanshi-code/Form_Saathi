// Turns each form guide (forms/<id>.js) into a plain JSON file (data/<id>.json).
// The AI server reads these files from the live site, so it can only ever talk about
// the verified guides. Run again after changing any guide:
//   node tools/build-data.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const formsDir = path.join(root, "forms");
const outDir = path.join(root, "data");
fs.mkdirSync(outDir, { recursive: true });

// The guide files push into window.FORMS, so run them with a fake window.
const sandbox = { window: { FORMS: [] } };
vm.createContext(sandbox);
const skip = new Set(["catalog.js", "layout.js", "registry.js"]);
for (const file of fs.readdirSync(formsDir).filter(f => f.endsWith(".js") && !skip.has(f)).sort()) {
  vm.runInContext(fs.readFileSync(path.join(formsDir, file), "utf8"), sandbox, { filename: file });
}

// Only what the AI needs to answer: names, notes and every box's explanation.
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
console.log(`Wrote ${index.length} guides to data/`);
