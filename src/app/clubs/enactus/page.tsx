import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { EnactusPageContent } from "@/components/clubs/EnactusPageContent";

export default function EnactusPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="Enactus ISET Zaghouan"
        subtitle="A UNITED TEAM WITH A SHARED DREAM. we empower, innovate, and create positive change. 💯🌍"
        category="life"
      />
      <EnactusPageContent />
    </PageWrapper>
  );
}
