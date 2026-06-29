"use client";

import {
  Heart,
  Calendar,
  ImageIcon,
  CheckCircle2,
  Award,
} from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";
import { ClubHeroBanner } from "@/components/clubs/ClubHeroBanner";

const SOS_COLOR = "#E30613";
const IMAGE_BASE = "/images/Club ambassadeurs sos village";

const objectives = [
  "نشر ثقافة التضامن والعمل التطوعي داخل وخارج المعهد.",
  "الدفاع عن حق كل طفل في النمو داخل بيئة آمنة وداعمة.",
  "إيلاء اهتمام خاص بالأطفال فاقدي السند والفئات الأكثر هشاشة.",
  "تنظيم تظاهرات ثقافية وتوعوية وخيرية وترفيهية على مدار السنة.",
  "ترسيخ قيم المواطنة والمسؤولية الاجتماعية وإحداث أثر إيجابي ومستدام.",
];

const events = [
  "مائدة الخير",
  "صُنّاع الأمل",
  "كسوة العيد",
  "حملات تضامنية",
  "تظاهرات ثقافية",
  "شهر التراث",
];

const highlights = [
  {
    title: "مائدة الخير",
    desc: "مائدة إفطار جماعية خلال شهر رمضان لكبار السن والأشخاص في وضعيات هشة، تخلّتها سهرة موسيقية بالمدينة العتيقة بزغوان.",
  },
  {
    title: "صُنّاع الأمل",
    desc: "بالشراكة مع مدرسة المغرب — زيارات ميدانية لمؤسسات رعاية الأطفال واليافعين من ذوي الإعاقة الذهنية وأنشطة ترفيهية وتربوية.",
  },
  {
    title: "كسوة العيد",
    desc: "بالتعاون مع نادي سفراء SOS بـ ISET زغوان — جمع ملابس جديدة أو بحالة جيدة وتوزيعها على العائلات محدودة الدخل بمناسبة عيد الفطر.",
  },
  {
    title: "الساحة الثقافية",
    desc: "مشاركة في فعاليات افتتاح شهر التراث وجلسات عمل رسمية بمقر الولاية لمناقشة مبادرات شبابية ومجتمعية.",
  },
];

const GALLERY_PLACEHOLDER_COUNT = 6;

export function SosAmbassadeursPageContent() {
  return (
    <>
      <ClubHeroBanner
        bannerSrc={`${IMAGE_BASE}/banner-sos.webp`}
        bannerAlt="Club Ambassadeurs SOS Village Cover"
        logoSrc={`${IMAGE_BASE}/logo-SOS.webp`}
        logoAlt="Club Ambassadeurs SOS Village Logo"
      />

      <div style={{ marginBottom: "32px" }}>
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Heart size={20} style={{ color: SOS_COLOR }} />
            شكون أحنا؟ (Who Are We?)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong>نادي سفراء قرى الأطفال SOS بـ ISET Zaghouan</strong> فضاء طلابي تطوعي ينتمي لشبكة نوادي سفراء قرى الأطفال SOS
            المنتشرة بمختلف ولايات الجمهورية، ويعمل تحت إشراف جمعية قرى الأطفال SOS تونس.
            يهدف لنشر ثقافة التضامن والعمل التطوعي، والدفاع عن حق كل طفل في النمو داخل بيئة آمنة وداعمة.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            <span
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(227,6,19,0.08)",
                border: "1px solid rgba(227,6,19,0.18)",
                color: SOS_COLOR,
                fontSize: "12.5px",
                fontWeight: 600,
              }}
            >
              تأسيس: 1 جانفي 2026
            </span>
            <span
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(11,31,58,0.05)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                fontSize: "12.5px",
                fontWeight: 600,
              }}
            >
              Raise the voice and make the choice
            </span>
          </div>
          <Alert title="جائزة وطنية 2026" variant="success">
            أفضل نادٍ صاعد على المستوى الوطني خلال حفل اختتام السنة الجمعياتية لشبكة نوادي سفراء قرى الأطفال SOS بصفاقس.
          </Alert>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle2 size={18} style={{ color: SOS_COLOR }} />
            أهدافنا
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: SOS_COLOR, fontSize: "14px", fontWeight: "bold" }}>✓</span>
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{obj}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Calendar size={18} style={{ color: "var(--color-secondary)" }} />
            أنشطة ومبادرات
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {events.map((ev) => (
              <span
                key={ev}
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(227,6,19,0.08)",
                  border: "1px solid rgba(227,6,19,0.18)",
                  color: SOS_COLOR,
                  fontSize: "12.5px",
                  fontWeight: 600,
                }}
              >
                {ev}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Award size={20} style={{ color: SOS_COLOR }} />
          أبرز المبادرات
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {highlights.map((item) => (
            <Card key={item.title} elevation="raised" padding="20px">
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
          معرض الصور والذكريات
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "12px",
          }}
        >
          {Array.from({ length: GALLERY_PLACEHOLDER_COUNT }, (_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                borderRadius: "12px",
                border: "2px dashed var(--color-border)",
                background: "rgba(11,31,58,0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "var(--color-text-muted)",
              }}
            >
              <ImageIcon size={28} style={{ opacity: 0.4 }} />
              <span style={{ fontSize: "12px", fontWeight: 600 }}>صور قريباً</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
