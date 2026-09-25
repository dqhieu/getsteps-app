import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_MILES_VALUES,
  stepsToMilesDefault,
  stepsToKmDefault,
  formatMiles,
  formatKm,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "Steps to Miles Converter — Quick Conversion Table & Calculator",
  description:
    "Convert any number of steps to miles. 10,000 steps ≈ 4.72 miles · 5,000 steps ≈ 2.36 miles. Full conversion table from 1,000 to 30,000 steps.",
  keywords: [
    "steps to miles",
    "convert steps to miles",
    "steps to miles converter",
    "steps to mile chart",
    "step to mile conversion",
    "how many miles is X steps",
  ],
  openGraph: {
    title: "Steps to Miles Converter — Quick Conversion Table & Calculator",
    description:
      "Convert any number of steps to miles. 10,000 steps ≈ 4.72 miles. Full conversion table 1,000 → 30,000 steps.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-miles`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Steps to Miles" }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-miles`,
  },
};

export default function StepsToMilesCategoryPage() {
  const rows = STEPS_TO_MILES_VALUES.map((steps) => ({
    steps,
    miles: stepsToMilesDefault(steps),
    km: stepsToKmDefault(steps),
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Steps to Miles",
      },
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
            <Link href="/" className="hover:text-[#ED772F]">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/conversions" className="hover:text-[#ED772F]">
              Conversions
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">
              Steps to Miles
            </span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            Steps to miles converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
            Convert any step count to miles. Each row below links to a detailed
            page with calorie burn, walking time, and a stride-length table by
            height.
          </p>

          {/* Quick formula card */}
          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              The quick formula
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                miles ≈ steps × 0.000473
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This assumes an average adult stride of 76 cm (2.5 ft). Taller
              walkers cover slightly more per step; shorter walkers cover less.
              For your specific number, click any row in the table below.
            </p>
          </section>

          {/* Full conversion table */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Full conversion table
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Steps
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Miles
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Kilometers
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Detail page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.steps}
                      className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30"
                    >
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">
                        {formatNumber(r.steps)}
                      </td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">
                        {formatMiles(r.miles)} mi
                      </td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">
                        {formatKm(r.km)} km
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={`/conversions/steps-to-miles/${r.steps}`}
                          className="text-[#ED772F] hover:underline"
                        >
                          {formatNumber(r.steps)} steps →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Calculator link */}
          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Want exact numbers for your height?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Our step distance calculator computes the exact answer for{" "}
              <em>your</em> stride length — just enter your height.
            </p>
            <Link
              href="/tools/step-distance-calculator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors"
            >
              Open the calculator →
            </Link>
          </section>

          <section className="prose dark:prose-invert max-w-none">
            <h2>How accurate is the steps-to-miles conversion?</h2>
            <p>
              The 76 cm / 2.5 ft default stride length is the figure most
              commonly cited by the CDC, Mayo Clinic, and Harvard Health for an
              average-height adult. Real stride lengths range from about 60 cm
              (petite walkers) to 86 cm (tall walkers), so individual mileage
              can vary by ±10–15%.
            </p>
            <p>
              For the most accurate number, install Steps on your iPhone or
              Apple Watch — it measures your actual step length from your
              workouts over time.
            </p>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
