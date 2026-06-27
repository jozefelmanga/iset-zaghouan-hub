import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const InscriptionContent = dynamic(
  () =>
    import("@/components/inscription/InscriptionContent").then((mod) => ({
      default: mod.InscriptionContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={480} /> }
);

export const metadata = pageMetadata("/inscription");

export default function InscriptionPage() {
  return (
    <PageWrapper>
      <StaticPageHeader
        icon="file-text"
        label="الأكاديمي"
        title="الترسيم الجامعي"
        subtitle="خطوة بخطوة باش تسجل في ISET Zaghouan"
        category="academic"
      />
      <InscriptionContent />
    </PageWrapper>
  );
}
