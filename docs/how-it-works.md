# How Form Saathi works

A guide to the code and the design decisions, so the project can be explained and defended in a
review or an interview. Read it with the code open beside it.

## 1. The problem and the idea

Official Indian forms (bank, government, college, international) use small print and jargon.
First-time applicants and their parents get stuck, make mistakes, and make repeat trips.
Form Saathi explains each form **box by box**, in **simple English and Hindi**, using **only
official sources**, and shows each box on the **real form image**.

## 2. The big picture

```
index.html            one page; shows either the home view or one form
style.css             all styles (light theme, dark theme via system setting, print styles)
app.js                the app: home page, search, form page, guide view, read aloud, print
assistant.js          "Ask Saathi": finds the right form / box from typed or spoken words
config.js             switches on the optional AI answers (empty = off)
sw.js                 service worker: keeps visited pages usable offline

forms/<id>.js         one guide per form (the verified content) - edit these
forms/catalog.js      short names, icons, filter chips, life situations
forms/layout.js       which forms have page images; forms/layout/<id>.js = where each box is
forms/img/            page images of the official forms
forms/bundle.js       BUILT: all guides in one file (the page loads this)
data/<id>.json        BUILT: guides as JSON, read by the AI server
f/<id>.html           BUILT: one shareable page per form (previews, search engines)

tools/build-data.mjs  builds bundle.js, data/, f/ and sitemap.xml
tools/check.mjs       finds broken guides before users do
worker/               optional AI server (Cloudflare Worker + Gemini)
```

There is **no backend and no database**. It is a static site on GitHub Pages: plain HTML, CSS and
JavaScript, no framework. Why: it is free to host, works on any phone, loads fast, and is easy to
maintain for one person. Even the AI part is optional and fails safely.

## 3. A guide's data (forms/<id>.js)

Every guide is plain data, not code:

```js
window.FORMS.push({
  id: "pan-application",
  verified: true,                       // only after checking every box against the source
  source: { title: "...", url: "..." }, // the official document
  lastChecked: "2026-10-30",
  caution: { en: "...", hi: "..." },    // optional: old form, rule changes, etc.
  category: { en: "Government", hi: "सरकारी" },
  name: { en: "...", hi: "..." },
  about: { en: "...", hi: "..." },
  fields: [{
    label:   { en: "3. Date of Birth", hi: "..." },
    quick:   { en: "DDMMYYYY, one digit per box", hi: "..." }, // at most 12 words
    meaning, write, documents, mistakes, changed               // each in en and hi
  }]
});
```

Why data and code are separate: content changes often (rules change), code rarely. Anyone can fix
a guide without touching the app, and `tools/check.mjs` can test every guide automatically.

## 4. How the page decides what to show (routing)

The part of the address after `#` decides the view (`route()` in app.js):

- `#form/pan-application` shows that form,
- anything else shows the home page (and `#forms`, `#how` scroll to a section).

Why hash routing: GitHub Pages only serves files; it cannot send every address to index.html.
With `#...` the browser never asks the server for a new page, so it works on any static host and
even when index.html is opened by double-click.

## 5. The "On the form" view (spotlight)

`forms/layout/<id>.js` stores, for each box, rectangles in **percent of the page image**:
`{ page: 0, x: 5.55, y: 36.1, w: 89.41, h: 1.66 }`.

`updateGuide()` in app.js places a `div.spot` with `left/top/width/height` in `%` over the image.
Because positions are percentages, they stay correct at every screen size. The spotlight's dark
surround is one big `box-shadow` (`0 0 0 9999px rgba(...)`), so no extra layers are needed. Numbered
"pins" mark every box on the page; clicking one jumps to that step.

How positions were made: the official PDF was rendered to images, box coordinates were read from
the PDF's own drawn lines and text, and an overlay image was checked by eye for every form.
`tools/check.mjs` also checks that each form has exactly one row of spots per box, inside the page.

## 6. Search and "Ask Saathi" (assistant.js)

No AI is needed for the instant answers:

1. **Tokens**: the question is split into words (English and Devanagari). Small words ("mujhe",
   "hai", "ka") are dropped (`STOP`).
