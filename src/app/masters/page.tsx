"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, BookOpen, Layers } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Alert } from "@/components/ui/shared";
import { ZoomableImage } from "@/components/ui/Lightbox";

const masterPrograms = [
  {
    id: "isid",
    name: "ISID : Ingénierie des Systèmes d'Informations Décisionnels",
    dept: "TI",
    deptFullName: "Technologies de l'Information",
    image: "/images/masters/ti_master.webp",
    description: "ماستر مهني في تكنولوجيا الإعلامية مخصص لنظم المعلومات واتخاذ القرار (Business Intelligence).",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    id: "e2i",
    name: "E2I : Entrepreneurship et Ingénierie de l'Innovation",
    dept: "SEG",
    deptFullName: "Sciences Économiques et de Gestion",
    image: "/images/masters/seg_master_1.webp",
    description: "ماستر مهني في العلوم الاقتصادية والتصرف مخصص لريادة الأعمال وهندسة الابتكار.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "mopil",
    name: "MOPIL : Modernisation de la Production et Ingénierie de la Chaîne Logistique",
    dept: "SEG",
    deptFullName: "Sciences Économiques et de Gestion",
    image: "/images/masters/seg_master_2.webp",
    description: "ماستر مهني في العلوم الاقتصادية والتصرف مخصص لتحديث الإنتاج وهندسة سلسلة اللوجستيك.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "gtvdi",
    name: "GTVDI : Gestion Traitement et Valorisation des Déchets Industriels",
    dept: "GPR",
    deptFullName: "Génie des Procédés et de l'Environnement",
    image: "/images/masters/gpr_master.webp",
    description: "ماستر مهني في هندسة الأساليب مخصص للتصرف في النفايات الصناعية ومعالجتها وتثمينها.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
];

const filterTabs = [
  { id: "all", label: "الكل" },
  { id: "TI", label: "إعلامية (TI)" },
  { id: "SEG", label: "اقتصاد وتصرف (SEG)" },
  { id: "GPR", label: "هندسة الأساليب (GPR)" },
];

export default function MastersPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMasters = activeFilter === "all" 
    ? masterPrograms 
    : masterPrograms.filter((m) => m.dept === activeFilter);

  return (
    <AppLayout>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={Award}
          label="الأكاديمي"
          title="برامج الماستر"
          subtitle="التخصصات المتاحة بعد الإجازة في ISET Zaghouan"
          category="academic"
        />

        {/* Filter Tabs */}
        <div 
          style={{ 
            display: "flex", 
            gap: "8px", 
            background: "rgba(11,31,58,0.04)", 
            padding: "6px", 
            borderRadius: "16px", 
            marginBottom: "32px", 
            flexWrap: "wrap",
            width: "max-content",
            maxWidth: "100%"
          }}
        >
          {filterTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                border: "none",
                padding: "10px 18px",
                borderRadius: "12px",
                fontSize: "13.5px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all var(--transition-base)",
                fontFamily: "var(--font-sans)",
                position: "relative",
                background: activeFilter === tab.id ? "var(--color-primary)" : "transparent",
                color: activeFilter === tab.id ? "#fff" : "var(--color-text-secondary)",
                boxShadow: activeFilter === tab.id ? "var(--shadow-hover)" : "none",
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Masters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "24px", marginBottom: "40px" }}>
          <AnimatePresence mode="popLayout">
            {filteredMasters.map((master, idx) => (
              <motion.div
                key={master.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <Card elevation="raised" padding="24px" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* Header: Dept Badge */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          fontWeight: 700,
                          background: master.bg,
                          color: master.color,
                          border: `1px solid ${master.border}`,
                        }}
                      >
                        {master.deptFullName}
                      </span>
                      <GraduationCap size={18} style={{ color: master.color }} />
                    </div>

                    {/* Master Name */}
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.5, marginBottom: "10px" }}>
                      {master.name}
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
                      {master.description}
                    </p>
                  </div>

                  {/* Flyer Image Container */}
                  <div style={{ marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                      <Layers size={14} style={{ color: "var(--color-text-muted)" }} />
                      <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>منشور الإعلان والبرنامج 🔗</span>
                    </div>
                    <ZoomableImage
                      src={master.image}
                      alt={master.name}
                      style={{
                        height: "220px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        border: "1px solid var(--color-border)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Info box */}
        <Alert title="معلومات حول الترشح" variant="info">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <BookOpen size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
            <span style={{ fontSize: "13px", lineHeight: 1.5 }}>
              يتم فتح مناظرات الترشح للماستير في بداية الصيف (غالباً شهر جويلية). ويتم ترتيب المترشحين حسب مجموع النقاط (Score) الذي يعتمد على معدلات سنوات الإجازة، عدد سنوات الرسوب، ومعدل الباكالوريا.
            </span>
          </div>
        </Alert>
      </div>
    </AppLayout>
  );
}
