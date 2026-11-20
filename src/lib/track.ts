/**
 * Custom Google Analytics events. Safe to call anywhere: does nothing on the
 * server, without GA configured, or with an ad blocker. Events sent before
 * GA has loaded (it loads once the page is idle) are queued in dataLayer.
 *
 * Events in use: search, tel_click, sponsor_click, install_prompt,
 * app_installed, install_hint, calculator_used, theme_change.
 */
type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params?: Params): void {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) return;
  try {
    window.dataLayer = window.dataLayer || [];
    // Same shape gtag() uses, so queued events are picked up when gtag.js loads.
    window.gtag =
      window.gtag ||
      function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
    window.gtag("event", event, params ?? {});
  } catch {
    /* analytics must never break the page */
  }
}
