"use client";

import { useEffect } from "react";
import Script from "next/script";
import { track } from "@/lib/track";

/**
 * Analytics. Both load once the page is idle (`lazyOnload`) so they don't
 * compete with the first render on mid-range phones.
 * Set NEXT_PUBLIC_GA_ID for Google Analytics (e.g., G-XXXXXXXXXX).
 * Set NEXT_PUBLIC_CLARITY_ID for Microsoft Clarity.
 * Custom events go through `track()` in src/lib/track.ts.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    if (!gaId) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("tel_click", { number: href.slice(4), page: location.pathname });
      else if (href.includes("zan9a.tn")) track("sponsor_click", { page: location.pathname });
    };
    const onInstalled = () => track("app_installed");
    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, [gaId]);

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){ window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      {clarityId && (
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
