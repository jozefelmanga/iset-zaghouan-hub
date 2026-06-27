"use client";

import { motion } from "framer-motion";
import {
  MapPin, Coffee, BookOpen, Mountain, Phone, Instagram, Play, ImageIcon,
} from "@/lib/icons";
import { PageHeader, Card } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { PhotoGallery } from "@/components/ui/Lightbox";
import { exploreZaghouan, zaghouanGallery } from "@/data/explore";
import { exploreServiceIcons, studySpotIcons } from "@/lib/iconMaps";

const cafeColors = [
  "#F97316", "#12B8C8", "#8B5CF6", "#3B82F6", "#22C55E",
  "#F59E0B", "#EF4444", "#06B6D4", "#84CC16", "#EC4899",
  "#6366F1", "#14B8A6",
];

export function ExplorePageContent() {
  const { coordinates, mountainGuide, youtubeVideo, nearbyServices } = exploreZaghouan;

  return (
    <PageWrapper className="max-w-[960px]">
      <PageHeader
        icon={MapPin}
        label="اكتشاف"
        title="اكتشف زغوان"
        subtitle="بلاد مليانة بتاريخها و جبلها و انهجها المزيانة"
        category="campus"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: "36px" }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            padding: "32px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0B1F3A, #0D2B4E)",
          }}
        >
          <svg
            viewBox="0 0 800 160"
            preserveAspectRatio="none"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "80px", opacity: 0.15 }}
          >
            <path d="M0,160 L0,90 L80,40 L160,80 L240,25 L320,60 L400,10 L480,55 L560,35 L640,70 L720,30 L800,65 L800,160 Z" fill="white" />
          </svg>

          {[
            { top: "20%", left: "15%", size: 3, delay: "0s" },
            { top: "40%", left: "65%", size: 2, delay: "0.5s" },
            { top: "15%", left: "80%", size: 2, delay: "0.8s" },
            { top: "60%", left: "40%", size: 1, delay: "0.3s" },
          ].map((dot, i) => (
            <div
              key={i}
              className="animate-twinkle"
              style={{
                position: "absolute",
                top: dot.top,
                left: dot.left,
                width: `${dot.size * 2}px`,
                height: `${dot.size * 2}px`,
                borderRadius: "50%",
                background: "#fff",
                animationDelay: dot.delay,
              }}
            />
          ))}

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Mountain size={20} style={{ color: "#12B8C8" }} strokeWidth={2} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#12B8C8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                جبل زغوان
              </span>
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: "600px" }}>
              {exploreZaghouan.description}
            </p>
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>الإحداثيات:</span>
              <code style={{ fontSize: "12px", color: "#12B8C8", background: "rgba(18,184,200,0.10)", padding: "4px 10px", borderRadius: "6px" }}>
                {coordinates.label}
              </code>
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.10)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>بلايص القراية</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
          {exploreZaghouan.studySpots.map((spot, i) => {
            const Icon = studySpotIcons[i % studySpotIcons.length];
            return (
              <motion.div
                key={spot}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  padding: "20px 16px",
                  background: "var(--color-surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "rgba(59,130,246,0.10)", color: "#3B82F6",
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px",
                }}>
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{spot}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(249,115,22,0.10)", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Coffee size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>كافيهات و تفرهيد</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {exploreZaghouan.cafes.map((cafe, i) => {
            const color = cafeColors[i % cafeColors.length];
            return (
              <motion.span
                key={cafe}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -2, scale: 1.04 }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 500,
                  background: `${color}12`,
                  color,
                  border: `1px solid ${color}30`,
                  cursor: "default",
                }}
              >
                ☕ {cafe}
              </motion.span>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>خدمات قريبة</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
          {nearbyServices.map(({ icon, label, color, bg }) => {
            const Icon = exploreServiceIcons[icon];
            return (
              <div
                key={label}
                style={{
                  padding: "18px 14px",
                  background: "var(--color-surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text)" }}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Card elevation="flat" padding="0">
        <div
          style={{
            aspectRatio: "16/7",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg viewBox="0 0 800 160" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "60px", opacity: 0.2 }}>
            <path d="M0,160 L0,100 L100,50 L200,80 L300,20 L400,55 L500,30 L600,65 L700,20 L800,50 L800,160 Z" fill="white" />
          </svg>
          <div className="animate-mountain" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Mountain size={40} style={{ color: "rgba(18,184,200,0.5)", margin: "0 auto 12px" }} strokeWidth={1.5} />
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
              خريطة زغوان (OpenStreetMap)
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>{coordinates.label}</p>
          </div>
        </div>
      </Card>

      <div style={{ marginTop: "40px", marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mountain size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>مرشد سياحي للجبل 🧭</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            background: "var(--color-surface)",
            borderRadius: "20px",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-card)",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{
            width: "72px", height: "72px", borderRadius: "50%", flexShrink: 0,
            overflow: "hidden",
            border: "3px solid rgba(18,184,200,0.3)",
            boxShadow: "0 4px 16px rgba(11,31,58,0.12)",
          }}>
            <img
              src={mountainGuide.avatar}
              alt={mountainGuide.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1, minWidth: "180px" }}>
            <p style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "4px" }}>{mountainGuide.name}</p>
            <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "14px" }}>{mountainGuide.role}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href={`tel:${mountainGuide.phone}`}
                dir="ltr"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "8px 16px", borderRadius: "999px",
                  background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                  color: "#16A34A", textDecoration: "none", fontSize: "13px", fontWeight: 600,
                  transition: "all 200ms ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,197,94,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,197,94,0.08)"; }}
              >
                <Phone size={14} strokeWidth={2} />
                {mountainGuide.phoneDisplay}
              </a>
              <a
                href={mountainGuide.instagram}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "8px 16px", borderRadius: "999px",
                  background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.25)",
                  color: "#DB2777", textDecoration: "none", fontSize: "13px", fontWeight: 600,
                  transition: "all 200ms ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,72,153,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,72,153,0.08)"; }}
              >
                <Instagram size={14} strokeWidth={2} />
                {mountainGuide.instagramHandle}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Play size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>{youtubeVideo.title}</span>
        </div>
        <div style={{
          borderRadius: "20px", overflow: "hidden",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-card)",
          aspectRatio: "16/9",
          width: "100%",
        }}>
          <iframe
            width="100%"
            height="100%"
            src={youtubeVideo.embedUrl}
            title={youtubeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: "block", border: "none" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>صور من زغوان 📸</span>
        </div>
        <PhotoGallery images={zaghouanGallery} />
      </div>
    </PageWrapper>
  );
}
