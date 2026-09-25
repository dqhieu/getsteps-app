import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { TOOLS } from "@/lib/tools";
import { ToolsClient } from "./tools-client";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getToolsMessages, type ToolSlug } from "@/lib/i18n/messages/tools";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return buildPageMetadata({
    locale,
    path: "/tools",
    meta: getToolsMessages(locale).meta,
    ogImage: "/og/tools.png",
  });
}

export default async function ToolsPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = getToolsMessages(locale);
  const common = getCommonMessages(locale);

  const tools = TOOLS.map((tool) => {
    const copy = t.tools[tool.href.replace("/tools/", "") as ToolSlug];
    return {
      ...tool,
      href: localizePath(locale, tool.href),
      title: copy?.title ?? tool.title,
      description: copy?.description ?? tool.description,
    };
  });
  const popularTools = tools.filter((tool) => tool.popular);

  const breadcrumbSchema = buildBreadcrumbList([
    { name: common.breadcrumbs.home, path: localizePath(locale, "/") },
    { name: common.breadcrumbs.tools, path: localizePath(locale, "/tools") },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.hero.title,
    description: t.itemListDescription,
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(locale, TOOLS[index].href),
      name: tool.title,
      description: tool.description,
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <LandingNavbar locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <ToolsClient tools={tools} popularTools={popularTools} locale={locale} t={t} />

      <LandingFooter locale={locale} />
    </div>
  );
}
