import dynamic from "next/dynamic";
import { pageMetadata } from "@/constants/seo";
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

const CampusServicesSection = dynamic(
  () =>
    import("@/components/sections/CampusServicesSection").then((mod) => ({
      default: mod.CampusServicesSection,
    })),
  { loading: () => <HomeSectionPlaceholder /> }
);

const AnnouncementsSection = dynamic(
  () =>
    import("@/components/sections/AnnouncementsSection").then((mod) => ({
      default: mod.AnnouncementsSection,
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

const ExploreFaqSection = dynamic(
  () =>
    import("@/components/sections/ExploreFaqSection").then((mod) => ({
      default: mod.ExploreFaqSection,
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
      <HeroSection />

      <Container size="content">
        <QuickAccessSection />
        <StudentJourneySection />
        <CampusServicesSection />
        <AnnouncementsSection />
        <ExternalResourcesSection />
        <ExploreFaqSection />
      </Container>
    </>
  );
}
