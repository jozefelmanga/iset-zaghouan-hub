import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { InscriptionContent } from "@/components/inscription/InscriptionContent";

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
