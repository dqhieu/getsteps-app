import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_CALORIES_VALUES,
  stepsToCaloriesDefault,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "Steps to Calories Converter — How Many Calories Per Step?",
  description:
    "Convert any step count to calories burned. 10,000 steps ≈ 372 calories. Full table from 1,000 to 30,000 steps with calorie burn by your body weight.",
  keywords: [
    "steps to calories",
    "calories per step",
    "step to calorie conversion",
    "how many calories in steps",
    "convert steps to calories",
  ],
  openGraph: {
    title: "Steps to Calories Converter",
    description:
      "10,000 steps ≈ 372 calories. Full conversion table 1,000–30,000 steps.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-calories`,
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Steps to Calories",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-calories`,
  },
};

export default function StepsToCaloriesCategoryPage() {
  const rows = STEPS_TO_CALORIES_VALUES.map((steps) => ({
    steps,
    calories: stepsToCaloriesDefault(steps),
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
      { "@type": "ListItem", position: 3, name: "Steps to Calories" },
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
              Steps to Calories
            </span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            Steps to calories converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
            Convert any step count to calories burned, then click through for
            the calorie breakdown by your weight, pace, and walking time.
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              The quick formula
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                calories ≈ steps × 0.04 × (weight in kg ÷ 70)
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              About 1 calorie per 25 steps for an average adult. Heavier
              walkers burn proportionally more.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Full conversion table (155 lb / 70 kg adult, normal pace)
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Steps
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Calories
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
                        {formatNumber(r.calories)} cal
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={`/conversions/steps-to-calories/${r.steps}`}
                          className="text-[#ED772F] hover:underline"
                        >
                          {formatNumber(r.steps)} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Want personalized calorie burn?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Use the steps-to-calories calculator to enter your weight, age,
              and gender for a more accurate number.
            </p>
            <Link
              href="/tools/steps-to-calories-calculator"
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
