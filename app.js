// Text used by the page itself (not by forms), in both languages.
const UI = {
  en: {
    topbar: "Free, independent guide to Indian official forms · Not a government website",
    brandSub: "Official forms, explained",
    navForms: "Forms",
    navChanges: "What changed",
    navHow: "How it works",
    cta: "Find your form",
    kicker: "English · हिंदी · Checked against official sources",
    tagline: "Fill official forms correctly, the first time",
    intro: "Every box explained in simple words: what it means, what to write, and the mistakes people make.",
    search: "Search: PAN, voter ID, bank…",
    statForms: "Forms explained",
    statVerified: "Checked against official sources",
    statChanges: "Recent rule changes flagged",
    statLang: "Languages: English and Hindi",
    changesTitle: n => `${n} rules changed recently`,
    changesSub: "Advice from friends or seniors may be out of date for these forms. Open one to see exactly what changed.",
    changesCount: n => (n === 1 ? "1 change" : `${n} changes`),
    browseTitle: "Browse forms",
    browseSub: "Pick a form to see every field explained, step by step.",
    howTitle: "How it works",
    how1t: "Pick your form",
    how1: "Search or browse by category: bank, government, students or Uttarakhand.",
    how2t: "Follow each field",
    how2: "See what to write, what it means and the common mistakes. Tick each field as you finish it.",
    how3t: "Check before you submit",
    how3: "Keep the listed documents ready, and confirm anything marked \"ask at the office\".",
    viewGuide: "View guide",
    tagChanged: "Rules changed",
    tagCaution: "Check details",
    tagUnverified: "Not verified",
    tagVerified: "Verified",
    fieldsCount: n => `${n} fields`,
    noResults: "No form found. More forms are coming.",
    home: "Home",
    verifiedPill: date => `Verified on ${date}`,
    unverifiedPill: "Not verified yet",
    sourceToggle: "View official source",
    sourceText: "Checked against the official form:",
    unverified: "This guide has not been checked against an official form yet. Always confirm with the bank or office.",
    progress: (d, t) => `${d} of ${t} fields done`,
    allDone: "All fields done. Check the form once more before you submit it.",
    reset: "Start again",
    sectionChanges: n => `What changed recently (${n})`,
    sectionDocs: "Documents to keep ready",
    sectionAbout: "About this form",
    noDocs: "This guide lists no documents. Ask at the office what to bring.",
    write: "What to write",
    meaning: "What it means",
    documents: "Documents",
    mistakes: "Common mistakes",
    changed: "Recently changed",
    markDone: "Mark as done",
    markUndone: "Done ✓ (tap to undo)",
    tickLabel: "Mark this field as done",
    details: "Details",
    hideDetails: "Hide",
    cheatHint: "Short answer for every box. Tap a box for details, tick it when you're done.",
    footerAbout: "An independent student project that explains Indian official forms in simple English and Hindi, checked against official sources.",
    footerBrowse: "Browse",
    footerProject: "Project",
    footerSource: "Source code on GitHub",
    footerTesting: "User testing plan",
    disclaimer: "Form Saathi explains forms in simple words. It is not an official service. The issuing bank or office has the final word."
  },
  hi: {
    topbar: "भारतीय आधिकारिक फॉर्मों की मुफ़्त, स्वतंत्र गाइड · यह सरकारी वेबसाइट नहीं है",
    brandSub: "आधिकारिक फॉर्म, आसान भाषा में",
    navForms: "फॉर्म",
    navChanges: "क्या बदला",
    navHow: "कैसे काम करता है",
    cta: "अपना फॉर्म खोजें",
    kicker: "English · हिंदी · आधिकारिक स्रोतों से जाँचा गया",
    tagline: "आधिकारिक फॉर्म पहली बार में ही सही भरें",
    intro: "हर खाना आसान शब्दों में: इसका मतलब, इसमें क्या लिखना है, और लोग कौन-सी गलतियाँ करते हैं।",
    search: "खोजें: पैन, वोटर आईडी, बैंक…",
    statForms: "फॉर्म समझाए गए",
    statVerified: "आधिकारिक स्रोतों से जाँचे गए",
    statChanges: "हाल के नियम-बदलाव बताए गए",
    statLang: "भाषाएँ: अंग्रेज़ी और हिंदी",
    changesTitle: n => `${n} नियम हाल में बदले हैं`,
    changesSub: "इन फॉर्मों के लिए दोस्तों या सीनियर की सलाह पुरानी हो सकती है। ठीक-ठीक क्या बदला, यह देखने के लिए फॉर्म खोलें।",
    changesCount: n => `${n} बदलाव`,
    browseTitle: "फॉर्म देखें",
    browseSub: "कोई फॉर्म चुनें और हर खाने की जानकारी क्रम से देखें।",
    howTitle: "यह कैसे काम करता है",
    how1t: "अपना फॉर्म चुनें",
    how1: "खोजें या श्रेणी से चुनें: बैंक, सरकारी, छात्र या उत्तराखंड।",
    how2t: "हर खाना भरते चलें",
    how2: "देखें क्या लिखना है, उसका मतलब और आम गलतियाँ। हर खाना पूरा होने पर टिक करें।",
    how3t: "जमा करने से पहले जाँचें",
    how3: "बताए गए दस्तावेज़ तैयार रखें, और जहाँ \"दफ़्तर में पूछें\" लिखा है, वह पक्का कर लें।",
    viewGuide: "गाइड देखें",
    tagChanged: "नियम बदले",
    tagCaution: "जाँच लें",
    tagUnverified: "जाँचा नहीं गया",
    tagVerified: "जाँचा गया",
    fieldsCount: n => `${n} खाने`,
    noResults: "कोई फॉर्म नहीं मिला। और फॉर्म जल्द आएँगे।",
    home: "मुख्य पेज",
    verifiedPill: date => `${date} को जाँचा गया`,
    unverifiedPill: "अभी जाँचा नहीं गया",
    sourceToggle: "आधिकारिक स्रोत देखें",
    sourceText: "आधिकारिक फॉर्म से जाँचा गया:",
    unverified: "यह गाइड अभी किसी आधिकारिक फॉर्म से नहीं जाँची गई है। बैंक या दफ़्तर से ज़रूर पुष्टि करें।",
    progress: (d, t) => `${t} में से ${d} खाने पूरे`,
    allDone: "सारे खाने पूरे। जमा करने से पहले फॉर्म एक बार फिर जाँच लें।",
    reset: "फिर से शुरू करें",
    sectionChanges: n => `हाल में क्या बदला (${n})`,
    sectionDocs: "ये दस्तावेज़ तैयार रखें",
    sectionAbout: "इस फॉर्म के बारे में",
    noDocs: "इस गाइड में कोई दस्तावेज़ नहीं लिखा है। दफ़्तर में पूछें कि क्या लाना है।",
    write: "क्या लिखें",
    meaning: "इसका मतलब",
    documents: "दस्तावेज़",
    mistakes: "आम गलतियाँ",
    changed: "हाल में बदला",
    markDone: "पूरा हुआ",
    markUndone: "पूरा ✓ (हटाने के लिए दबाएँ)",
    tickLabel: "इस खाने को पूरा मार्क करें",
    details: "पूरी जानकारी",
    hideDetails: "छिपाएँ",
    cheatHint: "हर खाने का छोटा जवाब। ज़्यादा जानकारी के लिए खाने पर दबाएँ, पूरा होने पर टिक करें।",
    footerAbout: "एक स्वतंत्र छात्र प्रोजेक्ट, जो भारतीय आधिकारिक फॉर्मों को आसान अंग्रेज़ी और हिंदी में समझाता है, आधिकारिक स्रोतों से जाँचकर।",
    footerBrowse: "फॉर्म देखें",
    footerProject: "प्रोजेक्ट",
    footerSource: "GitHub पर सोर्स कोड",
    footerTesting: "यूज़र टेस्टिंग योजना",
    disclaimer: "फॉर्म साथी फॉर्म को आसान शब्दों में समझाता है। यह कोई सरकारी/आधिकारिक सेवा नहीं है। अंतिम निर्णय बैंक या दफ़्तर का होता है।"
  }
};

