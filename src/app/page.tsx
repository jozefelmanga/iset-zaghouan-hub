import dynamic from "next/dynamic";
import { pageMetadata } from "@/constants/seo";
import { WebsiteJsonLd } from "@/components/seo/WebsiteJsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { Container } from "@/components/ui/layout";
import { WelcomeSection } from "@/components/sections/WelcomeSection";

// Below-fold sections: code-split for a smaller initial JS bundle.
// No loading placeholder — with static export (SSG) the HTML is already
// pre-rendered, so there is no visible flash or CLS during hydration.
const StudentJourneySection = dynamic(() =>
  import("@/components/sections/StudentJourneySection").then((m) => ({ default: m.StudentJourneySection }))
);

const ExternalResourcesSection = dynamic(() =>
  import("@/components/sections/ExternalResourcesSection").then((m) => ({ default: m.ExternalResourcesSection }))
);

const OfficialChannelsSection = dynamic(() =>
  import("@/components/sections/OfficialChannelsSection").then((m) => ({ default: m.OfficialChannelsSection }))
);

const TipsCarouselSection = dynamic(() =>
  import("@/components/sections/TipsCarouselSection").then((m) => ({ default: m.TipsCarouselSection }))
);

const SunsetMomentsSection = dynamic(() =>
  import("@/components/sections/SunsetMomentsSection").then((m) => ({ default: m.SunsetMomentsSection }))
);

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />
      <HeroSection />

      <Container size="content">
        <WelcomeSection />
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
