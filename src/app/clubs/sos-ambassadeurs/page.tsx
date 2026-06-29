import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { SosAmbassadeursPageContent } from "@/components/clubs/SosAmbassadeursPageContent";

export const metadata = pageMetadata("/clubs/sos-ambassadeurs");

export default function SosAmbassadeursPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="Club Ambassadeurs SOS Village"
        subtitle="Raise the voice and make the choice. 💚🤝"
        category="life"
      />
      <SosAmbassadeursPageContent />
    </PageWrapper>
  );
}
