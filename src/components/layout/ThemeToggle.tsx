"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "@/lib/icons";
import { track } from "@/lib/track";

/**
 * Theme button: auto (follow the system) → light → dark → auto.
 * The choice is saved in localStorage("theme") and applied as
 * <html data-theme="light|dark"> (no attribute = auto). THEME_INIT_SCRIPT
 * (src/lib/head-scripts.ts) applies it before first paint: no flash on load.
 */
type Mode = "system" | "light" | "dark";

const STORAGE_KEY = "theme";

const NEXT: Record<Mode, Mode> = { system: "light", light: "dark", dark: "system" };

const LABELS: Record<Mode, string> = {
  system: "المظهر: تلقائي (حسب التليفون)",
  light: "المظهر: فاتح",
  dark: "المظهر: داكن",
};

const listeners = new Set<() => void>();

function readMode(): Mode {
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "system";
}

function setMode(mode: Mode) {
  const root = document.documentElement;
  if (mode === "system") delete root.dataset.theme;
  else root.dataset.theme = mode;
  try {
    if (mode === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* private mode: the choice just isn't remembered */
  }
  listeners.forEach((l) => l());
  track("theme_change", { mode });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function ThemeToggle() {
  const mode = useSyncExternalStore<Mode>(subscribe, readMode, () => "system");
  const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={() => setMode(NEXT[mode])}
      aria-label={`${LABELS[mode]} — اضغط باش تبدّل`}
      title={LABELS[mode]}
      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.08] text-white/80 transition-colors hover:bg-white/[0.14] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12B8C8] active:scale-90"
    >
      <Icon size={19} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
