import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Register",
  description: "Create your Wootton Hearing & Optician account.",
  path: "/register",
  noIndex: true,
});

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
