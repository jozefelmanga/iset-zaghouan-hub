import { pageMetadata } from "@/constants/seo";
import { AlertCircle, FileText, ListOrdered, HelpCircle } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert, ImageGallery } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { DocumentChecklist } from "@/components/ui/DocumentChecklist";
import { Accordion } from "@/components/ui/Accordion";
import { FaqJsonLd } from "@/components/faq/FaqJsonLd";
import {
  scholarshipTypes,
  scholarshipTranches,
  scholarshipRules,
  scholarshipDocuments,
  scholarshipSteps,
  scholarshipFaq,
} from "@/data/scholarships";

export const metadata = pageMetadata("/bourse");

export default function BoursePage() {
  return (
    <PageWrapper seoPath="/bourse">
      <StaticPageHeader
        icon="banknote"
        label="الحياة الجامعية"
        title="البورص و منحة الإدماج: الأوراق و الشروط"
        subtitle="أوراق البورص، مراحل التقديم، المبالغ و الدفعات — كل شي في بلاصة وحدة"
        category="life"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px", marginBottom: "32px", width: "100%", boxSizing: "border-box" }}>
        {scholarshipTypes.map((s, i) => (
          <MotionReveal key={i} delay={i * 0.1} className="h-full">
            <Card elevation="feature" padding="24px" className="h-full flex flex-col justify-between">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px", background: i === 0 ? "rgba(59,130,246,0.1)" : "rgba(34,197,94,0.1)", color: i === 0 ? "color-mix(in srgb, #2563EB, #fff var(--text-lift))" : "color-mix(in srgb, #15803D, #fff var(--text-lift))" }}>{s.name}</span>
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

      <DocumentChecklist
        title="أوراق البورص و منحة الإدماج"
        icon={<FileText size={16} strokeWidth={2} />}
        items={scholarshipDocuments}
        intro="هاذي الأوراق المطلوبة للبورصة الكاملة و منحة الإدماج (نفس الملف). حضّرهم بكري باش تبعث الملف في الوقت."
        footer="نفس الأوراق لأبناء رجال التعليم و أعوان وزارة التربية. المصدر: faccna.tn — ثبّت ديما في بلاغات ديوان الخدمات الجامعية."
      />

      <DocumentChecklist
        title="مراحل التقديم على البورص"
        icon={<ListOrdered size={16} strokeWidth={2} />}
        items={scholarshipSteps}
        ordered
        accent="#3B82F6"
      />

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>دفعات البورصة الكاملة (1320 د)</h2>
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
                <p style={{ fontSize: "24px", fontWeight: 800, color: "color-mix(in srgb, #16A34A, #fff var(--text-lift))", fontFeatureSettings: '"tnum"' }}>
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
          <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>شروط و قواعد البورص</h2>
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

      <section style={{ margin: "32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <HelpCircle size={18} strokeWidth={2} style={{ color: "var(--color-secondary-text)" }} aria-hidden="true" />
          <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>أسئلة على البورص</h2>
        </div>
        <Accordion items={scholarshipFaq} />
        <FaqJsonLd items={scholarshipFaq} path="/bourse" name="أسئلة على البورص و منحة الإدماج" />
      </section>

      <ImageGallery
        title="صور: أوراق و شروط المنحة الجامعية"
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
