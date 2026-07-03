"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { homeTipsMeta, studentTips } from "@/data/bonus";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Lightbulb } from "@/lib/icons";
import { sectionReveal } from "@/lib/motion";

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

const AUTO_ROTATE_MS = 6000;

let randomTipIndex: number | null = null;
const tipIndexListeners = new Set<() => void>();

function seedRandomTipIndex() {
  if (randomTipIndex !== null) return;
  randomTipIndex = Math.floor(Math.random() * studentTips.length);
  tipIndexListeners.forEach((listener) => listener());
}

function subscribeRandomTipIndex(onStoreChange: () => void) {
  tipIndexListeners.add(onStoreChange);
  queueMicrotask(seedRandomTipIndex);
  return () => tipIndexListeners.delete(onStoreChange);
}

function getRandomTipIndex() {
  return randomTipIndex ?? 0;
}

export function TipsCarouselSection() {
  const seededIndex = useSyncExternalStore(
    subscribeRandomTipIndex,
    getRandomTipIndex,
    () => 0,
  );
  const reduceMotion = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const [index, setIndex] = useState(0);
  const [indexSynced, setIndexSynced] = useState(false);
  const [paused, setPaused] = useState(false);

  const ready = randomTipIndex !== null;

  if (ready && !indexSynced) {
    setIndexSynced(true);
    setIndex(seededIndex);
  }

  const goNext = useCallback(() => {
    setIndex((current) => wrapIndex(current + 1, studentTips.length));
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => wrapIndex(current - 1, studentTips.length));
  }, []);

  useEffect(() => {
    if (!ready || paused || reduceMotion) return;
    const id = window.setInterval(goNext, AUTO_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [ready, paused, reduceMotion, goNext]);

  const tip = studentTips[index];

  return (
    <motion.section {...sectionReveal} className="mb-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
        <div>
          <span className="section-label">{homeTipsMeta.label}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mt-1">{homeTipsMeta.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{homeTipsMeta.subtitle}</p>
        </div>
        <a
          href={homeTipsMeta.ctaHref}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold no-underline border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] shrink-0 self-start sm:self-auto"
        >
          {homeTipsMeta.cta}
          <ArrowLeft size={14} />
        </a>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
      <Card
        elevation="raised"
        padding="0"
        className="overflow-hidden"
        style={{
          borderColor: ready ? `${tip.accentColor}33` : "var(--color-border)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <div
          className="px-5 py-5 sm:px-6 sm:py-6"
          style={{
            background: ready
              ? `linear-gradient(135deg, color-mix(in srgb, ${tip.accentColor} 8%, transparent) 0%, var(--color-surface) 55%)`
              : "var(--color-surface)",
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: ready ? `color-mix(in srgb, ${tip.accentColor} 14%, transparent)` : "rgba(246,180,27,0.12)",
                color: ready ? tip.accentColor : "var(--color-accent)",
              }}
            >
              <Lightbulb size={18} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              {ready && (
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold mb-2"
                  style={{
                    background: `color-mix(in srgb, ${tip.accentColor} 12%, transparent)`,
                    color: tip.accentColor,
                  }}
                >
                  {tip.categoryLabel}
                </span>
              )}
              <div className="min-h-[88px] sm:min-h-[72px]">
                <AnimatePresence mode="wait">
                  {ready && (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="text-[14px] sm:text-[15px] leading-[1.75] text-[var(--color-text)]"
                    >
                      {tip.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--color-border)]">
            <button
              type="button"
              onClick={goPrev}
              aria-label="النصيحة السابقة"
              className="w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] flex items-center justify-center transition-all hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] active:scale-95"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col items-center gap-1 min-w-0">
              <span className="text-[12px] font-semibold text-[var(--color-text-muted)]" dir="ltr">
                {ready ? `${index + 1} / ${studentTips.length}` : "—"}
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] flex items-center gap-1">
                <Heart size={11} className="text-[#EF4444]" fill="#EF4444" />
                من تجربة طلبة ISETZG
              </span>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="النصيحة التالية"
              className="w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] flex items-center justify-center transition-all hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] active:scale-95"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Card>
      </div>
    </motion.section>
  );
}
