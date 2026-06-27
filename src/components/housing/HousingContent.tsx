"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, MapPin, Wallet, CheckCircle2, Key, Sparkles, User, Users, ImageIcon,
  ExternalLink, Globe, ArrowLeft, Building2,
} from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";
import { housingFoyer, housingLouled, housingProcess, housingRegistration } from "@/data/housing";
import { PhotoGallery, ZoomableImage } from "@/components/ui/Lightbox";

const housingDocsGallery = [
  { src: "/images/foyer (1).webp", alt: "دليل معلومات المبيت الجامعي (1)" },
  { src: "/images/foyer (2).webp", alt: "دليل معلومات المبيت الجامعي (2)" },
] as const;

const foyerGirlsGallery = [
  "/images/foyer girls/448872376_947314010742452_1019535438087276358_n.webp",
  "/images/foyer girls/451547853_984055766847673_8558941274889278029_n.webp",
  "/images/foyer girls/452706760_962939205633318_6129425710378229105_n.webp",
  "/images/foyer girls/452848937_883694910457684_1621386241454197661_n.webp",
  "/images/foyer girls/453060157_1672551733518874_3977738223592009691_n.webp",
  "/images/foyer girls/453156481_1023997099439323_6780814524542770728_n.webp",
  "/images/foyer girls/453174627_513858541277726_4200306603887111155_n.webp",
  "/images/foyer girls/453439508_1207899707228477_8140608691653031405_n.webp",
  "/images/foyer girls/453460624_431625519864133_3473211417965411587_n.webp",
  "/images/foyer girls/453460630_1015811493255935_9105471688253090707_n.webp",
  "/images/foyer girls/453465107_1639059430215421_4134603510622887663_n.webp",
  "/images/foyer girls/453467393_1537397963515855_175611808864145860_n.webp",
  "/images/foyer girls/453792484_1793394111190426_7031753863109453644_n.webp",
  "/images/foyer girls/454063059_371283862741360_1595094905555457197_n.webp",
];

const foyerBoysGallery = [
  "/images/foyer boys localisation.webp",
  "/images/foyer boys/1000125393.webp",
  "/images/foyer boys/1000125394.webp",
  "/images/foyer boys/1000125395.webp",
  "/images/foyer boys/1000125398.webp",
  "/images/foyer boys/1000125399.webp",
  "/images/foyer boys/1000125400.webp",
  "/images/foyer boys/1000125401.webp",
];

export function HousingContent() {
  const [tab, setTab] = useState<"girls" | "boys">("girls");
  const data = tab === "girls" ? housingFoyer : housingLouled;

  return (
    <>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Globe size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>كيفاش ترسّم في المبيت؟</span>
        </div>

        <Alert title="قبل ما تختار الفواي" variant="info">
          باهي، أول حاجة تسجّل في المبيت عن بعد، تحضّر أوراقك، و بعد تختار فواي البنات ولا الأولاد حسب الجواب.
        </Alert>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "20px" }}>
          {housingRegistration.map((phase, i) => (
            <Card key={phase.id} elevation="raised" padding="22px">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "12px", flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: "var(--color-text)" }}>{phase.title}</h3>
                </div>
                {phase.url && (
                  <a
                    href={phase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      fontSize: "12px", fontWeight: 600, color: "var(--color-secondary)",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={13} strokeWidth={2} />
                    افتح الموقع
                  </a>
                )}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {phase.steps.map((step, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <ArrowLeft size={14} style={{ color: "var(--color-secondary)", marginTop: "4px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(34,197,94,0.10)", color: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>دليل وثائق ومعلومات المبيت الجامعي 📋</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {housingDocsGallery.map(({ src, alt }) => (
              <Card key={src} elevation="raised" padding="16px">
                <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "12px", height: "200px" }}>
                  <ZoomableImage
                    src={src}
                    alt={alt}
                    galleryImages={housingDocsGallery.map((img) => img.src)}
                    galleryAlts={housingDocsGallery.map((img) => img.alt)}
                    style={{ height: "100%" }}
                  />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", textAlign: "center" }}>{alt}</h4>
              </Card>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(11,31,58,0.06)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Key size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>يوم الترسيم في الفواي</span>
          </div>
          <Card elevation="flat" padding="24px">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {housingProcess.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "12px", flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.6, paddingTop: "4px" }}>{step}</p>
                </div>
              ))}
            </div>
          </Card>
          <div style={{ marginTop: "14px" }}>
            <Alert title="على التوصيل" variant="warning">
              فما عندك توصيل تاخد نهارت إنسكري فوياي: آخر لعام كيف تجي باش تراجع مفتاح يمشيو معاك يتفقدو البيت اللي منقصة شيء ولا مكسرت شيء عام كامل، وبالتوصيل أذاكا لأوريجينال تاخو 20 دينار.
            </Alert>
          </div>
        </div>
      </div>

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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginBottom: "28px" }}>
            {[
              { icon: MapPin, label: "الموقع", value: data.location, color: "#3B82F6" },
              { icon: Wallet, label: "الضمان", value: `${data.deposit} د (ترجع اخر العام)`, color: "#12B8C8" },
              ...(data.curfew ? [{ icon: Clock, label: "وقت الإقفال", value: data.curfew, color: "#F6B41B" }] : []),
              { icon: Key, label: "المفتاح", value: "بتك (مع التوصيل)", color: "#22C55E" },
            ].map(({ icon: Icon, label, value, color }) => (
              <Card key={label} elevation="raised" padding="18px">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: `${color}18`, color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={14} strokeWidth={2} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: "13px", color: "var(--color-text)" }}>{label}</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{value}</p>
              </Card>
            ))}
            {data.mapUrl && (
              <a href={data.mapUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Card elevation="raised" padding="18px" style={{ height: "100%", border: "1px solid rgba(59,130,246,0.25)", background: "rgba(59,130,246,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(59,130,246,0.12)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ExternalLink size={14} strokeWidth={2} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: "13px", color: "var(--color-text)" }}>الموقع على الخريطة</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>افتح في Google Maps</p>
                </Card>
              </a>
            )}
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
