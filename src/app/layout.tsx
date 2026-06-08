import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NavigationProvider } from "@/components/providers/NavigationProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateSEO, localBusinessSchema } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = generateSEO({
  title: "Hearing Aids Northampton & Sight Tests | Wootton Optician & Hearing Care",
  description:
    "Independent family practice in Northampton since 2003. Wootton Optician and Wootton Hearing Care — NHS & private sight tests, free hearing consultations, personalised care.",
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
          <NavigationProvider>
            <Header />
            <main className="flex-1 pt-[72px]">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <CookieConsent />
          </NavigationProvider>
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
