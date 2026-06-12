import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Login",
  description: "Sign in to your Wootton Hearing & Optician account.",
  path: "/login",
  noIndex: true,
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
