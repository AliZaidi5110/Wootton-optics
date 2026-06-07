import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateSEO, localBusinessSchema } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: "Hearing Aids Ilford & Eye Care Ilford | Wootton Hearing & Optics",
  description:
    "Expert eye & hearing care from the heart. Family-run Wootton Hearing & Optics in Ilford — free consultations, NHS & premium options, care packages.",
  path: "/",
  keywords: [...KEYWORDS],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <JsonLd data={localBusinessSchema()} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#00A8CC" />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
      </body>
    </html>
  );
}
