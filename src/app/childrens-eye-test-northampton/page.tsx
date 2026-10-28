import { EyeServicePage } from "@/components/eye-care/EyeServicePage";
import { eyeCareServiceByPath } from "@/data/eye-care-services";
import { eyeServiceMetadata } from "@/lib/eye-care-seo";

export const revalidate = 86400;

const service = eyeCareServiceByPath["/childrens-eye-test-northampton"];

export const metadata = eyeServiceMetadata(service);

export default function ChildrensEyeTestNorthamptonPage() {
  return <EyeServicePage service={service} />;
}
