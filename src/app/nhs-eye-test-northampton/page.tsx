import { EyeServicePage } from "@/components/eye-care/EyeServicePage";
import { eyeCareServiceByPath } from "@/data/eye-care-services";
import { eyeServiceMetadata } from "@/lib/eye-care-seo";

export const revalidate = 86400;

const service = eyeCareServiceByPath["/nhs-eye-test-northampton"];

export const metadata = eyeServiceMetadata(service);

export default function NhsEyeTestNorthamptonPage() {
  return <EyeServicePage service={service} />;
}
