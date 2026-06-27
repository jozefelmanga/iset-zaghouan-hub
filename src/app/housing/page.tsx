import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { HousingContent } from "@/components/housing/HousingContent";

export const metadata = pageMetadata("/housing");

export default function HousingPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="building"
        label="الحياة الجامعية"
        title="المبيت الجامعي"
        subtitle="كل ما تحتاجو تعرفوه على السكن الطلابي في زغوان"
        category="life"
      />
      <HousingContent />
    </PageWrapper>
  );
}
