"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

/** When offline, the page comes from the service worker's saved copy: say so, with the date it was saved. */
export function OfflineBanner() {
  const offline = useSyncExternalStore(subscribe, () => !navigator.onLine, () => false);
  const pathname = usePathname();
  const [savedOn, setSavedOn] = useState<string | null>(null);

  useEffect(() => {
    if (!offline || !("caches" in window)) return;
    let cancelled = false;
    const key = location.origin + (pathname.replace(/\/$/, "") || "/"); // same key as sw.js pageKey()
    caches
      .match(key)
      .then((res) => {
        const date = res?.headers.get("date");
        if (cancelled || !date) return;
        setSavedOn(new Intl.DateTimeFormat("ar-TN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date)));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [offline, pathname]);

  if (!offline) return null;

  return (
    <div
      role="status"
      className="sticky top-[80px] z-40 border-b border-[rgba(246,180,27,0.35)] bg-[#FEF3C7] px-4 py-2 text-center text-[13px] font-semibold text-[#78350F]"
    >
      ما فماش كونيكسيون: قاعد تشوف نسخة محفوظة{savedOn ? ` (${savedOn})` : ""}. المعلومات (مواعيد، أسوام) تنجم تكون تبدّلت.
    </div>
  );
}
