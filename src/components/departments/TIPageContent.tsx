"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, ExternalLink } from "@/lib/icons";
import { Card, Badge } from "@/components/ui/shared";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { DepartmentScheduleDisclaimer } from "@/components/departments/DepartmentScheduleDisclaimer";
import { afterGraduationGuide } from "@/data/resources";

const semesterGalleryImages = [
  "/images/Technologies de l’informatique (TI)/1000125478.webp",
  "/images/Technologies de l’informatique (TI)/1000125475.webp",
];
const semesterGalleryAlts = ["Matières TI S1", "Matières TI S2"];

export function TIPageContent() {
  const [semesterTab, setSemesterTab] = useState<"s1" | "s2">("s1");

  return (
    <>
      {/* Announcement: New Paths */}
      <div style={{ marginBottom: "40px", padding: "20px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
          🚨 إعلان هام: مسارات جديدة (Nouveaux Parcours)
        </h2>
        <p style={{ fontSize: "14.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
          نعلمكم أنه تم تحديث المسارات (Parcours) في قسم تكنولوجيات الإعلامية! السنة الأولى ستبقى جذعاً مشتركاً (Tronc Commun)، وابتداءً من السنة الثانية يمكنكم الاختيار من بين 4 مسارات جديدة ومستقبلية:
          <strong> Software Development (SD), Networks and Cloud Computing, Smart Data, و Software Development for IOT.</strong>
        </p>
        <div style={{ textAlign: "center" }}>
          <ZoomableImage
            src="/images/departments/new paths/TI_path.jpg"
            alt="Nouveaux Parcours TI"
            style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid var(--color-border)" }}
          />
        </div>
      </div>

      {/* Section 1: Specialities */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> التخصصات المتاحة (Spécialités)
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "20px" }}>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>DSI: Développement Systèmes d&apos;Information</h3>
              <Badge variant="success">نشط ✅</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              هو تخصص تقرأ فيه برشا برمجة وتطوير برمجيات ومواقع. تتعلم كيفاش تحل المشاكل التقنية اللي تعرضك باستعمال أحدث التكنولوجيات.
            </p>
            <a
              href="http://www.parcours-lmd.salima.tn/listeueetab.php?parc=Bh5ZFA0iUjNRYFIoADlTYQEnWGc=&etab=BmNRYAAw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#3B82F6",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span>الخطة الدراسية (Plan d&apos;étude)</span>
              <ExternalLink size={14} />
            </a>
          </Card>

          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>RSI: Réseaux et Systèmes d&apos;Information</h3>
              <Badge variant="success">نشط ✅</Badge>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              تخصص يركز على الشبكات والأنظمة وإدارتها بعمق. هو الباب الكبير لأمن المعلومات والأمن السيبراني (Cybersecurity).
            </p>
            <a
              href="http://www.parcours-lmd.salima.tn/listeueetab.php?parc=Bh4DTgskUTBcbQZ8ADkDMVRyX2M=&etab=AWQHNl9v"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#3B82F6",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span>الخطة الدراسية (Plan d&apos;étude)</span>
              <ExternalLink size={14} />
            </a>
          </Card>
        </div>
      </div>

      {/* Section 2: Study Materials */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> المواد الدراسية للسنة الأولى
        </h2>
        <DepartmentScheduleDisclaimer intro="المواد تختلف بين السداسي الأول والثاني." />

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
                    src="/images/Technologies de l’informatique (TI)/1000125478.webp"
                    alt="Matières TI S1"
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
                    src="/images/Technologies de l’informatique (TI)/1000125475.webp"
                    alt="Matières TI S2"
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

      {/* Section 3: Credit System & Engineering */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--color-secondary)" }}>•</span> نظام الكريدي والآفاق للهندسة (Crédits & Cycle d&apos;ingénieur)
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Card elevation="flat" padding="22px">
            <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "8px" }}>كيفاش يخدم نظام الـ Crédit؟</h4>
            <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              كل سداسي فيه 30 كريدي (يعني كامل السنة 60 كريدي). نظام الكريدي يعاون على تقييم الطلبة المتفوقين لدخول الماجستير أو مناظرات الهندسة:
            </p>
            <ul style={{ paddingRight: "20px", marginTop: "8px", fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              <li>المستار (Master): يتطلب على الأقل 45 كريدي في كل عام.</li>
              <li>الهندسة (Ingéniorat): يتطلب على الأقل 40 كريدي في كل عام (ويحبّذ 60 كريدي لتفادي خسارة السكور).</li>
            </ul>
          </Card>

          <Card elevation="flat" padding="22px">
            <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "8px" }}>كيفاش يتحسب سكور الهندسة (Score ingénieur)؟</h4>
            <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "12px" }}>
              عملية الترشح لمدارس المهندسين ماهيش مربوطة باسم الجامعة، مربوطة فقط بالسكور متاعك مقارنة بباقي المترشحين. العوامل الأساسية هي:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              {[
                "معدل السنة الأولى + الرتبة (Moyenne + Rang)",
                "معدل السنة الثانية + الرتبة (Moyenne + Rang)",
                "معدل الفرنسية والإنجليزية للسنتين",
                "معدل الباكالوريا (Moyenne du Bac)",
              ].map((item, idx) => (
                <div key={idx} style={{ background: "rgba(11,31,58,0.03)", padding: "10px 12px", borderRadius: "10px", fontSize: "12.5px", color: "var(--color-text)", border: "1px solid var(--color-border)", fontWeight: 500 }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href="https://makaabi.github.io/scoreapp/1ere"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "var(--shadow-hover)",
                }}
              >
                <span>احسب سكورك هنا (Scoreapp)</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={afterGraduationGuide.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "transparent",
                  color: "var(--color-primary)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span>تفاصيل أكثر ({afterGraduationGuide.title})</span>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
          {[
            {
              title: "منصة T3alem",
              desc: "أكبر منصة تعليمية للـ IT بالدارجة التونسية (مجانًا)",
              link: "https://t3alem.tn/",
            },
            {
              title: "مكتبة كتب البرمجة PDF",
              desc: "مجموعة ضخمة من الكتب البرمجية لأي لغة تحتاجها",
              link: "https://shorturl.at/Yh4L8",
            },
            {
              title: "Drive ISET Zaghouan",
              desc: "درايف خاص بالقسم مجهّز ومعد من طرف الطالب يوسف بن سالم",
              link: "https://bit.ly/ISET_Zaghouan",
            },
            {
              title: "Drive Study Lounge IT",
              desc: "ملفات دراسة وامتحانات للـ IT",
              link: "https://shorturl.at/2CCOB",
            },
          ].map((res) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card elevation="raised" padding="16px">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)" }}>{res.title}</h4>
                  <Link2 size={14} style={{ color: "var(--color-secondary)" }} />
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{res.desc}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
