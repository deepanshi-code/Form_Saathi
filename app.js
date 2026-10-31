// Text used by the page itself (not by forms), in both languages. Kept short on purpose.
const UI = {
  en: {
    topbar: "Independent guide · Not a government website",
    navForms: "Forms",
    navChanges: "What changed",
    navHow: "How it works",
    tagline: "Fill any form the right way",
    intro: "Simple answers for every box, in English and Hindi.",
    search: "Search a form: PAN, voter ID, bank…",
    popular: "Popular:",
    catTitle: "What do you need help with?",
    catCount: n => `${n} forms`,
    catDesc: {
      bank: "Open a bank or post office account",
      gov: "PAN, Aadhaar, voter ID, licence, passport",
      students: "Scholarships, education loan, anti-ragging",
      uttarakhand: "Income, caste and residence certificates"
    },
    allForms: "All forms",
    changesTitle: n => `${n} rules changed recently`,
    changesSub: "Old advice may be wrong for these forms. Check them first.",
    howTitle: "Three simple steps",
    how1t: "Find your form",
    how2t: "Fill it box by box",
    how3t: "Check, then submit",
    tagChanged: "Rules changed",
    tagCaution: "Check details",
    tagUnverified: "Not verified",
    tagVerified: "Verified",
    fieldsCount: n => `${n} boxes`,
    noResults: "No form found. More forms are coming.",
    home: "Home",
    verifiedPill: date => `Verified ${date}`,
    unverifiedPill: "Not verified yet",
    sourceToggle: "Source",
    sourceText: "Checked against:",
    unverified: "Not yet checked against an official form. Confirm with the office.",
    progressLabel: "boxes done",
    toastDone: label => `✓ Done: ${label}`,
    toastUndone: "Marked as not done",
    allDone: "All boxes done. Check once more before you submit.",
    reset: "Start again",
    toolDocs: "Documents to bring",
    toolChanges: n => `What changed (${n})`,
    toolAbout: "About this form",
    noDocs: "No documents listed. Ask at the office what to bring.",
    write: "What to write",
    meaning: "What it means",
    documents: "Documents",
    mistakes: "Avoid these mistakes",
    changed: "Changed recently",
    details: "Details",
    hideDetails: "Close",
    done: "Done",
    markDone: "Mark done",
    footerAbout: "An independent student project explaining Indian official forms in simple English and Hindi, checked against official sources.",
    footerBrowse: "Browse",
    footerProject: "Project",
    footerSource: "Source code on GitHub",
    footerTesting: "User testing plan",
    disclaimer: "Form Saathi explains forms in simple words. It is not an official service. The bank or office has the final word."
  },
  hi: {
    topbar: "स्वतंत्र गाइड · यह सरकारी वेबसाइट नहीं है",
    navForms: "फॉर्म",
    navChanges: "क्या बदला",
    navHow: "कैसे काम करता है",
    tagline: "कोई भी फॉर्म सही तरीके से भरें",
    intro: "हर खाने का आसान जवाब, हिंदी और अंग्रेज़ी में।",
    search: "फॉर्म खोजें: पैन, वोटर आईडी, बैंक…",
    popular: "लोकप्रिय:",
    catTitle: "आपको किसमें मदद चाहिए?",
    catCount: n => `${n} फॉर्म`,
    catDesc: {
      bank: "बैंक या डाकघर में खाता खोलें",
      gov: "पैन, आधार, वोटर आईडी, लाइसेंस, पासपोर्ट",
      students: "छात्रवृत्ति, शिक्षा ऋण, एंटी-रैगिंग",
      uttarakhand: "आय, जाति और निवास प्रमाण पत्र"
    },
    allForms: "सभी फॉर्म",
    changesTitle: n => `${n} नियम हाल में बदले हैं`,
    changesSub: "इन फॉर्मों के लिए पुरानी सलाह ग़लत हो सकती है। पहले इन्हें देखें।",
    howTitle: "तीन आसान कदम",
    how1t: "अपना फॉर्म खोजें",
    how2t: "एक-एक खाना भरें",
    how3t: "जाँचें, फिर जमा करें",
    tagChanged: "नियम बदले",
    tagCaution: "जाँच लें",
    tagUnverified: "जाँचा नहीं गया",
    tagVerified: "जाँचा गया",
    fieldsCount: n => `${n} खाने`,
    noResults: "कोई फॉर्म नहीं मिला। और फॉर्म जल्द आएँगे।",
    home: "मुख्य पेज",
    verifiedPill: date => `जाँचा गया ${date}`,
    unverifiedPill: "अभी जाँचा नहीं गया",
    sourceToggle: "स्रोत",
    sourceText: "इससे जाँचा गया:",
    unverified: "अभी किसी आधिकारिक फॉर्म से नहीं जाँचा गया। दफ़्तर से पुष्टि करें।",
    progressLabel: "खाने पूरे",
    toastDone: label => `✓ पूरा: ${label}`,
    toastUndone: "अधूरा मार्क किया",
    allDone: "सारे खाने पूरे। जमा करने से पहले एक बार और जाँच लें।",
    reset: "फिर से शुरू करें",
    toolDocs: "ये दस्तावेज़ लाएँ",
    toolChanges: n => `क्या बदला (${n})`,
    toolAbout: "इस फॉर्म के बारे में",
    noDocs: "कोई दस्तावेज़ नहीं लिखा। दफ़्तर में पूछें क्या लाना है।",
    write: "क्या लिखें",
    meaning: "इसका मतलब",
    documents: "दस्तावेज़",
    mistakes: "ये गलतियाँ न करें",
    changed: "हाल में बदला",
    details: "पूरी जानकारी",
    hideDetails: "बंद करें",
    done: "पूरा",
    markDone: "पूरा करें",
    footerAbout: "एक स्वतंत्र छात्र प्रोजेक्ट, जो भारतीय आधिकारिक फॉर्मों को आसान हिंदी और अंग्रेज़ी में समझाता है, आधिकारिक स्रोतों से जाँचकर।",
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
  arrow: "M5 12h14M13 6l6 6-6 6",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01",
  alert: "M12 4l9 16H3zM12 10v4M12 17h.01",
  chevron: "M6 9l6 6 6-6",
  check: "M5 12l5 5 9-10"
};

// Icon for each category tile.
const CHIP_ICONS = { bank: "bank", gov: "card", students: "cap", uttarakhand: "home" };
// Shown as quick buttons under the search box.
const POPULAR = ["pan-application", "voter-id-form-6", "aadhaar-update", "passport-fresh", "sbi-account-opening"];

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
let openField = -1; // which box card is expanded on the form page
let panel = null;   // which tool panel is open on the form page: "docs" | "changes" | "about"

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
const formsInChip = c => window.FORMS.filter(f => !c.categories || c.categories.includes(f.category.en));

function iconBox(form, extra = "") {
  const box = el("span", `card-icon ${catClass(form)} ${extra}`);
  box.append(icon(meta(form).icon));
  return box;
}

function statusBadge(form) {
  if (!form.verified) return el("span", "badge badge-muted", UI[lang].tagUnverified);
  if (changedFields(form).length) return el("span", "badge badge-warn", UI[lang].tagChanged);
  if (form.caution) return el("span", "badge badge-muted", UI[lang].tagCaution);
  return el("span", "badge badge-ok", "✓ " + UI[lang].tagVerified);
}

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

function searchForms(query) {
  // Search both languages and short names, so "बैंक", "bank" and "pan" all work.
  const q = query.trim().toLowerCase();
  return window.FORMS.filter(form => {
    const m = meta(form);
    return [form.name.en, form.name.hi, form.category.en, form.category.hi, m.short.en, m.short.hi].join(" ").toLowerCase().includes(q);
  });
}

// Command-style search: results appear as you type; arrow keys move, Enter opens.
let searchMatches = [];
let searchActive = 0;

function renderSearchResults() {
  const query = $("search").value.trim();
  const list = $("search-results");
  list.replaceChildren();
  list.hidden = query === "";
  $("search").setAttribute("aria-expanded", query !== "");
  searchMatches = query ? searchForms(query).slice(0, 6) : [];
  searchActive = Math.min(searchActive, Math.max(searchMatches.length - 1, 0));
  if (!query) return;

  if (searchMatches.length === 0) {
    list.append(el("li", "empty", UI[lang].noResults));
    return;
  }
  searchMatches.forEach((form, i) => {
    const li = el("li");
    const btn = el("button", "result" + (i === searchActive ? " active" : ""));
    btn.type = "button";
    btn.id = "result-" + i;
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", i === searchActive);
    btn.append(iconBox(form, "small"), el("span", "result-name", meta(form).short[lang]), el("span", "result-cat", form.category[lang]));
    if (i === searchActive) btn.append(el("kbd", "result-enter", "↵"));
    btn.addEventListener("click", () => openForm(form));
    btn.addEventListener("mousemove", () => { if (searchActive !== i) { searchActive = i; renderSearchResults(); } });
    li.append(btn);
    list.append(li);
  });
  $("search").setAttribute("aria-activedescendant", "result-" + searchActive);
}

function renderPopular() {
  const box = $("popular-list");
  box.replaceChildren();
  POPULAR.map(id => window.FORMS.find(f => f.id === id)).filter(Boolean).forEach(form => {
    const btn = el("button", "pop", meta(form).short[lang]);
    btn.type = "button";
    btn.addEventListener("click", () => openForm(form));
    box.append(btn);
  });
}

function renderCategoryTiles() {
  const box = $("cat-tiles");
  box.replaceChildren();
  window.CHIPS.filter(c => c.categories).forEach(c => {
    const tile = el("button", "cat-tile tile-" + c.key);
    tile.type = "button";
    const blob = el("span", "tile-icon");
    blob.append(icon(CHIP_ICONS[c.key]));
    tile.append(
      blob,
      el("span", "tile-name", c.label[lang]),
      el("span", "tile-desc", UI[lang].catDesc[c.key]),
      el("span", "tile-count", UI[lang].catCount(formsInChip(c).length) + " →")
    );
    tile.addEventListener("click", () => {
      chip = c.key;
      renderChips();
      renderGrid();
      $("forms").scrollIntoView({ behavior: "smooth" });
    });
    box.append(tile);
  });
}

// Fluid tabs: a highlight slides between categories. The indicator element is reused
// across renders so the browser can animate it from its old position to the new one.
function renderChips() {
  const box = $("chips");
  const indicator = box.querySelector(".chip-indicator") || el("span", "chip-indicator");
  const buttons = window.CHIPS.map(c => {
    const btn = el("button", "chip" + (c.key === chip ? " active" : ""), c.label[lang]);
    btn.type = "button";
    btn.setAttribute("aria-pressed", c.key === chip);
    btn.addEventListener("click", () => { chip = c.key; renderChips(); renderGrid(); });
    return btn;
  });
  box.replaceChildren(indicator, ...buttons);
  requestAnimationFrame(() => moveChipIndicator(box, indicator));
}

function moveChipIndicator(box, indicator) {
  const active = box.querySelector(".chip.active");
  if (!active) return;
  indicator.style.width = active.offsetWidth + "px";
  indicator.style.height = active.offsetHeight + "px";
  indicator.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
}
// Chips can wrap onto new lines when the window is resized, so re-place the highlight.
window.addEventListener("resize", () => {
  const box = $("chips");
  const indicator = box.querySelector(".chip-indicator");
  if (indicator) moveChipIndicator(box, indicator);
});

function renderGrid() {
  const current = window.CHIPS.find(c => c.key === chip);
  $("forms-title").textContent = current.categories ? current.label[lang] : UI[lang].allForms;
  const grid = $("form-grid");
  grid.replaceChildren();

  formsInChip(current).forEach((form, i) => {
    const card = el("button", "form-card");
    card.type = "button";
    card.style.setProperty("--i", i); // staggers the fade-in animation
    const text = el("span", "card-text");
    const metaRow = el("span", "card-meta");
    metaRow.append(statusBadge(form), el("span", null, UI[lang].fieldsCount(form.fields.length)));
    text.append(el("span", "card-name", meta(form).short[lang]), metaRow);
    card.append(iconBox(form), text, icon("arrow", "icon card-arrow"));
    card.addEventListener("click", () => openForm(form));
    grid.append(card);
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
    const btn = el("button", "change-chip");
    btn.type = "button";
    btn.append(el("span", null, meta(form).short[lang]), el("span", "change-count", String(changedFields(form).length)));
    btn.addEventListener("click", () => openForm(form));
    list.append(btn);
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
  renderSearchResults();
  renderPopular();
  renderCategoryTiles();
  renderChips();
  renderGrid();
  renderChangesList();
}

// ---------- Form page: header, tools and a grid of box cards ----------

const doneKey = form => `fs:done:${form.id}:${form.fields.length}`;

function renderFormHeader(form) {
  const m = meta(form);

  // Breadcrumb: Home › Category › Form
  const home = el("a", null, UI[lang].home);
  home.href = "#";
  home.addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
  $("breadcrumb").replaceChildren(home, el("span", "sep", "›"), el("span", null, form.category[lang]), el("span", "sep", "›"), el("span", "current", m.short[lang]));

  const head = el("div", "form-head");
  const titles = el("div", "form-titles");
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
  titles.append(el("h1", null, m.short[lang]), el("p", "official-name", form.name[lang]), trust);
  head.append(iconBox(form, "big"), titles);

  const box = $("form-header");
  box.replaceChildren(head);
  if (form.caution) box.append(el("p", "note note-warn", form.caution[lang]));
  if (!form.verified) box.append(el("p", "note note-warn", UI[lang].unverified));
}

function renderTools(form) {
  const box = $("form-tools");
  box.replaceChildren();

  // Labelled, segmented progress: one segment per box. Tap a segment to jump to that box.
  const prog = el("div", "progress");
  const top = el("div", "progress-top");
  const reset = el("button", "link-btn", UI[lang].reset);
  reset.type = "button";
  reset.addEventListener("click", () => { store.set(doneKey(form), []); openField = -1; renderForm(form); });
  top.append(el("span", "progress-count"), el("span", "progress-label"), reset);
  const segments = el("div", "segments");
  form.fields.forEach((field, i) => {
    const seg = el("button", "seg");
    seg.type = "button";
    seg.title = field.label[lang];
    seg.setAttribute("aria-label", field.label[lang]);
    seg.addEventListener("click", () => { if (openField !== i) setOpen(form, i); });
    segments.append(seg);
  });
  prog.append(top, segments);

  // Buttons that open one panel at a time
  const tools = el("div", "tool-buttons");
  const changes = changedFields(form).length;
  [
    ["docs", "doc", UI[lang].toolDocs, ""],
    changes ? ["changes", "alert", UI[lang].toolChanges(changes), " tool-warn"] : null,
    ["about", "info", UI[lang].toolAbout, ""]
  ].filter(Boolean).forEach(([key, ic, label, extra]) => {
    const btn = el("button", "tool" + extra + (panel === key ? " active" : ""));
    btn.type = "button";
    btn.setAttribute("aria-expanded", panel === key);
    btn.append(icon(ic, "icon small-icon"), el("span", null, label));
    btn.addEventListener("click", () => { panel = panel === key ? null : key; renderTools(form); renderPanel(form); });
    tools.append(btn);
  });

  box.append(prog, tools);
  updateProgress(form);
}

// Updates the progress in place (no re-render), so the segments can animate.
function updateProgress(form) {
  const done = store.get(doneKey(form), []);
  const total = form.fields.length;
  const box = $("form-tools");
  box.querySelector(".progress-count").textContent = `${done.length} / ${total}`;
  box.querySelector(".progress-label").textContent = done.length === total ? UI[lang].allDone : UI[lang].progressLabel;
  box.querySelector(".link-btn").hidden = done.length === 0;
  box.querySelectorAll(".seg").forEach((seg, i) => seg.classList.toggle("on", done.includes(i)));
}

// Small confirmation message at the bottom of the screen.
function toast(message) {
  const t = $("toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 1800);
}

function renderPanel(form) {
  const box = $("form-panel");
  box.replaceChildren();
  if (!panel) return;

  const card = el("div", "panel panel-" + panel);
  if (panel === "changes") {
    changedFields(form).forEach(f => {
      const item = el("div", "panel-item");
      item.append(el("strong", null, f.label[lang]), el("p", null, f.changed[lang]));
      card.append(item);
    });
  } else if (panel === "docs") {
    // Grouped by box, because many lists are "any ONE of" and must not be merged.
    const withDocs = form.fields.filter(f => f.documents && f.documents[lang].length);
    if (withDocs.length === 0) card.append(el("p", null, UI[lang].noDocs));
    withDocs.forEach(f => {
      const item = el("div", "panel-item");
      const ul = el("ul");
      f.documents[lang].forEach(d => ul.append(el("li", null, d)));
      item.append(el("strong", null, f.label[lang]), ul);
      card.append(item);
    });
  } else {
    card.append(el("p", null, form.about[lang]));
  }
  box.append(card);
}

function detailBlock(className, title, content) {
  const block = el("div", "detail " + className);
  block.append(el("h3", null, title));
  if (Array.isArray(content)) {
    const ul = el("ul");
    content.forEach(v => ul.append(el("li", null, v)));
    block.append(ul);
  } else {
    block.append(el("p", null, content));
  }
  return block;
}

// Accordion: open or close one box card in place, so the height change can animate.
function setOpen(form, i) {
  const cards = $("field-list").children;
  const next = openField === i ? -1 : i;
  [openField, next].forEach(j => {
    const card = cards[j];
    if (!card) return;
    const isOpen = j === next;
    card.classList.toggle("open", isOpen);
    card.querySelector(".box-main").setAttribute("aria-expanded", isOpen);
    card.querySelector(".box-more span").textContent = isOpen ? UI[lang].hideDetails : UI[lang].details;
  });
  openField = next;
  if (next >= 0) setTimeout(() => cards[next].scrollIntoView({ behavior: "smooth", block: "nearest" }), 60);
}

function toggleDone(form, i) {
  const now = store.get(doneKey(form), []);
  const nowDone = !now.includes(i);
  store.set(doneKey(form), nowDone ? [...now, i] : now.filter(x => x !== i));

  // Update just this card and the progress, instead of re-rendering everything.
  const card = $("field-list").children[i];
  const btn = card.querySelector(".box-done");
  card.classList.toggle("done", nowDone);
  btn.classList.toggle("is-done", nowDone);
  btn.setAttribute("aria-pressed", nowDone);
  btn.querySelector("span").textContent = nowDone ? UI[lang].done : UI[lang].markDone;
  if (nowDone && openField === i) setOpen(form, i);
  updateProgress(form);
  toast(nowDone ? UI[lang].toastDone(form.fields[i].label[lang]) : UI[lang].toastUndone);
}

function renderFields(form) {
  const done = store.get(doneKey(form), []);
  const list = $("field-list");
  list.replaceChildren();

  form.fields.forEach((field, i) => {
    const isDone = done.includes(i);
    const isOpen = i === openField;
    const card = el("li", "box" + (isDone ? " done" : "") + (isOpen ? " open" : "") + (field.changed ? " has-change" : ""));
    card.style.setProperty("--i", i); // staggers the fade-in animation

    // Main area: tap to open details.
    const main = el("button", "box-main");
    main.type = "button";
    main.setAttribute("aria-expanded", isOpen);
    const top = el("span", "box-top");
    top.append(el("span", "box-label", field.label[lang]));
    if (field.changed) top.append(el("span", "badge badge-warn", UI[lang].changed));
    main.append(top, el("span", "box-quick", field.quick ? field.quick[lang] : field.write[lang]));
    main.addEventListener("click", () => setOpen(form, i));

    // Details are always in the page but collapsed, so opening can animate smoothly.
    const collapse = el("div", "box-collapse");
    const details = el("div", "box-details");
    details.append(detailBlock("detail-write", UI[lang].write, field.write[lang]));
    details.append(detailBlock("detail-plain", UI[lang].meaning, field.meaning[lang]));
    if (field.changed) details.append(detailBlock("detail-warn", UI[lang].changed, field.changed[lang]));
    if (field.documents && field.documents[lang].length) details.append(detailBlock("detail-plain", UI[lang].documents, field.documents[lang]));
    if (field.mistakes && field.mistakes[lang].length) details.append(detailBlock("detail-danger", UI[lang].mistakes, field.mistakes[lang]));
    collapse.append(details);

    // Footer: details toggle and the done button.
    const foot = el("div", "box-foot");
    const more = el("button", "box-more");
    more.type = "button";
    more.append(el("span", null, isOpen ? UI[lang].hideDetails : UI[lang].details), icon("chevron", "icon chev"));
    more.addEventListener("click", () => setOpen(form, i));
    const doneBtn = el("button", "box-done" + (isDone ? " is-done" : ""));
    doneBtn.type = "button";
    doneBtn.setAttribute("aria-pressed", isDone);
    doneBtn.append(icon("check", "icon small-icon tick-draw"), el("span", null, isDone ? UI[lang].done : UI[lang].markDone));
    doneBtn.addEventListener("click", () => toggleDone(form, i));
    foot.append(more, doneBtn);

    card.append(main, collapse, foot);
    list.append(card);
  });
}

function renderForm(form) {
  renderFormHeader(form);
  renderTools(form);
  renderPanel(form);
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
    openField = -1;
    panel = null;
    renderForm(form);
    window.scrollTo(0, 0);
    return;
  }

  $("search").value = "";
  renderHome();
  const target = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    store.set("fs:lang", lang);
    renderStaticText();
    // Re-render the current view without losing what is open.
    const form = currentForm();
    if (form) renderForm(form); else renderHome();
  });
});

$("search").addEventListener("input", () => { searchActive = 0; renderSearchResults(); });
$("search").addEventListener("keydown", e => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    if (!searchMatches.length) return;
    e.preventDefault();
    const step = e.key === "ArrowDown" ? 1 : -1;
    searchActive = (searchActive + step + searchMatches.length) % searchMatches.length;
    renderSearchResults();
  }
  if (e.key === "Enter" && searchMatches[searchActive]) openForm(searchMatches[searchActive]);
  if (e.key === "Escape") { $("search").value = ""; renderSearchResults(); $("search").blur(); }
});
// Ctrl+K / Cmd+K or "/" jumps to the search box on the home page.
document.addEventListener("keydown", e => {
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  const shortcut = ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !typing);
  if (!shortcut || currentForm()) return;
  e.preventDefault();
  $("search").focus();
  $("search").scrollIntoView({ behavior: "smooth", block: "center" });
});
// Close the results list when clicking elsewhere.
document.addEventListener("click", e => {
  if (!e.target.closest(".search-box")) $("search-results").hidden = true;
});
$("search").addEventListener("focus", renderSearchResults);
$("home-link").addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
window.addEventListener("hashchange", route);

renderStaticText();
route();
