import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import {
  MILES_TO_TIME_VALUES,
  walkingTimeMinutesDefault,
  formatMinutes,
  KM_PER_MILE,
} from "@/lib/conversions";

export const metadata: Metadata = {
  title: "How Long to Walk X Miles? — Walking Time by Pace",
  description:
    "Walking time for any distance in miles. 1 mile ≈ 20 min, 3 miles ≈ 1 h, 5 miles ≈ 1 h 40 m. Full table at three walking paces.",
  keywords: [
    "how long does it take to walk a mile",
    "how long to walk miles",
    "walking time miles",
    "miles to walking time",
    "how long to walk 5 miles",
    "how long to walk 3 miles",
  ],
  openGraph: {
    title: "How Long Does It Take to Walk X Miles?",
    description: "Walking time for any distance in miles, across three paces.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/miles-to-time`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Miles to walking time" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/conversions/miles-to-time` },
};

export default function MilesToTimeCategoryPage() {
  const rows = MILES_TO_TIME_VALUES.map((miles) => {
    const km = miles * KM_PER_MILE;
    return {
      miles,
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
      { "@type": "ListItem", position: 3, name: "Miles to Walking Time" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does it take to walk 1 mile?", acceptedAnswer: { "@type": "Answer", text: "About 20 minutes at a normal 3 mph walking pace. Brisk pace (4 mph): 15 minutes. Slow pace (2 mph): 30 minutes." } },
      { "@type": "Question", name: "How long does it take to walk 3 miles?", acceptedAnswer: { "@type": "Answer", text: "About 1 hour at a normal pace. Brisk: 45 minutes. Slow: 1 hour 30 minutes." } },
      { "@type": "Question", name: "How long does it take to walk 5 miles?", acceptedAnswer: { "@type": "Answer", text: "About 1 hour 40 minutes at a normal pace. Brisk: 1 hour 15 minutes. Slow: 2 hours 30 minutes." } },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LandingNavbar />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2">
            <Link href="/" className="hover:text-[#ED772F]">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/conversions" className="hover:text-[#ED772F]">Conversions</Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">Miles to Walking Time</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            How long does it take to walk X miles?
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
            Walking time for any distance, across three common paces. Click any
            row for a detailed page.
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">The quick rule</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                minutes ≈ miles × 20
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              At a normal 3 mph walking pace. Brisk walkers (4 mph) shave about 25%; slow walkers (2 mph) add 50%.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Walking time by distance and pace</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">Distance</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Slow (2 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Normal (3 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Brisk (4 mph)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.miles} className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">{r.miles} {r.miles === 1 ? "mile" : "miles"}</td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">{formatMinutes(r.slow)}</td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">{formatMinutes(r.normal)}</td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">{formatMinutes(r.brisk)}</td>
                      <td className="p-3 text-right">
                        <Link href={`/conversions/miles-to-time/${r.miles}`} className="text-[#ED772F] hover:underline">
                          {r.miles} {r.miles === 1 ? "mi" : "mi"} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Planning a specific route?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              The walking time calculator handles any distance with departure & arrival time, breaks, and pace.
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
