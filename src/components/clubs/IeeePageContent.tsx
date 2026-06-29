"use client";

import {
  Code,
  Calendar,
  ImageIcon,
  Facebook,
  Instagram,
  Mail,
  CheckCircle2,
} from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { FullBleed } from "@/components/ui/layout";
import { ZoomableImage } from "@/components/ui/Lightbox";

const IEEE_COLOR = "#00629B";

const objectives = [
  "مجتمع طلابي يحمل روح IEEE، أكبر منظمة تقنية في العالم.",
  "تعزيز التعلّم والابتكار عبر ورشات ومشاريع وأحداث تقنية.",
  "تشجيع التعاون والعمل الجماعي بين الطلبة من مختلف التخصصات.",
  "ربط الطلبة بشبكة IEEE العالمية وفرصها المهنية والعلمية.",
  "تطوير مهارات تقنية ومهنية تخدم المسار الجامعي والمهني.",
];

const events = ["Workshops", "Projects", "Technical Events", "Trainings", "Journée d'intégration"];

const GALLERY_PLACEHOLDER_COUNT = 6;

export function IeeePageContent() {
  return (
    <>
      <FullBleed style={{ height: "240px", marginBottom: "32px" }}>
        <ZoomableImage
          fill
          src="/images/IEEE/banner-ieee.jpg"
          alt="IEEE ISET Zaghouan SB Cover"
          objectPosition="center center"
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(11,31,58,0.25), rgba(11,31,58,0.85))" }} />
        <div style={{ position: "absolute", bottom: "24px", right: "32px", left: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", pointerEvents: "none" }}>
          <ZoomableImage
            src="/images/IEEE/Logo-IEEE.jpg"
            alt="IEEE ISET Zaghouan SB Logo"
            hideHint
            style={{ width: "80px", height: "80px", borderRadius: "16px", border: "2px solid #fff", background: "#fff", pointerEvents: "auto" }}
          />
        </div>
      </FullBleed>

      <div style={{ marginBottom: "32px" }}>
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Code size={20} style={{ color: IEEE_COLOR }} />
            شكون أحنا؟ (Who Are We?)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong>IEEE ISET Zaghouan SB</strong> مجتمع طلابي يحمل روح IEEE — أكبر منظمة تقنية في العالم.
            نعزّزو التعلّم والابتكار والتعاون عبر ورشات، مشاريع، وأحداث تقنية باش تطوّرو مهاراتكم وتربطو بالشبكة العالمية لـ IEEE.
          </p>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle2 size={18} style={{ color: IEEE_COLOR }} />
            أهدافنا
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: IEEE_COLOR, fontSize: "14px", fontWeight: "bold" }}>✓</span>
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{obj}</span>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px" }}>روابط النادي</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://www.facebook.com/share/19AyKnXsGe/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#1877F2", padding: "10px",
                  borderRadius: "10px", background: "rgba(24,119,242,0.06)", border: "1px solid rgba(24,119,242,0.18)",
                  fontWeight: 600,
                }}
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/ieee_iset_zaghouan_sb?igsh=MWxtMGIxdG9kd2ZuZg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#E4405F", padding: "10px",
                  borderRadius: "10px", background: "rgba(228,64,95,0.06)", border: "1px solid rgba(228,64,95,0.18)",
                  fontWeight: 600,
                }}
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:ieeeisetz@gmail.com"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: IEEE_COLOR, padding: "10px",
                  borderRadius: "10px", background: "rgba(0,98,155,0.06)", border: "1px solid rgba(0,98,155,0.18)",
                  fontWeight: 600,
                }}
              >
                <Mail size={16} />
                <span>ieeeisetz@gmail.com</span>
              </a>
            </div>
          </Card>

          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} style={{ color: "var(--color-secondary)" }} />
              الأنشطة والفعاليات
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {events.map((ev) => (
                <span
                  key={ev}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(0,98,155,0.08)",
                    border: "1px solid rgba(0,98,155,0.18)",
                    color: IEEE_COLOR,
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {ev}
                </span>
              ))}
            </div>
          </Card>
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
