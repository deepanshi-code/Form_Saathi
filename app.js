// Text used by the page itself (not by forms), in both languages. Kept short on purpose.
const UI = {
  en: {
    topbar: "Independent guide · Not a government website",
    navForms: "Forms",
    navChanges: "What changed",
    navHow: "How it works",
    tagline: "Fill any form the right way",
    accent: "without fear, without mistakes",
    eyebrow: "Free · English & हिंदी · Checked against official sources",
    cta: "Find your form",
    findBtn: "Find form →",
    previewCaption: "Open the PAN card guide →",
    changesEyebrow: "Changed recently",
    intro: "Simple answers for every box, in English and Hindi.",
    search: "Search a form: PAN, voter ID, bank…",
    popular: "Try:",
    lifeEyebrow: "Start here",
    lifeTitle: "What’s happening in your life?",
    lifeSub: "Pick what is going on, and see every form you will need for it.",
    allForms: "All forms",
    showAll: n => `Show all ${n} forms`,
    showLess: "Show fewer",
    lifeNeed: n => n === 1 ? "You may need this form" : `You may need these ${n} forms`,
    changeCount: n => n === 1 ? "1 change" : `${n} changes`,
    changesAll: n => `See all ${n} forms with changes`,
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
    viewGuide: "On the form",
    viewList: "List of boxes",
    page: n => `Page ${n}`,
    stepOf: (i, t) => `Step ${i} of ${t}`,
    prev: "Previous",
    next: "Next",
    alsoOn: n => `Also on page ${n}`,
    imageCredit: "Image of the official form ·",
    imageSource: "source",
    progressLabel: "boxes done",
    toastDone: label => `✓ Done: ${label}`,
    toastUndone: "Marked as not done",
    allDone: "All boxes done. Check once more before you submit.",
    reset: "Start again",
    toolDocs: "Documents to bring",
    toolChanges: n => `What changed (${n})`,
    toolAbout: "About this form",
    toolPrint: "Print my answers",
    listen: "Listen",
    stop: "Stop",
    myAnswer: "Your answer (for your own notes)",
    myAnswerHint: "Saved only on this device. Avoid typing ID numbers on a shared phone.",
    printTitle: name => `My answers: ${name}`,
    printNote: "Made with Form Saathi. Check every answer against your documents before writing it on the form.",
    printCols: ["Box", "What to write", "My answer"],
    noAnswers: "Type your answers in the boxes first, then print.",
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
    accent: "बिना डर, बिना गलती",
    eyebrow: "मुफ़्त · हिंदी और English · आधिकारिक स्रोतों से जाँचा गया",
    cta: "अपना फॉर्म खोजें",
    findBtn: "फॉर्म खोजें →",
    previewCaption: "पैन कार्ड गाइड खोलें →",
    changesEyebrow: "हाल में बदला",
    intro: "हर खाने का आसान जवाब, हिंदी और अंग्रेज़ी में।",
    search: "फॉर्म खोजें: पैन, वोटर आईडी, बैंक…",
    popular: "आज़माएँ:",
    lifeEyebrow: "यहाँ से शुरू करें",
    lifeTitle: "आपकी ज़िंदगी में अभी क्या हो रहा है?",
    lifeSub: "जो चल रहा है वह चुनें, और उसके लिए ज़रूरी सारे फॉर्म देखें।",
    allForms: "सभी फॉर्म",
    showAll: n => `सभी ${n} फॉर्म देखें`,
    showLess: "कम दिखाएँ",
    lifeNeed: n => n === 1 ? "आपको शायद यह फॉर्म चाहिए" : `आपको शायद ये ${n} फॉर्म चाहिए`,
    changeCount: n => `${n} बदलाव`,
    changesAll: n => `बदलाव वाले सभी ${n} फॉर्म देखें`,
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
    viewGuide: "फॉर्म पर देखें",
    viewList: "खानों की सूची",
    page: n => `पेज ${n}`,
    stepOf: (i, t) => `${t} में से कदम ${i}`,
    prev: "पिछला",
    next: "अगला",
    alsoOn: n => `पेज ${n} पर भी`,
    imageCredit: "आधिकारिक फॉर्म की तस्वीर ·",
    imageSource: "स्रोत",
    progressLabel: "खाने पूरे",
    toastDone: label => `✓ पूरा: ${label}`,
    toastUndone: "अधूरा मार्क किया",
    allDone: "सारे खाने पूरे। जमा करने से पहले एक बार और जाँच लें।",
    reset: "फिर से शुरू करें",
    toolDocs: "ये दस्तावेज़ लाएँ",
    toolChanges: n => `क्या बदला (${n})`,
    toolAbout: "इस फॉर्म के बारे में",
    toolPrint: "मेरे जवाब प्रिंट करें",
    listen: "सुनें",
    stop: "रोकें",
    myAnswer: "आपका जवाब (अपने नोट्स के लिए)",
    myAnswerHint: "सिर्फ़ इसी डिवाइस पर सेव होता है। साझा फ़ोन पर पहचान नंबर न लिखें।",
    printTitle: name => `मेरे जवाब: ${name}`,
    printNote: "Form Saathi से बनाया गया। फॉर्म पर लिखने से पहले हर जवाब अपने दस्तावेज़ों से मिला लें।",
    printCols: ["खाना", "क्या लिखना है", "मेरा जवाब"],
    noAnswers: "पहले खानों में अपने जवाब लिखें, फिर प्रिंट करें।",
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
  check: "M5 12l5 5 9-10",
  cake: "M4 21h16M5 21v-7h14v7M5 17.5c2.3 1.5 4.7 1.5 7 0s4.7-1.5 7 0M12 14v-4M12 7.5c-1-.8-1-2 0-3.5 1 1.5 1 2.7 0 3.5z",
  briefcase: "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  exit: "M14 4h6v16h-6M10 16l4-4-4-4M14 12H3",
  heart: "M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 21c0-4 3-7 7-7s7 3 7 7",
  candle: "M12 3c1.6 2 1.6 3.6 0 5.2-1.6-1.6-1.6-3.2 0-5.2zM9 11h6v10H9z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z",
  chat: "M4 5h16v11H9l-5 4zM8 9.5h8M8 12.5h5",
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3",
  send: "M4 12l16-8-6 16-2-7zM12 13l8-9",
  close: "M6 6l12 12M18 6L6 18",
  speaker: "M4 9h4l5-4v14l-5-4H4zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12",
  print: "M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"
};

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
let view = "list";  // form page view: "guide" (form image + steps) or "list" (box cards)
let guideStep = 0;  // current step in the guide view
let guidePage = 0;  // which page image is shown in the guide view
const layoutOf = form => (window.LAYOUT || {})[form.id];

// Page-image layouts live in forms/layout/<id>.js and are loaded only when that form is opened,
// so the home page stays light. LAYOUT_FILES (in forms/layout.js) lists which forms have one.
const VERSION = (document.querySelector('script[src*="app.js"]').src.split("v=")[1] || "");
function loadLayout(form, done) {
  if (layoutOf(form) || !(window.LAYOUT_FILES || []).includes(form.id)) return;
  const s = document.createElement("script");
  s.src = `forms/layout/${form.id}.js?v=${VERSION}`;
  s.onload = () => { if (currentForm() === form) done(); };
  document.head.append(s);
}

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

// "What's happening in your life?": pick one situation, see only its forms.
let lifeIndex = 0;
function renderLife() {
  const events = (window.LIFE || [])
    .map(ev => ({ ...ev, list: ev.forms.map(id => window.FORMS.find(f => f.id === id)).filter(Boolean) }))
    .filter(ev => ev.list.length);
  if (!events[lifeIndex]) lifeIndex = 0;
  const picker = $("life-picker");
  picker.replaceChildren(...events.map((ev, i) => {
    const btn = el("button", "life-tile" + (i === lifeIndex ? " active" : ""));
    btn.type = "button";
    btn.setAttribute("aria-pressed", i === lifeIndex);
    const blob = el("span", "life-icon");
    blob.append(icon(ev.icon));
    btn.append(blob, el("span", "life-name", ev.title[lang]));
    btn.addEventListener("click", () => {
      lifeIndex = i;
      renderLife();
      // On narrow screens the list sits below the tiles, so bring it into view.
      if (window.matchMedia("(max-width: 960px)").matches) {
        const panel = $("life-panel");
        panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        // Some browsers skip smooth scrolling; make sure the list ends up on screen anyway.
        setTimeout(() => {
          const r = panel.getBoundingClientRect();
          if (r.top > window.innerHeight - 80) panel.scrollIntoView({ block: "nearest" });
        }, 600);
      }
    });
    return btn;
  }));

  const ev = events[lifeIndex];
  const list = el("ol", "life-list");
  ev.list.forEach(form => {
    const a = el("a", "life-link");
    a.href = "#form/" + form.id;
    a.append(iconBox(form, "small"), el("span", "life-form", meta(form).short[lang]), icon("arrow", "icon life-arrow"));
    const li = el("li");
    li.append(a);
    list.append(li);
  });
  $("life-panel").replaceChildren(el("p", "life-need", UI[lang].lifeNeed(ev.list.length)), list);
}

// Product preview on the home page: the real PAN form with one box spotlighted,
// filled from the PAN guide's own data so the words always match the guide.
function renderPreview() {
  const form = window.FORMS.find(f => f.id === "pan-application");
  const lay = layoutOf(form || {});
  if (!form || !lay) { $("preview").hidden = true; return; }
  const step = 2; // "Date of Birth": a box everyone recognises
  const s = lay.spots[step][0];
  $("mock-title").textContent = "Form Saathi · " + meta(form).short[lang];
  Object.assign($("mock-spot").style, { left: s.x + "%", top: s.y + "%", width: s.w + "%", height: s.h + "%" });

  const steps = $("mock-steps");
  steps.replaceChildren(el("span", "mock-count", UI[lang].stepOf(step + 1, form.fields.length)));
  // Show the step before, the current step and the one after
  form.fields.slice(step - 1, step + 2).forEach((f, k) => {
    const i = step - 1 + k;
    const row = el("span", "mock-step" + (i < step ? " done" : "") + (i === step ? " active" : ""));
    row.append(el("i", null, i < step ? "✓" : String(i + 1)));
    const text = el("span", "mock-text");
    text.append(el("b", null, f.label[lang]));
    if (i === step) text.append(el("span", "mock-quick", f.quick[lang]), el("span", "mock-btn", "✓ " + UI[lang].markDone));
    row.append(text);
    steps.append(row);
  });
  positionMock();
}

// Shift the zoomed page so the spotlighted box sits near the top left of the preview window.
function positionMock() {
  const img = $("mock-img");
  const place = () => {
    const inner = $("mock-inner");
    const spot = $("mock-spot");
    const target = spot.offsetTop - inner.parentElement.clientHeight * 0.4;
    const left = Math.max(0, spot.offsetLeft - 12);
    inner.style.transform = `translate(${-left}px, ${-Math.max(0, target)}px)`;
  };
  if (img.complete) place(); else img.addEventListener("load", place, { once: true });
}
window.addEventListener("resize", () => { if (!$("list-view").hidden) positionMock(); });

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

// Only a warning earns a badge on a card; "verified" is the normal case and would just add noise.
function cardBadge(form) {
  if (!form.verified) return el("span", "badge badge-muted", UI[lang].tagUnverified);
  if (changedFields(form).length) return el("span", "badge badge-warn", UI[lang].tagChanged);
  return null;
}

let showAllForms = false;
const FIRST_FORMS = 12;
function renderGrid() {
  const current = window.CHIPS.find(c => c.key === chip);
  $("forms-title").textContent = current.categories ? current.label[lang] : UI[lang].allForms;
  const grid = $("form-grid");
  grid.replaceChildren();

  const all = formsInChip(current);
  const shown = current.categories || showAllForms ? all : all.slice(0, FIRST_FORMS);
  shown.forEach((form, i) => {
    const card = el("button", "form-card");
    card.type = "button";
    card.style.setProperty("--i", i); // staggers the fade-in animation
    const text = el("span", "card-text");
    const metaRow = el("span", "card-meta");
    const badge = cardBadge(form);
    metaRow.append(el("span", null, UI[lang].fieldsCount(form.fields.length)));
    if (badge) metaRow.append(badge);
    text.append(el("span", "card-name", meta(form).short[lang]), metaRow);
    card.append(iconBox(form), text, icon("arrow", "icon card-arrow"));
    card.addEventListener("click", () => openForm(form));
    grid.append(card);
  });

  const more = $("forms-more");
  more.hidden = !!current.categories || all.length <= FIRST_FORMS;
  more.textContent = showAllForms ? UI[lang].showLess : UI[lang].showAll(all.length);
}

let changesAll = false;
function renderChangesList() {
  const forms = window.FORMS.filter(f => changedFields(f).length > 0);
  const total = forms.reduce((n, f) => n + changedFields(f).length, 0);
  $("changes").hidden = total === 0;
  $("changes-title").textContent = UI[lang].changesTitle(total);

  const list = $("changes-list");
  const sorted = forms.slice().sort((a, b) => changedFields(b).length - changedFields(a).length);
  list.replaceChildren(...(changesAll ? sorted : sorted.slice(0, 6)).map(form => {
    const a = el("a", "change-row");
    a.href = "#form/" + form.id;
    a.append(el("span", "change-name", meta(form).short[lang]), el("span", "change-count", UI[lang].changeCount(changedFields(form).length)));
    return a;
  }));
  const more = $("changes-more");
  more.hidden = sorted.length <= 6;
  more.textContent = changesAll ? UI[lang].showLess : UI[lang].changesAll(sorted.length);
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
  renderPreview();
  renderLife();
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
    seg.addEventListener("click", () => {
      if (view === "guide" && layoutOf(form)) goToStep(form, i);
      else if (openField !== i) setOpen(form, i);
    });
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

  const printBtn = el("button", "tool");
  printBtn.type = "button";
  printBtn.append(icon("print", "icon small-icon"), el("span", null, UI[lang].toolPrint));
  printBtn.addEventListener("click", () => printAnswers(form));
  tools.append(printBtn);

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

// Read text aloud with the browser's built-in speech (no data leaves the device).
const canSpeak = "speechSynthesis" in window;
function speak(text, btn) {
  if (!canSpeak) return;
  const synth = window.speechSynthesis;
  const wasThis = btn && btn.classList.contains("speaking");
  synth.cancel();
  document.querySelectorAll(".speak-btn.speaking").forEach(b => { b.classList.remove("speaking"); b.querySelector("span").textContent = UI[lang].listen; });
  if (wasThis) return; // a second tap stops it
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "hi" ? "hi-IN" : "en-IN";
  const voices = synth.getVoices();
  const voice = voices.find(v => v.lang.replace("_", "-") === u.lang) || voices.find(v => v.lang.startsWith(lang));
  if (voice) u.voice = voice;
  u.rate = 0.95;
  if (btn) {
    btn.classList.add("speaking");
    btn.querySelector("span").textContent = UI[lang].stop;
    u.onend = u.onerror = () => { btn.classList.remove("speaking"); btn.querySelector("span").textContent = UI[lang].listen; };
  }
  synth.speak(u);
}
function speakButton(text) {
  const btn = el("button", "speak-btn");
  btn.type = "button";
  btn.hidden = !canSpeak;
  btn.append(icon("speaker", "icon small-icon"), el("span", null, UI[lang].listen));
  btn.addEventListener("click", e => { e.stopPropagation(); speak(text, btn); });
  return btn;
}

// "My answers": what the user plans to write in each box, kept only in this browser.
const answersKey = form => `fs:ans:${form.id}`;
function answerInput(form, i) {
  const wrap = el("label", "my-answer");
  wrap.append(el("span", "my-answer-label", UI[lang].myAnswer));
  const input = el("input");
  input.type = "text";
  input.autocomplete = "off";
  input.value = store.get(answersKey(form), {})[i] || "";
  input.addEventListener("input", () => {
    const all = store.get(answersKey(form), {});
    if (input.value.trim()) all[i] = input.value; else delete all[i];
    store.set(answersKey(form), all);
  });
  wrap.append(input, el("span", "my-answer-hint", UI[lang].myAnswerHint));
  return wrap;
}

// A one-page sheet to carry to the counter: box, what to write, and the user's own answer.
function printAnswers(form) {
  const answers = store.get(answersKey(form), {});
  if (!Object.keys(answers).length) { toast(UI[lang].noAnswers); return; }
  const table = el("table");
  const head = el("tr");
  UI[lang].printCols.forEach(c => head.append(el("th", null, c)));
  table.append(head);
  form.fields.forEach((f, i) => {
    const tr = el("tr");
    tr.append(el("td", null, (i + 1) + ". " + f.label[lang]), el("td", null, f.quick ? f.quick[lang] : f.write[lang]), el("td", "print-answer", answers[i] || ""));
    table.append(tr);
  });
  $("print-sheet").replaceChildren(el("h1", null, UI[lang].printTitle(meta(form).short[lang])), table, el("p", null, UI[lang].printNote));
  window.print();
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
  updateGuide(form, false);
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
    details.append(answerInput(form, i));
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
    foot.append(more, speakButton(field.quick ? field.quick[lang] : field.write[lang]), doneBtn);

    card.append(main, collapse, foot);
    list.append(card);
  });
}

