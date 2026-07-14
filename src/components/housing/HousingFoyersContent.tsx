"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, MapPin, Wallet, CheckCircle2, Key, Sparkles, User, Users, ImageIcon,
  ExternalLink, Building2,
} from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";
import { housingFoyer, housingLouled } from "@/data/housing";
import { PhotoGallery, ZoomableImage } from "@/components/ui/Lightbox";
import { HousingCrossLink } from "@/components/housing/HousingCrossLink";

interface Props {
  foyerGirlsGallery: string[];
  foyerBoysGallery: string[];
}

export function HousingFoyersContent({ foyerGirlsGallery, foyerBoysGallery }: Props) {
  const [tab, setTab] = useState<"girls" | "boys">("girls");
  const data = tab === "girls" ? housingFoyer : housingLouled;

  return (
    <>
      <HousingCrossLink variant="to-inscription" />

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Users size={16} strokeWidth={2} />
        </div>
        <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>فواي البنات و الأولاد</span>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
        {[
          { value: "girls" as const, label: "فواي البنات", icon: User },
          { value: "boys" as const, label: "فواي الأولاد", icon: Users },
        ].map(({ value, label, icon: Icon }) => (
          <motion.button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "13px 20px",
              borderRadius: "14px",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
              transition: "all var(--transition-base)",
              fontFamily: "var(--font-sans)",
              background: tab === value ? "var(--color-primary)" : "var(--color-surface)",
              color: tab === value ? "#fff" : "var(--color-text-secondary)",
              boxShadow: tab === value ? "var(--shadow-hover)" : "var(--shadow-card)",
            }}
          >
            <Icon size={16} strokeWidth={2} />
            {label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(11,31,58,0.06)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Building2 size={16} strokeWidth={2} />
            </div>
            <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", lineHeight: 1.4 }}>{data.name}</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "28px" }}>
            {/* Unified Location Card */}
            <Card elevation="raised" padding="18px" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(59,130,246,0.12)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={16} strokeWidth={2} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)" }}>الموقع</span>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: tab === "girls" || data.mapUrl ? "16px" : 0 }}>
                {data.location}
              </p>
              
              {tab === "girls" && (
                <div style={{ flex: 1, borderRadius: "12px", overflow: "hidden", border: "1px solid var(--color-border)", minHeight: "120px", position: "relative" }}>
                  <ZoomableImage 
                    src="/images/foyer/foyer-girls-localisation.webp" 
                    alt="خريطة موقع الفواي" 
                    fill 
                    objectFit="cover"
                  />
                </div>
              )}

              {tab === "boys" && data.mapUrl && (
                <a href={data.mapUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", marginTop: "auto" }}>
                  <div style={{ padding: "10px", borderRadius: "10px", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.2s" }}>
                    <ExternalLink size={14} color="#3B82F6" strokeWidth={2} />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6" }}>افتح في خرائط جوجل</span>
                  </div>
                </a>
              )}
            </Card>

            {/* Unified Info Card */}
            <Card elevation="raised" padding="18px" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(18,184,200,0.12)", color: "#12B8C8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={16} strokeWidth={2} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)" }}>معلومات عامة</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, justifyContent: "center" }}>
                {[
                  { icon: Wallet, label: "الضمان", value: `${data.deposit} د (ترجع اخر العام)`, color: "#12B8C8" },
                  ...(data.curfew ? [{ icon: Clock, label: "وقت الإقفال", value: data.curfew, color: "#F6B41B" }] : []),
                  { icon: Key, label: "المفتاح", value: "بتك (مع التوصيل)", color: "#22C55E" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "12px", background: `${color}15`, color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "13.5px", color: "var(--color-text)", marginBottom: "4px" }}>{label}</div>
                      <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={16} strokeWidth={2} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الميزات</span>
            </div>
            <Card elevation="flat" padding="20px">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px" }}>
                {data.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                    <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "14px" }}>نصائح مهمة</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {data.tips.map((tip, i) => (
                <Alert key={i} title="" variant="warning">{tip}</Alert>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "14px" }}>📦 قائمة الحاجات</p>
            <Card elevation="flat" padding="20px">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {data.packingList.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                      background: "rgba(18,184,200,0.08)",
                      color: "var(--color-secondary)",
                      border: "1px solid rgba(18,184,200,0.2)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>

      <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>
            {tab === "girls" ? "صور فواي البنات 📸" : "صور فواي الأولاد 📸"}
          </span>
        </div>
        <PhotoGallery images={tab === "girls" ? foyerGirlsGallery : foyerBoysGallery} />
      </div>
    </>
  );
}