// Simple line icons (our own constants, never user data).
const ICONS = {
  bank: "M3 10h18M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18M12 3l9 5H3z",
  post: "M3 6h18v12H3zM3 7l9 6 9-6",
  card: "M3 5h18v14H3zM7 10h4M7 14h6M15 9h3v4h-3z",
  fingerprint: "M12 11v5M8.5 9.5a3.5 3.5 0 0 1 7 0v6.5M5.5 12a6.5 6.5 0 0 1 13 0v3M8.5 13v4",
  ballot: "M4 13h16v7H4zM8 13V4h8v9M10 8h4",
  car: "M3 17v-3l2-5h14l2 5v3zM7 17v2M17 17v2M7 13.5h.01M17 13.5h.01",
  passport: "M6 3h12v18H6zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 17h6",
  certificate: "M5 3h14v12H5zM9 7h6M9 10h6M10 15l-1 6 3-2 3 2-1-6",
  home: "M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6",
  cap: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5",
  rupee: "M7 4h10M7 8.5h10M7 4h3a4.5 4.5 0 0 1 0 9H7l7 7",
  shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM9 12l2 2 4-4",
  arrow: "M5 12h14M13 6l6 6-6 6"
};

// Browser storage can be blocked (private mode), so every access is wrapped.
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
  }
};

