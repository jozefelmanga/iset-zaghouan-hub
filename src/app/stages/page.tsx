import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { StagesPageContent } from "@/components/stages/StagesPageContent";

export const metadata = pageMetadata("/stages");

export default function StagesPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="briefcase"
        label="مهني"
        title="الستاجات"
        subtitle="3 سنوات = 3 ستاجات. دليلك الكامل لمراحل التطبيق."
        category="career"
      />
      <StagesPageContent />
    </PageWrapper>
  );
}
