// Checks every form guide for mistakes that would break the site or mislead users.
// Run before every push:
//   node tools/check.mjs
// It prints each problem and exits with an error if there are any.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");
const problems = [];
const problem = (where, what) => problems.push(`${where}: ${what}`);

// Load everything the way the page does.
const box = { window: {} };
vm.createContext(box);
vm.runInContext(read("forms/bundle.js"), box);
vm.runInContext(read("forms/catalog.js"), box);
vm.runInContext(read("forms/layout.js"), box);
const { FORMS, CATALOG, CHIPS, LIFE, LAYOUT_FILES } = box.window;
for (const id of LAYOUT_FILES) vm.runInContext(read(`forms/layout/${id}.js`), box);
const LAYOUT = box.window.LAYOUT;

// The bundle must match the guide files (someone may have edited a guide and not rebuilt).
const guideFiles = fs.readdirSync(path.join(root, "forms")).filter(f => f.endsWith(".js") && !["catalog.js", "layout.js", "registry.js", "bundle.js"].includes(f));
if (guideFiles.length !== FORMS.length) problem("forms/bundle.js", `has ${FORMS.length} guides but forms/ has ${guideFiles.length}; run node tools/build-data.mjs`);
const newest = Math.max(...guideFiles.map(f => fs.statSync(path.join(root, "forms", f)).mtimeMs), fs.statSync(path.join(root, "forms/catalog.js")).mtimeMs);
if (fs.statSync(path.join(root, "forms/bundle.js")).mtimeMs < newest - 1000) problem("forms/bundle.js", "older than a guide file; run node tools/build-data.mjs");

const both = (v, where, what) => {
  if (!v || typeof v !== "object") return problem(where, `${what} is missing`);
  if (!v.en || (Array.isArray(v.en) ? false : !String(v.en).trim())) problem(where, `${what} has no English`);
  if (!v.hi || (Array.isArray(v.hi) ? false : !String(v.hi).trim())) problem(where, `${what} has no Hindi`);
  if (Array.isArray(v.en) && Array.isArray(v.hi) && v.en.length !== v.hi.length) problem(where, `${what}: English has ${v.en.length} items, Hindi has ${v.hi.length}`);
};
const categories = new Set(CHIPS.filter(c => c.categories).flatMap(c => c.categories));
const today = new Date();
const ids = new Set();

for (const form of FORMS) {
  const w = form.id || "(no id)";
  if (ids.has(form.id)) problem(w, "id used twice");
  ids.add(form.id);
  if (!CATALOG[form.id]) problem(w, "no entry in forms/catalog.js");
  for (const k of ["category", "name", "about"]) both(form[k], w, k);
  if (form.caution) both(form.caution, w, "caution");
  if (!categories.has(form.category?.en)) problem(w, `category "${form.category?.en}" has no filter chip`);
  if (!form.source?.url?.startsWith("http")) problem(w, "source.url missing");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(form.lastChecked || "")) problem(w, "lastChecked is not YYYY-MM-DD");
  else {
    const months = (today - new Date(form.lastChecked)) / (30 * 864e5);
    if (months > 6) problem(w, `last checked ${form.lastChecked}, more than 6 months ago: re-check against the official source`);
  }
  if (!Array.isArray(form.fields) || !form.fields.length) { problem(w, "no fields"); continue; }
  form.fields.forEach((f, i) => {
    const fw = `${w} box ${i + 1}`;
    for (const k of ["label", "quick", "meaning", "write"]) both(f[k], fw, k);
    if (f.documents) both(f.documents, fw, "documents");
    if (f.mistakes) both(f.mistakes, fw, "mistakes");
    if (f.changed) both(f.changed, fw, "changed");
    const words = String(f.quick?.en || "").split(/\s+/).filter(Boolean).length;
    if (words > 12) problem(fw, `quick answer has ${words} words (max 12)`);
  });

  // Form view: one row of spots per box, inside the page, on images that exist.
  const lay = LAYOUT[form.id];
  if (lay) {
    if (lay.spots.length !== form.fields.length) problem(w, `layout has ${lay.spots.length} rows for ${form.fields.length} boxes`);
    lay.pages.forEach(p => { if (!fs.existsSync(path.join(root, p))) problem(w, `page image missing: ${p}`); });
    lay.spots.forEach((row, i) => row.forEach(s => {
      if (s.page < 0 || s.page >= lay.pages.length) problem(`${w} box ${i + 1}`, `spot on page ${s.page + 1}, which does not exist`);
      if (s.x < 0 || s.y < 0 || s.x + s.w > 100.5 || s.y + s.h > 100.5) problem(`${w} box ${i + 1}`, "spot goes outside the page");
    }));
  }
  if (!fs.existsSync(path.join(root, "data", form.id + ".json"))) problem(w, "data file missing; run node tools/build-data.mjs");
}
for (const id of Object.keys(CATALOG)) if (!ids.has(id)) problem("forms/catalog.js", `"${id}" has no guide`);
for (const ev of LIFE || []) for (const id of ev.forms) if (!ids.has(id)) problem("forms/catalog.js (LIFE)", `"${ev.title.en}" lists "${id}", which is not on the site (it is hidden until added)`);

// Old re-check warnings and LIFE placeholders are reminders, not errors.
const isNote = p => /more than 6 months ago|hidden until added/.test(p);
const errors = problems.filter(p => !isNote(p));
const notes = problems.filter(isNote);
notes.forEach(p => console.log("NOTE  " + p));
errors.forEach(p => console.log("ERROR " + p));
console.log(`\nChecked ${FORMS.length} guides: ${errors.length} errors, ${notes.length} notes.`);
process.exit(errors.length ? 1 : 0);
