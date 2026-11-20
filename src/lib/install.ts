"use client";

import { useSyncExternalStore } from "react";
import { track } from "@/lib/track";

/**
 * How (and whether) this visitor can install the site as an app.
 *  - "prompt": Chrome/Edge (Android, desktop) gave us an install prompt
 *  - "ios":    iPhone/iPad, install only via Share → Add to Home Screen
 *  - "inapp":  Facebook/Instagram/Messenger browser, can't install from here
 *  - "hidden": already installed, or the browser can't install
 */
export type InstallMode = "prompt" | "ios" | "inapp" | "hidden";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface Window {
    __installPrompt?: InstallPromptEvent | null;
  }
}

const IN_APP_UA = /FBAN|FBAV|FB_IAB|FBIOS|Instagram|Messenger|Line\/|Snapchat|TikTok/i;

function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isIOS(): boolean {
  const ua = navigator.userAgent;
  return /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function getInstallMode(): InstallMode {
  if (isStandalone()) return "hidden";
  if (IN_APP_UA.test(navigator.userAgent)) return "inapp";
  if (isIOS()) return "ios";
  if (window.__installPrompt) return "prompt";
  return "hidden";
}

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    window.addEventListener("install-state", notify);
    window.matchMedia("(display-mode: standalone)").addEventListener("change", notify);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("install-state", notify);
      window.matchMedia("(display-mode: standalone)").removeEventListener("change", notify);
    }
  };
}

/** Current install mode; "hidden" during server render and hydration. */
export function useInstallMode(): InstallMode {
  return useSyncExternalStore(subscribe, getInstallMode, () => "hidden");
}

/** Opens the browser's install dialog ("prompt" mode only). */
export async function promptInstall(): Promise<void> {
  const event = window.__installPrompt;
  if (!event) return;
  window.__installPrompt = null; // a prompt can only be used once
  await event.prompt();
  const choice = await event.userChoice.catch(() => undefined);
  track("install_prompt", { outcome: choice?.outcome ?? "unknown" });
  notify();
}

/** Short how-to for visitors who can't get the one-tap prompt (⁨…⁩ keep the English words in order). */
export const INSTALL_HINTS: Record<"ios" | "inapp", string> = {
  ios: "اضغط على زر المشاركة ⁨Share ⬆️⁩ في Safari، من بعد اختار ⁨Add to Home Screen⁩.",
  inapp: "افتح الموقع في Chrome ولا Safari: من القائمة ⋯ اختار ⁨Open in browser⁩، وتمّا تنجم تثبّتو.",
};
