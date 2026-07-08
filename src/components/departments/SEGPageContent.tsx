"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, ExternalLink } from "@/lib/icons";
import { Card, Badge } from "@/components/ui/shared";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { DepartmentScheduleDisclaimer } from "@/components/departments/DepartmentScheduleDisclaimer";

const semesterGalleryImages = [
  "/images/Sciences économiques et de gestion (SEG)/4a931b05-723c-48de-a3c2-ca9a82aa3b86.webp",
  "/images/Sciences économiques et de gestion (SEG)/486f2064-c193-4f3f-8934-e76ccfed17c3.webp",
];
const semesterGalleryAlts = ["Matières SEG S1", "Matières SEG S2"];

export function SEGPageContent() {
  const [semesterTab, setSemesterTab] = useState<"s1" | "s2">("s1");

  return (
    <>
      {/* Announcement: New Paths */}
      <details style={{ marginBottom: "40px", padding: "20px", borderRadius: "12px", background: "rgba(249, 115, 22, 0.05)", border: "1px solid rgba(249, 115, 22, 0.2)", cursor: "pointer" }}>
        <summary style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-primary)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", outline: "none", userSelect: "none" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", lineHeight: 1.4 }}>🚨 إعلان هام: مسارات جديدة (Nouveaux Parcours)</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-primary)", background: "rgba(249, 115, 22, 0.1)", padding: "6px 12px", borderRadius: "8px", whiteSpace: "nowrap", marginTop: "auto" }}>اضغط للتفاصيل 🔽</span>
        </summary>
        <div style={{ marginTop: "16px", cursor: "default" }}>
          <p style={{ fontSize: "14.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
            نعلمكم أنه تم تحديث المسارات (Parcours) في قسم العلوم الاقتصادية والتصرف! السنة الأولى ستبقى جذعاً مشتركاً (Tronc Commun)، وابتداءً من السنة الثانية يمكنكم الاختيار من بين 9 مسارات جديدة ومتنوعة، نذكر منها:
            <strong> Marketing Digital, Management Industriel, Techniques Financières, و Analyste d&apos;Affaires وغيرها.</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <ZoomableImage
              src="/images/departments/new paths/SEG_path.webp"
              alt="Nouveaux Parcours SEG"
              style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid var(--color-border)" }}
            />
          </div>
        </div>
      </details>

      {/* Section 1: Specialities */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> التخصصات المتاحة (Spécialités)
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>محاسبة و مالية (Comptabilité et Finance)</h3>
              <Badge variant="success">نشط مباشرة ✅</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              تخصص تقرا فيه مباشرة 3 سنين. يركز على تقنيات المحاسبة، الجباية، إدارة الأموال، والتحليل المالي للشركات.
            </p>
          </Card>

          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>إدارة الأعمال (Administration des Affaires)</h3>
              <Badge variant="info">توجيه في السنة الثانية 🧭</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
              شعبة تدرس كجذع مشترك في السنة الأولى، ثم يقع التوجيه في السنة الثانية إلى أحد الاختصاصات التالية:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
              <div style={{ padding: "14px", borderRadius: "12px", background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.15)" }}>
                <h4 style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-primary)", marginBottom: "4px" }}>Management Industriel</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  يهتم بإدارة العمليات والإنتاج في المصانع، تحسين الأداء وتقليص التكاليف.
                </p>
              </div>
              <div style={{ padding: "14px", borderRadius: "12px", background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.15)" }}>
                <h4 style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-primary)", marginBottom: "4px" }}>Management de Qualité</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  يركز على تحسين جودة الخدمات والمنتوجات، وضمان المعايير الدولية والرضا.
                </p>
              </div>

            </div>
          </Card>
        </div>
      </div>

      {/* Section 1b: Mini Parcours */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)"}}>•</span> المسارات المصغّرة (Mini Parcours)
        </h2>
        <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
          ابتداءً من السنة الثانية، يمكن للطلبة اختيار مسار مصغّر (Mini Parcours) ضمن تخصصهم. هذه المسارات متوفّرة حالياً في قسم SEG بـ ISET Zaghouan:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>

          {/* Logistique Durable */}
          <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-primary)", marginBottom: "8px" }}>🌿 Logistique Durable</h4>
            <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              مسار مُصغَّر في اللوجستيك المستدام — يُطلَق هذا العام لأوّل مرة في ISET Zaghouan.
            </p>
          </div>

          {/* Marketing Digital */}
          <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.2)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-primary)", marginBottom: "8px" }}>📱 Marketing Digital</h4>
            <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              مسار مُصغَّر يركّز على استراتيجيات التسويق الرقمي، إدارة منصات التواصل الاجتماعي، وتحليل البيانات التجارية.
            </p>
          </div>

          {/* Lean Entrepreneurship */}
          <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(251,146,60,0.05)", border: "1px solid rgba(251,146,60,0.2)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-primary)", marginBottom: "8px" }}>🚀 Lean Entrepreneurship</h4>
            <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              مسار مُصغَّر في ريادة الأعمال الرشيقة — يُعلّمك تأسيس مشاريع بفعّالية عبر منهجية Lean Startup.
            </p>
          </div>

        </div>
      </div>

      {/* Section 2: Study Materials */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> المواد الدراسية للسنة الأولى
        </h2>
        <DepartmentScheduleDisclaimer intro="المواد متشابهة بين المحاسبة وإدارة الأعمال في السداسي الأول، ومن بعد تختلف." />

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
                    src="/images/Sciences économiques et de gestion (SEG)/4a931b05-723c-48de-a3c2-ca9a82aa3b86.webp"
                    alt="Matières SEG S1"
                    galleryImages={semesterGalleryImages}
                    galleryAlts={semesterGalleryAlts}
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
                    src="/images/Sciences économiques et de gestion (SEG)/486f2064-c193-4f3f-8934-e76ccfed17c3.webp"
                    alt="Matières SEG S2"
                    galleryImages={semesterGalleryImages}
                    galleryAlts={semesterGalleryAlts}
                    style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid var(--color-border)" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "8px" }}>جدول مواد السداسي الثاني</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </div>

      {/* Section 3: Credit System */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> نظام الكريدي والتوجيه (Crédits & Score)
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Card elevation="flat" padding="22px">
            <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "8px" }}>كيفاش يخدم نظام الـ Crédit في قسم SEG؟</h4>
            <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              كل سداسي فيه 30 كريدي (يعني كامل السنة 60 كريدي). نظام الكريدي يعاون على تقييم الطلبة المتفوقين لدخول الماجستير أو مناظرات الهندسة:
            </p>
            <ul style={{ paddingRight: "20px", marginTop: "8px", fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              <li>المستار (Master): يتطلب على الأقل 45 كريدي في كل عام.</li>
              <li>الدخول للمدارس الوطنية للهندسة: يتطلب 40 كريدي على الأقل كل عام (يتم احتسابه عبر معدل السنة الأولى والثانية + الرتبة + معدل الفرنسية والإنجليزية).</li>
            </ul>

            <div style={{ marginTop: "14px" }}>
              <a
                href="https://makaabi.github.io/scoreapp/1ere"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "var(--color-secondary)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>موقع حساب السكور (Scoreapp)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Section 4: Resources */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> المصادر التعليمية والمراجع (Ressources)
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "14px" }}>
          <a
            href="https://www.youtube.com/watch?v=2jB2K5g5LzA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card elevation="raised" padding="16px">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)" }}>دروس الاستهلاك والإهلاك (Amortissements et résorption)</h4>
                <Link2 size={14} style={{ color: "var(--color-secondary)" }} />
              </div>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                فيديو تعليمي ممتاز على يوتيوب يشرح الجزء الأول بالكامل من مقياس المحاسبة والمالية.
              </p>
            </Card>
          </a>
        </div>
      </div>
    </>
  );
}
