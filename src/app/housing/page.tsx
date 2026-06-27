import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const HousingFoyersContent = dynamic(
  () =>
    import("@/components/housing/HousingFoyersContent").then((mod) => ({
      default: mod.HousingFoyersContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={480} /> }
);

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
      <HousingFoyersContent />
    </PageWrapper>
  );
}
