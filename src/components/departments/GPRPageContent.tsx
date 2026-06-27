"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2 } from "@/lib/icons";
import { Card, Badge } from "@/components/ui/shared";
import { ZoomableImage } from "@/components/ui/Lightbox";

export function GPRPageContent() {
  const [semesterTab, setSemesterTab] = useState<"s1" | "s2">("s1");

  return (
    <>
      {/* Section 1: Specialities */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> التخصصات المتاحة (Spécialités)
        </h2>

        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
          تقرأ في السنة الأولى جذع مشترك (tronc commun)، وفي السنة الثانية تختار التخصص المناسب لك:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "20px" }}>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>أساليب كيميائية (Procédés Chimiques)</h3>
              <Badge variant="success">نشط بـ ISETZG ✅</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              تخصص يركز على الكيمياء الصناعية، معالجة المواد، الكيمياء العضوية، تقنيات التحليل المخبري، والبيئة.
            </p>
          </Card>

          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>أساليب غذائية (Procédés Agroalimentaires)</h3>
              <Badge variant="success">نشط بـ ISETZG ✅</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              تخصص يركز على الصناعات الغذائية، تحليل الأغذية، الحفظ والسلامة الصحية، ومراقبة الجودة البيولوجية والكيميائية للمأكولات.
            </p>
          </Card>
        </div>
      </div>

      {/* Section 2: Future Prospects */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> الآفاق المهنية (Perspectives d&apos;avenir)
        </h2>
        <Card elevation="feature" padding="24px">
          <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)", marginBottom: "8px" }}>شعبة تطبيقية بامتياز!</h4>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
            الـ GPR إجازة تطبيقية تخليك تخدم كـ <strong>Technicien Supérieur</strong> (فني سامٍ) في مجالات متعددة:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px", marginBottom: "16px" }}>
            {[
              "معامل المواد الغذائية (حليب، ياغورت، عجين...)",
              "مختبرات صناعة الأدوية ومستحضرات التجميل",
              "معامل إنتاج مواد التنظيف ومراقبة المواد الكيميائية",
              "المختبرات البيئية ومحطات معالجة المياه",
              "مجموعة المجمع الكيميائي التونسي (Groupe Chimique)",
            ].map((job, idx) => (
              <div key={idx} style={{ background: "rgba(11,31,58,0.03)", padding: "10px 12px", border: "1px solid var(--color-border)", borderRadius: "10px", fontSize: "13px", color: "var(--color-text-secondary)", fontWeight: 500 }}>
                🔹 {job}
              </div>
            ))}
          </div>

          <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            مهمتك الأساسية هي مراقبة جودة المنتوجات وتحليلها من خلال قياس عدة مؤشرات مثل (Ph , humidité , température , glucides , phosphate , cadmium...) وإعداد التقارير المخبرية لضمان تطابق المنتوج مع المعايير.
          </p>
        </Card>
      </div>

      {/* Section 3: Study Materials */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> المواد الدراسية للسنة الأولى (Jardins)
        </h2>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", marginBottom: "20px" }}>
          المواد تختلف بين السداسي الأول والثاني. إليك المواد المقررة:
        </p>

        <div style={{ display: "flex", gap: "8px", background: "rgba(11,31,58,0.04)", padding: "4px", borderRadius: "10px", marginBottom: "20px", maxWidth: "240px" }}>
          <button
            onClick={() => setSemesterTab("s1")}
            style={{
              flex: 1, border: "none", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer",
              background: semesterTab === "s1" ? "var(--color-surface)" : "transparent",
              color: semesterTab === "s1" ? "var(--color-primary)" : "var(--color-text-muted)",
              boxShadow: semesterTab === "s1" ? "var(--shadow-card)" : "none",
              fontFamily: "var(--font-sans)",
            }}
          >
            السداسي الأول (S1)
          </button>
          <button
            onClick={() => setSemesterTab("s2")}
            style={{
              flex: 1, border: "none", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer",
              background: semesterTab === "s2" ? "var(--color-surface)" : "transparent",
              color: semesterTab === "s2" ? "var(--color-primary)" : "var(--color-text-muted)",
              boxShadow: semesterTab === "s2" ? "var(--shadow-card)" : "none",
              fontFamily: "var(--font-sans)",
            }}
          >
            السداسي الثاني (S2)
          </button>
        </div>

        <Card elevation="raised" padding="20px">
          <div style={{ display: "flex", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: "260px" }}>
            <AnimatePresence mode="wait">
              {semesterTab === "s1" ? (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <ZoomableImage
                    src="/images/Génie des Procédés (GPR)/8b38c86c-d857-42af-af22-0e62fbabab11.webp"
                    alt="Matières GPR S1"
                    style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid var(--color-border)" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "8px" }}>جدول مواد السداسي الأول</span>
                </motion.div>
              ) : (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <ZoomableImage
                    src="/images/Génie des Procédés (GPR)/5cae2f2b-0827-4909-86e4-49cc524b6625.webp"
                    alt="Matières GPR S2"
                    style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid var(--color-border)" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "8px" }}>جدول مواد السداسي الثاني</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </div>

      {/* Section 4: Resources */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> المصادر التعليمية والمراجع (Ressources)
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "14px" }}>
          <a
            href="https://www.youtube.com/@mohssineelmiski3785"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card elevation="raised" padding="16px">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)" }}>قناة Mohssine El Miski على يوتيوب</h4>
                <Link2 size={14} style={{ color: "var(--color-secondary)" }} />
              </div>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                قناة تعليمية ممتازة تشرح أساسيات الكيمياء الصناعية، هندسة العمليات وتجارب المختبر بالتفصيل.
              </p>
            </Card>
          </a>
        </div>
      </div>
    </>
  );
}
