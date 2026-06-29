import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NavigationProvider } from "@/components/providers/NavigationProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { generateSEO, localBusinessSchema, websiteSchema } from "@/lib/seo";
import { cormorantGaramond, sourceSans } from "@/lib/fonts";
import { IMAGES } from "@/lib/images";
import { KEYWORDS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Opticians & Hearing Care Northampton | Wootton Care",
    description:
      "Independent opticians and hearing care specialists in Northampton. NHS and private eye tests, designer eyewear, hearing aids and ear wax removal.",
    path: "/",
    keywords: [...KEYWORDS],
  }),
  icons: {
    icon: IMAGES.clinic,
    apple: IMAGES.clinic,
  },
  manifest: "/manifest.webmanifest",
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${cormorantGaramond.variable} ${sourceSans.variable}`}
    >
      <head>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <meta name="theme-color" content="#0a1f35" />
      </head>
      <body className={`${sourceSans.className} min-h-screen flex flex-col antialiased`}>
        <ThemeProvider>
          <NavigationProvider>
            <Header />
            <main className="flex-1 pt-[80px] sm:pt-[72px]">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <CookieConsent />
          </NavigationProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
