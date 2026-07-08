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
import { ClubHeroBanner } from "@/components/clubs/ClubHeroBanner";
import { PageWrapper } from "@/components/ui/layout";
import { PhotoGallery } from "@/components/ui/Lightbox";

const IEEE_COLOR = "#00629B";
const IEEE_BASE = "/images/clubs/ieee";

const galleryImages = [
  ...Array.from({ length: 11 }, (_, i) => `${IEEE_BASE}/ieee (${i + 1}).webp`),
  ...Array.from({ length: 7 }, (_, i) => `${IEEE_BASE}/ieee-images (${i + 1}).webp`),
];

const objectives = [
  "بناء مجتمع IEEE نشط في ISET Zaghouan من خلال ورشات، تكوينات، و skill-building workouts بشكل مستمر.",
  "تطوير الـ Hard Skills والـ Soft Skills: من المعرفة التقنية إلى التواصل، teamwork، leadership، و problem-solving.",
  "ربط الأعضاء بشبكة IEEE العالمية وفتح فرص للتعلّم، القيادة، التطوع، والتطور المهني.",
  "فتح المجال لكل الأقسام والتخصصات للمشاركة، إيمانًا بروح IEEE في التعاون وتبادل الخبرات.",
  "تشجيع الأعضاء على المشاركة في TSYP، أنشطة IEEE Tunisia Section، والمسابقات والتظاهرات السنوية متاع IEEE.",
];

const events = [
  "Workshops",
  "Training Sessions",
  "Skill-building",
  "Projects",
  "TSYP",
  "IEEE Tunisia Section",
];

export function IeeePageContent() {
  return (
    <>
      <ClubHeroBanner
        bannerSrc={`${IEEE_BASE}/banner-ieee.webp`}
        bannerAlt="IEEE ISET Zaghouan SB Cover"
        logoSrc={`${IEEE_BASE}/Logo-IEEE.webp`}
        logoAlt="IEEE ISET Zaghouan SB Logo"
        title="IEEE ISET Zaghouan Student Branch"
        subtitle="Advancing technology for humanity. ⚡🔬"
      />

      <PageWrapper narrow className="pt-0! flex flex-col gap-8">
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Code size={20} style={{ color: IEEE_COLOR }} />
            شكون أحنا؟ (Who Are We?)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "12px" }}>
            <strong>IEEE ISET Zaghouan Student Branch</strong> فرع جامعي تابع للـ Institute of Electrical and Electronics Engineers (IEEE) —
            أكبر منظمة مهنية تقنية في العالم. الـ Student Branch مجتمع طلابي يربط الأعضاء بالشبكة العالمية لـ IEEE
            ويشجّع الابتكار، التعلّم التقني، القيادة، و التطور المهني.
          </p>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "12px" }}>
            تأسّس الفرع سنة <strong>2026</strong> باش يخلق مجتمع فاعل في ISET Zaghouan عبر تنظيم workshops، training sessions،
            skill-building workouts، و events تساعد الطلبة والمهندسين في المستقبل يطوّرو المهارات اللازمة للدخول والنمو في عالم الشغل.
          </p>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            IEEE ISET Zaghouan SB فضاء باش تتعلّم، تتعاون، تبني projects، وتحضّر روحك للمسار المهني —
            مع تركيز على hard skills و soft skills، وانفتاح على كل الأقسام مو بس الإعلامية.
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(0,98,155,0.08)",
              border: "1px solid rgba(0,98,155,0.18)",
              color: IEEE_COLOR,
              fontSize: "12.5px",
              fontWeight: 600,
            }}
          >
            تأسيس: 2026
          </span>
        </Card>

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
        <PhotoGallery images={galleryImages} initialVisibleCount={12} altPrefix="IEEE" />
      </div>
      </PageWrapper>
    </>
  );
}
