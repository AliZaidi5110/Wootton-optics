import { SITE } from "@/lib/constants";
import { hub, hubPath } from "@/data/eye-care-hub";

/** JSON-LD graph for the /optics page, from "Opticians Northampton | Independent Eye Tests & Glasses.docx". */
export function opticsPageSchema() {
  const base = SITE.url;
  const pageUrl = `${base}${hubPath}`;
  const service = (name: string, extra: Record<string, unknown> = {}) => ({
    "@type": "Offer",
    ...extra,
    itemOffered: { "@type": "Service", name },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: hub.metaTitle,
        description: hub.metaDescription,
        inLanguage: "en-GB",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${base}/#website`,
          url: `${base}/`,
          name: SITE.name,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${base}/#optician` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}/wootton-clinic.jpg`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Eye Care", item: pageUrl },
        ],
      },
      {
        "@type": "Optician",
        "@id": `${base}/#optician`,
        name: "Wootton Opticians",
        url: pageUrl,
        telephone: "+441604875111",
        image: `${base}/wootton-clinic.jpg`,
        foundingDate: "2003",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9 Tudor Court, Wootton Hope Drive",
          addressLocality: "Northampton",
          postalCode: "NN4 6FF",
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: 52.218, longitude: -0.8925 },
        areaServed: [
          { "@type": "Place", name: "Wootton, Northampton" },
          { "@type": "Place", name: "Wootton Fields, Northampton" },
          { "@type": "Place", name: "Hardingstone, Northampton" },
          { "@type": "Place", name: "Collingtree, Northampton" },
          { "@type": "City", name: "Northampton" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "13:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
            opens: "14:00",
            closes: "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday", "Saturday"],
            opens: "09:00",
            closes: "12:00",
          },
        ],
        makesOffer: [
          service("NHS eye test"),
          service("Private eye test", {
            price: "55",
            priceCurrency: "GBP",
            description: "Private eye test, from £55",
          }),
          service("Children's eye test"),
          service("Contact lens fitting and aftercare"),
          service("Dry eye assessment"),
          service("Myopia management for children"),
          service("Glaucoma screening"),
        ],
      },
    ],
  };
}
