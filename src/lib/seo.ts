import type { Metadata } from "next";
import { SITE } from "./constants";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function generateSEO({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${SITE.url}${path}`;
  const metaDescription =
    description.length > 160 ? `${description.slice(0, 157)}...` : description;

  return {
    title: `${title} | ${SITE.name}`,
    description: metaDescription,
    keywords: keywords.join(", "),
    authors: [{ name: SITE.hearingName }],
    creator: SITE.hearingName,
    publisher: SITE.hearingName,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "en-US": url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE.name,
      title,
      description: metaDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
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
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.hearingName, SITE.opticsName],
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/og-image.jpg`,
    description: SITE.description,
    telephone: SITE.phone,
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
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "££",
    areaServed: [
      { "@type": "City", name: "Northampton" },
      { "@type": "AdministrativeArea", name: "Northamptonshire" },
      { "@type": "City", name: "Wootton Fields" },
    ],
    sameAs: Object.values(SITE.social),
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
            name: "Hearing Aids",
            description: "Premium hearing aid fitting and aftercare",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eye Tests",
            description: "Professional eye examinations in Northamptonshire",
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
    image: article.image || `${SITE.url}/og-image.jpg`,
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
        url: `${SITE.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
    articleSection: article.category,
  };
}
