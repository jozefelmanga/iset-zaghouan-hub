// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN =
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://4da7b5784c2ddc4d02ea782d8950e46d@o4511905802289152.ingest.de.sentry.io/4512008967618640";

if (typeof window !== "undefined") {
  Sentry.init({
    dsn: SENTRY_DSN,

    // Add optional integrations for additional features
    integrations:
      typeof Sentry.replayIntegration === "function"
        ? [
            Sentry.replayIntegration({
              maskAllText: false,
              blockAllMedia: false,
            }),
          ]
        : [],

    // Define how likely traces are sampled. Adjust this value in production
    tracesSampleRate: 1.0,

    // Define how likely Replay events are sampled
    replaysSessionSampleRate: 0.1,

    // Capture 100% of Replay events when an error occurs
    replaysOnErrorSampleRate: 1.0,

    // Enabled debug logs in development console so you can see Sentry sending events
    debug: process.env.NODE_ENV !== "production",
  });
}
