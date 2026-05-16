import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  KM_TO_STEPS_VALUES,
  kmToStepsDefault,
  HEIGHT_RANGE,
} from "@/lib/conversions";
import { calculateStepLength, distanceToSteps } from "@/lib/step-calculator";

export const metadata: Metadata = {
  title: "How Many Steps in a KM? — 1,316 Steps (Plus Conversion Table)",
  description:
    "1 km ≈ 1,316 steps for an average adult. Full conversion table 1–15 km plus height-adjusted calculator for your exact step count.",
  keywords: [
    "how many steps in a km",
    "km to steps",
    "kilometers to steps",
    "1 km in steps",
    "5 km in steps",
    "convert km to steps",
  ],
  openGraph: {
    title: "How Many Steps in a KM? — 1,316 Steps",
    description: "1 km ≈ 1,316 steps for an average adult. Full conversion table.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/conversions/km-to-steps`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "KM to Steps" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/conversions/km-to-steps` },
};

export default function KmToStepsCategoryPage() {
  const rows = KM_TO_STEPS_VALUES.map((km) => ({
    km,
    steps: kmToStepsDefault(km),
  }));

  const oneKmByHeight = HEIGHT_RANGE.map(({ label, cm, gender }) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    const steps = distanceToSteps(1, stepLengthCm);
    return { height: label, stepLengthCm, steps };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.baseUrl },
      { "@type": "ListItem", position: 2, name: "Conversions", item: `${SITE_CONFIG.baseUrl}/conversions` },
      { "@type": "ListItem", position: 3, name: "KM to Steps" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How many steps are in a kilometer?", acceptedAnswer: { "@type": "Answer", text: "About 1,316 steps for an average adult using a 76 cm stride. Ranges roughly 1,160 (tall walker) to 1,710 (petite walker)." } },
      { "@type": "Question", name: "How many steps in 5 km?", acceptedAnswer: { "@type": "Answer", text: "About 6,579 steps for an average adult — a typical 5K race." } },
      { "@type": "Question", name: "How many steps in 10 km?", acceptedAnswer: { "@type": "Answer", text: "About 13,158 steps — exceeding the standard 10,000-step daily target." } },
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
            <span className="text-neutral-700 dark:text-neutral-300">KM to Steps</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            How many steps are in a kilometer?
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Short answer: about <strong>1,316 steps</strong> for an average
            adult. Full number depends on your height — see the table.
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10 mb-10">
            <p className="text-sm font-medium text-[#ED772F] uppercase tracking-wide mb-2">Quick answer</p>
            <p className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2">≈ 1,316 steps</p>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
              Average adult, 76 cm (2.5 ft) stride. Your number depends on your height.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">Steps per km by height</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Stride length is roughly 0.41 × your height. Shorter walkers take more steps for the same distance.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">Height</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Stride</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Steps per km</th>
                  </tr>
                </thead>
                <tbody>
                  {oneKmByHeight.map((r) => (
                    <tr key={r.height} className="border-t border-neutral-200 dark:border-neutral-800">
                      <td className="p-3 text-neutral-900 dark:text-white">{r.height}</td>
                      <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">{r.stepLengthCm.toFixed(1)} cm</td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white font-medium tabular-nums">{formatNumber(r.steps)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">The conversion formula</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">steps ≈ km × 1,316</code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Or: 1 km = 100,000 cm ÷ 76 cm stride ≈ 1,316 steps.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">KM → steps conversion table</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">Kilometers</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Steps (avg adult)</th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">Detail page</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.km} className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">{r.km} km</td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">{formatNumber(r.steps)}</td>
                      <td className="p-3 text-right">
                        <Link href={`/conversions/km-to-steps/${r.km}`} className="text-[#ED772F] hover:underline">{r.km} km →</Link>
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
              Use the step distance calculator — enter your height once and get your personal steps-per-km number.
            </p>
            <Link href="/tools/step-distance-calculator" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors">
              Open the calculator →
            </Link>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