2. **Synonyms**: Hinglish and Hindi words map to the words used in guides (`SYNONYMS`):
   "khata" → account, "shaadi" → marriage, "pita" → father.
3. **Scoring**: each form gets points when its names contain the words (`scoreForm`); each box gets
   points by how much of its label the question covers (`labelScore`), so "date of birth" beats
   "proof of identity, address and date of birth".
4. **Decision** (`askSearch`):
   - on a form page, a matching box wins, unless the question clearly names another form
     ("passport banwana hai" on the PAN page). Words like name, date, address (`BOX_WORDS`)
     describe boxes, so they never switch to another form;
   - a life situation wins when it matches clearly ("going abroad");
   - otherwise the best few forms, plus "see all" when many tie.
5. **Voice**: the browser's own speech recognition (`webkitSpeechRecognition`) turns speech into
   text in `hi-IN` or `en-IN`; "Listen" uses `speechSynthesis`. Nothing is sent to a server.

Honest description: this is **keyword search with synonyms and scoring**, not AI.

## 7. Optional AI answers (worker/)

Retrieval-augmented generation (RAG), done safely:

1. The instant search picks 1-3 relevant guides (retrieval).
2. The browser removes personal numbers and emails, then sends the question and the guide **ids**.
3. The Cloudflare Worker checks the website origin and a daily limit per person, loads the guide
   text itself from `data/<id>.json`, and asks Gemini to answer **only** from that text, in JSON.
4. The worker checks that the guide and box in the answer really exist.
5. If anything fails, the instant answer is already on screen.

Why a worker: the API key must stay secret, and the website is public.
Why the browser sends only ids: so nobody can use the worker as a free general chatbot.

## 8. Privacy

- No accounts, no tracking, no server storing anything.
- Progress ticks, "My answers" and checklist ticks are saved only in the browser (`localStorage`,
  wrapped in try/catch because private mode can block it).
- All text from data is inserted with `textContent`, never `innerHTML`, so content can't inject code.

## 9. Speed and offline

- All guides are bundled into one file (`forms/bundle.js`): 6 script files instead of 54,
  about 460 KB compressed.
- Page images and box positions load only when that form is opened (`loadLayout()`).
- `sw.js` (service worker) keeps a copy of the site and of every form opened, so it still works
  with no internet. Code and text use "network first" (updates arrive at once); images use
  "cache first" (they never change).
- The `?v=` number on every file name forces browsers to fetch new versions after a change.

## 10. Quality checks

`node tools/check.mjs` fails if any guide: lacks English or Hindi text, has a quick answer over
12 words, has layout rows that don't match its boxes, points to a missing image, or is not in the
catalog. It also reminds about guides last checked more than 6 months ago.

## 11. Known limitations (say these yourself)

- The site explains forms; it does not fill or submit them.
- Online-only forms can't show the real form, and forms behind logins can't be fully verified
  (marked "Not verified yet").
- Rules change; guides need re-checking (the check script reminds after 6 months).
- Search is keyword based; unusual phrasings can fail.
- Hindi has not yet been reviewed by a fluent speaker; user testing is still to be done.

## 12. Questions you may be asked

**Why no framework (React)?** Small site, one developer, must load fast on cheap phones and be
hosted for free. Plain JS with small helper functions (`el()`, `icon()`) was enough.

**How do you make sure the information is correct?** Only official sources; every guide records
its source and date; "verified" only after checking every box; cautions when the source is old;
`changed` notes for 2025-26 rule changes; automated checks; "Report a problem" on every form.

**How does the spotlight stay in the right place on phones?** Positions are percentages of the
image, so they scale with it.

**Is the assistant AI?** The instant part is keyword search with synonyms and scoring. The optional
AI part uses Gemini through a small server, and only reads our verified guides.

**What about privacy?** Nothing is stored on a server; personal numbers are removed before any AI
call; users are told not to type ID numbers.

**What would you do next?** User testing with real people, Hindi review, then guides for my
college's own forms.

**What was hardest?** Getting the box positions exact on scanned forms, and making the assistant
pick the right box (for example "date of birth" vs "proof of date of birth").
