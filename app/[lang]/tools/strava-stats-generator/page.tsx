import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { StravaStatsGenerator } from "@/components/strava-stats-generator";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { ToolAppCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadStravaStatsGeneratorMessages } from "@/lib/i18n/messages/tool-pages/strava-stats-generator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

const SLUG = "strava-stats-generator";
const PATH = `/tools/${SLUG}`;

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadStravaStatsGeneratorMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: `/og/${SLUG}.png`,
  });
}

export default async function StravaStatsGeneratorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadStravaStatsGeneratorMessages(locale);

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar locale={locale} />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <StravaStatsGenerator t={t.tool} locale={locale} />

          <ToolAppCta
            locale={locale}
            headline={t.inlineCta.headline}
            description={t.inlineCta.description}
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t.about.title}
            </h2>
            <p className="text-sm text-muted mb-4">
              {t.about.p1}
            </p>
            <p className="text-sm text-muted">
              {t.about.p2}
            </p>
          </div>

          <div className="mt-6 rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faq.map((item) => (
                <details key={item.question} className="group">
                  <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <RelatedTools locale={locale} slug={SLUG} className="mt-4" />
          <RelatedBlogPosts locale={locale} items={TOOL_RELATED_BLOGS[SLUG] || []} />
          <ToolHowToBlock data={t.howTo} />

          <p className="mt-6 text-xs text-muted">
            {t.disclaimer}
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(t.faq)) }}
      />

      <LandingFooter locale={locale} />
    </div>
  );
}