let lang = store.get("fs:lang", "en");
let chip = "all";
let openField = 0; // which field is expanded on the form page

const $ = id => document.getElementById(id);

// Small helper to create an element with text. We always use textContent
// (never innerHTML) so form data can never inject HTML into the page.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(name, className = "icon") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", className);
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", ICONS[name] || ICONS.certificate);
  svg.append(path);
  return svg;
}

const meta = form => window.CATALOG[form.id] || { icon: "certificate", short: form.name };
const changedFields = form => form.fields.filter(f => f.changed);
const catClass = form => "cat-" + form.category.en.toLowerCase();
const openForm = form => { location.hash = "form/" + form.id; };

function renderStaticText() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-text]").forEach(node => {
    node.textContent = UI[lang][node.dataset.text];
  });
  $("search").placeholder = UI[lang].search;
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderFooter();
}

// ---------- Home page ----------

function renderStats() {
  const total = window.FORMS.reduce((n, f) => n + changedFields(f).length, 0);
  const stats = [
    [window.FORMS.length, UI[lang].statForms],
    [window.FORMS.filter(f => f.verified).length, UI[lang].statVerified],
    [total, UI[lang].statChanges],
    [2, UI[lang].statLang]
  ];
  const box = $("stats");
  box.replaceChildren();
  stats.forEach(([value, label]) => {
    const item = el("div", "stat");
    item.append(el("dt", null, label), el("dd", null, String(value)));
    box.append(item);
  });
}

function renderChangesList() {
  const forms = window.FORMS.filter(f => changedFields(f).length > 0);
  const total = forms.reduce((n, f) => n + changedFields(f).length, 0);
  $("changes").hidden = total === 0;
  $("changes-title").textContent = UI[lang].changesTitle(total);

  const list = $("changes-list");
  list.replaceChildren();
  forms.forEach(form => {
    const m = meta(form);
    const row = el("button", "change-row");
    row.type = "button";
    const iconBox = el("span", "card-icon small " + catClass(form));
    iconBox.append(icon(m.icon));
    const text = el("span", "change-text");
    text.append(el("strong", null, m.short[lang]), el("span", null, form.category[lang]));
    row.append(iconBox, text, el("span", "badge badge-warn", UI[lang].changesCount(changedFields(form).length)), icon("arrow", "icon arrow"));
    row.addEventListener("click", () => openForm(form));
    list.append(row);
  });
}

function renderChips() {
  const box = $("chips");
  box.replaceChildren();
  window.CHIPS.forEach(c => {
    const btn = el("button", "chip" + (c.key === chip ? " active" : ""), c.label[lang]);
    btn.type = "button";
    btn.setAttribute("aria-pressed", c.key === chip);
    btn.addEventListener("click", () => { chip = c.key; renderChips(); renderGrid(); });
    box.append(btn);
  });
}

