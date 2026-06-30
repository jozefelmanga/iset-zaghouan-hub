import { pageMetadata } from "@/constants/seo";
import { SecurinetsPageContent } from "@/components/clubs/SecurinetsPageContent";

export const metadata = pageMetadata("/clubs/securinets");

export default function SecurinetsPage() {
  return <SecurinetsPageContent />;
}
