import { pageMetadata } from "@/constants/seo";
import { EnactusPageContent } from "@/components/clubs/EnactusPageContent";

export const metadata = pageMetadata("/clubs/enactus");

export default function EnactusPage() {
  return <EnactusPageContent />;
}
