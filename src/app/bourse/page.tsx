import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { AlertCircle, CheckCircle2, FileText } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert, ImageGallery } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";
import { scholarshipTypes, scholarshipRules, scholarshipDocs } from "@/data/scholarships";

const BourseCalculator = dynamic(
  () =>
    import("@/components/bourse/BourseCalculator").then((mod) => ({
      default: mod.BourseCalculator,
    })),
  { loading: () => <PageContentPlaceholder minHeight={320} /> }
);

export const metadata = pageMetadata("/bourse");

export default function BoursePage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="banknote"
        label="الحياة الجامعية"
        title="البورصة الجامعية"
        subtitle="منحة الإدماج و البورصة الكاملة — شنية تحتاج تعرفو"
        category="life"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px", marginBottom: "32px", width: "100%", boxSizing: "border-box" }}>
        {scholarshipTypes.map((s, i) => (
          <MotionReveal key={i} delay={i * 0.1}>
            <Card elevation="feature" padding="24px">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px", background: i === 0 ? "rgba(59,130,246,0.1)" : "rgba(34,197,94,0.1)", color: i === 0 ? "#3B82F6" : "#16A34A" }}>{s.name}</span>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-primary)", fontFeatureSettings: '"tnum"' }}>
                  {s.amount}
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-muted)", marginRight: "3px" }}>د</span>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.condition}</p>
            </Card>
          </MotionReveal>
        ))}
      </div>

      <BourseCalculator />

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.12)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>قواعد البورص</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {scholarshipRules.map((rule, i) => (
            <Alert key={i} title="" variant="warning">{rule}</Alert>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الأوراق المطلوبة</span>
        </div>
        <Card elevation="flat" padding="20px">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "10px", width: "100%", boxSizing: "border-box" }}>
            {scholarshipDocs.map((doc, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", background: "var(--color-background)" }}>
                <CheckCircle2 size={14} style={{ color: "var(--color-secondary)", flexShrink: 0 }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)" }}>{doc}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Alert title="ملاحظة مهمة" variant="info">
        أوراق البورص هي نفسها أوراق 500 دينار. عند تقديم البورص، نفس الأوراق — إذا لم يكن الحق في البورص الكاملة تأخذ منحة الإدماج.
      </Alert>

      <ImageGallery
        title="دليل المنحة الجامعية"
        images={[
          "/images/bourse (1).webp",
          "/images/bourse (2).webp",
          "/images/bourse (3).webp",
          "/images/bourse (4).webp",
          "/images/bourse (5).webp",
        ]}
      />
    </PageWrapper>
  );
}
