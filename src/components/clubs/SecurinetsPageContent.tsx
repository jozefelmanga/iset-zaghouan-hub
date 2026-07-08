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

const SECURINETS_BASE = "/images/clubs/securinets";

const newImages = Array.from(
  { length: 20 },
  (_, i) => `${SECURINETS_BASE}/securinets25-26 (${i + 1}).webp`,
);

const legacyImages = [
  `${SECURINETS_BASE}/441071033_849605910531258_8993167707782432578_n.webp`,
  `${SECURINETS_BASE}/437521945_834428192049030_3695829590512408431_n.webp`,
  `${SECURINETS_BASE}/432267068_807582028066980_6785664168943555115_n.webp`,
  `${SECURINETS_BASE}/432256475_807580918067091_4635179164230998822_n.webp`,
  `${SECURINETS_BASE}/432260492_807580244733825_3046981252408012495_n.webp`,
  `${SECURINETS_BASE}/432228120_807580778067105_1639265937168775195_n.webp`,
  `${SECURINETS_BASE}/432214445_807580068067176_5301764264651567123_n.webp`,
  `${SECURINETS_BASE}/424628009_782265043932012_7027532546870227355_n.webp`,
  `${SECURINETS_BASE}/417369437_772731631552020_4160951096701340662_n.webp`,
  `${SECURINETS_BASE}/414542896_768392331985950_3110878637361875773_n.webp`,
  `${SECURINETS_BASE}/409495600_750185443806639_2405482469459673984_n.webp`,
  `${SECURINETS_BASE}/401586524_746133030878547_3803472748462088747_n.webp`,
  `${SECURINETS_BASE}/393163761_746133134211870_2032123782391286652_n.webp`,
  `${SECURINETS_BASE}/331726727_705513661360896_1885203088791651240_n.webp`,
  `${SECURINETS_BASE}/318330240_517785723713280_4975689056961619346_n.webp`,
  `${SECURINETS_BASE}/315469869_503878761770643_8193283586596288796_n.webp`,
  `${SECURINETS_BASE}/312483262_485631963595323_2330322814186718250_n.webp`,
  `${SECURINETS_BASE}/311782107_485631633595356_7091234103297781908_n.webp`,
  `${SECURINETS_BASE}/311382146_485631433595376_8742838079895826476_n.webp`,
];

const images = [...newImages, ...legacyImages];

const events = ["Workshops", "Hackathons", "CTFs (Capture The Flag)", "Trainings", "Journée d'intégration"];

export function SecurinetsPageContent() {
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
        <PhotoGallery images={images} initialVisibleCount={12} />
      </div>
      </PageWrapper>
    </>
  );
}
