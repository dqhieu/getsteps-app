import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_TIME_VALUES,
  stepsToKmDefault,
  walkingTimeMinutesDefault,
  formatMinutes,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "How Long Does It Take to Walk X Steps? — Time Conversion Table",
  description:
    "Walking time for any step count. 10,000 steps ≈ 1h 31m at normal pace. Full table for 1,000 → 30,000 steps across three walking paces.",
  keywords: [
    "how long does it take to walk steps",
    "steps to walking time",
    "walking time per step",
    "steps to minutes",
    "how long to walk X steps",
  ],
  openGraph: {
    title: "How Long Does It Take to Walk X Steps?",
    description: "Walking time for any step count. Full table with three paces.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-time`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Steps to walking time" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-time` },
};

export default function StepsToTimeCategoryPage() {
  const rows = STEPS_TO_TIME_VALUES.map((steps) => {
    const km = stepsToKmDefault(steps);
    return {
      steps,
      slow: walkingTimeMinutesDefault(km, "slow"),
      normal: walkingTimeMinutesDefault(km, "normal"),
      brisk: walkingTimeMinutesDefault(km, "brisk"),
    };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.baseUrl },
      { "@type": "ListItem", position: 2, name: "Conversions", item: `${SITE_CONFIG.baseUrl}/conversions` },
      { "@type": "ListItem", position: 3, name: "Walking Time" },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LandingNavbar />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2">
            <Link href="/" className="hover:text-[#ED772F]">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/conversions" className="hover:text-[#ED772F]">Conversions</Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">Walking Time</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            How long does it take to walk X steps?
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
            Walking time for any step count, across three common paces. Click
            any row for a detailed page with calorie burn and stride-length
            breakdowns.
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">The quick formula</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                minutes ≈ steps ÷ 100
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Most adults walk at a cadence of about 100 steps per minute at a
              normal pace. So 10,000 steps ≈ 100 minutes (1h 40m) of walking.
              Slightly faster (3 mph) gets it down to 1h 31m.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Walking time by step count and pace</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">Steps</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Slow (2 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Normal (3 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Brisk (4 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.steps} className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">{formatNumber(r.steps)}</td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">{formatMinutes(r.slow)}</td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">{formatMinutes(r.normal)}</td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">{formatMinutes(r.brisk)}</td>
                      <td className="p-3 text-right">
                        <Link href={`/conversions/steps-to-time/${r.steps}`} className="text-[#ED772F] hover:underline">
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
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Want to plan a specific walk?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              The walking time calculator estimates time for any distance or step count, with departure and arrival time.
            </p>
            <Link href="/tools/walking-time-calculator" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors">
              Open the calculator →
            </Link>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