// ---------- Guide view: the official form image with the current box spotlighted,
// next to a step-by-step flowchart of what to fill ----------

function renderViewSwitch(form) {
  const box = $("view-switch");
  box.replaceChildren();
  box.hidden = !layoutOf(form);
  if (!layoutOf(form)) return;
  [["guide", UI[lang].viewGuide], ["list", UI[lang].viewList]].forEach(([key, label]) => {
    const btn = el("button", "view-tab" + (view === key ? " active" : ""), label);
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", view === key);
    btn.addEventListener("click", () => { view = key; renderViewSwitch(form); applyView(form); });
    box.append(btn);
  });
}

function applyView(form) {
  const guide = view === "guide" && Boolean(layoutOf(form));
  $("guide-view").hidden = !guide;
  $("field-list").hidden = guide;
  if (guide) updateGuide(form, true);
}

function renderGuide(form) {
  const lay = layoutOf(form);
  const box = $("guide-view");
  box.replaceChildren();
  if (!lay) return;

  // Left: the form page image, with pins and the spotlight drawn on top.
  const sheet = el("div", "sheet");
  const frame = el("div", "sheet-frame");
  const inner = el("div", "sheet-inner");
  const img = el("img", "sheet-img");
  img.alt = form.name[lang];
  img.decoding = "async";
  inner.append(img, el("div", "sheet-layer"));
  frame.append(inner);
  const credit = el("p", "sheet-credit", UI[lang].imageCredit + " ");
  if (form.source) {
    const a = el("a", null, UI[lang].imageSource);
    a.href = form.source.url;
    a.target = "_blank";
    a.rel = "noopener";
    credit.append(a);
  }
  sheet.append(el("div", "page-tabs"), frame, credit);

  // Right: the steps, as a vertical flowchart.
  const flow = el("div", "flow");
  flow.append(el("p", "flow-count"), el("ol", "flow-steps"));

  box.append(sheet, flow);
}

