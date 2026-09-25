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
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            {t.mostPopular}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-2xl p-6 border border-[#ED772F]/20 hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <span className="text-3xl mb-4 block">{tool.icon}</span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#ED772F] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="py-8 md:py-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            {t.allCalculators}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 hover:border-[#ED772F]/40 dark:hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-[#ED772F] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
          <div className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {t.conversions.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t.conversions.description}
                </p>
              </div>
              <Link
                href={localizePath(locale, "/conversions")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ED772F] text-white text-sm font-medium hover:bg-[#d8651f] transition-colors whitespace-nowrap self-start md:self-auto"
              >
                {t.conversions.hub}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {CONVERSION_TABLES.map((slug) => (
                <Link
                  key={slug}
                  href={localizePath(locale, `/conversions/${slug}`)}
                  className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300"
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
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
            {t.why.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.why.items.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#ED772F] text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
        className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50"
      />
    </>
  );
}
