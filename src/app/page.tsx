import { HeroSection } from "@/components/sections/HeroSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { StudentJourneySection } from "@/components/sections/StudentJourneySection";
import { CampusServicesSection } from "@/components/sections/CampusServicesSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { ExternalResourcesSection } from "@/components/sections/ExternalResourcesSection";
import { ExploreFaqSection } from "@/components/sections/ExploreFaqSection";
import { Container } from "@/components/ui/layout";

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
