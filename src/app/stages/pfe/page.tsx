import { pageMetadata } from "@/constants/seo";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Badge } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { pfeGuide, internships } from "@/data/internships";

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
          color: "var(--color-secondary)",
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
      />

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
              <p style={{ fontSize: "20px", fontWeight: 800, color: "#B45309" }}>{value}</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </MotionReveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
        {pfeGuide.sections.map((section, i) => (
          <MotionReveal key={section.title} delay={0.15 + i * 0.08}>
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
                <CheckCircle2 size={16} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2.5} />
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </MotionReveal>
    </PageWrapper>
  );
}
