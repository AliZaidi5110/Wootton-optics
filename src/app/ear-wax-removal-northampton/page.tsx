import { EyeServicePage } from "@/components/eye-care/EyeServicePage";
import { hearingCareServiceByPath } from "@/data/hearing-care-services";
import { eyeServiceMetadata } from "@/lib/eye-care-seo";

export const revalidate = 86400;

const service = hearingCareServiceByPath["/ear-wax-removal-northampton"];

export const metadata = eyeServiceMetadata(service);

export default function EarWaxRemovalNorthamptonPage() {
  return <EyeServicePage service={service} />;
}
