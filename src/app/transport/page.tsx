"use client";

import { motion } from "framer-motion";
import {
  Bus, Phone, Clock, AlertCircle, ExternalLink,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { transportRoutes, transportTips } from "@/data/transport";
import { PhotoGallery } from "@/components/ui/Lightbox";

const busScheduleImages = [
  "/images/BUS (1).webp",
  "/images/BUS (2).webp",
  "/images/BUS (3).webp",
  "/images/BUS (4).webp",
];

const typeColors: Record<string, { bg: string; text: string; label: string }> = {
  shared_taxi: { bg: "rgba(246,180,27,0.10)", text: "#B45309", label: "لواج"  },
  bus:          { bg: "rgba(18,184,200,0.10)", text: "#0E9FAD", label: "كار"   },
};

export default function TransportPage() {

  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 32px" }}>
        <PageHeader
          icon={Bus}
          label="الحياة الجامعية"
          title="النقل و المواصلات"
          subtitle="كل الطرق باش تروح و تجي من ISET Zaghouan"
          category="life"
        />

        {/* Routes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
          {transportRoutes.map((route, i) => {
            const typeStyle = typeColors[route.type] || typeColors.bus;
            return (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Card elevation="raised" padding="24px">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "12px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: "999px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background: typeStyle.bg,
                            color: typeStyle.text,
                          }}
                        >
                          {typeStyle.label}
                        </span>
                        <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--color-text)" }}>{route.name}</h3>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                        {route.from} ← {route.to}
                      </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-primary)", fontFeatureSettings: '"tnum"' }}>
                        {route.fare}
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontWeight: 500 }}>{route.fareUnit}</div>
                    </div>
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
              </motion.div>
            );
          })}
        </div>

        {/* Official Bus Timetables */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bus size={16} strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>جداول مواعيد الكار الرسمية (SRTN) 🚌</span>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>اضغط على الصورة باش تكبّرها</p>
            </div>
          </div>
          <PhotoGallery images={busScheduleImages} thumbHeight={280} minColWidth={220} />
        </div>

        {/* Tips */}
        <div style={{ marginBottom: "28px" }}>
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

        {/* Contact card */}
        <Card elevation="flat" padding="24px" className="mb-6">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Phone size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>أرقام مهمة</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { name: "لواجيست قيس", phone: "98202339" },
              { name: "النقل المحلي",  phone: "900"      },
            ].map(({ name, phone }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: "12px", background: "var(--color-background)" }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text)" }}>{name}</span>
                <a
                  href={`tel:${phone}`}
                  style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-secondary)", textDecoration: "none" }}
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </Card>

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
      </div>
    </AppLayout>
  );
}
