// Automated tests for the parts that make decisions:
//   - search.js: does a question (English / Hindi / Hinglish) lead to the right form, situation or box?
//   - privacy: are personal numbers removed before anything is sent to the AI?
//   - worker: does the AI server reject bad answers?
// Run before every push:
//   node tools/test.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["forms/bundle.js", "forms/catalog.js", "search.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
}
const run = code => vm.runInContext(code, ctx);
const findMatch = (q, id = null) => run(`findMatch(${JSON.stringify(q)}, ${JSON.stringify(id)})`);

let passed = 0;
const failures = [];
function test(name, ok, got) {
  if (ok) passed++;
  else failures.push(`FAIL ${name}\n     got: ${got}`);
}
const describe = m => m.kind === "box" ? `box ${m.index + 1} of ${m.form.id}`
  : m.kind === "event" ? `situation "${m.event.title.en}"`
  : m.kind === "forms" ? `forms ${m.picks.map(f => f.id).join(", ")}${m.group ? ` (+ all ${m.group.key})` : ""}`
  : "nothing";

// ---------- Home page: question -> form or situation ----------
const home = [
  ["PAN card banwana hai", "form", "pan-application"],
  ["पैन कार्ड बनवाना है", "form", "pan-application"],
  ["mujhe bank khata kholna hai", "group", "bank"],
  ["shaadi ke baad naam badalna", "form", "name-change-gazette"],
  ["पढ़ाई के लिए विदेश जाना है", "event", "Going abroad to study or work"],
  ["getting married", "event", "Getting married"],
  ["bijli connection", "form", "upcl-new-connection"],
  ["gaadi bechna hai", "form", "vehicle-transfer"],
  ["cheque kaise bhare", "form", "fill-cheque"],
  ["check book chahiye", "form", "sbi-cheque-book"],
  ["voter id", "form", "voter-id-form-6"],
  ["passport renewal", "form", "passport-reissue"],
  ["send money abroad for college fees", "form", "form-a2-lrs"],
  ["ration card", "form", "uk-ration-card"],
  ["PF withdrawal", "form", "epf-composite-claim"],
  ["germany visa", "form", "schengen-visa"],
  ["canada visa", "form", "canada-visitor-visa"],
  ["tenant verification", "form", "uk-tenant-verification"],
  ["sukanya samriddhi", "form", "sukanya-samriddhi"],
  ["scholarship", "form", "nsp-scholarship"],
  ["driving licence", "form", "driving-licence"],
  ["learner licence", "form", "learner-licence"],
  ["aadhar update", "form", "aadhaar-update"],
  ["death certificate", "form", "death-registration"],
  ["birth certificate", "form", "birth-registration"],
  ["xyz qwerty", "none", null]
];
for (const [q, kind, want] of home) {
  const m = findMatch(q);
  const ok = kind === "none" ? m.kind === "none"
    : kind === "event" ? m.kind === "event" && m.event.title.en === want
    : kind === "group" ? m.kind === "forms" && m.group && m.group.key === want
    : (m.kind === "forms" && m.picks.some(f => f.id === want)) || (m.kind === "event" && m.list.some(f => f.id === want));
  test(`home: "${q}" -> ${kind} ${want ?? ""}`, ok, describe(m));
}

// ---------- On the PAN form page: question -> box ----------
const pan = [
  ["date of birth mein kya likhu", 3],
  ["pita ka naam", 9],
  ["माता का नाम", 9],
  ["signature kahan karna hai", 14],
  ["photo kaisa ho", 13],
  ["mobile number", 7],
  ["aadhaar number", 4],
  ["address kya likhe", 5]
];
for (const [q, box] of pan) {
  const m = findMatch(q, "pan-application");
  test(`PAN page: "${q}" -> box ${box}`, m.kind === "box" && m.index === box - 1, describe(m));
}
{
  const m = findMatch("passport banwana hai", "pan-application");
  test(`PAN page: "passport banwana hai" -> passport form, not a PAN box`, m.kind === "forms" && m.picks[0].id === "passport-fresh", describe(m));
}

// ---------- Privacy: personal details removed before sending ----------
const redact = s => run(`askRedact(${JSON.stringify(s)})`);
const r = redact("my pan ABCDE1234F, aadhaar 1234 5678 9012, phone 98765-43210, mail a.b@x.in");
test("redact PAN", r.includes("[PAN]") && !r.includes("ABCDE1234F"), r);
test("redact Aadhaar", !/1234 5678 9012/.test(r), r);
test("redact phone", !/98765/.test(r), r);
test("redact email", r.includes("[email]") && !r.includes("a.b@x.in"), r);
test("keep short numbers (box 3, 18 years)", redact("box 3, I am 18 years") === "box 3, I am 18 years", redact("box 3, I am 18 years"));

// ---------- AI server: input cleaning and answer checks ----------
const worker = await import(pathToFileURL(path.join(root, "worker/src/index.mjs")).href);
test("worker cleans PAN", worker.cleanQuestion("pan ABCDE1234F").includes("[PAN]"), worker.cleanQuestion("pan ABCDE1234F"));
test("worker cuts long questions", worker.cleanQuestion("x".repeat(1000)).length === 300, worker.cleanQuestion("x".repeat(1000)).length);
const guides = [{ id: "pan-application", fields: new Array(14).fill({}) }];
const good = worker.checkResult({ found: true, answer: "Box 9", form_id: "pan-application", box: 9 }, guides);
test("worker keeps a valid answer", good.found && good.form_id === "pan-application" && good.box === 9, JSON.stringify(good));
const badForm = worker.checkResult({ found: true, answer: "x", form_id: "made-up-form", box: 2 }, guides);
test("worker drops an invented form", badForm.form_id === null && badForm.box === null, JSON.stringify(badForm));
const badBox = worker.checkResult({ found: true, answer: "x", form_id: "pan-application", box: 99 }, guides);
test("worker drops a box that doesn't exist", badBox.box === null, JSON.stringify(badBox));
const empty = worker.checkResult({ found: true, answer: "" }, guides);
test("worker treats an empty answer as not found", empty.found === false, JSON.stringify(empty));

failures.forEach(f => console.log(f));
console.log(`\n${passed} passed, ${failures.length} failed.`);
process.exit(failures.length ? 1 : 0);