function goToStep(form, i) {
  guideStep = i;
  const spots = layoutOf(form).spots[i] || [];
  if (spots.length && !spots.some(s => s.page === guidePage)) guidePage = spots[0].page;
  updateGuide(form, true, true);
}

// Updates the guide in place: page image, pins, spotlight and the flowchart.
// scroll: move the page image to the spotlight. scrollPage: on phones, also bring the step into view.
function updateGuide(form, scroll, scrollPage = false) {
  const lay = layoutOf(form);
  const box = $("guide-view");
  if (!lay || box.hidden) return;
  const done = store.get(doneKey(form), []);
  const total = form.fields.length;
  const current = lay.spots[guideStep] || [];

  // Page tabs, with a dot on pages where the current box appears.
  const tabs = box.querySelector(".page-tabs");
  tabs.replaceChildren();
  if (lay.pages.length > 1) {
    lay.pages.forEach((_, p) => {
      const t = el("button", "page-tab" + (p === guidePage ? " active" : "") + (current.some(s => s.page === p) ? " has-spot" : ""), UI[lang].page(p + 1));
      t.type = "button";
      t.addEventListener("click", () => { guidePage = p; updateGuide(form, false); });
      tabs.append(t);
    });
  }

  const img = box.querySelector(".sheet-img");
  if (!img.src.endsWith(lay.pages[guidePage])) img.src = lay.pages[guidePage];

  // Pins for every box on this page, and the spotlight on the current one.
  const layer = box.querySelector(".sheet-layer");
  layer.replaceChildren();
  current.filter(s => s.page === guidePage).forEach(s => {
    const spot = el("div", "spot");
    Object.assign(spot.style, { left: s.x + "%", top: s.y + "%", width: s.w + "%", height: s.h + "%" });
    layer.append(spot);
  });
  form.fields.forEach((field, j) => {
    const s = (lay.spots[j] || []).find(sp => sp.page === guidePage);
    if (!s) return;
    const pin = el("button", "pin" + (j === guideStep ? " active" : "") + (done.includes(j) ? " done" : ""), done.includes(j) ? "✓" : String(j + 1));
    pin.type = "button";
    pin.title = field.label[lang];
    pin.setAttribute("aria-label", field.label[lang]);
    Object.assign(pin.style, { left: s.x + "%", top: s.y + "%" });
    pin.addEventListener("click", () => goToStep(form, j));
    layer.append(pin);
  });

  // Flowchart of steps; the current one is expanded with its short answer.
  box.querySelector(".flow-count").textContent = UI[lang].stepOf(guideStep + 1, total);
  const steps = box.querySelector(".flow-steps");
  steps.replaceChildren();
  form.fields.forEach((field, j) => {
    const isDone = done.includes(j);
    const li = el("li", "flow-step" + (j === guideStep ? " active" : "") + (isDone ? " done" : ""));
    const head = el("button", "flow-head");
    head.type = "button";
    head.setAttribute("aria-current", j === guideStep ? "step" : "false");
    head.append(el("span", "flow-dot", isDone ? "✓" : String(j + 1)), el("span", "flow-label", field.label[lang]));
    head.addEventListener("click", () => goToStep(form, j));
    li.append(head);

    if (j === guideStep) {
      const body = el("div", "flow-body");
      const quickText = field.quick ? field.quick[lang] : field.write[lang];
      const quickRow = el("div", "flow-quick-row");
      quickRow.append(el("p", "flow-quick", quickText), speakButton(quickText + ". " + field.write[lang]));
      body.append(quickRow);
      const other = (lay.spots[j] || []).find(s => s.page !== guidePage);
      if (other) {
        const hint = el("button", "link-btn flow-also", UI[lang].alsoOn(other.page + 1) + " →");
        hint.type = "button";
        hint.addEventListener("click", () => { guidePage = other.page; updateGuide(form, true); });
        body.append(hint);
      }

      const more = el("details", "flow-more");
      more.append(el("summary", null, UI[lang].details));
      const blocks = el("div", "flow-details");
      blocks.append(detailBlock("detail-write", UI[lang].write, field.write[lang]));
      blocks.append(detailBlock("detail-plain", UI[lang].meaning, field.meaning[lang]));
      if (field.changed) blocks.append(detailBlock("detail-warn", UI[lang].changed, field.changed[lang]));
      if (field.documents && field.documents[lang].length) blocks.append(detailBlock("detail-plain", UI[lang].documents, field.documents[lang]));
      if (field.mistakes && field.mistakes[lang].length) blocks.append(detailBlock("detail-danger", UI[lang].mistakes, field.mistakes[lang]));
      more.append(blocks);
      body.append(more, answerInput(form, j));

      const actions = el("div", "flow-actions");
      const prev = el("button", "flow-nav", "← " + UI[lang].prev);
      prev.type = "button";
      prev.disabled = j === 0;
      prev.addEventListener("click", () => goToStep(form, j - 1));
      const doneBtn = el("button", "box-done" + (isDone ? " is-done" : ""));
      doneBtn.type = "button";
      doneBtn.setAttribute("aria-pressed", isDone);
      doneBtn.append(icon("check", "icon small-icon tick-draw"), el("span", null, isDone ? UI[lang].done : UI[lang].markDone));
      doneBtn.addEventListener("click", () => {
        toggleDone(form, j);
        // After ticking, move on to the next box that isn't done yet.
        const nowDone = store.get(doneKey(form), []);
        if (nowDone.includes(j)) {
          const next = form.fields.findIndex((_, k) => k > j && !nowDone.includes(k));
          if (next >= 0) goToStep(form, next);
        }
      });
      const next = el("button", "flow-nav", UI[lang].next + " →");
      next.type = "button";
      next.disabled = j === total - 1;
      next.addEventListener("click", () => goToStep(form, j + 1));
      actions.append(prev, doneBtn, next);
      body.append(actions);
      li.append(body);
    }
    steps.append(li);
  });

  if (!scroll) return;
  // Bring the spotlight into view inside the page frame, and the current step into view.
  requestAnimationFrame(() => {
    // The view may have changed in the meantime (another form, language switch): then do nothing.
    const frame = box.querySelector(".sheet-frame");
    const inner = box.querySelector(".sheet-inner");
    const flowBox = box.querySelector(".flow");
    if (!frame || !inner || !flowBox || box.hidden) return;
    const s = current.find(sp => sp.page === guidePage);
    const scrollFrame = () => {
      if (!frame.isConnected) return;
      // On phones the page is zoomed in, so scroll sideways to the box too.
      if (s) frame.scrollTo({
        top: Math.max(0, (s.y / 100) * inner.offsetHeight - frame.clientHeight * 0.2),
        left: Math.max(0, (s.x / 100) * inner.offsetWidth - 8),
        behavior: "smooth"
      });
    };
    if (img.complete) scrollFrame(); else img.addEventListener("load", scrollFrame, { once: true });
    const active = steps.querySelector(".flow-step.active");
    if (!active || !active.isConnected) return;
    if (flowBox.scrollHeight > flowBox.clientHeight + 1) {
      flowBox.scrollTo({ top: active.offsetTop - 60, behavior: "smooth" }); // wide screens: the step list scrolls by itself
    } else if (scrollPage) {
      active.scrollIntoView({ behavior: "smooth", block: "start" }); // phones: scroll the page, below the pinned image
    }
  });
}

