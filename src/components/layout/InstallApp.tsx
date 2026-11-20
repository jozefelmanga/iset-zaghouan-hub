"use client";

import { useState, useSyncExternalStore } from "react";
import { Smartphone, X } from "@/lib/icons";
import { INSTALL_HINTS, promptInstall, useInstallMode } from "@/lib/install";

const DISMISS_KEY = "install-card-dismissed";

/** Tap handler shared by both entry points: prompt, or show the how-to. */
function useInstallAction() {
  const mode = useInstallMode();
  const [showHint, setShowHint] = useState(false);
  const onClick = () => {
    if (mode === "prompt") void promptInstall();
    else setShowHint((v) => !v);
  };
  const hint = showHint && (mode === "ios" || mode === "inapp") ? INSTALL_HINTS[mode] : null;
  return { mode, onClick, hint };
}

/** Small row in the side menu footer. Renders nothing when install isn't possible. */
export function InstallMenuItem() {
  const { mode, onClick, hint } = useInstallAction();
  if (mode === "hidden") return null;

  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={mode === "prompt" ? undefined : Boolean(hint)}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-[13px] font-semibold text-[var(--color-secondary-text)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)]"
      >
        <Smartphone size={15} strokeWidth={2} aria-hidden="true" />
        ثبّت الدليل على تليفونك
      </button>
      {hint && <p className="mt-2 text-center text-[12px] leading-relaxed text-[var(--color-text-secondary)]">{hint}</p>}
    </div>
  );
}

const dismissListeners = new Set<() => void>();
function readDismissed(): boolean {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

/** Closable homepage card, phones only. Once closed it never comes back. */
export function InstallCard() {
  const { mode, onClick, hint } = useInstallAction();
  const dismissed = useSyncExternalStore(
    (l) => {
      dismissListeners.add(l);
      return () => dismissListeners.delete(l);
    },
    readDismissed,
    () => true,
  );

  if (mode === "hidden" || dismissed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* not remembered in private mode */
    }
    dismissListeners.forEach((l) => l());
  };

  return (
    <aside
      aria-label="ثبّت الدليل كتطبيق"
      className="motion-reveal relative mb-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] md:hidden"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="سكّر، ما نحبش"
        className="absolute left-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[var(--color-text-muted)] hover:bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]"
      >
        <X size={16} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="flex items-center gap-3 pl-8">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(18,184,200,0.10)] text-[var(--color-secondary-text)]">
          <Smartphone size={20} strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-[var(--color-text)]">حطّ الدليل على تليفونك</p>
          <p className="mt-0.5 text-[12px] leading-snug text-[var(--color-text-secondary)]">
            يتحل كيف تطبيق، والصفحات اللي حلّيتها تخدم حتى من غير إنترنت.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClick}
        aria-expanded={mode === "prompt" ? undefined : Boolean(hint)}
        className="mt-3 w-full cursor-pointer rounded-xl bg-[var(--color-primary-bg)] px-4 py-2.5 text-[13px] font-bold text-white transition-transform active:scale-[0.98]"
      >
        {mode === "prompt" ? "ثبّت التطبيق" : "كيفاش نثبّتو؟"}
      </button>
      {hint && <p className="mt-2.5 text-center text-[12.5px] leading-relaxed text-[var(--color-text-secondary)]">{hint}</p>}
    </aside>
  );
}
