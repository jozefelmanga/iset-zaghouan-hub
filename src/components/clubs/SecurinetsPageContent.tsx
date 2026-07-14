"use client";

import {
  Globe,
  Shield,
  Calendar,
  ImageIcon,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "@/lib/icons";
import { Card, Alert } from "@/components/ui/shared";
import { ClubHeroBanner } from "@/components/clubs/ClubHeroBanner";
import { PageWrapper } from "@/components/ui/layout";
import { PhotoGallery } from "@/components/ui/Lightbox";

const events = ["Workshops", "Hackathons", "CTFs (Capture The Flag)", "Trainings", "Journée d'intégration"];

interface Props {
  galleryImages: string[];
}

export function SecurinetsPageContent({ galleryImages }: Props) {
  return (
    <>
      <ClubHeroBanner
        bannerSrc="/images/clubs/securinets/414471318_762084249283425_5669816558873673442_n.webp"
        bannerAlt="SecuriNets Cover"
        logoSrc="/images/clubs/securinets/307089995_5896662463700630_57012804199137690_n.webp"
        logoAlt="SecuriNets Logo"
        title="SecuriNets ISET Zaghouan"
        subtitle="Defending today, securing tomorrow. 🛡️🚀"
        objectPosition="center 93%"
        logoBackground="#000"
        gradientTop={0.2}
      />

      <PageWrapper narrow className="pt-0! flex flex-col gap-8">
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Shield size={20} style={{ color: "#F6B41B" }} />
            شكون أحنا؟ (Who Are We?)
          </h2>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            جمعية <strong>SecuriNets</strong> الوطنية تأسست في 2003، وهي أكبر جمعية ومجتمع في تونس كامل متع الأمن السيبراني.
            فرع ISET زغوان انفتح في 2016 من مجموعة طلبة شغوفين بالـ <code style={{ color: "#3B82F6", fontWeight: 600 }}>Cybersecurity</code>.
          </p>
          <Alert title="ملاحظة مهمة" variant="info">
            فريق SecuriNets ما يقتصرش على طلبة الإعلامية (IT) — التكوينات متاعنا مفتوحة للكل من كافة التخصصات والسنوات باش يشاركو ويتعلّمو.
          </Alert>
        </Card>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Globe size={18} style={{ color: "var(--color-secondary)" }} />
            مواقع التواصل الاجتماعي
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Facebook", icon: Facebook, link: "https://www.facebook.com/SecuriNets.ZG", color: "#1877F2" },
              { label: "Instagram", icon: Instagram, link: "https://www.instagram.com/securinets_iset_zaghouan/", color: "#E4405F" },
              { label: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/company/securinets-iset-zaghouan/", color: "#0A66C2" },
              { label: "Website", icon: ExternalLink, link: "https://securinets.tn/", color: "var(--color-secondary)" },
            ].map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.label}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    background: "rgba(11,31,58,0.03)",
                    border: "1px solid var(--color-border)",
                    fontWeight: 500,
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = soc.color;
                    (e.currentTarget as HTMLAnchorElement).style.color = soc.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                  }}
                >
                  <Icon size={16} />
                  <span>{soc.label}</span>
                </a>
              );
            })}
          </div>
        </Card>

        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Calendar size={18} style={{ color: "var(--color-secondary)" }} />
            أنشطة وفعاليات النادي
          </h3>
          <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "14px" }}>
            كل عام ننظّمو برشا تظاهرات ومنافسات:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {events.map((ev) => (
              <span
                key={ev}
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(246,180,27,0.08)",
                  border: "1px solid rgba(246,180,27,0.18)",
                  color: "#B45309",
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

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
          معرض الصور والذكريات
        </h2>
        <PhotoGallery images={galleryImages} initialVisibleCount={12} />
      </div>
      </PageWrapper>
    </>
  );
}