function renderGrid() {
  const query = $("search").value.trim().toLowerCase();
  const current = window.CHIPS.find(c => c.key === chip);
  const grid = $("form-grid");
  grid.replaceChildren();

  // Search both languages and short names, so "बैंक", "bank" and "pan" all work.
  const matches = window.FORMS.filter(form => {
    if (current.categories && !current.categories.includes(form.category.en)) return false;
    const m = meta(form);
    const haystack = [form.name.en, form.name.hi, form.category.en, form.category.hi, m.short.en, m.short.hi].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  if (matches.length === 0) {
    grid.append(el("p", "empty", UI[lang].noResults));
    return;
  }

  matches.forEach(form => {
    const m = meta(form);
    const card = el("button", "form-card");
    card.type = "button";

    const top = el("span", "card-top");
    const iconBox = el("span", "card-icon " + catClass(form));
    iconBox.append(icon(m.icon));
    // One status badge per card, most important first.
    let badge;
    if (!form.verified) badge = el("span", "badge badge-muted", UI[lang].tagUnverified);
    else if (changedFields(form).length) badge = el("span", "badge badge-warn", UI[lang].tagChanged);
    else if (form.caution) badge = el("span", "badge badge-muted", UI[lang].tagCaution);
    else badge = el("span", "badge badge-ok", "✓ " + UI[lang].tagVerified);
    top.append(iconBox, badge);

    const foot = el("span", "card-foot");
    foot.append(el("span", null, UI[lang].fieldsCount(form.fields.length)), el("span", "card-link", UI[lang].viewGuide + " →"));

    card.append(
      top,
      el("span", "card-cat", form.category[lang]),
      el("span", "card-name", m.short[lang]),
      el("span", "card-official", form.name[lang]),
      foot
    );
    card.addEventListener("click", () => openForm(form));
    grid.append(card);
  });
}

function renderFooter() {
  const list = $("footer-categories");
  list.replaceChildren();
  window.CHIPS.filter(c => c.categories).forEach(c => {
    const li = el("li");
    const a = el("a", null, c.label[lang]);
    a.href = "#forms";
    a.addEventListener("click", () => { chip = c.key; renderChips(); renderGrid(); });
    li.append(a);
    list.append(li);
  });
}

function renderHome() {
  renderStats();
  renderChangesList();
  renderChips();
  renderGrid();
}

// ---------- Form page (fill-along mode) ----------

const doneKey = form => `fs:done:${form.id}:${form.fields.length}`;

function renderFormHeader(form) {
  const m = meta(form);

  // Breadcrumb: Home › Category › Form
  const crumbs = $("breadcrumb");
  const home = el("a", null, UI[lang].home);
  home.href = "#";
  home.addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
  crumbs.replaceChildren(home, el("span", "sep", "›"), el("span", null, form.category[lang]), el("span", "sep", "›"), el("span", "current", m.short[lang]));

  const head = el("div", "form-head");
  const iconBox = el("span", "card-icon big " + catClass(form));
  iconBox.append(icon(m.icon));
  const titles = el("div");
  titles.append(el("h1", null, m.short[lang]), el("p", "official-name", form.name[lang]));
  head.append(iconBox, titles);

  // Trust line: a badge, with the source tucked into a "details" toggle.
  const trust = el("div", "trust");
  if (form.verified) {
    trust.append(el("span", "badge badge-ok", "✓ " + UI[lang].verifiedPill(form.lastChecked)));
    const details = el("details", "source");
    details.append(el("summary", null, UI[lang].sourceToggle));
    const p = el("p", null, UI[lang].sourceText + " ");
    const link = el("a", null, form.source.title);
    link.href = form.source.url;
    link.target = "_blank";
    link.rel = "noopener";
    p.append(link);
    details.append(p);
    trust.append(details);
  } else {
    trust.append(el("span", "badge badge-muted", UI[lang].unverifiedPill));
  }

  const box = $("form-header");
  box.replaceChildren(head, trust);
  if (form.caution) box.append(el("p", "note note-warn", form.caution[lang]));
  if (!form.verified) box.append(el("p", "note note-warn", UI[lang].unverified));
}

function renderProgress(form) {
  const done = store.get(doneKey(form), []);
  const total = form.fields.length;
  const box = $("form-progress");
  box.replaceChildren();

  const wrap = el("div", "progress");
  const top = el("div", "progress-top");
  top.append(el("span", null, done.length === total ? UI[lang].allDone : UI[lang].progress(done.length, total)));
  if (done.length) {
    const reset = el("button", "link-btn", UI[lang].reset);
    reset.type = "button";
    reset.addEventListener("click", () => { store.set(doneKey(form), []); openField = 0; renderForm(form); });
    top.append(reset);
  }
  const bar = el("div", "bar");
  const fill = el("div", "bar-fill");
  fill.style.width = `${Math.round((done.length / total) * 100)}%`;
  bar.append(fill);
  wrap.append(top, bar, el("p", "cheat-hint", UI[lang].cheatHint));
  box.append(wrap);
}

function section(title, open, className) {
  const d = el("details", "section " + (className || ""));
  if (open) d.open = true;
  d.append(el("summary", null, title));
  return d;
}

function renderSections(form) {
  const box = $("form-sections");
  box.replaceChildren();

  const changes = changedFields(form);
  if (changes.length) {
    // On big screens, open until the person starts filling. On phones it starts closed,
    // so the short answers come first (the "!" on each field still flags the change).
    const started = store.get(doneKey(form), []).length > 0;
    const roomy = window.matchMedia("(min-width: 960px)").matches;
    const s = section(UI[lang].sectionChanges(changes.length), roomy && !started, "section-warn");
    changes.forEach(f => {
      const item = el("div", "section-item");
      item.append(el("strong", null, f.label[lang]), el("p", null, f.changed[lang]));
      s.append(item);
    });
    box.append(s);
  }

  // Documents grouped by field, because many lists are "any ONE of" and must not be merged.
  const withDocs = form.fields.filter(f => f.documents && f.documents[lang].length);
  const docs = section(UI[lang].sectionDocs, false);
  if (withDocs.length === 0) docs.append(el("p", "muted", UI[lang].noDocs));
  withDocs.forEach(f => {
    const item = el("div", "section-item");
    item.append(el("strong", null, f.label[lang]));
    const ul = el("ul");
    f.documents[lang].forEach(d => ul.append(el("li", null, d)));
    item.append(ul);
    docs.append(item);
  });
  box.append(docs);

  const about = section(UI[lang].sectionAbout, false);
  about.append(el("p", null, form.about[lang]));
  box.append(about);
}

// Wide screens show the open field in its own panel instead of inside the list.
const widePanel = window.matchMedia("(min-width: 1300px)");

function fieldBody(form, field, i, isDone) {
  const body = el("div", "field-body");

  // "What to write" first: it is what people came for.
  const write = el("div", "block block-write");
  write.append(el("h3", null, UI[lang].write), el("p", null, field.write[lang]));
  body.append(write);

  body.append(el("h3", null, UI[lang].meaning), el("p", null, field.meaning[lang]));

  if (field.changed) {
    const ch = el("div", "block block-warn");
    ch.append(el("h3", null, "⚠ " + UI[lang].changed), el("p", null, field.changed[lang]));
    body.append(ch);
  }

  if (field.documents && field.documents[lang].length) {
    const ul = el("ul");
    field.documents[lang].forEach(v => ul.append(el("li", null, v)));
    body.append(el("h3", null, UI[lang].documents), ul);
  }

  if (field.mistakes && field.mistakes[lang].length) {
    const mist = el("div", "block block-danger");
    const ul = el("ul");
    field.mistakes[lang].forEach(v => ul.append(el("li", null, v)));
    mist.append(el("h3", null, UI[lang].mistakes), ul);
    body.append(mist);
  }

  const btn = el("button", "btn done-btn" + (isDone ? " is-done" : ""), isDone ? UI[lang].markUndone : "✓ " + UI[lang].markDone);
  btn.type = "button";
  btn.addEventListener("click", () => toggleDone(form, i, true));
  body.append(btn);
  return body;
}

// Tick or untick a field. From the details view ("advance"), ticking moves on to the next open field.
function toggleDone(form, i, advance) {
  const now = store.get(doneKey(form), []);
  const wasDone = now.includes(i);
  store.set(doneKey(form), wasDone ? now.filter(x => x !== i) : [...now, i]);

  if (advance && !wasDone) {
    // Jump to the next field that is not done yet (wrap around to earlier skipped ones).
    const notDone = j => j !== i && !now.includes(j);
    const next = form.fields.findIndex((_, j) => j > i && notDone(j));
    openField = next >= 0 ? next : form.fields.findIndex((_, j) => notDone(j));
  }
  renderProgress(form);
  renderFields(form);
  if (!advance || openField < 0) return;
  if (widePanel.matches) {
    $("field-detail").scrollTop = 0;
    $("field-list").children[openField].scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    $("field-list").children[openField].scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderFields(form) {
  const done = store.get(doneKey(form), []);
  const wide = widePanel.matches;
  const list = $("field-list");
  const detail = $("field-detail");
  list.replaceChildren();
  detail.replaceChildren();

  // In the side panel there must always be something to read.
  if (wide && openField < 0) openField = 0;

  form.fields.forEach((field, i) => {
    const isDone = done.includes(i);
    const isOpen = i === openField;
    const item = el("li", "field" + (isDone ? " done" : "") + (isOpen ? " open" : ""));
    const row = el("div", "field-row");

    // Tick box: mark a field done straight from the cheat sheet, without opening it.
    const tick = el("button", "step", isDone ? "✓" : "");
    tick.type = "button";
    tick.setAttribute("aria-pressed", isDone);
    tick.setAttribute("aria-label", UI[lang].tickLabel);
    tick.addEventListener("click", () => toggleDone(form, i, false));

    // The row itself: field name, the one-line answer, and a hint that details exist.
    const head = el("button", "field-head");
    head.type = "button";
    head.setAttribute("aria-expanded", isOpen);
    const text = el("span", "field-text");
    text.append(el("span", "field-label", field.label[lang]));
    if (field.quick) text.append(el("span", "field-quick", field.quick[lang]));
    head.append(text);
    if (field.changed) head.append(el("span", "dot-warn", "!"));
    if (!wide) head.append(el("span", "more", isOpen ? UI[lang].hideDetails : UI[lang].details));
    head.addEventListener("click", () => {
      openField = isOpen && !wide ? -1 : i;
      renderFields(form);
      if (wide) detail.scrollTop = 0;
    });

    row.append(tick, head);
    item.append(row);

    if (isOpen && !wide) item.append(fieldBody(form, field, i, isDone));
    if (isOpen && wide) {
      detail.append(
        el("p", "detail-count", `${i + 1} / ${form.fields.length}`),
        el("h2", "detail-title", field.label[lang]),
        fieldBody(form, field, i, isDone)
      );
    }
    list.append(item);
  });
}

// Re-render when the window crosses the wide-panel size (e.g. rotating a tablet).
widePanel.addEventListener("change", () => {
  const form = currentForm();
  if (form) renderFields(form);
});

function renderForm(form) {
  renderFormHeader(form);
  renderProgress(form);
  renderSections(form);
  renderFields(form);
}

function currentForm() {
  const match = location.hash.match(/^#form\/(.+)$/);
  return match && window.FORMS.find(f => f.id === match[1]);
}

// The URL hash decides which view is shown: "#form/<id>" = one form, anything else = home.
// Home links like "#forms" or "#how" scroll to that section.
function route() {
  const form = currentForm();
  $("list-view").hidden = Boolean(form);
  $("form-view").hidden = !form;

  if (form) {
    // Cheat sheet: nothing open on phones so the whole form can be scanned.
    // In the wide three-panel view, show the first field that isn't done yet.
    const done = store.get(doneKey(form), []);
    openField = widePanel.matches ? form.fields.findIndex((_, i) => !done.includes(i)) : -1;
    renderForm(form);
    window.scrollTo(0, 0);
    return;
  }

  renderHome();
  const target = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    store.set("fs:lang", lang);
    renderStaticText();
    // Re-render the current view without losing the open field.
    const form = currentForm();
    if (form) renderForm(form); else renderHome();
  });
});

$("search").addEventListener("input", () => {
  // Typing in the hero search shows results right away.
  if (chip !== "all") { chip = "all"; renderChips(); }
  renderGrid();
});
$("search").addEventListener("keydown", e => {
  if (e.key === "Enter") $("forms").scrollIntoView({ behavior: "smooth" });
});
$("home-link").addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
window.addEventListener("hashchange", route);

renderStaticText();
route();
