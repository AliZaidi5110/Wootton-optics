import type { Metadata } from "next";
import { SITE } from "./constants";
import { DEFAULT_OG_IMAGE } from "./images";

const SITE_SUFFIX = SITE.name;

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

function buildTitle(title: string): string {
  if (title.includes(SITE_SUFFIX) || title.includes("Wootton")) {
    return title;
  }
  return `${title} | ${SITE_SUFFIX}`;
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
    description.length > 160 ? `${description.slice(0, 157)}...` : description;
  const fullTitle = buildTitle(title);

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    authors: [{ name: SITE.hearingName }],
    creator: SITE.hearingName,
    publisher: SITE.hearingName,
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
          alt: `${SITE.opticsName} & ${SITE.hearingName} — Northampton`,
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

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Optician"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.hearingName, SITE.opticsName, "Wootton Opticians"],
    url: SITE.url,
    logo: `${SITE.url}${DEFAULT_OG_IMAGE}`,
    image: `${SITE.url}${DEFAULT_OG_IMAGE}`,
    description: SITE.description,
    telephone: SITE.phone.replace(/\s/g, ""),
    email: SITE.email,
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
    areaServed: [
      { "@type": "City", name: "Northampton" },
      { "@type": "AdministrativeArea", name: "Northamptonshire" },
      { "@type": "City", name: "Wootton Fields" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hearing & Optical Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hearing Tests",
            description: "Comprehensive hearing assessments in Northampton",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ear Wax Removal",
            description: "Professional microsuction — £35 per ear, £70 for both ears",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hearing Aids",
            description: "Premium hearing aid fitting and aftercare",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eye Tests",
            description: "NHS and private sight tests in Northamptonshire",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optical Services",
            description: "Designer frames and advanced lens technology",
          },
        },
      ],
    },
  };
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
      name: SITE.hearingName,
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
