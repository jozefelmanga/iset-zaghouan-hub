"use client";

import { useSyncExternalStore } from "react";
import { breakpoints } from "@/lib/theme";

function subscribeToMediaQuery(query: string, onStoreChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

export function useIsMobile(breakpoint = breakpoints.tablet) {
  const query = `(max-width: ${breakpoint}px)`;

  return useSyncExternalStore(
    (onStoreChange) => subscribeToMediaQuery(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => false,
  );
}
