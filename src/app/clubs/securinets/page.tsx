import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { SecurinetsPageContent } from "@/components/clubs/SecurinetsPageContent";

export default function SecurinetsPage() {
  return (
    <PageWrapper narrow>
      <StaticPageHeader
        icon="users"
        label="النوادي و الجمعيات"
        title="SecuriNets ISET Zaghouan"
        subtitle="Defending today, securing tomorrow. 🛡️🚀"
        category="life"
      />
      <SecurinetsPageContent />
    </PageWrapper>
  );
}
