// Checks that every guide's official source link still opens.
//   node tools/check-links.mjs
// Government sites often block scripts or are slow, so a failure here means
// "open this link in a browser and check", not necessarily "broken".
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const box = { window: {} };
vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(root, "forms/bundle.js"), "utf8"), box);

async function check(url) {
  const opts = { redirect: "follow", signal: AbortSignal.timeout(20000), headers: { "User-Agent": "Mozilla/5.0 (link check for Form Saathi)" } };
  try {
    let res = await fetch(url, { ...opts, method: "HEAD" });
    if (res.status === 405 || res.status === 403 || res.status === 400) res = await fetch(url, { ...opts, method: "GET" });
    return res.status;
  } catch (e) {
    return e.name === "TimeoutError" ? "timeout" : "error";
  }
}

const forms = box.window.FORMS;
const results = await Promise.all(forms.map(async f => ({ id: f.id, url: f.source.url, status: await check(f.source.url) })));
const bad = results.filter(r => r.status !== 200);
results.filter(r => r.status === 200).forEach(r => console.log(`OK    ${r.id}`));
bad.forEach(r => console.log(`CHECK ${r.id}: ${r.status}  ${r.url}`));
console.log(`\n${results.length - bad.length} of ${results.length} source links opened; ${bad.length} to check by hand.`);
