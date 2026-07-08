import { pageMetadata } from "@/constants/seo";
import { Clock, Moon, PartyPopper, AlertCircle, CheckCircle2, Info, ImageIcon, ExternalLink, Facebook } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { RestoGallery } from "@/components/resto/RestoGallery";
import { restaurantInfo } from "@/data/restaurant";

const infoAlerts = [
  { title: "الفطور", content: restaurantInfo.breakfast, variant: "info" as const },
  { title: "التيكيات", content: restaurantInfo.tickets, variant: "success" as const },
  { title: "دوبل بلاتو", content: restaurantInfo.doublePlate, variant: "success" as const },
  { title: "السبت", content: restaurantInfo.saturday, variant: "warning" as const },
];

export const metadata = pageMetadata("/resto");

export default function RestoPage() {
  return (
    <PageWrapper seoPath="/resto">
      <StaticPageHeader
        icon="utensils"
        label="خدمات الحرم"
        title="ريستو ISET Zaghouan"
        subtitle="من أحسن الريستوات في تونس — ماكلة نظيفة و كل شي منظم"
        category="campus"
      />

      <MotionReveal delay={0.1} className="mb-7">
        <div
          style={{
            background: "linear-gradient(135deg, rgba(11,31,58,0.04), rgba(18,184,200,0.06))",
            border: "1px solid rgba(18,184,200,0.2)",
            borderRadius: "20px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CheckCircle2 size={22} style={{ color: "#22C55E", flexShrink: 0 }} strokeWidth={2.5} />
            <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>
              {restaurantInfo.rating}
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {restaurantInfo.features.map((f, i) => (
              <span key={i} style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(34,197,94,0.10)", color: "#16A34A", border: "1px solid rgba(34,197,94,0.2)" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </MotionReveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        {[
          { icon: Clock, label: "الغداء", open: restaurantInfo.lunch.open, close: restaurantInfo.lunch.close, note: null, color: "#F97316", bg: "rgba(249,115,22,0.10)" },
          { icon: Moon, label: "العشاء", open: restaurantInfo.dinner.open, close: restaurantInfo.dinner.close, note: restaurantInfo.dinner.note, color: "#8B5CF6", bg: "rgba(139,92,246,0.10)" },
        ].map(({ icon: Icon, label, open, close, note, color, bg }) => (
          <Card key={label} elevation="raised" padding="22px">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{label}</h3>
            </div>
            <div style={{ fontSize: "24px", fontWeight: 800, color, marginBottom: "4px", fontFeatureSettings: '"tnum"' }}>
              {open} — {close}
            </div>
            {note && <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "6px" }}>{note}</p>}
          </Card>
        ))}
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Info size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>معلومات مهمة</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {infoAlerts.map(({ title, content, variant }) => (
            <Alert key={title} title={title} variant={variant}>{content}</Alert>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(24,119,242,0.10)", color: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Facebook size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الصفحة الرسمية على فيسبوك</span>
        </div>
        <Card elevation="flat" padding="20px">
          <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
            إدارة المطعم الجامعي تهبط بانتظام المنيو اليومي، تصاور الأكلات في المناسبات، والإعلانات الطارئة (كيف ما تبديل الأوقات أو الأوراق المطلوبة) على الباج الرسمية فيسبوك.
          </p>
          <a
            href="https://www.facebook.com/RUZaghouan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              background: "#1877F2",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "var(--shadow-hover)",
              transition: "transform var(--transition-fast)",
            }}
          >
            <Facebook size={16} />
            <span>زور الصفحة الرسمية للمطعم الجامعي زغوان</span>
            <ExternalLink size={14} />
          </a>
        </Card>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(139,92,246,0.10)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Moon size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>رمضان في الريستو</span>
        </div>
        <Card elevation="flat" padding="20px">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {restaurantInfo.ramadan.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={15} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PartyPopper size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>المناسبات الخاصة</span>
        </div>
        <Card elevation="flat" padding="20px">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {restaurantInfo.special.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={15} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>نصائح</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {restaurantInfo.tips.map((tip, i) => (
            <Alert key={i} title="" variant="warning">{tip}</Alert>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(249,115,22,0.10)", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>معرض صور الريستو</span>
        </div>
        <RestoGallery />
      </div>
    </PageWrapper>
  );
}
