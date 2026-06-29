import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { IeeePageContent } from "@/components/clubs/IeeePageContent";

export const metadata = pageMetadata("/clubs/ieee");

export default function IeeePage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="IEEE ISET Zaghouan SB"
        subtitle="Advancing technology for humanity. ⚡🔬"
        category="life"
      />
      <IeeePageContent />
    </PageWrapper>
  );
}
