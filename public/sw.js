/*
 * Offline support for guideisetzg.tn.
 *
 * - Pages: network first, so students always get the latest content when online.
 *   Each page is saved as it's visited and served from that copy when offline.
 *   In-app (client-side) navigation makes no page request, so the app also
 *   sends a "cache-page" message for every page opened (ServiceWorkerRegister):
 *   that saves the page plus the files the first page loaded before we ran.
 * - /_next/static: cache first (file names change on every build, so never stale).
 * - /images: served from cache when available, refreshed in the background.
 * - Downloaded ahead of time: only the offline page and the home page (so there
 *   is always somewhere to go offline). Everything else is saved as visited.
 *
 * Bump VERSION when this file's logic changes; old caches are deleted on activate.
 *
 * The offline page lives at /offline: Vercel serves exported .html files only
 * at their clean URL, so /offline.html is a 404 there. Install must never fail
 * because of one missing file, or offline support silently never starts.
 */
const VERSION = "v1";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const IMAGES = `images-${VERSION}`;
const OFFLINE_URL = "/offline";
const OFFLINE_ICON = "/icons/icon-192.png"; // shown on the offline page
const MAX_IMAGES = 80;
const MAX_ASSETS = 250; // about 5 deploys of build files; older ones are dropped first
const NETWORK_TIMEOUT_MS = 4000;
const PAGE_REFRESH_MS = 12 * 60 * 60 * 1000; // re-save a visited page at most twice a day

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(PAGES).then((cache) => cacheOfflinePage(cache)),
      caches.open(IMAGES).then((cache) => cache.add(OFFLINE_ICON).catch(() => {})),
      saveHomePage(),
    ]).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  const keep = new Set([PAGES, ASSETS, IMAGES]);
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => !keep.has(key)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // analytics, YouTube: leave alone

  if (request.mode === "navigate") {
    event.respondWith(handlePage(request));
  } else if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSETS));
  } else if (url.pathname.startsWith("/images/") || url.pathname.startsWith("/icons/")) {
    event.respondWith(staleWhileRevalidate(request, IMAGES));
  }
  // Everything else (PDFs, RSC payloads, manifest) goes straight to the network.
});

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "cache-page" && typeof data.page === "string") {
    event.waitUntil(savePage(data.page, Array.isArray(data.assets) ? data.assets : []));
  }
});

/** Home page + the files it needs, so offline there is always a page to go to. */
async function saveHomePage() {
  try {
    const response = await fetch(new Request("/", { cache: "reload" }));
    if (!response.ok || response.redirected) return;
    const html = await response.clone().text();
    await (await caches.open(PAGES)).put(self.location.origin + "/", response);
    await saveAssets(html.match(/\/_next\/static\/[^"'\s)\\]+\.(?:css|js|woff2)/g) || []);
  } catch {
    /* offline support still works for pages saved later */
  }
}

/** Saves a page the visitor opened (skipped if saved in the last 12 hours). */
async function savePage(path, assets) {
  const url = new URL(path, self.location.origin);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/_next/")) return;
  const cache = await caches.open(PAGES);
  const key = pageKey(new Request(url.href));
  const cached = await cache.match(key);
  const age = cached ? Date.now() - new Date(cached.headers.get("date")).getTime() : NaN;
  if (!(age < PAGE_REFRESH_MS)) {
    try {
      const response = await fetch(url.href);
      const isHtml = (response.headers.get("content-type") || "").includes("text/html");
      if (response.ok && !response.redirected && isHtml) await cache.put(key, response);
    } catch {
      /* offline right now: keep the old copy */
    }
  }
  await saveAssets(assets);
}

/** Saves same-origin build files and images that aren't saved yet (mostly served from the HTTP cache). */
async function saveAssets(urls) {
  const [assets, images] = await Promise.all([caches.open(ASSETS), caches.open(IMAGES)]);
  await Promise.all(
    [...new Set(urls)].map(async (raw) => {
      let url;
      try {
        url = new URL(raw, self.location.origin);
      } catch {
        return;
      }
      if (url.origin !== self.location.origin) return;
      const p = url.pathname;
      const cache = p.startsWith("/_next/static/") ? assets : p.startsWith("/images/") || p.startsWith("/icons/") ? images : null;
      if (!cache || (await cache.match(url.href))) return;
      try {
        const response = await fetch(url.href);
        if (response.ok) await cache.put(url.href, response);
      } catch {
        /* skip */
      }
    }),
  );
}

/** Saves the offline page under OFFLINE_URL (tries /offline.html too, for other hosts). */
async function cacheOfflinePage(cache) {
  for (const url of [OFFLINE_URL, "/offline.html"]) {
    try {
      const response = await fetch(new Request(url, { cache: "reload" }));
      if (response.ok && !response.redirected) {
        await cache.put(OFFLINE_URL, response);
        return;
      }
    } catch {
      /* try the next one */
    }
  }
}

async function handlePage(request) {
  const cache = await caches.open(PAGES);
  // Only race the network against a saved copy. With no saved copy, a slow
  // connection should still get the page, not the "you're offline" screen.
  const saved = await cache.match(pageKey(request));
  try {
    const response = saved ? await fetchWithTimeout(request, NETWORK_TIMEOUT_MS) : await fetch(request);
    // Redirected responses can't be replayed for a navigation in Safari, so don't save them.
    if (response.ok && response.type === "basic" && !response.redirected) {
      cache.put(pageKey(request), response.clone());
    }
    return response;
  } catch {
    return saved || (await cache.match(pageKey(request))) || (await cache.match(OFFLINE_URL)) || Response.error();
  }
}

/** One cache entry per page, whatever the query string (e.g. ?utm_source=facebook). */
function pageKey(request) {
  const url = new URL(request.url);
  return url.origin + (url.pathname.replace(/\/$/, "") || "/");
}

function fetchWithTimeout(request, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    fetch(request).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
    // Every deploy adds new hashed files: cap the cache so it can't grow forever.
    if (cacheName === ASSETS) trimCache(cache, MAX_ASSETS);
  }
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        await cache.put(request, response.clone());
        trimCache(cache, MAX_IMAGES);
      }
      return response;
    })
    .catch(() => cached);
  return cached || network;
}

/** Drops the oldest entries above `max`, but never the icon the offline page needs. */
async function trimCache(cache, max) {
  const keys = (await cache.keys()).filter((req) => new URL(req.url).pathname !== OFFLINE_ICON);
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}
