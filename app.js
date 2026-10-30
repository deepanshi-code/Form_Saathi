// Text used by the page itself (not by forms), in both languages.
const UI = {
  en: {
    tagline: "Understand any form, one field at a time",
    intro: "Pick a form to see what each box means, what to write, and common mistakes.",
    search: "Search forms… (e.g. bank, PAN)",
    back: "← All forms",
    fieldsCount: n => `${n} fields explained`,
    meaning: "What it means",
    write: "What to write",
    documents: "Documents needed",
    mistakes: "Common mistakes",
    unverified: "Not verified yet. This guide has not been checked against official instructions. Always confirm with the bank or office.",
    verified: (date, source) => `Verified on ${date} against the official source: ${source}`,
    noResults: "No form found. More forms are coming.",
    disclaimer: "Form Saathi explains forms in simple words. It is not an official service — the issuing bank or office has the final word."
  },
  hi: {
    tagline: "हर फॉर्म समझें, एक-एक खाना करके",
    intro: "कोई फॉर्म चुनें — देखें हर खाने का मतलब, उसमें क्या लिखना है, और आम गलतियाँ।",
    search: "फॉर्म खोजें… (जैसे बैंक, पैन)",
    back: "← सभी फॉर्म",
    fieldsCount: n => `${n} खाने समझाए गए`,
    meaning: "इसका मतलब",
    write: "क्या लिखें",
    documents: "ज़रूरी दस्तावेज़",
    mistakes: "आम गलतियाँ",
    unverified: "अभी जाँचा नहीं गया। यह जानकारी आधिकारिक निर्देशों से मिलाई नहीं गई है। बैंक या दफ़्तर से ज़रूर पुष्टि करें।",
    verified: (date, source) => `${date} को आधिकारिक स्रोत से जाँचा गया: ${source}`,
    noResults: "कोई फॉर्म नहीं मिला। और फॉर्म जल्द आएँगे।",
    disclaimer: "फॉर्म साथी फॉर्म को आसान शब्दों में समझाता है। यह कोई सरकारी/आधिकारिक सेवा नहीं है — अंतिम निर्णय बैंक या दफ़्तर का होता है।"
  }
};

let lang = "en";

const $ = id => document.getElementById(id);

// Small helper to create an element with text. We always use textContent
// (never innerHTML) so form data can never inject HTML into the page.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
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
}

function renderList() {
  const query = $("search").value.trim().toLowerCase();
  const list = $("form-list");
  list.replaceChildren();

  // Search both languages, so "बैंक" and "bank" both find the bank form.
  const matches = window.FORMS.filter(form => {
    const haystack = [form.name.en, form.name.hi, form.category.en, form.category.hi].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  if (matches.length === 0) {
    list.append(el("li", "muted", UI[lang].noResults));
    return;
  }

  matches.forEach(form => {
    const btn = el("button");
    btn.type = "button";
    btn.append(
      el("span", "name", form.name[lang]),
      el("span", "meta", `${form.category[lang]} · ${UI[lang].fieldsCount(form.fields.length)}`)
    );
    btn.addEventListener("click", () => { location.hash = "form/" + form.id; });
    const li = el("li");
    li.append(btn);
    list.append(li);
  });
}

function renderForm(form) {
  $("form-title").textContent = form.name[lang];
  $("form-about").textContent = form.about[lang];

  const status = form.verified
    ? el("p", "status verified", UI[lang].verified(form.lastChecked, form.source))
    : el("p", "status unverified", UI[lang].unverified);
  $("form-status").replaceChildren(status);

  const list = $("field-list");
  list.replaceChildren();
  form.fields.forEach(field => {
    const item = el("li", "field");
    item.append(el("h2", null, field.label[lang]));

    item.append(el("h3", null, UI[lang].meaning), el("p", null, field.meaning[lang]));
    item.append(el("h3", null, UI[lang].write), el("p", null, field.write[lang]));

    // Lists are optional — skip the heading when a field has nothing to show.
    [["documents", field.documents], ["mistakes", field.mistakes]].forEach(([key, values]) => {
      if (!values || values[lang].length === 0) return;
      const ul = el("ul");
      values[lang].forEach(v => ul.append(el("li", null, v)));
      item.append(el("h3", null, UI[lang][key]), ul);
    });

    list.append(item);
  });
}

// The URL hash decides which view is shown: "" = list, "#form/<id>" = one form.
// This makes the browser back button work and lets people share a link to one form.
function route() {
  const match = location.hash.match(/^#form\/(.+)$/);
  const form = match && window.FORMS.find(f => f.id === match[1]);

  $("list-view").hidden = Boolean(form);
  $("form-view").hidden = !form;

  if (form) {
    renderForm(form);
    window.scrollTo(0, 0);
  } else {
    renderList();
  }
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    renderStaticText();
    route();
  });
});

$("search").addEventListener("input", renderList);
$("back-btn").addEventListener("click", () => { location.hash = ""; });
$("home-link").addEventListener("click", e => { e.preventDefault(); location.hash = ""; });
window.addEventListener("hashchange", route);

renderStaticText();
route();
