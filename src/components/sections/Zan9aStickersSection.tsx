"use client";

import { motion } from "framer-motion";
import { Sticker, ExternalLink } from "@/lib/icons";
import { sectionReveal } from "@/lib/motion";

export function Zan9aStickersSection() {
  return (
    <motion.section {...sectionReveal} className="mb-16">
      <a
        href="https://zan9a.tn"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-2xl border scale-[1.01] shadow-md"
        style={{
          borderColor: "rgba(37, 99, 235, 0.3)", // blue-600
          textDecoration: "none"
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply scale-105"
          style={{ 
            backgroundImage: "url('/images/zan9a-pattern.svg')",
            backgroundSize: "160px",
            backgroundRepeat: "repeat"
          }}
        />
        {/* Gradient Overlay for Readability */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: "linear-gradient(to right, rgba(255, 255, 255, 0.95) 20%, rgba(219, 234, 254, 0.75) 100%)",
          }}
        />

        <div className="relative z-10 flex w-full items-center gap-3 p-3.5 text-right sm:gap-5 sm:p-5">
          {/* Logo without background container */}
          <div
            className="relative h-20 w-28 shrink-0 sm:h-24 sm:w-36 flex items-center justify-center scale-110"
          >
            <img
              src="/images/zan9a-logo-text.png"
              alt="Zan9a Logo"
              className="h-full w-full object-contain mix-blend-multiply drop-shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Sticker size={16} style={{ color: "#2563eb", flexShrink: 0 }} strokeWidth={2.5} aria-hidden="true" />
              <span className="text-[13px] font-semibold sm:text-sm" style={{ color: "#1d4ed8" }}>
                زين البيسي متاعك
              </span>
            </div>
            <p className="mt-0.5 truncate text-[16px] font-bold sm:text-lg" style={{ color: "#111827" }}>
              ستيكرز زنقة
            </p>
            <p className="mt-0.5 text-[12px] leading-snug sm:text-[14px]" style={{ color: "#4b5563" }}>
              أقوى ستيكرز للبيسي متاعك متوفرين توا — اطلب من zan9a.tn
            </p>
          </div>

          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full scale-110 rotate-12"
            style={{
              background: "rgba(37, 99, 235, 0.9)",
              color: "white",
              boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
            }}
          >
            <ExternalLink size={18} strokeWidth={2.5} className="rtl:-scale-x-100" />
          </div>
        </div>
      </a>
    </motion.section>
  );
}
