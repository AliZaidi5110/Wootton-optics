import type { Metadata } from "next";
import { SITE, EAR_WAX_PRICING } from "./constants";
import { DEFAULT_OG_IMAGE } from "./images";

const SITE_SUFFIX = "Wootton";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

/** Keep titles concise for SERP; append short brand if missing. */
function buildTitle(title: string): string {
  if (title.includes("Wootton")) return title;
  const withBrand = `${title} | ${SITE_SUFFIX}`;
  return withBrand.length <= 60 ? withBrand : title;
}

export function generateSEO({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${SITE.url}${path}`;
  const metaDescription =
    description.length > 155 ? `${description.slice(0, 152)}...` : description;
  const fullTitle = buildTitle(title);

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE.opticsName} & ${SITE.hearingName} clinic, Northampton`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "GB-NTH",
      "geo.placename": "Northampton",
      "geo.position": `${SITE.coordinates.lat};${SITE.coordinates.lng}`,
      ICBM: `${SITE.coordinates.lat}, ${SITE.coordinates.lng}`,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

const CORE_SERVICES = [
  {
    name: "NHS Sight Test",
    description:
      "NHS-funded sight tests for eligible patients at our Northampton clinic, including vision assessment and eye health checks.",
    url: `${SITE.url}/optics`,
    price: "0",
    priceCurrency: "GBP",
    category: "Eye Care",
  },
  {
    name: "Private Sight Test",
    description:
      "Extended private eye examinations with digital retinal imaging at Wootton Optician, Northampton.",
    url: `${SITE.url}/optics`,
    price: "55",
    priceCurrency: "GBP",
    category: "Eye Care",
  },
  {
    name: "Free Hearing Consultation",
    description:
      "Free hearing consultation and audiometric assessment in Northampton with no obligation to purchase.",
    url: `${SITE.url}/hearing`,
    price: "0",
    priceCurrency: "GBP",
    category: "Hearing Care",
  },
  {
    name: "Ear Wax Removal",
    description:
      "Professional microsuction ear wax removal at our Northampton clinic. Clear pricing, no referral needed.",
    url: `${SITE.url}/hearing`,
    price: String(EAR_WAX_PRICING.oneEar),
    priceCurrency: "GBP",
    category: "Hearing Care",
  },
  {
    name: "Hearing Aids Supply & Fitting",
    description:
      "Digital hearing aid supply, custom programming, fitting and aftercare from leading manufacturers in Northampton.",
    url: `${SITE.url}/hearing`,
    category: "Hearing Care",
  },
] as const;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Optician", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.hearingName, SITE.opticsName, "Wootton Opticians", "Wootton Hearing Care"],
    url: SITE.url,
    logo: `${SITE.url}${DEFAULT_OG_IMAGE}`,
    image: `${SITE.url}${DEFAULT_OG_IMAGE}`,
    description: SITE.description,
    telephone: SITE.phone.replace(/\s/g, ""),
    email: SITE.email,
    foundingDate: "2003",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: [
      { "@type": "City", name: "Northampton" },
      { "@type": "City", name: "Wootton Fields" },
      { "@type": "AdministrativeArea", name: "Northamptonshire" },
    ],
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.youtube,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone.replace(/\s/g, ""),
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
        email: SITE.email,
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phone.replace(/\s/g, ""),
        contactType: "reservations",
        areaServed: "GB",
        availableLanguage: "English",
        email: SITE.opticsEmail,
      },
    ],
    knowsAbout: [
      "NHS eye tests",
      "Private sight tests",
      "Hearing aids",
      "Hearing tests",
      "Ear wax removal",
      "Myopia management",
      "Contact lenses",
      "Dry eye assessment",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hearing & Optical Services in Northampton",
      itemListElement: CORE_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url,
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: {
            "@type": "City",
            name: "Northampton",
          },
          ...(service.category ? { category: service.category } : {}),
        },
        ...("price" in service && service.price !== undefined
          ? {
              price: service.price,
              priceCurrency: service.priceCurrency,
            }
          : {}),
      })),
    },
  };
}

/** Standalone Service schema graph for rich results on service pages. */
export function serviceSchemas() {
  return CORE_SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${service.url}#${service.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
    },
    areaServed: {
      "@type": "City",
      name: "Northampton",
    },
    ...("price" in service && service.price !== undefined
      ? {
          offers: {
            "@type": "Offer",
            price: service.price,
            priceCurrency: service.priceCurrency,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  }));
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE.url}${DEFAULT_OG_IMAGE}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}${DEFAULT_OG_IMAGE}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
    articleSection: article.category,
  };
}
