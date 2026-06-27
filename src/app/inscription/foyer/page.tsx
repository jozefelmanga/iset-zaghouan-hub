import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const HousingInscriptionContent = dynamic(
  () =>
    import("@/components/housing/HousingInscriptionContent").then((mod) => ({
      default: mod.HousingInscriptionContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={480} /> }
);

export const metadata = pageMetadata("/inscription/foyer");

export default function FoyerInscriptionPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="building"
        label="الترسيم الجامعي"
        title="الترسيم في المبيت"
        subtitle="خطوات التسجيل، الأوراق، و يوم الترسيم في الفواي"
        category="academic"
      />
      <HousingInscriptionContent />
    </PageWrapper>
  );
}
