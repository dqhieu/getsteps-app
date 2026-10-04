import Link from "next/link";
import { AppDownloadSection } from "@/components/app-store-badge";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/href";
import type { ToolsMessages } from "@/lib/i18n/messages/tools";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: string;
  popular: boolean;
}

interface ToolsClientProps {
  tools: Tool[];
  popularTools: Tool[];
  locale: Locale;
  t: ToolsMessages;
}

const CONVERSION_TABLES = [
  "steps-to-miles",
  "miles-to-steps",
  "steps-to-km",
  "km-to-steps",
  "steps-to-calories",
  "steps-to-time",
  "miles-to-time",
] as const;

export function ToolsClient({ tools, popularTools, locale, t }: ToolsClientProps) {
  return (
    <>
      {/* Popular Tools */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            {t.mostPopular}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg"
              >
                <span className="text-3xl mb-4 block">{tool.icon}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            {t.allCalculators}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)] hover:border-accent/40 dark:hover:border-accent/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion tables — quick reference */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {t.conversions.title}
                </h2>
                <p className="text-sm text-muted">
                  {t.conversions.description}
                </p>
              </div>
              <Link
                href={localizePath(locale, "/conversions")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors whitespace-nowrap self-start md:self-auto"
              >
                {t.conversions.hub}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {CONVERSION_TABLES.map((slug) => (
                <Link
                  key={slug}
                  href={localizePath(locale, `/conversions/${slug}`)}
                  className="p-3 rounded-xl bg-surface border border-transparent hover:border-accent transition-colors text-muted-soft"
                >
                  {t.conversions.links[slug]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            {t.why.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.why.items.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-chip flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AppDownloadSection
        locale={locale}
        title={t.cta.title}
        description={t.cta.description}
        className="py-16 md:py-24 bg-surface"
      />
    </>
  );
}
