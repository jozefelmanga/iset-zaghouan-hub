// Sentry in the browser: error reporting only.
// Session recordings come from Microsoft Clarity, so Sentry's replay (rrweb, ~200 KB)
// and performance tracing are left out to keep pages light on mobile.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN =
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://4da7b5784c2ddc4d02ea782d8950e46d@o4511905802289152.ingest.de.sentry.io/4512008967618640";

if (typeof window !== "undefined") {
  Sentry.init({
    dsn: SENTRY_DSN,
    // No tracing: the site is static, and GA4 / Lighthouse cover page speed.
    tracesSampleRate: 0,
    debug: false,
  });
}
