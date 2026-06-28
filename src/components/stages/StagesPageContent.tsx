"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar, FileText, ExternalLink, ImageIcon,
  Building2, CheckCircle2, Circle,
  BookOpen,
  Download as DownloadIcon, Calculator, ArrowLeft, AlertTriangle,
  Phone, Globe, HelpCircle,
} from "@/lib/icons";
import { Card, Badge, Alert } from "@/components/ui/shared";
import { Accordion } from "@/components/ui/Accordion";
import { InternshipTimeline } from "@/components/stages/InternshipTimeline";
import { InternshipGradeCalculator } from "@/components/stages/InternshipGradeCalculator";
import { DownloadButton } from "@/components/stages/DownloadButton";
import styles from "@/components/stages/stages.module.css";
import {
  internshipMistakes,
  internshipRelatedResources,
  internshipGeneralFaq,
  internshipAdminSteps,
  internshipVocabulary,
  internshipJobPlatforms,
  internshipJobSearchTips,
  internshipContacts,
  dsegExampleReports,
  stagePresentationLogos,
  internships,
} from "@/data/internships";
import { stageCompanyCount } from "@/data/stage-companies";
import { itemReveal } from "@/lib/motion";

const resourceIcons = {
  file: FileText,
  book: BookOpen,
  download: DownloadIcon,
  calculator: Calculator,
  globe: Globe,
};

function SectionHeader({ icon: Icon, title, color, bg, badge }: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
  title: string;
  color: string;
  bg: string;
  badge?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
      <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={16} strokeWidth={2} />
      </div>
      <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>{title}</span>
      {badge && <Badge variant="info">{badge}</Badge>}
    </div>
  );
}

