// Text used by the page itself (not by forms), in both languages.
const UI = {
  en: {
    tagline: "Fill any form without fear",
    intro: "Every box explained in simple words: what it means, what to write, and the mistakes people make.",
    search: "Search: PAN, voter ID, bank…",
    back: "← All forms",
    changesTitle: n => `${n} rules changed recently`,
    changesSub: "Old advice from friends or seniors may be wrong for these forms:",
    changesCount: n => (n === 1 ? "1 change" : `${n} changes`),
    tagChanged: "Rules changed",
    tagCaution: "Check details",
    tagUnverified: "Not verified",
    fieldsCount: n => `${n} fields`,
    noResults: "No form found. More forms are coming.",
    verifiedPill: date => `Verified · ${date}`,
    unverifiedPill: "Not verified yet",
    sourceToggle: "Where this comes from",
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
    disclaimer: "Form Saathi explains forms in simple words. It is not an official service. The issuing bank or office has the final word."
  },
  hi: {
    tagline: "बिना डर के कोई भी फॉर्म भरें",
    intro: "हर खाना आसान शब्दों में: इसका मतलब, इसमें क्या लिखना है, और लोग कौन-सी गलतियाँ करते हैं।",
    search: "खोजें: पैन, वोटर आईडी, बैंक…",
    back: "← सभी फॉर्म",
    changesTitle: n => `${n} नियम हाल में बदले हैं`,
    changesSub: "इन फॉर्मों के लिए दोस्तों या सीनियर की पुरानी सलाह ग़लत हो सकती है:",
    changesCount: n => `${n} बदलाव`,
    tagChanged: "नियम बदले",
    tagCaution: "जाँच लें",
    tagUnverified: "जाँचा नहीं गया",
    fieldsCount: n => `${n} खाने`,
    noResults: "कोई फॉर्म नहीं मिला। और फॉर्म जल्द आएँगे।",
    verifiedPill: date => `जाँचा गया · ${date}`,
    unverifiedPill: "अभी जाँचा नहीं गया",
    sourceToggle: "यह जानकारी कहाँ से है",
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
  shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM9 12l2 2 4-4"
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

function renderStaticText() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-text]").forEach(node => {
    node.textContent = UI[lang][node.dataset.text];
  });
  $("search").placeholder = UI[lang].search;
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ---------- Home page ----------

function renderChangesBanner() {
  const forms = window.FORMS.filter(f => changedFields(f).length > 0);
  const total = forms.reduce((n, f) => n + changedFields(f).length, 0);
  const box = $("changes-banner");
  box.replaceChildren();
  if (total === 0) return;

  const banner = el("div", "changes-banner");
  banner.append(el("p", "changes-title", "⚠ " + UI[lang].changesTitle(total)));
  banner.append(el("p", "changes-sub", UI[lang].changesSub));
  const row = el("div", "changes-row");
  forms.forEach(form => {
    const btn = el("button", "change-chip");
    btn.type = "button";
    btn.append(el("strong", null, meta(form).short[lang]), el("span", null, UI[lang].changesCount(changedFields(form).length)));
    btn.addEventListener("click", () => { location.hash = "form/" + form.id; });
    row.append(btn);
  });
  banner.append(row);
  box.append(banner);
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
    const iconBox = el("span", "card-icon cat-" + form.category.en.toLowerCase());
    iconBox.append(icon(m.icon));
    card.append(iconBox, el("span", "card-name", m.short[lang]), el("span", "card-meta", UI[lang].fieldsCount(form.fields.length)));

    // At most one tag per card, most important first.
    let tag = null;
    if (!form.verified) tag = el("span", "tag tag-muted", UI[lang].tagUnverified);
    else if (changedFields(form).length) tag = el("span", "tag tag-warn", UI[lang].tagChanged);
    else if (form.caution) tag = el("span", "tag tag-muted", UI[lang].tagCaution);
    if (tag) card.append(tag);

    card.addEventListener("click", () => { location.hash = "form/" + form.id; });
    grid.append(card);
  });
}

function renderHome() {
  renderChangesBanner();
  renderChips();
  renderGrid();
}

// ---------- Form page (fill-along mode) ----------

const doneKey = form => `fs:done:${form.id}:${form.fields.length}`;

