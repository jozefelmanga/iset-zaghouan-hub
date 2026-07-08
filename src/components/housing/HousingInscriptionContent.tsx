"use client";

import {
  Key, ImageIcon, ExternalLink, Globe, ArrowLeft,
} from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";
import { housingProcess, housingRegistration } from "@/data/housing";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { HousingCrossLink } from "@/components/housing/HousingCrossLink";

const housingDocsGallery = [
  { src: "/images/foyer/inscription (1).webp", alt: "دليل معلومات المبيت الجامعي (1)" },
  { src: "/images/foyer/inscription (2).webp", alt: "دليل معلومات المبيت الجامعي (2)" },
] as const;

export function HousingInscriptionContent() {
  return (
    <>
      <HousingCrossLink variant="to-foyers" />

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Globe size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>كيفاش ترسّم في المبيت؟</span>
        </div>

        <Alert title="قبل ما تختار الفواي" variant="info">
          باهي، أول حاجة تسجّل في المبيت عن بعد، تحضّر أوراقك، و بعد تختار فواي البنات ولا الأولاد حسب الجواب.
        </Alert>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "20px" }}>
          {housingRegistration.map((phase, i) => (
            <Card key={phase.id} elevation="raised" padding="22px">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "12px", flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: "var(--color-text)" }}>{phase.title}</h3>
                </div>
                {phase.url && (
                  <a
                    href={phase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      fontSize: "12px", fontWeight: 600, color: "var(--color-secondary)",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={13} strokeWidth={2} />
                    افتح الموقع
                  </a>
                )}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {phase.steps.map((step, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <ArrowLeft size={14} style={{ color: "var(--color-secondary)", marginTop: "4px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(34,197,94,0.10)", color: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>دليل وثائق ومعلومات المبيت الجامعي 📋</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {housingDocsGallery.map(({ src, alt }) => (
              <Card key={src} elevation="raised" padding="16px">
                <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "12px", height: "200px" }}>
                  <ZoomableImage
                    src={src}
                    alt={alt}
                    galleryImages={housingDocsGallery.map((img) => img.src)}
                    galleryAlts={housingDocsGallery.map((img) => img.alt)}
                    style={{ height: "100%" }}
                  />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", textAlign: "center" }}>{alt}</h4>
              </Card>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(11,31,58,0.06)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Key size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>يوم الترسيم في الفواي</span>
          </div>
          <Card elevation="flat" padding="24px">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {housingProcess.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "12px", flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.6, paddingTop: "4px" }}>{step}</p>
                </div>
              ))}
            </div>
          </Card>
          <div style={{ marginTop: "14px" }}>
            <Alert title="على التوصيل" variant="warning">
              فما عندك توصيل تاخد نهارت إنسكري فوياي: آخر لعام كيف تجي باش تراجع مفتاح يمشيو معاك يتفقدو البيت اللي منقصة شيء ولا مكسرت شيء عام كامل، وبالتوصيل أذاكا لأوريجينال تاخو 20 دينار.
            </Alert>
          </div>
        </div>
      </div>
    </>
  );
}
