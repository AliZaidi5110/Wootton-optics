import {
  Baby,
  Contact,
  Droplets,
  Eye,
  Focus,
  Gauge,
  Glasses,
  ScanEye,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import type { EyeCareIcon } from "@/data/eye-care-services";

const ICONS: Record<EyeCareIcon, React.ComponentType<LucideProps>> = {
  "shield-check": ShieldCheck,
  "scan-eye": ScanEye,
  baby: Baby,
  contact: Contact,
  droplets: Droplets,
  focus: Focus,
  gauge: Gauge,
  glasses: Glasses,
  eye: Eye,
};

export function ServiceIcon({ name, ...props }: { name: EyeCareIcon } & LucideProps) {
  const Icon = ICONS[name];
  return <Icon aria-hidden="true" {...props} />;
}