function renderFormHeader(form) {
  const m = meta(form);
  const head = el("div", "form-head");
  const iconBox = el("span", "card-icon big cat-" + form.category.en.toLowerCase());
  iconBox.append(icon(m.icon));
  const titles = el("div");
  titles.append(el("h1", null, m.short[lang]), el("p", "official-name", form.name[lang]));
  head.append(iconBox, titles);

  // Trust line: a small pill, with the source tucked into a "details" toggle.
  const trust = el("div", "trust");
  if (form.verified) {
    trust.append(el("span", "pill pill-ok", "✓ " + UI[lang].verifiedPill(form.lastChecked)));
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
    trust.append(el("span", "pill pill-muted", UI[lang].unverifiedPill));
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
  wrap.append(top, bar);
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
    // Open until the person starts filling, then tucked away so the fields come first.
    const started = store.get(doneKey(form), []).length > 0;
    const s = section(UI[lang].sectionChanges(changes.length), !started, "section-warn");
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
  write.append(el("h3", null, "✍ " + UI[lang].write), el("p", null, field.write[lang]));
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
    body.append(el("h3", null, "📄 " + UI[lang].documents), ul);
  }

  if (field.mistakes && field.mistakes[lang].length) {
    const mist = el("div", "block block-danger");
    const ul = el("ul");
    field.mistakes[lang].forEach(v => ul.append(el("li", null, v)));
    mist.append(el("h3", null, "✗ " + UI[lang].mistakes), ul);
    body.append(mist);
  }

  const btn = el("button", "done-btn" + (isDone ? " is-done" : ""), isDone ? UI[lang].markUndone : "✓ " + UI[lang].markDone);
  btn.type = "button";
  btn.addEventListener("click", () => {
    const now = store.get(doneKey(form), []);
    if (isDone) {
      store.set(doneKey(form), now.filter(x => x !== i));
    } else {
      store.set(doneKey(form), [...now, i]);
      // Jump to the next field that is not done yet (wrap around to earlier skipped ones).
      const notDone = j => j !== i && !now.includes(j);
      const next = form.fields.findIndex((_, j) => j > i && notDone(j));
      openField = next >= 0 ? next : form.fields.findIndex((_, j) => notDone(j));
    }
    renderProgress(form);
    renderFields(form);
    if (openField < 0) return;
    if (widePanel.matches) {
      $("field-detail").scrollTop = 0;
      $("field-list").children[openField].scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      $("field-list").children[openField].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  body.append(btn);
  return body;
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

    const head = el("button", "field-head");
    head.type = "button";
    head.setAttribute("aria-expanded", isOpen);
    // The circle works like a checkbox; the form's own numbering stays in the label.
    head.append(el("span", "step", isDone ? "✓" : ""), el("span", "field-label", field.label[lang]));
    if (field.changed) head.append(el("span", "dot-warn", "!"));
    head.addEventListener("click", () => {
      openField = isOpen && !wide ? -1 : i;
      renderFields(form);
      if (wide) detail.scrollTop = 0;
    });
    item.append(head);

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
  const match = location.hash.match(/^#form\/(.+)$/);
  const form = match && window.FORMS.find(f => f.id === match[1]);
  if (form) renderFields(form);
});

function renderForm(form) {
  renderFormHeader(form);
  renderProgress(form);
  renderSections(form);
  renderFields(form);
}

// The URL hash decides which view is shown: "" = home, "#form/<id>" = one form.
// This makes the browser back button work and lets people share a link to one form.
function route() {
  const match = location.hash.match(/^#form\/(.+)$/);
  const form = match && window.FORMS.find(f => f.id === match[1]);

  $("list-view").hidden = Boolean(form);
  $("form-view").hidden = !form;

  if (form) {
    // Open the first field that isn't done yet.
    const done = store.get(doneKey(form), []);
    openField = form.fields.findIndex((_, i) => !done.includes(i));
    renderForm(form);
    window.scrollTo(0, 0);
  } else {
    renderHome();
  }
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    store.set("fs:lang", lang);
    renderStaticText();
    // Re-render the current view without losing the open field.
    const match = location.hash.match(/^#form\/(.+)$/);
    const form = match && window.FORMS.find(f => f.id === match[1]);
    if (form) renderForm(form); else renderHome();
  });
});

$("search").addEventListener("input", renderGrid);
$("back-btn").addEventListener("click", () => { location.hash = ""; });
$("home-link").addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
window.addEventListener("hashchange", route);

renderStaticText();
route();
