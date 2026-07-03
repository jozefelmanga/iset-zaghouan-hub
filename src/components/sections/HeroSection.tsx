"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Sparkles } from "@/lib/icons";

/* ======================================================
   MOUNTAIN SVG DECORATION
   ====================================================== */
function MountainDecoration() {
  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "120px",
        opacity: 0.18,
        pointerEvents: "none",
      }}
    >
      <path d="M0,200 L0,120 L80,60 L160,100 L240,40 L320,80 L400,20 L480,70 L560,50 L640,90 L720,45 L800,80 L800,200 Z" fill="white" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Real banner photo */}
      <img
        src="/images/banner.webp"
        alt="ISET Zaghouan Campus"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
      />

      {/* Dark overlay — deep navy gradient over the photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,58,0.92)] via-[rgba(13,43,78,0.88)] to-[rgba(15,52,96,0.82)]" />

      {/* Cyan accent blob */}
      <div className="blob absolute w-[500px] h-[500px] bg-[rgba(18,184,200,0.07)] -top-[100px] -right-[100px]" />
      {/* Gold accent blob */}
      <div className="blob absolute w-[400px] h-[400px] bg-[rgba(246,180,27,0.04)] -bottom-[80px] -left-[80px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Mountain decoration */}
      <MountainDecoration />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(18,184,200,0.12)] border border-[rgba(18,184,200,0.25)] rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} strokeWidth={2} className="text-[#12B8C8]" />
            <span className="text-xs font-semibold text-[#12B8C8]">🎓 دليل الطالب — ISET Zaghouan</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(32px,5vw,58px)] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-5 max-w-[640px]">
            ISET ZAGHOUAN
            <br />
            <span className="bg-gradient-to-br from-[#12B8C8] to-[#F6B41B] bg-clip-text text-transparent">
              Student hub
            </span>
          </h1>

          <p className="text-[clamp(14px,2vw,17px)] text-white/65 leading-[1.7] mb-9 max-w-[480px]">
            الترسيم، المبيت، النقل، البورص، الستاجات، وأكثر. دليل شامل مصنوع بطريقة تخلي حياتك الجامعية أسهل.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <motion.a
              href="/inscription"
              whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(246,180,27,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-[15px] no-underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]"
            >
              <CheckCircle2 size={18} strokeWidth={2.5} />
              ابدأ الترسيم
            </motion.a>
            <motion.a
              href="/explore"
              whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-[15px] no-underline transition-all backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <MapPin size={18} strokeWidth={2} />
              اكتشف زغوان
            </motion.a>
          </div>

          {/* Floating chips */}
          <div className="flex flex-wrap gap-2">
            {["الترسيم", "المبيت", "البورص", "النقل", "الستاجات"].map((chip, i) => (
              <motion.a
                key={chip}
                href={`/${["inscription","housing","bourse","transport","stages"][i]}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.07 }}
                whileHover={{ y: -2 }}
                className="px-4 py-[7px] rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium no-underline transition-colors duration-200 backdrop-blur-md hover:text-[#12B8C8] hover:border-[rgba(18,184,200,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12B8C8]"
              >
                {chip}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
