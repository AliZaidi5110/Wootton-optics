import { PageHeader } from "@/components/shared/PageHeader";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Admin Dashboard",
  description: "Content management dashboard for Wootton Hearing & Optics.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        subtitle="Content management system for Wootton Hearing & Optics"
      />
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Blog Posts", count: "22", action: "Manage articles in src/data/blog-posts.ts or connect Contentful CMS" },
              { title: "Appointments", count: "—", action: "View via MongoDB or connect to admin API" },
              { title: "Contact Messages", count: "—", action: "View via MongoDB Contact collection" },
              { title: "Newsletter", count: "—", action: "Connect Mailchimp/Brevo integration" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-3xl font-bold text-primary my-2">{item.count}</p>
                <p className="text-sm text-neutral-500">{item.action}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
            <h3 className="font-heading font-bold mb-2">CMS Integration</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              To enable headless CMS, configure Contentful credentials in .env.local
              (CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN) and migrate blog content.
              See docs/MAINTENANCE.md for full setup instructions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
