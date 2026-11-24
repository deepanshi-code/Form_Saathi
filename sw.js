// Service worker: keeps Form Saathi usable with a weak or no internet connection
// (for example inside a bank branch or a government office).
//
// - Pages, code and guide text: try the network first (so updates arrive at once),
//   and keep a copy; when offline, use the copy.
// - Form page images: use the saved copy first (they never change), else download and save.
// Only forms the person has opened before are available offline.

const CACHE = "form-saathi-v2";
const SHELL = [
  "./", "index.html", "style.css", "app.js", "search.js", "assistant.js", "config.js",
  "forms/bundle.js", "forms/catalog.js", "forms/layout.js", "img/preview.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  // Remove copies made by older versions of this file.
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameSite = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameSite && !isFont) return; // other sites (official sources, the AI server) are not touched

  const isImage = /\.(jpg|jpeg|png|svg|webp)$/i.test(url.pathname) || url.hostname === "fonts.gstatic.com";
  event.respondWith(isImage ? cacheFirst(req) : networkFirst(req));
});

async function cacheFirst(req) {
  const saved = await caches.match(req);
  if (saved) return saved;
  const res = await fetch(req);
  if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
  return res;
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
    return res;
  } catch {
    // Offline: the saved copy, ignoring the "?v=" version part of the address.
    const saved = await caches.match(req, { ignoreSearch: true });
    if (saved) return saved;
    if (req.mode === "navigate") return caches.match("index.html");
    throw new Error("offline and not saved");
  }
}
