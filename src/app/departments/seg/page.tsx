import { pageMetadata } from "@/constants/seo";
import dynamic from "next/dynamic";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { PageContentPlaceholder } from "@/components/ui/PageContentPlaceholder";

const SEGPageContent = dynamic(
  () =>
    import("@/components/departments/SEGPageContent").then((mod) => ({
      default: mod.SEGPageContent,
    })),
  { loading: () => <PageContentPlaceholder minHeight={400} /> }
);

export const metadata = pageMetadata("/departments/seg");

export default function SEGPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="coins"
        label="الأقسام العلمية"
        title="Sciences Économiques et de Gestion (SEG)"
        subtitle="قسم العلوم الاقتصادية والتصرف - إدارة الأعمال، المحاسبة والمالية"
        category="academic"
      />
      <SEGPageContent />
    </PageWrapper>
  );
}
