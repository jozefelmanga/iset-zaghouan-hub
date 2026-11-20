"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Same-origin files this page has loaded that the service worker can keep. */
function loadedAssets(): string[] {
  return performance
    .getEntriesByType("resource")
    .map((entry) => entry.name)
    .filter((url) => url.startsWith(location.origin) && /\/(_next\/static|images|icons)\//.test(url));
}

/**
 * Registers /sw.js (offline support) in production, once the page has finished
 * loading, and tells it about every page opened. In-app navigation doesn't
 * make a page request the service worker could save, and the first page
 * loads before the service worker runs, so it gets a "cache-page" message.
 */
export function ServiceWorkerRegister() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Offline support is a bonus; the site works the same without it.
      });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    let cancelled = false;
    navigator.serviceWorker.ready.then((registration) => {
      if (cancelled) return;
      // Give the page a moment to load its files so they can be saved too.
      setTimeout(() => {
        registration.active?.postMessage({ type: "cache-page", page: location.pathname, assets: loadedAssets() });
      }, 1500);
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
