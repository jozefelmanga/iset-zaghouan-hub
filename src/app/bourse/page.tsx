import { pageMetadata } from "@/constants/seo";
import { AlertCircle } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert, ImageGallery } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { scholarshipTypes, scholarshipTranches, scholarshipRules } from "@/data/scholarships";

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
          <MotionReveal key={i} delay={i * 0.1} className="h-full">
            <Card elevation="feature" padding="24px" className="h-full flex flex-col justify-between">
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

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>دفعات البورصة الكاملة (1320 د)</span>
        </div>
        <Card elevation="flat" padding="20px">
          <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
            البورصة الكاملة تتقسّم على 4 مرات في السنة. منحة الإدماج (500 د) منفصلة و ما تدخلش في هالحساب.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
            {scholarshipTranches.map(({ order, amount }) => (
              <div
                key={order}
                style={{
                  padding: "16px 12px",
                  borderRadius: "14px",
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.18)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "6px" }}>
                  الدفعة {order}
                </p>
                <p style={{ fontSize: "24px", fontWeight: 800, color: "#16A34A", fontFeatureSettings: '"tnum"' }}>
                  {amount}
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-muted)", marginRight: "2px" }}>د</span>
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

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

      <Alert title="ملاحظة مهمة" variant="info">
        منحة الإدماج (500 د) منفصلة على البورصة. أوراق البورص هي نفسها أوراق منحة الإدماج — إذا ما عندكش حق في البورص كاملة تاخذ منحة الإدماج برك.
      </Alert>

      <ImageGallery
        title="دليل المنحة الجامعية"
        images={[
          "/images/bourse/bourse (4).webp",
          "/images/bourse/bourse (1).webp",
          "/images/bourse/bourse (2).webp",
          "/images/bourse/bourse (3).webp",
          "/images/bourse/bourse (5).webp",
          "/images/bourse/bourse (6).webp",
        ]}
      />
    </PageWrapper>
  );
}
