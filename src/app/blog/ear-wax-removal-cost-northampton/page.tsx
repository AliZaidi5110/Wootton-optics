import { Check, HelpCircle, X } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ArticleHero,
  ArticleSidebar,
  BookingBox,
  CheckList,
  Heading,
  Photo,
  RelatedArticles,
  Steps,
  paragraph,
} from "@/components/blog/ArticleParts";
import { ContentTable } from "@/components/eye-care/ContentBlocks";
import { FaqAccordion } from "@/components/eye-care/FaqAccordion";
import { RichText } from "@/components/eye-care/RichText";
import { earWaxCostArticle as article } from "@/data/ear-wax-cost-article";
import { getBlogPost } from "@/data/blog-posts";
import { blogArticleSchema } from "@/lib/blog-article-schema";
import { generateSEO } from "@/lib/seo";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: article.metaTitle,
  description: article.metaDescription,
  path: article.path,
  image: IMAGES.clinic,
  keywords: article.keywords,
});

const sections = [
  { id: "prices", heading: article.prices.heading },
  { id: "price-covers", heading: article.covers.heading },
  { id: "microsuction", heading: article.microsuction.heading },
  { id: "compare-prices", heading: article.compare.heading },
  { id: "nhs", heading: article.nhs.heading },
  { id: "signs", heading: article.signs.heading },
  { id: "appointment", heading: article.expect.heading },
  { id: "avoid", heading: article.avoid.heading },
  { id: "hearing-aids", heading: article.hearingAids.heading },
  { id: "still-muffled", heading: article.stillMuffled.heading },
  { id: "book", heading: article.book.heading },
  { id: "faq", heading: article.faqsHeading },
];

export default function EarWaxCostArticlePage() {
  return (
    <>
      <ArticleHero
        title={article.title}
        breadcrumb={article.breadcrumb}
        author={article.author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readTime={getBlogPost(article.slug)?.readTime}
        image={article.heroImage}
      />

      <div className="bg-white py-12 sm:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <article className="min-w-0 space-y-14 lg:col-span-8 [&_section]:scroll-mt-28">
            <div className="space-y-5 border-l-4 border-primary pl-5">
              {article.intro.map((text) => (
                <p key={text.slice(0, 40)} className={paragraph}>
                  <RichText text={text} />
                </p>
              ))}
            </div>

            <section id="prices">
              <Heading>{article.prices.heading}</Heading>
              <div className="[&>div]:mt-0">
                <ContentTable columns={article.prices.columns} rows={article.prices.rows} />
              </div>
              <CheckList items={article.prices.points} />
              <p className={`mt-6 ${paragraph}`}>
                <RichText text={article.prices.outro} />
              </p>
            </section>

            <section id="price-covers">
              <Heading>{article.covers.heading}</Heading>
              <p className={paragraph}>{article.covers.paragraphs[0]}</p>
              <p className="mt-5 rounded-xl border-l-4 border-primary bg-cream p-4 leading-relaxed text-navy/85">
                {article.covers.paragraphs[1]}
              </p>
            </section>

            <section id="microsuction">
              <Heading>{article.microsuction.heading}</Heading>
              <p className={paragraph}>{article.microsuction.text}</p>
              <Photo {...article.microsuction.image} />
            </section>

            <section id="compare-prices">
              <Heading>{article.compare.heading}</Heading>
              <p className={paragraph}>{article.compare.intro}</p>
              <ul className="my-6 space-y-3">
                {article.compare.questions.map((question) => (
                  <li
                    key={question}
                    className="flex items-start gap-3 rounded-xl border border-cream-dark bg-white p-4 shadow-sm"
                  >
                    <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="leading-relaxed text-navy/90">{question}</span>
                  </li>
                ))}
              </ul>
              <p className="flex items-start gap-3 rounded-2xl bg-teal-light/50 p-5 font-semibold text-navy">
                <Check className="mt-1 h-5 w-5 shrink-0 text-fresh" aria-hidden="true" />
                {article.compare.outro}
              </p>
            </section>

            <section id="nhs">
              <Heading>{article.nhs.heading}</Heading>
              <p className={paragraph}>{article.nhs.text}</p>
            </section>

            <section id="signs">
              <Heading>{article.signs.heading}</Heading>
              <p className="font-semibold text-navy">{article.signs.intro}</p>
              <CheckList items={article.signs.items} />
              <p className={`mt-6 ${paragraph}`}>
                <RichText text={article.signs.outro} />
              </p>
              <Photo {...article.signs.image} />
            </section>

            <section id="appointment">
              <Heading>{article.expect.heading}</Heading>
              <Steps steps={article.expect.steps} />
            </section>

            <section id="avoid">
              <Heading>{article.avoid.heading}</Heading>
              <ul className="space-y-3">
                {article.avoid.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream p-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <X className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed text-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="hearing-aids">
              <Heading>{article.hearingAids.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.hearingAids.text} />
              </p>
              <Photo {...article.hearingAids.image} />
            </section>

            <section id="still-muffled">
              <Heading>{article.stillMuffled.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.stillMuffled.text} />
              </p>
            </section>

            <section id="book">
              <Heading>{article.book.heading}</Heading>
              <p className={`mb-6 ${paragraph}`}>
                <RichText text={article.book.text} />
              </p>
              <BookingBox text={article.book.cta} />
            </section>
          </article>

          <ArticleSidebar sections={sections} bookingHref={article.bookingHref} />
        </div>
      </div>

      <FaqAccordion heading={article.faqsHeading} faqs={article.faqs} />

      <RelatedArticles slug={article.slug} />

      <JsonLd data={blogArticleSchema(article)} />
    </>
  );
}