function renderForm(form) {
  renderFormHeader(form);
  renderTools(form);
  renderPanel(form);
  renderFields(form);
  renderViewSwitch(form);
  renderGuide(form);
  applyView(form);
}

function currentForm() {
  const match = location.hash.match(/^#form\/(.+)$/);
  return match && window.FORMS.find(f => f.id === match[1]);
}

// The URL hash decides which view is shown: "#form/<id>" = one form, anything else = home.
// Home links like "#forms" or "#how" scroll to that section.
function route() {
  if (canSpeak) window.speechSynthesis.cancel();
  const form = currentForm();
  $("list-view").hidden = Boolean(form);
  $("form-view").hidden = !form;

  if (form) {
    openField = -1;
    panel = null;
    // Forms with page images open on the form view, at the first box not done yet.
    const startGuide = () => {
      const lay = layoutOf(form);
      view = lay ? "guide" : "list";
      const doneNow = store.get(doneKey(form), []);
      guideStep = Math.max(0, form.fields.findIndex((_, i) => !doneNow.includes(i)));
      guidePage = lay && lay.spots[guideStep] && lay.spots[guideStep][0] ? lay.spots[guideStep][0].page : 0;
      renderForm(form);
    };
    startGuide();
    loadLayout(form, startGuide); // if this form's page images are not loaded yet, load them, then switch view
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

$("forms-more").addEventListener("click", () => {
  showAllForms = !showAllForms;
  renderGrid();
  if (!showAllForms) $("forms").scrollIntoView({ behavior: "smooth" });
});
$("changes-more").addEventListener("click", () => { changesAll = !changesAll; renderChangesList(); });
// The search button opens the highlighted result, or puts the cursor in the box if it's empty.
$("search-go").addEventListener("click", () => {
  if (searchMatches[searchActive]) openForm(searchMatches[searchActive]);
  else $("search").focus();
});
// "Find your form" in the header: go home (if needed) and put the cursor in the search box.
$("header-cta").addEventListener("click", e => {
  e.preventDefault();
  if (currentForm()) location.hash = "";
  setTimeout(() => {
    $("find").scrollIntoView({ behavior: "smooth", block: "center" });
    $("search").focus({ preventScroll: true });
  }, 60);
});
window.addEventListener("hashchange", route);

renderStaticText();
route();
