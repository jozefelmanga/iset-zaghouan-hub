"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Clock, MapPin, Wallet, CheckCircle2, Key, Sparkles, User, Users, Image as ImageIcon,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { housingFoyer, housingLouled, housingProcess } from "@/data/housing";
import { PhotoGallery, ZoomableImage } from "@/components/ui/Lightbox";

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

export default function HousingPage() {
  const [tab, setTab] = useState<"girls" | "boys">("girls");
  const data = tab === "girls" ? housingFoyer : housingLouled;

  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={Building2}
          label="الحياة الجامعية"
          title="المبيت الجامعي"
          subtitle="كل ما تحتاجو تعرفوه على السكن الطلابي في زغوان"
          category="life"
        />

        {/* Tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
          {[
            { value: "girls" as const, label: "فواي البنات", icon: User  },
            { value: "boys"  as const, label: "فواي الأولاد", icon: Users },
          ].map(({ value, label, icon: Icon }) => (
            <motion.button
              key={value}
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
            {/* Info cards grid */}
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
            </div>

            {/* Features */}
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

            {/* Tips */}
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "14px" }}>نصائح مهمة</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {data.tips.map((tip, i) => (
                  <Alert key={i} title="" variant="warning">{tip}</Alert>
                ))}
              </div>
            </div>

            {/* Packing list */}
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

            {/* Docs */}
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "14px" }}>📄 الأوراق المطلوبة</p>
              <Card elevation="flat" padding="20px">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {data.docs.map((doc, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2.5} />
                      <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{doc}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* General Foyer Information Guides */}
        <div style={{ marginTop: "32px", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(34,197,94,0.10)", color: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>دليل وثائق ومعلومات المبيت الجامعي 📋</span>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "20px" 
          }}>
            <Card elevation="raised" padding="16px">
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "12px", height: "200px" }}>
                <ZoomableImage 
                  src="/images/foyer (1).webp" 
                  alt="دليل معلومات المبيت الجامعي (1)" 
                  style={{ height: "100%" }}
                />
              </div>
              <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", textAlign: "center" }}>
                دليل معلومات المبيت الجامعي (1)
              </h4>
            </Card>

            <Card elevation="raised" padding="16px">
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "12px", height: "200px" }}>
                <ZoomableImage 
                  src="/images/foyer (2).webp" 
                  alt="دليل معلومات المبيت الجامعي (2)" 
                  style={{ height: "100%" }}
                />
              </div>
              <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", textAlign: "center" }}>
                دليل معلومات المبيت الجامعي (2)
              </h4>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(11,31,58,0.06)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Key size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>خطوات التسجيل في المبيت</span>
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
        </div>

        {/* Foyer Photo Gallery */}
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
      </div>
    </AppLayout>
  );
}
