import { pageMetadata } from "@/constants/seo";
import { Heart, Lightbulb, Coffee, Home } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { generalTips, restoTips, foyerTips, contributors } from "@/data/bonus";

function TipList({ tips, accentColor }: { tips: string[]; accentColor: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {tips.map((tip, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            paddingBottom: "12px",
            borderBottom: idx < tips.length - 1 ? "1px solid var(--color-border)" : "none",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "bold", color: accentColor, marginTop: "2px" }}>#</span>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{tip}</p>
        </div>
      ))}
    </div>
  );
}

export const metadata = pageMetadata("/bonus");

export default function BonusPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="sparkles"
        label="الأنشطة والحياة"
        title="نصائح وإهداء"
        subtitle="مجموعة نصائح وتوجيهات للطلبة الجدد وشكر خاص للمساهمين في الدليل"
        category="life"
      />

      <div style={{ marginBottom: "36px" }}>
        <Alert title="مرحباً بكم في إيزات زغوان" variant="success">
          الدليل هذا معمول بالكامل ليعاونكم تبداو خطواتكم الأولى في الحياة الجامعية بكل راحة وثقة. إليكم أهم النصائح الذهبية من طلبة سابقين مروا بنفس تجربتكم!
        </Alert>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Lightbulb size={20} style={{ color: "var(--color-accent)" }} />
          نصائح عامة حول الدراسة والفاك
        </h2>
        <Card elevation="raised" padding="24px">
          <TipList tips={generalTips} accentColor="var(--color-secondary)" />
        </Card>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Coffee size={20} style={{ color: "#F97316" }} />
          في المطعم الجامعي (الريستو)
        </h2>
        <Card elevation="raised" padding="24px">
          <TipList tips={restoTips} accentColor="#F97316" />
        </Card>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Home size={20} style={{ color: "#12B8C8" }} />
          داخل المبيت الجامعي
        </h2>
        <Card elevation="raised" padding="24px">
          <TipList tips={foyerTips} accentColor="#12B8C8" />
        </Card>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Card elevation="feature" padding="30px">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px", height: "56px", borderRadius: "50%", background: "rgba(239,68,68,0.08)", color: "#EF4444",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Heart size={28} fill="#EF4444" strokeWidth={1.5} />
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-primary)", marginBottom: "8px" }}>إهداء وشكر خاص</h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 20px" }}>
                نحبو نهديو الدليل هذا لكل طالب وطالبة يسعوا لتحقيق طموحاتهم ويتقدموا في مسيرتهم الدراسية.
                شكر من الأعماق لكل من ساهم بوقتو ومعلوماتهم وخبرتو باش نخرجو بالعمل المزيان هذا:
              </p>
              <div
                style={{
                  display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px",
                  maxWidth: "600px", margin: "0 auto", width: "100%", boxSizing: "border-box",
                }}
              >
                {contributors.map((name) => (
                  <div
                    key={name}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "10px",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    @{name} ❤️
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
}
