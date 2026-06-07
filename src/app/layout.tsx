import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateSEO, localBusinessSchema } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";
import "./globals.css";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#00A8CC" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
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
