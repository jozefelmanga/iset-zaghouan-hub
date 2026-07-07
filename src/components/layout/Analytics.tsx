"use client";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Analytics components.
 * Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN for Plausible Analytics.
 * Set NEXT_PUBLIC_GA_ID for Google Analytics (e.g., G-XXXXXXXXXX).
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
