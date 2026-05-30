import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_KM_VALUES,
  stepsToKmDefault,
  stepsToMilesDefault,
  formatKm,
  formatMiles,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "Steps to KM Converter — Quick Conversion Table & Calculator",
  description:
    "Convert any number of steps to kilometers. 10,000 steps ≈ 7.6 km. Full conversion table from 1,000 to 30,000 steps.",
  keywords: [
    "steps to km",
    "steps to kilometers",
    "convert steps to km",
    "step to km conversion",
    "steps to km chart",
    "how many km is X steps",
  ],
  openGraph: {
    title: "Steps to KM Converter",
    description:
      "Convert any number of steps to km. 10,000 steps ≈ 7.6 km. Full conversion table.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-km`,
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Steps to Kilometers",
      },
    ],
  },
  // Canonical points to the calculator so the "steps to km" head term
  // consolidates onto one page; this hub serves the long-tail table and
  // links out to the per-count detail pages, which self-canonical.
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/step-distance-calculator`,
  },
};

export default function StepsToKmCategoryPage() {
  const rows = STEPS_TO_KM_VALUES.map((steps) => ({
    steps,
    km: stepsToKmDefault(steps),
    miles: stepsToMilesDefault(steps),
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conversions",
        item: `${SITE_CONFIG.baseUrl}/conversions`,
      },
      { "@type": "ListItem", position: 3, name: "Steps to KM" },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LandingNavbar />

      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2"
          >
            <Link href="/" className="hover:text-[#ED772F]">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/conversions" className="hover:text-[#ED772F]">Conversions</Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">Steps to KM</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            Steps to kilometers converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
            Convert any step count to kilometers. Each row links to a detailed
            page with calorie burn, walking time, and a stride-length table by
            height. For an exact, personalized answer, use the{" "}
            <Link
              href="/tools/step-distance-calculator"
              className="text-[#ED772F] hover:underline"
            >
              step distance calculator
            </Link>
            .
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">The quick formula</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                km ≈ steps × 0.00076
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Or: steps × 76 cm stride ÷ 100,000 = distance in km. Average adult
              stride is 76 cm (2.5 ft).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Full conversion table</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">Steps</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Kilometers</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Miles</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Detail page</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.steps} className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">{formatNumber(r.steps)}</td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">{formatKm(r.km)} km</td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">{formatMiles(r.miles)} mi</td>
                      <td className="p-3 text-right">
                        <Link href={`/conversions/steps-to-km/${r.steps}`} className="text-[#ED772F] hover:underline">
                          {formatNumber(r.steps)} steps →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Want exact numbers for your height?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Our step distance calculator computes the exact answer for your
              stride length — just enter your height.
            </p>
            <Link
              href="/tools/step-distance-calculator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors"
            >
              Open the calculator →
            </Link>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
