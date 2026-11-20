import { pageMetadata } from "@/constants/seo";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Badge } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { pfeGuide, internships } from "@/data/internships";
import { textTint } from "@/lib/utils";
import { lastUpdated } from "@/data/last-updated";

export const metadata = pageMetadata("/stages/pfe");

const pfeInternship = internships[2];

export default function PfePage() {
  return (
    <PageWrapper seoPath="/stages/pfe">
      <Link
        href="/stages"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--color-secondary-text)",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        <ArrowRight size={16} strokeWidth={2.5} />
        رجوع للستاجات
      </Link>

      <StaticPageHeader
        icon="graduation-cap"
        label="PFE"
        title={pfeGuide.title}
        subtitle={pfeGuide.subtitle}
        category="career"
        lastUpdated={lastUpdated["/stages/pfe"]}
      />

      <section
        style={{
          marginBottom: "24px",
          padding: "18px 20px",
          borderRadius: "16px",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)", marginBottom: "8px" }}>شنوة معنى PFE؟</h2>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          PFE هي اختصار <span dir="ltr" lang="fr">Projet de Fin d&apos;Études</span>، يعني مشروع التخرج. هو آخر ستاج في الإجازة: تخدم مشروع حقيقي في شركة
          في السداسي الثاني من السنة الثالثة، تكتب عليه rapport، و تعرضو قدّام لجنة في الـ Soutenance. النقطة متاعو تحسب برشا في
          الديبلوم، هذاكا علاش لازم تختار الموضوع و الشركة بالباهي.
        </p>
      </section>

      <MotionReveal delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "12px",
            marginBottom: "32px",
            padding: "20px 24px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(246,180,27,0.06), rgba(139,92,246,0.06))",
            border: "1px solid rgba(246,180,27,0.2)",
          }}
        >
          {[
            { value: pfeInternship.duration, label: "المدة" },
            { value: `${pfeInternship.weight}/15`, label: "الوزن" },
            { value: pfeInternship.workload.reportPages, label: "Rapport" },
            { value: pfeInternship.workload.defenseMinutes, label: "Soutenance" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "20px", fontWeight: 800, color: textTint("#B45309") }}>{value}</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal delay={0.15}>
        <div
          style={{
            marginBottom: "32px",
            padding: "24px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(34,197,94,0.06))",
            border: "1px solid rgba(139,92,246,0.18)",
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)", marginBottom: "6px" }}>
            📄 دليل PFE — تحميل
          </h3>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", lineHeight: 1.5 }}>
            حمّل الدليل الخاص بتخصصك.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a
              href="/documents/stages/pfe/Guide-de-PFE TI.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.3)",
                color: textTint("#1d4ed8"),
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <Download size={15} strokeWidth={2.5} />
              Guide PFE — TI
            </a>
            <a
              href="/documents/stages/pfe/Guide-de-PFE GPR.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: textTint("#15803d"),
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <Download size={15} strokeWidth={2.5} />
              Guide PFE — GPR
            </a>
            <a
              href="/documents/stages/pfe/Guide-de-PFE SEG.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "var(--color-primary)",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <Download size={15} strokeWidth={2.5} />
              Guide PFE — SEG
            </a>
          </div>

          <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(139,92,246,0.12)", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "12.5px", color: "var(--color-text-muted)" }}>تصفح تفاصيل قسمك ومقرراته:</span>
            <Link href="/departments/ti" style={{ fontSize: "12.5px", fontWeight: 600, color: textTint("#2563EB"), textDecoration: "none" }}>قسم TI</Link>
            <span style={{ color: "var(--color-border)" }}>•</span>
            <Link href="/departments/gpr" style={{ fontSize: "12.5px", fontWeight: 600, color: textTint("#15803d"), textDecoration: "none" }}>قسم GPR</Link>
            <span style={{ color: "var(--color-border)" }}>•</span>
            <Link href="/departments/seg" style={{ fontSize: "12.5px", fontWeight: 600, color: textTint("#7c3aed"), textDecoration: "none" }}>قسم SEG</Link>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.2}>
        <div
          style={{
            marginBottom: "32px",
            padding: "24px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(234,88,12,0.06))",
            border: "1px solid rgba(249,115,22,0.18)",
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)", marginBottom: "6px" }}>
            📝 نموذج تقرير — PFE
          </h3>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "16px", lineHeight: 1.5 }}>
            حمّل نموذج تقرير نهاية الدراسة الخاص بقسم الإعلامية (TI).
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a
              href="/documents/stages/pfe/rapport%20exemple.docx"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.3)",
                color: textTint("#c2410c"),
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <Download size={15} strokeWidth={2.5} />
              Exemple Rapport — TI
            </a>
          </div>
        </div>
      </MotionReveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
        {pfeGuide.sections.map((section, i) => (
          <MotionReveal key={section.title} delay={0.25 + i * 0.08}>
            <Card elevation="raised" padding="24px">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Badge variant="warning">الخطوة {i + 1}</Badge>
                <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{section.title}</h3>
              </div>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{section.content}</p>
            </Card>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal delay={0.5}>
        <Card elevation="feature" padding="28px">
          <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", marginBottom: "16px" }}>
            قائمة التحقق — PFE
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {pfeGuide.checklist.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", background: "var(--color-background)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-secondary-text)", flexShrink: 0 }} strokeWidth={2.5} />
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </MotionReveal>
    </PageWrapper>
  );
}
