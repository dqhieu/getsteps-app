import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  MILES_TO_STEPS_VALUES,
  milesToStepsDefault,
  HEIGHT_RANGE,
  KM_PER_MILE,
} from "@/lib/conversions";
import { calculateStepLength, distanceToSteps } from "@/lib/step-calculator";

export const metadata: Metadata = {
  title: "How Many Steps in a Mile? — 2,117 Steps (Plus Conversion Table)",
  description:
    "1 mile ≈ 2,117 steps for an average adult. Use the table to convert any miles to steps, or click through for calorie burn and walking time by your height.",
  keywords: [
    "how many steps in a mile",
    "miles to steps",
    "miles in steps",
    "1 mile in steps",
    "steps in a mile",
    "convert miles to steps",
  ],
  openGraph: {
    title: "How Many Steps in a Mile? — 2,117 Steps",
    description:
      "1 mile ≈ 2,117 steps for an average adult. Full conversion table + height-based calculator.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/miles-to-steps`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Miles to Steps" }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/conversions/miles-to-steps`,
  },
};

export default function MilesToStepsCategoryPage() {
  const rows = MILES_TO_STEPS_VALUES.map((miles) => ({
    miles,
    steps: milesToStepsDefault(miles),
  }));

  // Special table: 1 mile across the height range
  const oneMileByHeight = HEIGHT_RANGE.map(({ label, cm, gender }) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    const steps = distanceToSteps(KM_PER_MILE, stepLengthCm);
    return { height: label, stepLengthCm, steps };
  });

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
      { "@type": "ListItem", position: 3, name: "Miles to Steps" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many steps are in a mile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "About 2,117 steps for an average adult using a 76 cm (2.5 ft) stride length. The exact number ranges from roughly 1,870 steps for someone 6'4\" to 2,750 steps for someone 4'10\".",
        },
      },
      {
        "@type": "Question",
        name: "How many steps are in 2 miles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "About 4,234 steps for an average adult. See the conversion table on this page for other distances.",
        },
      },
      {
        "@type": "Question",
        name: "How many steps in 5 miles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "About 10,584 steps — roughly the standard 10,000-steps daily target.",
        },
      },
      {
        "@type": "Question",
        name: "Does the number of steps in a mile depend on height?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your stride length is roughly 0.41 × your height. A 4'10\" walker takes about 2,750 steps per mile, while a 6'4\" walker takes about 1,870 steps per mile — a 47% difference.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              Miles to Steps
            </span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            How many steps are in a mile?
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Short answer: about <strong>2,117 steps</strong> for an average
            adult. The full number depends on your height — keep reading for
            the table.
          </p>

          {/* Hero answer */}
          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10 mb-10">
            <p className="text-sm font-medium text-[#ED772F] uppercase tracking-wide mb-2">
              Quick answer
            </p>
            <p className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2">
              ≈ 2,117 steps
            </p>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
              Average adult, 76 cm (2.5 ft) stride length. Your number depends
              on your height.
            </p>
          </section>

          {/* 1 mile by height */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
              Steps per mile by height
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Stride length is roughly 0.41 × your height. Shorter walkers take
              more steps to cover the same distance.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Height
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Stride
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Steps per mile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {oneMileByHeight.map((r) => (
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
                      <td className="p-3 text-right text-neutral-900 dark:text-white font-medium tabular-nums">
                        {formatNumber(r.steps)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick formula */}
          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              The conversion formula
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                steps ≈ miles × 2,117
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Or: 1 mile = 1,609.34 m × 100 cm ÷ 76 cm stride ≈ 2,117 steps.
            </p>
          </section>

          {/* Full conversion table */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Miles → steps conversion table
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Miles
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Steps (avg adult)
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      Detail page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.miles}
                      className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30"
                    >
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">
                        {r.miles} {r.miles === 1 ? "mile" : "miles"}
                      </td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">
                        {formatNumber(r.steps)}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={`/conversions/miles-to-steps/${r.miles}`}
                          className="text-[#ED772F] hover:underline"
                        >
                          {r.miles} {r.miles === 1 ? "mile" : "miles"} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Want the exact number for your height?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Use the step distance calculator — enter your height once and get
              your personal steps-per-mile number.
            </p>
            <Link
              href="/tools/step-distance-calculator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors"
            >
              Open the calculator →
            </Link>
          </section>

          <section className="prose dark:prose-invert max-w-none">
            <h2>Why not just say "2,000 steps in a mile"?</h2>
            <p>
              The 2,000-step rule of thumb is a useful shortcut, but it leaves
              a meaningful gap. Using 76 cm as the average adult stride —
              which is what the CDC and Mayo Clinic publish — gives about
              <strong> 2,117 steps per mile</strong>, not 2,000. Over a 10,000-step
              day, that's roughly a quarter-mile of distance the simpler rule
              would miss.
            </p>
            <h2>The 10,000-step connection</h2>
            <p>
              The standard 10,000-step daily target translates to about{" "}
              <strong>4.72 miles (7.6 km)</strong> for an average adult.
              That's why hitting 10,000 steps takes roughly 90 minutes of
              normal-pace walking spread across a day.
            </p>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
