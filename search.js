// Search used by "Ask Saathi": finds the form, the life situation or the box that a question
// (English, Hindi or Hinglish) is about. No screen code here, so it can be tested on its own
// (tools/test.mjs). assistant.js shows the result.

// Hinglish and Hindi words mapped to the English words used in the guides.
const SYNONYMS = {
  khata: "account", khaata: "account", "खाता": "account", kholna: "open", kholana: "open", "खोलना": "open",
  banwana: "new apply", banana: "new apply", "बनवाना": "new apply", naya: "new", nayi: "new", "नया": "new",
  badalna: "change", badlav: "change", "बदलना": "change", sudhar: "correction", sudharna: "correction", galti: "correction", "सुधार": "correction", "ग़लती": "correction",
  shadi: "marriage", shaadi: "marriage", vivah: "marriage", "शादी": "marriage", "विवाह": "marriage", married: "marriage", wedding: "marriage",
  janam: "birth", janm: "birth", "जन्म": "birth", baby: "birth", bachcha: "birth", bacche: "birth", "बच्चा": "birth",
  maut: "death", mrityu: "death", dehant: "death", "मृत्यु": "death", "देहांत": "death", died: "death", passed: "death",
  bijli: "electricity", "बिजली": "electricity", light: "electricity", meter: "electricity",
  cylinder: "lpg", "सिलेंडर": "lpg", "गैस": "lpg", gas: "lpg",
  rashan: "ration", "राशन": "ration",
  kirayedar: "tenant", kiraya: "tenant rent", "किरायेदार": "tenant", "किराया": "tenant", rent: "tenant", landlord: "tenant",
  naukri: "job", "नौकरी": "job", job: "job employment", pf: "epf provident", epf: "epf provident", "पीएफ": "epf",
  paisa: "money", paise: "money", "पैसे": "money", "पैसा": "money", bhejna: "send", "भेजना": "send", transfer: "send neft",
  videsh: "abroad international", bahar: "abroad", "विदेश": "abroad international", foreign: "abroad international",
  europe: "schengen", germany: "schengen", france: "schengen", italy: "schengen", canada: "canada",
  padhai: "education study", "पढ़ाई": "education study", study: "education", college: "college education", university: "education",
  scholarship: "scholarship", chhatravritti: "scholarship", "छात्रवृत्ति": "scholarship", fees: "education",
  gaadi: "vehicle", gadi: "vehicle", "गाड़ी": "vehicle", bike: "vehicle", car: "vehicle", scooty: "vehicle", becha: "transfer", bechna: "transfer", kharida: "transfer",
  license: "licence", lisence: "licence", "लाइसेंस": "licence", driving: "licence",
  vote: "voter", matdata: "voter", "वोटर": "voter", "मतदाता": "voter", epic: "voter",
  aadhar: "aadhaar", adhar: "aadhaar", "आधार": "aadhaar",
  pan: "pan", "पैन": "pan", passport: "passport", "पासपोर्ट": "passport", renew: "reissue", renewal: "reissue", expired: "reissue",
  pita: "father parent", papa: "father parent", "पिता": "father parent", mata: "mother parent", maa: "mother parent", "माता": "mother parent", "माँ": "mother parent", father: "father parent", mother: "mother parent",
  pati: "husband spouse", patni: "wife spouse", "पति": "husband spouse", "पत्नी": "wife spouse", guardian: "guardian", abhibhavak: "guardian",
  mobile: "mobile contact", phone: "mobile contact", "मोबाइल": "mobile", email: "email contact", "ईमेल": "email",
  janmtithi: "date birth", "जन्मतिथि": "date birth", umar: "age", "उम्र": "age", gender: "gender sex", ling: "gender", "लिंग": "gender",
  naam: "name", "नाम": "name", pata: "address", "पता": "address", tarikh: "date", "तारीख": "date", "तिथि": "date", dob: "date birth",
  photo: "photograph", signature: "signature", sign: "signature", "हस्ताक्षर": "signature", "फ़ोटो": "photograph",
  bachat: "savings", "बचत": "savings", saving: "savings", ladki: "girl", beti: "girl", "बेटी": "girl",
  bharna: "fill", bhare: "fill", bharu: "fill", "भरना": "fill", "भरें": "fill", likhna: "fill write",
  cheque: "cheque", check: "cheque", chek: "cheque", chequebook: "cheque book", checkbook: "cheque book", "चेक": "cheque", leaf: "cheque", bounce: "cheque",
  nominee: "nominee nomination", "नॉमिनी": "nominee", kyc: "kyc", tds: "tds", interest: "tds",
  income: "income", aay: "income", "आय": "income", caste: "caste", jati: "caste", "जाति": "caste",
  domicile: "domicile residence", niwas: "residence", "निवास": "residence", police: "police", "पुलिस": "police",
  ragging: "ragging", loan: "loan", karz: "loan", "लोन": "loan", "ऋण": "loan"
};

// Small words that carry no meaning for finding a form.
const STOP = new Set(("i me my mine we want wanted need to a an the of for in on at and or is are am be do does how what which where when " +
  "can should please help with about it this that get got make my form forms apply application " +
  "mujhe muje mera meri mere hai hain ho karna karni karne kaise kya kahan kab ka ki ke ko se me mein par aur liye chahiye " +
  "मुझे मेरा मेरी मेरे है हैं हो करना करनी करने कैसे क्या कहाँ कब का की के को से में पर और लिए चाहिए फॉर्म").split(" "));