export function StagesPageContent() {
  const [activeYear, setActiveYear] = useState(1);

  const completedStages = internships.filter((i) => i.year < activeYear).length;

  const months = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان"];

  const stageDeadlineColors: Record<number, string> = {
    1: "#12B8C8",
    2: "#22C55E",
    3: "#B45309",
  };

  const allDeadlines = internships.flatMap((internship) =>
    internship.deadlines.map((deadline) => ({
      ...deadline,
      year: internship.year,
      stageShort: internship.year === 3 ? "PFE" : `س${internship.year}`,
      color: stageDeadlineColors[internship.year] ?? "#F97316",
    }))
  );

  return (
    <>
      {/* Progress tracker — single year selector */}
      <motion.div {...itemReveal(0)} id="progress" style={{ marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px" className={styles.mobileCard}>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)", marginBottom: "14px" }}>
            مسار الستاجات
          </p>
          <div className={styles.yearPills} style={{ marginBottom: "20px" }}>
            {internships.map((internship) => {
              const isPast = internship.year < activeYear;
              const isCurrent = internship.year === activeYear;
              return (
                <button
                  key={internship.year}
                  type="button"
                  onClick={() => setActiveYear(internship.year)}
                  className={styles.yearPill}
                  style={{
                    border: isCurrent ? "2px solid var(--color-secondary)" : "1px solid var(--color-border)",
                    background: isCurrent ? "rgba(18,184,200,0.08)" : isPast ? "rgba(34,197,94,0.06)" : "var(--color-background)",
                    color: isCurrent ? "var(--color-secondary)" : "var(--color-text)",
                  }}
                >
                  {isPast ? <CheckCircle2 size={16} style={{ color: "#22C55E" }} strokeWidth={2.5} /> : <Circle size={16} style={{ color: isCurrent ? "var(--color-secondary)" : "var(--color-border)" }} strokeWidth={2} />}
                  {internship.name}
                </button>
              );
            })}
          </div>

          <div style={{ height: "6px", background: "var(--color-border)", borderRadius: "999px", overflow: "hidden", marginBottom: "24px" }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(90deg, var(--color-secondary), #0FA8B8)", borderRadius: "999px" }}
              animate={{ width: `${((completedStages + 1) / internships.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <InternshipTimeline activeYear={activeYear} onYearChange={setActiveYear} hideSelector />
        </Card>
      </motion.div>

      {/* General FAQ */}
      <motion.div {...itemReveal(0.08)} id="faq-general" style={{ marginBottom: "32px" }}>
        <SectionHeader icon={HelpCircle} title="أسئلة شائعة" color="#6366F1" bg="rgba(99,102,241,0.10)" />
        <Accordion items={internshipGeneralFaq} />
      </motion.div>

      {/* Administrative steps */}
      <motion.div {...itemReveal(0.12)} id="admin" style={{ marginBottom: "36px" }}>
        <SectionHeader icon={FileText} title="الإجراءات الإدارية" color="#0EA5E9" bg="rgba(14,165,233,0.10)" />
        <Card elevation="raised" padding="24px" className={styles.mobileCard}>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "20px", lineHeight: 1.6 }}>
            اتبع هالخطوات مع مصالح التربصات قبل، أثناء، و بعد الستاج.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {internshipAdminSteps.map((item, i) => (
              <div key={item.step} style={{ display: "flex", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px" }}>
                    {item.step}
                  </div>
                  {i < internshipAdminSteps.length - 1 && (
                    <div style={{ width: "2px", flex: 1, minHeight: "24px", background: "var(--color-border)", margin: "4px 0" }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < internshipAdminSteps.length - 1 ? "20px" : 0, flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "4px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Deadline calendar */}
      <motion.div {...itemReveal(0.2)} style={{ marginBottom: "36px" }}>
        <SectionHeader icon={Calendar} title="المواعيد النهائية" color="#F97316" bg="rgba(249,115,22,0.10)" />
        <Card elevation="flat" padding="20px" className={styles.mobileCard}>
          <div className={styles.deadlineGrid}>
            {months.map((month, mi) => {
              const deadlines = allDeadlines.filter((d) => d.monthIndex === mi);
              return (
                <div key={month} className={styles.deadlineMonth}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px" }}>{month}</p>
                  {deadlines.length > 0 ? (
                    deadlines.map((d) => (
                      <div
                        key={`${d.year}-${d.label}`}
                        style={{
                          padding: "6px 8px",
                          borderRadius: "8px",
                          background: `${d.color}18`,
                          border: `1px solid ${d.color}40`,
                          marginBottom: "4px",
                        }}
                      >
                        <p style={{ fontSize: "9px", fontWeight: 700, color: d.color, marginBottom: "2px" }}>{d.stageShort}</p>
                        <p style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-text)", lineHeight: 1.3 }}>{d.label}</p>
                      </div>
                    ))
                  ) : (
                    <div style={{ height: "40px" }} />
                  )}
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "12px", textAlign: "center" }}>
            المواعيد تقريبية — كل الستاجات (س1، س2، PFE)
          </p>
        </Card>
      </motion.div>

      {/* Logos */}
      <motion.div {...itemReveal(0.25)} id="kit" style={{ marginBottom: "36px" }}>
        <SectionHeader icon={ImageIcon} title="شعارات التقارير والعروض" color="#22C55E" bg="rgba(34,197,94,0.10)" />
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", lineHeight: 1.6 }}>
          الشعارات الرسمية لصفحات الغلاف، التقارير، والـ présentations.
        </p>
        <div className={styles.logoGrid}>
          {stagePresentationLogos.map((logo) => (
            <Card key={logo.src} elevation="raised" padding="16px">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "100%", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", borderRadius: "12px", background: "var(--color-background)", border: "1px solid var(--color-border)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "4px" }}>{logo.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "12px" }}>{logo.label}</p>
                  <DownloadButton href={logo.downloadSrc} downloadName={logo.downloadName} downloadCount={logo.downloadCount} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Example reports */}
      <motion.div {...itemReveal(0.3)} id="examples" style={{ marginBottom: "36px" }}>
        <SectionHeader icon={FileText} title={dsegExampleReports.title} color="#3B82F6" bg="rgba(59,130,246,0.08)" badge="SEG" />
        <Card elevation="raised" padding="24px" className={styles.mobileCard}>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "14px" }}>
            {dsegExampleReports.description}
          </p>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", fontWeight: 600 }}>
            {dsegExampleReports.departmentNote}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {dsegExampleReports.folders.map((folder) => (
              <span key={folder} style={{ padding: "5px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(59,130,246,0.08)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.15)" }}>
                {folder}
              </span>
            ))}
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Alert title="تنبيه مهم" variant="warning">
              {dsegExampleReports.disclaimer}
            </Alert>
          </div>

          <a
            href={dsegExampleReports.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.driveLink}
          >
            <ExternalLink size={16} strokeWidth={2} />
            فتح نماذج التقارير على Google Drive
          </a>
        </Card>
      </motion.div>

      {/* Job search + companies */}
      <motion.div {...itemReveal(0.35)} id="companies" style={{ marginBottom: "36px" }}>
        <SectionHeader icon={Building2} title="كيفاش تلقى stage؟" color="#6366F1" bg="rgba(99,102,241,0.10)" />
        <Card elevation="flat" padding="20px" style={{ marginBottom: "14px" }} className={styles.mobileCard}>
          <div className={styles.tipsGrid}>
            {internshipJobSearchTips.map((tip) => (
              <div key={tip} style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "10px 12px", borderRadius: "10px", background: "var(--color-background)" }}>
                <CheckCircle2 size={14} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{tip}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "10px" }}>مواقع مفيدة:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {internshipJobPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 14px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: "rgba(99,102,241,0.08)",
                  color: "#6366F1",
                  border: "1px solid rgba(99,102,241,0.2)",
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={13} strokeWidth={2} />
                {platform.name}
              </a>
            ))}
          </div>
        </Card>

        <Link
          href="/stages/companies"
          className={styles.companyLink}
        >
          <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(99,102,241,0.12)", color: "#6366F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Building2 size={22} strokeWidth={2} />
          </div>
          <div className={styles.companyLinkBody}>
            <p className={styles.companyLinkTitle} style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)", marginBottom: "4px" }}>دليل الشركات</p>
            <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
              دوّر في {stageCompanyCount} شركة — بالاسم، المدينة، أو العنوان
            </p>
          </div>
          <ArrowLeft size={18} style={{ color: "#6366F1", flexShrink: 0 }} strokeWidth={2} />
        </Link>
      </motion.div>

      {/* Vocabulary — single source for document terms */}
      <motion.div {...itemReveal(0.4)} id="vocabulary" style={{ marginBottom: "36px" }}>
        <SectionHeader icon={BookOpen} title="المصطلحات والوثائق" color="#8B5CF6" bg="rgba(139,92,246,0.10)" />
        <div className={styles.vocabGrid}>
          {internshipVocabulary.map((item) => (
            <Card key={item.term} elevation="raised" padding="16px">
              <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-secondary)", marginBottom: "6px" }}>{item.term}</p>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.definition}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Grade calculator */}
      <motion.div {...itemReveal(0.45)} style={{ marginBottom: "36px" }}>
        <InternshipGradeCalculator />
      </motion.div>

      {/* ISET contact */}
      <motion.div {...itemReveal(0.5)} id="contact" style={{ marginBottom: "28px" }}>
        <SectionHeader icon={Phone} title="مشكلة مع الشركة؟" color="#EF4444" bg="rgba(239,68,68,0.10)" />
        <Card elevation="raised" padding="24px" className={styles.mobileCard}>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            {internshipContacts.note}
          </p>
          <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "10px" }}>{internshipContacts.title}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
            {internshipContacts.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                dir="ltr"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "10px", background: "rgba(239,68,68,0.08)", color: "#EF4444", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <Phone size={14} strokeWidth={2} />
                {phone}
              </a>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
            فاكس:{" "}
            <span dir="ltr" style={{ display: "inline-block", unicodeBidi: "isolate" }}>
              {internshipContacts.fax}
            </span>
          </p>
        </Card>
      </motion.div>

      {/* Common mistakes */}
      <motion.div {...itemReveal(0.55)} style={{ marginBottom: "28px" }}>
        <SectionHeader icon={AlertTriangle} title="أخطاء شائعة" color="var(--color-accent)" bg="rgba(246,180,27,0.10)" />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {internshipMistakes.map((mistake, i) => (
            <Alert key={i} title="" variant="warning">⚠ {mistake}</Alert>
          ))}
        </div>
      </motion.div>

      {/* Quick links */}
      <motion.div {...itemReveal(0.6)}>
        <SectionHeader icon={BookOpen} title="روابط سريعة" color="#8B5CF6" bg="rgba(139,92,246,0.10)" />
        <div className={styles.quickLinksGrid}>
          {internshipRelatedResources.map((resource) => {
            const Icon = resourceIcons[resource.icon];
            const isExternal = "external" in resource && resource.external;
            return (
              <a
                key={resource.label}
                href={resource.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  textDecoration: "none",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{resource.label}</span>
                {isExternal ? <ExternalLink size={14} style={{ color: "var(--color-text-muted)", marginRight: "auto" }} strokeWidth={2} /> : <ArrowLeft size={14} style={{ color: "var(--color-text-muted)", marginRight: "auto" }} strokeWidth={2} />}
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
