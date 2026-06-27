import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const TIPageContent = dynamic(
  () =>
    import("@/components/departments/TIPageContent").then((mod) => ({
      default: mod.TIPageContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={400} /> }
);

export const metadata = pageMetadata("/departments/ti");

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
