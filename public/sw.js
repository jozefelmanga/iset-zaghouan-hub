/*
 * Offline support for guideisetzg.tn.
 *
 * - Pages: network first, so students always get the latest content when online.
 *   Each page is saved as it's visited and served from that copy when offline.
 * - /_next/static: cache first (file names change on every build, so never stale).
 * - /images: served from cache when available, refreshed in the background.
 * - Nothing is downloaded ahead of time except the small offline page, to save mobile data.
 *
 * Bump VERSION when this file's logic changes; old caches are deleted on activate.
 */
const VERSION = "v1";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const IMAGES = `images-${VERSION}`;
const OFFLINE_URL = "/offline.html";
const OFFLINE_ICON = "/icons/icon-192.png"; // shown on the offline page
const MAX_IMAGES = 80;
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(PAGES).then((cache) => cache.add(new Request(OFFLINE_URL, { cache: "reload" }))),
      caches.open(IMAGES).then((cache) => cache.add(OFFLINE_ICON)),
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

async function handlePage(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    // Redirected responses can't be replayed for a navigation in Safari, so don't save them.
    if (response.ok && response.type === "basic" && !response.redirected) {
      cache.put(pageKey(request), response.clone());
    }
    return response;
  } catch {
    return (await cache.match(pageKey(request))) || (await cache.match(OFFLINE_URL)) || Response.error();
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
  if (response.ok) cache.put(request, response.clone());
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

async function trimCache(cache, max) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}
