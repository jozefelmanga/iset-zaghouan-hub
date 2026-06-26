"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed, Clock, Moon, PartyPopper, AlertCircle, CheckCircle2, Info, Image as ImageIcon,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { restaurantInfo } from "@/data/restaurant";
import { PhotoGallery } from "@/components/ui/Lightbox";

const restoGallery = [
  "/images/resto/371527086_904949321200406_1134362893325108449_n.webp",
  "/images/resto/384468499_1363084464623039_3774851736127321230_n.webp",
  "/images/resto/431097080_1102250597867429_3665802287282126026_n.webp",
  "/images/resto/452496697_506115055248290_5586234887425228049_n.webp",
  "/images/resto/452622640_858801205682658_416543670098985251_n.webp",
  "/images/resto/452736506_3911072702545431_3779990491100443511_n.webp",
  "/images/resto/452920444_415170661543729_2332261566496078674_n.webp",
  "/images/resto/452920448_3600857916726754_1186997552378065683_n.webp",
  "/images/resto/452928724_3741483516110041_5347479503040691555_n.webp",
  "/images/resto/453104172_1029486222017766_5937854181672229182_n.webp",
  "/images/resto/453140722_1030879281894008_8923271805899964654_n.webp",
  "/images/resto/453522645_3869696696643283_1376678729931441278_n.webp",
  "/images/resto/453842836_1461204151944303_9219215351889549221_n.webp",
  "/images/resto/453924515_1455355485860046_366463281082871930_n.webp",
];

export default function RestoPage() {
  const mealTimes = [
    { icon: Clock, label: "الغداة",  open: restaurantInfo.lunch.open,  close: restaurantInfo.lunch.close,  note: null,                        color: "#F97316", bg: "rgba(249,115,22,0.10)" },
    { icon: Moon,  label: "العشاء",  open: restaurantInfo.dinner.open, close: restaurantInfo.dinner.close, note: restaurantInfo.dinner.note,  color: "#8B5CF6", bg: "rgba(139,92,246,0.10)" },
  ];

  const infoAlerts = [
    { title: "الفطور",       content: restaurantInfo.breakfast,  variant: "info"    as const },
    { title: "التيكيات",     content: restaurantInfo.tickets,    variant: "success" as const },
    { title: "دوبل بلاتو",   content: restaurantInfo.doublePlate,variant: "success" as const },
    { title: "السبت",        content: restaurantInfo.saturday,   variant: "warning" as const },
  ];

  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 32px" }}>
        <PageHeader
          icon={UtensilsCrossed}
          label="خدمات الحرم"
          title="ريستو ISET Zaghouan"
          subtitle="من أحسن الريستوات في تونس — ماكلا نظيفة و كل شي منظم"
          category="campus"
        />

        {/* Rating banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: "28px" }}
        >
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
                <span
                  key={i}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "rgba(34,197,94,0.10)",
                    color: "#16A34A",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meal times */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginBottom: "28px" }}>
          {mealTimes.map(({ icon: Icon, label, open, close, note, color, bg }) => (
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
              {note && (
                <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "6px" }}>{note}</p>
              )}
            </Card>
          ))}
        </div>

        {/* Info alerts */}
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

        {/* Ramadan */}
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

        {/* Special occasions */}
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

        {/* Tips */}
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

        {/* Photo Gallery */}
        <div style={{ marginTop: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(249,115,22,0.10)", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>معرض صور الريستو</span>
          </div>
          <PhotoGallery images={restoGallery} />
        </div>
      </div>
    </AppLayout>
  );
}
