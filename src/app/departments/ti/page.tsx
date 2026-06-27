import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { TIPageContent } from "@/components/departments/TIPageContent";

export default function TIPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="code"
        label="الأقسام العلمية"
        title="Technologies de l'Information (TI)"
        subtitle="قسم تكنولوجيا المعلومات - عالم الإعلامية، البرمجة، والشبكات"
        category="academic"
      />
      <TIPageContent />
    </PageWrapper>
  );
}
