import dynamic from "next/dynamic";
import { pageMetadata } from "@/constants/seo";
import { WebsiteJsonLd } from "@/components/seo/WebsiteJsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { Container } from "@/components/ui/layout";

const StudentJourneySection = dynamic(
  () =>
    import("@/components/sections/StudentJourneySection").then((mod) => ({
      default: mod.StudentJourneySection,
    })),
  { loading: () => <HomeSectionPlaceholder /> }
);

const ExternalResourcesSection = dynamic(
  () =>
    import("@/components/sections/ExternalResourcesSection").then((mod) => ({
      default: mod.ExternalResourcesSection,
    })),
  { loading: () => <HomeSectionPlaceholder /> }
);

const OfficialChannelsSection = dynamic(
  () =>
    import("@/components/sections/OfficialChannelsSection").then((mod) => ({
      default: mod.OfficialChannelsSection,
    })),
  { loading: () => <HomeSectionPlaceholder /> }
);

const TipsCarouselSection = dynamic(
  () =>
    import("@/components/sections/TipsCarouselSection").then((mod) => ({
      default: mod.TipsCarouselSection,
    })),
  { loading: () => <HomeSectionPlaceholder /> }
);

function HomeSectionPlaceholder() {
  return (
    <div
      className="shimmer my-10 rounded-[20px]"
      style={{ minHeight: "220px" }}
      aria-hidden="true"
    />
  );
}

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />
      <HeroSection />

      <Container size="content">
        <QuickAccessSection />
        <StudentJourneySection />
        <ExternalResourcesSection />
        <OfficialChannelsSection />
        <TipsCarouselSection />
      </Container>
    </>
  );
}
