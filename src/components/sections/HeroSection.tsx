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
    <section
      style={{
        position: "relative",
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Real banner photo */}
      <img
        src="/images/banner.webp"
        alt="ISET Zaghouan Campus"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 60%",
        }}
      />

      {/* Dark overlay — deep navy gradient over the photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(11,31,58,0.92) 0%, rgba(13,43,78,0.88) 50%, rgba(15,52,96,0.82) 100%)",
        }}
      />

      {/* Cyan accent blob */}
      <div className="blob" style={{ width: "500px", height: "500px", background: "rgba(18,184,200,0.07)", top: "-100px", right: "-100px" }} />
      {/* Gold accent blob */}
      <div className="blob" style={{ width: "400px", height: "400px", background: "rgba(246,180,27,0.04)", bottom: "-80px", left: "-80px" }} />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Mountain decoration */}
      <MountainDecoration />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 32px",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(18,184,200,0.12)", border: "1px solid rgba(18,184,200,0.25)", borderRadius: "999px", padding: "6px 16px", marginBottom: "24px" }}>
            <Sparkles size={14} strokeWidth={2} style={{ color: "#12B8C8" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#12B8C8" }}>🎓 دليل الطالب — ISET Zaghouan</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px", maxWidth: "640px" }}>
            ISET ZAGHOUAN
            <br />
            <span style={{ background: "linear-gradient(135deg, #12B8C8, #F6B41B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Student hub
            </span>
          </h1>

          <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px" }}>
            الترسيم، المبيت، النقل، البورص، الستاجات، وأكثر. دليل شامل مصنوع بطريقة تخلي حياتك الجامعية أسهل.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <motion.a
              href="/inscription"
              whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(246,180,27,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "14px",
                background: "var(--color-accent)",
                color: "var(--color-primary)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all var(--transition-base)",
              }}
            >
              <CheckCircle2 size={18} strokeWidth={2.5} />
              ابدأ الترسيم
            </motion.a>
            <motion.a
              href="/explore"
              whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all var(--transition-base)",
                backdropFilter: "blur(8px)",
              }}
            >
              <MapPin size={18} strokeWidth={2} />
              اكتشف زغوان
            </motion.a>
          </div>

          {/* Floating chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["الترسيم", "المبيت", "البورص", "النقل", "الستاجات"].map((chip, i) => (
              <motion.a
                key={chip}
                href={`/${["inscription","housing","bourse","transport","stages"][i]}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.07 }}
                whileHover={{ y: -2 }}
                style={{
                  padding: "7px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "12px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all var(--transition-fast)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#12B8C8";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(18,184,200,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
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
