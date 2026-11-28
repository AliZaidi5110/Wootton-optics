import { SITE } from "@/lib/constants";

type SchemaArticle = {
  path: string;
  title: string;
  metaDescription: string;
  breadcrumb: string;
  author: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

/** JSON-LD graph as supplied in the article documents (BlogPosting, BreadcrumbList, FAQPage). */
export function blogArticleSchema(article: SchemaArticle) {
  const base = SITE.url;
  const url = `${base}${article.path}`;
  const organisation = { "@type": "Organization", name: article.author, url: `${base}/` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: article.title,
        description: article.metaDescription,
        image: `${base}/wootton-clinic.jpg`,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en-GB",
        keywords: article.keywords.join(", "),
        about: { "@type": "MedicalProcedure", name: "Ear wax removal (microsuction)" },
        author: organisation,
        publisher: organisation,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Advice & Blog", item: `${base}/blog` },
          { "@type": "ListItem", position: 3, name: article.breadcrumb, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
