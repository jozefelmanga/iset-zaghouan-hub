import { CheckCircle2, Camera, DoorOpen, MapPin, Info } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { libraryInfo } from "@/data/content";

export default function LibraryPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="book-open"
        label="الأكاديمي"
        title="المكتبة الجامعية"
        subtitle="مراجع، اكزامانات، وكل ما يعاونك على المراجعة"
        category="academic"
      />

      <MotionReveal delay={0.1} className="mb-7">
        <div
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(18,184,200,0.06))",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "20px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(34,197,94,0.12)",
              color: "#22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <DoorOpen size={26} strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", color: "#16A34A", marginBottom: "4px" }}>
              الدخول حر 🎉
            </p>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              {libraryInfo.access}
            </p>
          </div>
        </div>
      </MotionReveal>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "50%",
            background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Info size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الميزات</span>
        </div>
        <Card elevation="flat" padding="20px">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
            {libraryInfo.features.map((f, i) => (
              <MotionReveal key={i} delay={i * 0.06}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                  <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.5 }}>{f}</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "50%",
            background: "rgba(246,180,27,0.10)", color: "var(--color-accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Camera size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>نصائح</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {libraryInfo.tips.map((tip, i) => (
            <Alert key={i} title="" variant="info">{tip}</Alert>
          ))}
        </div>
      </div>

      <Alert title="الموقع" variant="success">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={14} style={{ flexShrink: 0 }} />
          {libraryInfo.location}
        </div>
      </Alert>
    </PageWrapper>
  );
}
