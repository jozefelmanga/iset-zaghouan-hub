import { pageMetadata } from "@/constants/seo";
import { WebsiteJsonLd } from "@/components/seo/WebsiteJsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { Container } from "@/components/ui/layout";
import { StudentJourneySection } from "@/components/sections/StudentJourneySection";
import { ExternalResourcesSection } from "@/components/sections/ExternalResourcesSection";
import { OfficialChannelsSection } from "@/components/sections/OfficialChannelsSection";
import { TipsCarouselSection } from "@/components/sections/TipsCarouselSection";
import { SunsetMomentsSection } from "@/components/sections/SunsetMomentsSection";

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
        <SunsetMomentsSection />
        <OfficialChannelsSection />
        <TipsCarouselSection />
      </Container>
    </>
  );
}
