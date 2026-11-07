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
    note: "Answers come only from the verified guides on this site."
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
    note: "जवाब सिर्फ़ इस साइट की जाँची हुई गाइड से आते हैं।"
  }
};

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

function scoreForm(tokens, form) {
  const m = meta(form);
  return askScore(tokens, m.short.en + " " + m.short.hi, 3) +
    askScore(tokens, form.name.en + " " + form.name.hi, 2) +
    askScore(tokens, form.category.en + " " + form.category.hi, 1) +
    askScore(tokens, form.id.replace(/-/g, " "), 2);
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
  const t = ASK[lang];
  askAdd("user", [askText(query)]);
  const tokens = askTokens(query);

  // Forms ranked by how well they match.
  const ranked = window.FORMS.map(f => ({ f, s: scoreForm(tokens, f) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
  const topForm = ranked[0] ? ranked[0].s : 0;

  // 1. On a form page, first look for a matching box in that form, unless the question
  //    is clearly about a different form ("passport banwana hai" while on the PAN page).
  const form = currentForm();
  if (form) {
    const best = form.fields
      .map((f, i) => ({ i, s: scoreField(tokens, f) }))
      .sort((a, b) => b.s - a.s)[0];
    const formTokens = tokens.filter(t => !BOX_WORDS.has(t));
    const other = window.FORMS.filter(f => f.id !== form.id).map(f => scoreForm(formTokens, f)).sort((a, b) => b - a)[0] || 0;
    if (best && best.s >= 1.7 && other <= best.s) {
      const field = form.fields[best.i];
      const quick = field.quick ? field.quick[lang] : field.write[lang];
      const show = el("button", "ask-action", t.showBox);
      show.type = "button";
      show.addEventListener("click", () => askShowBox(form, best.i));
      const row = el("div", "ask-row");
      row.append(show, speakButton(quick));
      askAdd("bot", [askText(t.boxIntro), el("strong", "ask-box", t.box(best.i + 1, field.label[lang])), askText(quick), row]);
      askShowBox(form, best.i);
      return;
    }
  }

  // 2. A life situation ("getting married", "going abroad") that matches clearly.
  const events = (window.LIFE || []).map((ev, i) => ({
    ev, i, s: askScore(tokens, ev.title.en + " " + ev.title.hi, 2),
    list: ev.forms.map(id => window.FORMS.find(f => f.id === id)).filter(Boolean)
  })).filter(x => x.list.length).sort((a, b) => b.s - a.s);

  if (events[0] && (events[0].s >= 4 || (events[0].s >= 2 && events[0].s >= topForm))) {
    const e = events[0];
    askAdd("bot", [askText(t.situation(e.ev.title[lang])), ...e.list.map(askFormButton)]);
    return;
  }
  if (!ranked.length) { askAdd("bot", [askText(t.none)]); return; }
  // Keep forms close to the best score, at most three.
  const close = ranked.filter(x => x.s >= topForm * 0.6).map(x => x.f);
  const picks = close.slice(0, 3);
  const nodes = [askText(picks.length === 1 ? t.foundOne : t.found), ...picks.map(askFormButton)];
  // Many equally good matches in one group (e.g. eight bank accounts): offer the whole group too.
  const group = window.CHIPS.find(c => c.categories && close.every(f => c.categories.includes(f.category.en)));
  if (close.length > 3 && group) {
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
  $("ask-send").setAttribute("aria-label", t.send);
  $("ask-mic").setAttribute("aria-label", t.mic);
  $("ask-close").setAttribute("aria-label", t.close);
  $("ask-note").textContent = t.note;
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
