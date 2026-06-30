import { pageMetadata } from "@/constants/seo";
import { SosAmbassadeursPageContent } from "@/components/clubs/SosAmbassadeursPageContent";

export const metadata = pageMetadata("/clubs/sos-ambassadeurs");

export default function SosAmbassadeursPage() {
  return <SosAmbassadeursPageContent />;
}
