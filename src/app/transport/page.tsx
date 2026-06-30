import { pageMetadata } from "@/constants/seo";
import { Bus, Phone, Clock, AlertCircle, ExternalLink, MapPin, Globe, Facebook } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card, Alert } from "@/components/ui/shared";
import { PageWrapper } from "@/components/ui/layout";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { TransportBusGallery } from "@/components/transport/TransportBusGallery";
import { transportRoutes, transportTips, transportWarnings, transportAbonnement, transportSrtn } from "@/data/transport";

export const metadata = pageMetadata("/transport");

const typeColors: Record<string, { bg: string; text: string; label: string }> = {
  shared_taxi: { bg: "rgba(246,180,27,0.10)", text: "#B45309", label: "لواج" },
  bus: { bg: "rgba(18,184,200,0.10)", text: "#0E9FAD", label: "كار" },
};

export default function TransportPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="bus"
        label="الحياة الجامعية"
        title="النقل و المواصلات"
        subtitle="كل الطرق باش تروح و تجي من ISET Zaghouan"
        category="life"
      />

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Bus size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>جداول مواعيد الكار الرسمية (SRTN) 🚌</span>
        </div>
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
          {transportSrtn.tip}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "18px" }}>
          <a
            href={transportSrtn.website.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "rgba(18,184,200,0.08)",
              border: "1px solid rgba(18,184,200,0.2)",
              color: "var(--color-secondary)",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Globe size={14} strokeWidth={2} />
            {transportSrtn.website.label}
            <span dir="ltr" style={{ opacity: 0.85 }}>({transportSrtn.website.display})</span>
            <ExternalLink size={12} strokeWidth={2} style={{ opacity: 0.7 }} />
          </a>
          <a
            href={transportSrtn.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "rgba(24,119,242,0.08)",
              border: "1px solid rgba(24,119,242,0.2)",
              color: "#1877F2",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Facebook size={14} strokeWidth={2} />
            {transportSrtn.facebook.label}
            <ExternalLink size={12} strokeWidth={2} style={{ opacity: 0.7 }} />
          </a>
        </div>
        <TransportBusGallery />
      </div>

      <Card elevation="raised" padding="24px" style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MapPin size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>أبونمان زغوان ↔ الايزات</span>
        </div>
        <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.6, marginBottom: "6px" }}>
          {transportAbonnement.place}
        </p>
        <p style={{ fontSize: "13px", color: "var(--color-secondary)", fontWeight: 600, lineHeight: 1.6, marginBottom: "14px" }}>
          {transportAbonnement.amount}
        </p>
        <a
          href={transportAbonnement.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "12px",
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
            color: "#3B82F6",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "16px",
          }}
        >
          <ExternalLink size={14} strokeWidth={2} />
          افتح المندوبية على Google Maps
        </a>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "10px" }}>
          تستحق كاوراق:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {transportAbonnement.docs.map((doc) => (
            <span
              key={doc}
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 500,
                background: "rgba(18,184,200,0.08)",
                color: "var(--color-secondary)",
                border: "1px solid rgba(18,184,200,0.2)",
              }}
            >
              {doc}
            </span>
          ))}
        </div>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
        {transportRoutes.map((route, i) => {
          const typeStyle = typeColors[route.type] || typeColors.bus;
          return (
            <MotionReveal key={route.id} delay={i * 0.07}>
              <Card elevation="raised" padding="24px">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: typeStyle.bg, color: typeStyle.text }}>
                        {typeStyle.label}
                      </span>
                      <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{route.name}</h3>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                      {route.from} ← {route.to}
                    </p>
                  </div>
                  {route.fare != null && (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-primary)", fontFeatureSettings: '"tnum"' }}>
                        {route.fare}
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontWeight: 500 }}>{route.fareUnit}</div>
                    </div>
                  )}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(18,184,200,0.08)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Clock size={13} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{route.schedule}</span>
                  </div>
                  {route.contact && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Phone size={13} strokeWidth={2} />
                      </div>
                      <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                        {route.contact.name}: <a href={`tel:${route.contact.phone}`} style={{ color: "var(--color-secondary)", fontWeight: 600, textDecoration: "none" }}>{route.contact.phone}</a>
                      </span>
                    </div>
                  )}
                </div>

                <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{route.notes}</p>

                {route.abonnement && (
                  <div style={{ marginTop: "12px", padding: "10px 14px", borderRadius: "10px", background: "rgba(18,184,200,0.06)", border: "1px solid rgba(18,184,200,0.15)", fontSize: "13px", color: "var(--color-secondary)", fontWeight: 500 }}>
                    🎫 أبونمان: {route.abonnement}
                  </div>
                )}
              </Card>
            </MotionReveal>
          );
        })}
      </div>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>بالليل و بعد العشية</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {transportWarnings.map((warning) => (
            <Alert key={warning.title} title={warning.title} variant="warning">{warning.text}</Alert>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>نصائح النقل</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {transportTips.map((tip, i) => (
            <Alert key={i} title="" variant="info">{tip}</Alert>
          ))}
        </div>
      </div>

      <Alert title="Google Sheets — Louage & Na9l Zaghouan" variant="success">
        <a
          href="https://docs.google.com/spreadsheets"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-secondary)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px", textDecoration: "none" }}
        >
          افتح الجدول <ExternalLink size={13} />
        </a>
      </Alert>
    </PageWrapper>
  );
}
