"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "@/lib/icons";
import { PhotoGallery } from "@/components/ui/Lightbox";
import { sectionReveal } from "@/lib/motion";

const SUNSET_BASE = "/images/sunset";

const sunsetGallery = Array.from(
  { length: 12 },
  (_, i) => `${SUNSET_BASE}/sunset (${i + 1}).webp`,
);

export function SunsetMomentsSection() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <motion.section {...sectionReveal} className="mb-16">
      <div
        className="relative overflow-hidden rounded-2xl border"
        style={{
          borderColor: "rgba(246,180,27,0.22)",
          background:
            "linear-gradient(135deg, rgba(11,31,58,0.03) 0%, rgba(246,180,27,0.08) 100%)",
        }}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-3 p-3.5 text-right sm:gap-4 sm:p-4"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
          }}
        >
          <div
            className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-24"
            style={{ border: "1px solid rgba(246,180,27,0.25)" }}
          >
            <img
              src={`${SUNSET_BASE}/sunset (1).webp`}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent 30%, rgba(246,180,27,0.15) 100%)" }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Sparkles size={15} style={{ color: "#D97706", flexShrink: 0 }} strokeWidth={2} aria-hidden="true" />
              <span className="text-[13px] font-semibold sm:text-sm" style={{ color: "#B45309" }}>
                لحظات من الحرم
              </span>
            </div>
            <p className="mt-0.5 truncate text-[15px] font-bold sm:text-base" style={{ color: "var(--color-text)" }}>
              غروب الايزات
            </p>
            <p className="mt-0.5 text-[12px] leading-snug sm:text-[13px]" style={{ color: "var(--color-text-muted)" }}>
              {open ? "اضغط باش تسكر المعرض" : "12 صورة — اضغط باش تكتشف المنظر"}
            </p>
          </div>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22 }}
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{
              background: open ? "rgba(246,180,27,0.15)" : "var(--color-surface)",
              color: open ? "#B45309" : "var(--color-text-muted)",
              border: "1px solid rgba(246,180,27,0.2)",
            }}
          >
            <ChevronDown size={18} strokeWidth={2.5} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-3.5 pb-4 pt-0 sm:px-4 sm:pb-5"
                style={{ borderTop: "1px solid rgba(246,180,27,0.15)" }}
              >
                <p
                  className="mb-4 pt-3 text-center text-[13px] leading-relaxed sm:text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  مشاهد من ISET Zaghouan — قبل ما تمشي، وقف شوية و استمتع بالمنظر.
                  <span 
                    style={{ 
                      display: "block", 
                      fontSize: "11px", 
                      color: "rgba(217,119,6,0.85)", 
                      marginTop: "4px",
                      fontStyle: "italic" 
                    }}
                  >
                    📸 عدسة: يسر خليل (Yosser Khalil)
                  </span>
                </p>
                <PhotoGallery
                  images={sunsetGallery}
                  thumbHeight={140}
                  minColWidth={140}
                  altPrefix="غروب ISET Zaghouan"
                  initialVisibleCount={12}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
