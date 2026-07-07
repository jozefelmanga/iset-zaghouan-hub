"use client";

import {
  ImageIcon,
  Briefcase,
  Trophy,
} from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { ClubHeroBanner } from "@/components/clubs/ClubHeroBanner";
import { PageWrapper } from "@/components/ui/layout";
import { PhotoGallery } from "@/components/ui/Lightbox";

const images = [
  "/images/procegenius club/gpr club (1).webp",
  "/images/procegenius club/gpr club (2).webp",
  "/images/procegenius club/gpr club (3).webp",
  "/images/procegenius club/gpr club (4).webp",
  "/images/procegenius club/gpr club (5).webp",
  "/images/procegenius club/gpr club (6).webp",
  "/images/procegenius club/gpr club (7).webp",
  "/images/procegenius club/gpr club (8).webp",
  "/images/procegenius club/gpr club (9).webp",
  "/images/procegenius club/gpr club (10).webp",
  "/images/procegenius club/gpr club (11).webp",
];

const projects = [
  {
    name: "فورماسيون في صناعة الحليب والأجبان 🧀",
    desc: "حصص تطبيقية ونظرية باش تتعلّم وتتمكن من تقنيات صنع منتوجات الحليب والأجبان خطوة بخطوة.",
  },
  {
    name: "تطوير مواد التجميل الطبيعية 🌿",
    desc: "ورشات ومشاريع تركز على ابتكار وتطوير منتوجات تجميل (Cosmétiques) من مواد طبيعية، مع احترام معايير الجودة.",
  },
];

export function ProceGeniusPageContent() {
  return (
    <>
      <ClubHeroBanner
        bannerSrc="/images/procegenius club/banner.webp"
        bannerAlt="ProceGenius Cover"
        logoSrc="/images/procegenius club/logo.webp"
        logoAlt="ProceGenius Logo"
        title="Club ProceGenius"
        subtitle="Innovation et Excellence en Génie des Procédés"
        objectPosition="center center"
        logoObjectFit="contain"
      />

      <PageWrapper narrow className="pt-0! flex flex-col gap-8">
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Briefcase size={20} style={{ color: "#22C55E" }} />
            شكون أحنا؟
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong>ProceGenius</strong> هو نادي علمي يلم المغرومين بهندسة العمليات (Génie des Procédés) باش يطورو مهاراتهم، يبارطاجيو معرفتهم، ويشجعو على الابتكار من خلال دي فورماسيون، مشاريع، وأنشطة تزيد في خبرتهم.
          </p>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            النادي هذا يركّز على الجانب الأكاديمي والبحث العلمي والابتكار للطلبة، ويوفر بيئة تعاونية تخليك تتعلّم بالتطبيق وتتميز في الدومان متاعك.
          </p>
        </Card>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "32px" }}>
          <Card elevation="raised" padding="24px">
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Trophy size={18} style={{ color: "#22C55E" }} />
              أهم المشاريع متاعنا
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {projects.map((proj, idx) => (
                <div key={idx} style={{ padding: "16px", borderRadius: "10px", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)" }}>
                  <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)", marginBottom: "8px" }}>{proj.name}</h4>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{proj.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
            معرض الصور والذكريات
          </h2>
          <PhotoGallery images={images} initialVisibleCount={8} altPrefix="ProceGenius" />
        </div>
      </PageWrapper>
    </>
  );
}
