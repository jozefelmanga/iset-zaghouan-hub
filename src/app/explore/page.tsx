import { pageMetadata } from "@/constants/seo";
import { BookOpen } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
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

export const metadata = pageMetadata("/explore");

export default function ExplorePage() {
  const { nearbyServices } = exploreZaghouan;

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

      <ExploreMountainGuide />
      <ExploreYoutubeSection />
      <ExplorePhotoGallerySection />
    </PageWrapper>
  );
}
