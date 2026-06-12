import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Dashboard",
  description: "Manage your Wootton Hearing & Optician account.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
