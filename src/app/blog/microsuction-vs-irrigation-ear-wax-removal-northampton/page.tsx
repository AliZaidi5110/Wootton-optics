import { Check, TriangleAlert, X } from "lucide-react";
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
import { earWaxArticle as article } from "@/data/ear-wax-article";
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
  { id: "ear-wax", heading: article.wax.heading },
  { id: "microsuction-vs-irrigation", heading: article.compare.heading },
  { id: "cost", heading: article.cost.heading },
  { id: "appointment", heading: article.expect.heading },
  { id: "avoid", heading: article.avoid.heading },
  { id: "see-a-gp", heading: article.urgent.heading },
  { id: "hearing-aids", heading: article.hearingAids.heading },
  { id: "still-muffled", heading: article.stillMuffled.heading },
  { id: "why-wootton", heading: article.why.heading },
  { id: "faq", heading: article.faqsHeading },
];

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 font-heading text-xl font-bold text-navy sm:text-2xl">{children}</h3>;
}

export default function EarWaxArticlePage() {
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

            <section id="ear-wax">
              <Heading>{article.wax.heading}</Heading>
              <p className={paragraph}>{article.wax.text}</p>
              <Photo {...article.wax.image} />
              <p className="font-semibold text-navy">{article.wax.signsIntro}</p>
              <CheckList items={article.wax.signs} />
            </section>

            <section id="microsuction-vs-irrigation" className="space-y-8">
              <Heading>{article.compare.heading}</Heading>

              <div className="rounded-2xl border border-primary/30 bg-teal-light/40 p-6 sm:p-8">
                <SubHeading>{article.compare.microsuction.heading}</SubHeading>
                <p className={paragraph}>{article.compare.microsuction.text}</p>
                <p className="mt-5 font-semibold text-navy">
                  {article.compare.microsuction.whyIntro}
                </p>
                <ul className="mt-3 space-y-2">
                  {article.compare.microsuction.why.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy/90">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-fresh" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-white p-4 leading-relaxed text-navy/85">
                  {article.compare.microsuction.note}
                </p>
              </div>

              <div className="rounded-2xl border border-cream-dark bg-cream p-6 sm:p-8">
                <SubHeading>{article.compare.irrigation.heading}</SubHeading>
                <div className="space-y-4">
                  {article.compare.irrigation.paragraphs.map((text) => (
                    <p key={text.slice(0, 40)} className={paragraph}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SubHeading>{article.compare.table.heading}</SubHeading>
                <div className="[&>div]:mt-4">
                  <ContentTable
                    columns={article.compare.table.columns}
                    rows={article.compare.table.rows}
                  />
                </div>
              </div>
              <p className={paragraph}>{article.compare.outro}</p>
            </section>

            <section id="cost">
              <Heading>{article.cost.heading}</Heading>
              <p className={paragraph}>{article.cost.intro}</p>
              <ul className="my-6 grid gap-4 sm:grid-cols-2">
                {article.cost.prices.map((price) => (
                  <li
                    key={price.label}
                    className="rounded-2xl bg-navy-deep p-6 text-center shadow-md"
                  >
                    <span className="block font-heading text-5xl font-bold text-white">
                      {price.amount}
                    </span>
                    <span className="mt-1 block text-white/85">{price.label}</span>
                  </li>
                ))}
              </ul>
              <p className={paragraph}>{article.cost.outro}</p>
            </section>

            <section id="appointment">
              <Heading>{article.expect.heading}</Heading>
              <Steps steps={article.expect.steps} />
              <p className={`mt-6 ${paragraph}`}>{article.expect.outro}</p>
            </section>

            <section id="avoid">
              <Heading>{article.avoid.heading}</Heading>
              <ul className="grid gap-4 sm:grid-cols-2">
                {article.avoid.items.map((item) => (
                  <li key={item.title} className="rounded-xl border border-cream-dark bg-cream p-5">
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <X className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="leading-relaxed text-navy/90">
                      <strong className="font-semibold text-navy">{item.title}</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="see-a-gp" className="rounded-2xl border-2 border-gold/60 bg-gold/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/30 text-accent">
                  <TriangleAlert className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-navy">
                    {article.urgent.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-navy/90">{article.urgent.intro}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 font-semibold text-navy">
                    {article.urgent.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 leading-relaxed text-navy/90">{article.urgent.outro}</p>
                </div>
              </div>
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

            <section id="why-wootton">
              <Heading>{article.why.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.why.text} />
              </p>
              <Photo {...article.why.image} />
              <BookingBox heading={article.ready.heading} text={article.ready.text} />
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
