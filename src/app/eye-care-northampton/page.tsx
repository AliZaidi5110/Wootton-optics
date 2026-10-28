import { EyeServicePage } from "@/components/eye-care/EyeServicePage";
import { eyeCareNorthamptonService } from "@/data/eye-care-hub";
import { eyeServiceMetadata } from "@/lib/eye-care-seo";

export const revalidate = 86400;

export const metadata = eyeServiceMetadata(eyeCareNorthamptonService);

export default function EyeCareNorthamptonPage() {
  return <EyeServicePage service={eyeCareNorthamptonService} />;
}
