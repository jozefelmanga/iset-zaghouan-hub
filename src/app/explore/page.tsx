import { BookOpen, Mountain } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Card } from "@/components/ui/Card";
import { PageWrapper } from "@/components/ui/layout";
import {
  ExploreHeroBanner,
  ExploreStudySpots,
  ExploreCafeTags,
  ExploreMountainGuide,
  ExploreYoutubeSection,
  ExplorePhotoGallerySection,
} from "@/components/explore/ExploreSections";
import { exploreZaghouan } from "@/data/explore";
import { exploreServiceIcons } from "@/lib/iconMaps";

export default function ExplorePage() {
  const { coordinates, nearbyServices } = exploreZaghouan;

  return (
    <PageWrapper className="max-w-[960px]">
      <StaticPageHeader
        icon="map-pin"
        label="اكتشاف"
        title="اكتشف زغوان"
        subtitle="بلاد مليانة بتاريخها و جبلها و انهجها المزيانة"
        category="campus"
      />

      <ExploreHeroBanner />
      <ExploreStudySpots />
      <ExploreCafeTags />

      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>خدمات قريبة</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
          {nearbyServices.map(({ icon, label, color, bg }) => {
            const Icon = exploreServiceIcons[icon];
            return (
              <div
                key={label}
                style={{
                  padding: "18px 14px",
                  background: "var(--color-surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text)" }}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Card elevation="flat" padding="0">
        <div
          style={{
            aspectRatio: "16/7",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg viewBox="0 0 800 160" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "60px", opacity: 0.2 }}>
            <path d="M0,160 L0,100 L100,50 L200,80 L300,20 L400,55 L500,30 L600,65 L700,20 L800,50 L800,160 Z" fill="white" />
          </svg>
          <div className="animate-mountain" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Mountain size={40} style={{ color: "rgba(18,184,200,0.5)", margin: "0 auto 12px" }} strokeWidth={1.5} />
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
              خريطة زغوان (OpenStreetMap)
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>{coordinates.label}</p>
          </div>
        </div>
      </Card>

      <ExploreMountainGuide />
      <ExploreYoutubeSection />
      <ExplorePhotoGallerySection />
    </PageWrapper>
  );
}
