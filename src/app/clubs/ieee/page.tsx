import { pageMetadata } from "@/constants/seo";
import { IeeePageContent } from "@/components/clubs/IeeePageContent";

export const metadata = pageMetadata("/clubs/ieee");

export default function IeeePage() {
  return <IeeePageContent />;
}
