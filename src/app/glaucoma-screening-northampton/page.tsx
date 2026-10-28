import { EyeServicePage } from "@/components/eye-care/EyeServicePage";
import { eyeCareServiceByPath } from "@/data/eye-care-services";
import { eyeServiceMetadata } from "@/lib/eye-care-seo";

export const revalidate = 86400;

const service = eyeCareServiceByPath["/glaucoma-screening-northampton"];

export const metadata = eyeServiceMetadata(service);

export default function GlaucomaScreeningNorthamptonPage() {
  return <EyeServicePage service={service} />;
}
