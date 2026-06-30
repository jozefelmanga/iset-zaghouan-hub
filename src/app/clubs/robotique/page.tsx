import { pageMetadata } from "@/constants/seo";
import { RobotiquePageContent } from "@/components/clubs/RobotiquePageContent";

export const metadata = pageMetadata("/clubs/robotique");

export default function RobotiquePage() {
  return <RobotiquePageContent />;
}
