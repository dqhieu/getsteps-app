import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  CONVERSION_CATEGORIES,
  STEPS_TO_MILES_VALUES,
  MILES_TO_STEPS_VALUES,
  STEPS_TO_CALORIES_VALUES,
  stepsToMilesDefault,
  milesToStepsDefault,
  stepsToCaloriesDefault,
  formatMiles,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "Steps Conversion Hub — Steps to Miles, Miles to Steps, Calories",
  description:
    "Convert between steps, miles, kilometers, and calories. Quick answers, full conversion tables, and a calculator personalized to your height and weight.",
  keywords: [
    "steps conversion",
    "step conversion table",
    "steps to miles",
    "miles to steps",
    "steps to calories",
    "step distance conversion",
  ],
  openGraph: {
    title: "Steps Conversion Hub",
    description:
      "Convert between steps, miles, kilometers, and calories. Quick answers + full tables.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions`,
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Steps Conversion Hub",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/conversions`,
  },
};

const FEATURED_STEPS_TO_MILES = [5000, 7000, 10000, 12000, 15000, 20000];
const FEATURED_STEPS_TO_CAL = [5000, 7000, 10000, 15000, 20000];

export default function ConversionsHubPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
              Steps conversion hub
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Quick, accurate answers for every common step conversion — miles,
              kilometers, calories, and walking time.
            </p>
          </header>

          {/* Category grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {CONVERSION_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/conversions/${cat.slug}`}
                className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-[#ED772F] transition-colors"
              >
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#ED772F] transition-colors">
                  {cat.title} →
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {cat.description}
                </p>
              </Link>
            ))}
          </section>

          {/* Popular: steps to miles */}
          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Popular: steps to miles
              </h2>
              <Link
                href="/conversions/steps-to-miles"
                className="text-sm text-[#ED772F] hover:underline"
              >
                See all {STEPS_TO_MILES_VALUES.length} →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {FEATURED_STEPS_TO_MILES.map((steps) => (
                <Link
                  key={steps}
                  href={`/conversions/steps-to-miles/${steps}`}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-[#ED772F] transition-colors"
                >
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    {formatNumber(steps)} steps
                  </div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-white">
                    {formatMiles(stepsToMilesDefault(steps))} miles
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular: miles to steps */}
          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Popular: miles to steps
              </h2>
              <Link
                href="/conversions/miles-to-steps"
                className="text-sm text-[#ED772F] hover:underline"
              >
                See all {MILES_TO_STEPS_VALUES.length} →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {MILES_TO_STEPS_VALUES.slice(0, 6).map((miles) => (
                <Link
                  key={miles}
                  href={`/conversions/miles-to-steps/${miles}`}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-[#ED772F] transition-colors"
                >
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    {miles} {miles === 1 ? "mile" : "miles"}
                  </div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-white">
                    {formatNumber(milesToStepsDefault(miles))} steps
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular: steps to calories */}
          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Popular: steps to calories
              </h2>
              <Link
                href="/conversions/steps-to-calories"
                className="text-sm text-[#ED772F] hover:underline"
              >
                See all {STEPS_TO_CALORIES_VALUES.length} →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {FEATURED_STEPS_TO_CAL.map((steps) => (
                <Link
                  key={steps}
                  href={`/conversions/steps-to-calories/${steps}`}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-[#ED772F] transition-colors"
                >
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    {formatNumber(steps)} steps
                  </div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-white">
                    {formatNumber(stepsToCaloriesDefault(steps))} cal
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Want personalized numbers?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              These tables use averages. Our calculators let you enter your
              actual height, weight, and pace for an exact answer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/step-distance-calculator"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors"
              >
                Step distance calculator
              </Link>
              <Link
                href="/tools/steps-to-calories-calculator"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium border border-neutral-200 dark:border-neutral-700 hover:border-[#ED772F] transition-colors"
              >
                Calorie calculator
              </Link>
            </div>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