// Words that describe a box on almost every form. They point to a box on the open form,
// never to a different form.
const BOX_WORDS = new Set("name date birth dob address number photo photograph signature mobile contact email father mother parent husband wife spouse guardian gender sex age".split(" "));

function askTokens(text) {
  const words = text.toLowerCase().match(/[a-z0-9]+|[ऀ-ॿ]+/g) || [];
  const out = [];
  words.forEach(w => {
    if (STOP.has(w)) return;
    out.push(w);
    if (SYNONYMS[w]) out.push(...SYNONYMS[w].split(" "));
  });
  return [...new Set(out)];
}

// How well a piece of text matches the query words (prefix match, so "regist" finds "registration").
function askScore(tokens, text, weight) {
  if (!text) return 0;
  const words = text.toLowerCase().match(/[a-z0-9]+|[ऀ-ॿ]+/g) || [];
  let score = 0;
  tokens.forEach(t => {
    if (t.length < 2) return;
    if (words.some(w => w === t)) score += weight;
    else if (t.length >= 4 && words.some(w => w.startsWith(t) || t.startsWith(w) && w.length >= 4)) score += weight * 0.6;
  });
  return score;
}

// Words found in many form names. They count less than words that pick out one form,
// so "death certificate" finds death registration, not the other certificates.
const GENERIC = new Set("certificate card account form registration application new apply open change correction".split(" "));

function scoreForm(tokens, form) {
  const m = (window.CATALOG || {})[form.id] || { short: form.name };
  const score = t => askScore(t, m.short.en + " " + m.short.hi, 3) +
    askScore(t, form.name.en + " " + form.name.hi, 2) +
    askScore(t, form.category.en + " " + form.category.hi, 1) +
    askScore(t, form.id.replace(/-/g, " "), 2);
  return score(tokens.filter(t => !GENERIC.has(t))) + 0.4 * score(tokens.filter(t => GENERIC.has(t)));
}

function labelScore(tokens, label) {
  const words = (label.toLowerCase().match(/[a-z]+|[\u0900-\u097F]+/g) || []).filter(w => !STOP.has(w) && w.length > 1);
  if (!words.length) return 0;
  const hit = words.filter(w => tokens.some(t => t === w || (t.length >= 4 && w.length >= 4 && (w.startsWith(t) || t.startsWith(w))))).length;
  return hit * 3 * Math.sqrt(hit / words.length);
}

function scoreField(tokens, field) {
  return Math.max(labelScore(tokens, field.label.en), labelScore(tokens, field.label.hi)) +
    askScore(tokens, (field.quick ? field.quick.en + " " + field.quick.hi : ""), 1) +
    askScore(tokens, field.meaning.en + " " + field.meaning.hi, 0.5);
}

// Decides what a question is about. currentId is the open form (or null on the home page).
// Returns one of:
//   { kind: "box", form, index }            a box on the open form
//   { kind: "event", event, list }          a life situation and its forms
//   { kind: "forms", picks, close, group }  the best forms (picks = up to 3; group = filter chip when many tie)
//   { kind: "none" }
function findMatch(query, currentId) {
  const tokens = askTokens(query);
  const forms = window.FORMS;
  const ranked = forms.map(f => ({ f, s: scoreForm(tokens, f) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
  const topForm = ranked[0] ? ranked[0].s : 0;

  // 1. On a form page, a matching box wins, unless the question clearly names another form
  //    ("passport banwana hai" on the PAN page). Box words (name, date...) never switch forms.
  const form = currentId && forms.find(f => f.id === currentId);
  if (form) {
    const best = form.fields.map((f, i) => ({ i, s: scoreField(tokens, f) })).sort((a, b) => b.s - a.s)[0];
    const formTokens = tokens.filter(t => !BOX_WORDS.has(t));
    const other = forms.filter(f => f.id !== form.id).map(f => scoreForm(formTokens, f)).sort((a, b) => b - a)[0] || 0;
    if (best && best.s >= 1.7 && other <= best.s) return { kind: "box", form, index: best.i };
  }

  // 2. A life situation ("getting married", "going abroad") that matches clearly.
  const events = (window.LIFE || []).map(ev => ({
    ev, s: askScore(tokens, ev.title.en + " " + ev.title.hi, 2),
    list: ev.forms.map(id => forms.find(f => f.id === id)).filter(Boolean)
  })).filter(x => x.list.length).sort((a, b) => b.s - a.s);
  if (events[0] && (events[0].s >= 4 || (events[0].s >= 2 && events[0].s >= topForm))) {
    return { kind: "event", event: events[0].ev, list: events[0].list };
  }

  // 3. The best forms: those close to the top score, at most three shown.
  if (!ranked.length) return { kind: "none" };
  const close = ranked.filter(x => x.s >= topForm * 0.6).map(x => x.f);
  const group = close.length > 3 ? (window.CHIPS || []).find(c => c.categories && close.every(f => c.categories.includes(f.category.en))) : null;
  return { kind: "forms", picks: close.slice(0, 3), close, group: group || null };
}

// Personal numbers and emails never leave the device (the worker removes them again too).
function askRedact(text) {
  return text
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, "[email]")
    .replace(/\b[A-Z]{5}[0-9]{4}[A-Z]\b/gi, "[PAN]")
    .replace(/\d[\d\s-]{5,}\d/g, "[number]");
}

