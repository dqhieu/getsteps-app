import Link from "next/link";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  WALKING_PACES,
  formatKm,
  formatMiles,
  type StepsByHeightRow,
  type DistanceByHeightRow,
  type CaloriesByWeightRow,
  type WalkingTimeRow,
} from "@/lib/conversions";

export interface ConversionFAQItem {
  question: string;
  answer: string;
}

export interface ConversionBreadcrumb {
  label: string;
  href?: string;
}

export interface ConversionValuePageProps {
  /** Browser title and OG title come from page.tsx metadata; this is the visible H1 */
  h1: string;
  /** Sub-heading directly under H1, e.g. "Convert 10,000 steps to miles" */
  subheading?: string;
  /** Big primary answer (e.g. "4.72 miles") */
  primaryAnswer: string;
  /** Secondary answer line under the headline (e.g. "≈ 7.60 km · about 1 h 31 min walking") */
  secondaryAnswer?: string;
  /** Short intro paragraph below the hero (1–2 sentences, computed per-page) */
  intro: string;
  /** Breadcrumbs (rendered + JSON-LD) */
  breadcrumbs: ConversionBreadcrumb[];

  /** Tables — at least one of stepsByHeight or distanceByHeight should be present */
  stepsByHeightTable?: StepsByHeightRow[];
  distanceByHeightTable?: DistanceByHeightRow[];
  caloriesByWeightTable?: CaloriesByWeightRow[];
  walkingTimeTable?: WalkingTimeRow[];

  /** Real-world equivalent string (e.g. "about the length of a 5K race × 1.5") */
  realWorldEquivalent?: string;

  /** Related conversion links shown at the bottom */
  relatedLinks: Array<{ label: string; href: string }>;

  /** FAQ section + JSON-LD */
  faq: ConversionFAQItem[];

  /** Canonical URL for breadcrumb JSON-LD (full URL) */
  canonicalUrl: string;
}

export function ConversionValuePage(props: ConversionValuePageProps) {
  const {
    h1,
    subheading,
    primaryAnswer,
    secondaryAnswer,
    intro,
    breadcrumbs,
    stepsByHeightTable,
    distanceByHeightTable,
    caloriesByWeightTable,
    walkingTimeTable,
    realWorldEquivalent,
    relatedLinks,
    faq,
    canonicalUrl,
  } = props;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.href ? { item: `${SITE_CONFIG.baseUrl}${b.href}` } : {}),
    })),
  };

  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <LandingNavbar />

      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2 gap-y-1"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="hover:text-[#ED772F] transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {b.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </nav>

          {/* Hero — H1 + primary answer */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
              {h1}
            </h1>
            {subheading && (
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {subheading}
              </p>
            )}
          </header>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10 mb-8">
            <p className="text-sm font-medium text-[#ED772F] uppercase tracking-wide mb-2">
              Quick answer
            </p>
            <p className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2">
              {primaryAnswer}
            </p>
            {secondaryAnswer && (
              <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                {secondaryAnswer}
              </p>
            )}
          </section>

          {/* Intro */}
          <section className="prose dark:prose-invert max-w-none mb-10">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {intro}
            </p>
            {realWorldEquivalent && (
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>For context:</strong> {realWorldEquivalent}
              </p>
            )}
          </section>

          {/* By-height table — for steps-to-distance */}
          {stepsByHeightTable && stepsByHeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                Distance depends on your height
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Your stride length is roughly 0.41 × your height — so a shorter
                walker covers less ground per step.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Your height
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Stride
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Miles
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Kilometers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stepsByHeightTable.map((r) => (
                      <tr
                        key={r.height}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {r.height}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {r.stepLengthCm.toFixed(1)} cm
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {formatMiles(r.miles)} mi
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {formatKm(r.km)} km
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* By-height table — for distance-to-steps */}
          {distanceByHeightTable && distanceByHeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                Steps required depend on your height
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Shorter walkers take more steps to cover the same distance.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Your height
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Stride
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Steps
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {distanceByHeightTable.map((r) => (
                      <tr
                        key={r.height}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {r.height}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {r.stepLengthCm.toFixed(1)} cm
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {formatNumber(r.steps)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Calories table */}
          {caloriesByWeightTable && caloriesByWeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                Calories burned by weight and pace
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Calories scale linearly with body weight. Faster paces burn more
                — but only modestly more for walking.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Your weight
                      </th>
                      {WALKING_PACES.map((p) => (
                        <th
                          key={p.label}
                          className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {caloriesByWeightTable.map((r) => (
                      <tr
                        key={r.weight}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {r.weight}
                        </td>
                        {r.calories.map((c, i) => (
                          <td
                            key={i}
                            className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium"
                          >
                            {formatNumber(c)} cal
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Walking time table */}
          {walkingTimeTable && walkingTimeTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                How long will it take?
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Time depends on your walking pace. Most adults walk at a normal
                pace of about 3 mph.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Pace
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Speed
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {walkingTimeTable.map((r) => (
                      <tr
                        key={r.pace}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {r.pace}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {r.mph} mph
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {r.display}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* App CTA */}
          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-10 mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              Track your real numbers with Steps
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl">
              These conversions use averages. The Steps app tracks your{" "}
              <em>actual</em> step length, calories, and walking time — synced
              from your iPhone and Apple Watch.
            </p>
            <a
              href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Steps on the App Store"
              className="inline-block transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={140}
                height={47}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={140}
                height={47}
                className="h-12 w-auto hidden dark:block"
              />
            </a>
          </section>

          {/* Related conversions */}
          {relatedLinks.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Related conversions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 hover:border-[#ED772F] hover:text-[#ED772F] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {faq.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {faq.map((f) => (
                  <details
                    key={f.question}
                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 p-4 group"
                  >
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white flex items-center justify-between gap-4">
                      <span>{f.question}</span>
                      <span className="text-[#ED772F] transition-transform group-open:rotate-45 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}

