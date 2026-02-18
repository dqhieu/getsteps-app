import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { DistanceEquivalentCalculatorClient } from "./client";

export const metadata: Metadata = {
  title: "Distance Equivalent Calculator - km, Miles, Meters, Steps",
  description:
    "Convert any running distance between kilometers, miles, meters, and yards. See equivalent steps, estimated time, and calories burned for walking, jogging, or running.",
  keywords: [
    "distance converter",
    "km to miles calculator",
    "how many steps in a mile",
    "distance equivalent calculator",
    "meters to miles converter",
    "running distance calculator",
    "km to miles running",
  ],
  openGraph: {
    title: "Distance Equivalent Calculator - km, Miles, Meters, Steps",
    description:
      "Convert any running distance between kilometers, miles, meters, and yards. See equivalent steps, estimated time, and calories burned for walking, jogging, or running.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/distance-equivalent-calculator`,
    images: [{ url: "/og/distance-equivalent-calculator.png", width: 1200, height: 630, alt: "Distance Equivalent Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/distance-equivalent-calculator` },
  twitter: {
    card: "summary_large_image",
    title: "Distance Equivalent Calculator - km, Miles, Meters, Steps",
    description: "Convert any running distance between kilometers, miles, meters, and yards. See equivalent steps, estimated time, and calories burned for walking, jogging, or running.",
    images: ["/og/distance-equivalent-calculator.png"],
  },
};

const faqs = [
  {
    q: "How many km is a mile?",
    a: "1 mile = 1.60934 km. Conversely, 1 km = 0.62137 miles. So a 5-mile run is about 8.05 km, and a 10 km run is about 6.21 miles.",
  },
  {
    q: "How many steps is 1 mile?",
    a: "Approximately 2,000–2,500 steps depending on your height and stride length. The average is around 2,112 steps per mile (1,312 steps per km). Taller people with longer strides take fewer steps.",
  },
  {
    q: "How many km is a marathon?",
    a: "A marathon is exactly 42.195 km (26.219 miles). A half marathon is 21.0975 km (13.109 miles). These distances are fixed by World Athletics regulations.",
  },
  {
    q: "How many steps is 5K?",
    a: "Approximately 6,250–7,500 steps for most people. At the average stride of 1,312 steps/km, a 5K equals about 6,560 steps. This varies based on your height, gait, and terrain.",
  },
  {
    q: "How long does it take to walk 1 mile?",
    a: "At an average walking pace of 5 km/h, about 12 minutes per mile. At a brisk walk of 6 km/h, about 10 minutes. Fitness walkers can cover a mile in under 9 minutes.",
  },
];

export default function DistanceEquivalentCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Distance Equivalent Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Convert any distance between km, miles, meters, and yards — and see equivalent steps, time, and calories.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter any distance in kilometers, miles, meters, or yards and instantly see all equivalent values. Includes estimated step count, time to cover the distance walking or running, and approximate calories burned.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <DistanceEquivalentCalculatorClient />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Distance Conversion FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
                { label: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
                { label: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            See exactly how far you've walked today in the Steps app.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track every step, every kilometer, and every calorie burned — all automatically.
          </p>
          <a href={SITE_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95 inline-block" aria-label="Download on the App Store">
            <Image src="/badge_light_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto dark:hidden" />
            <Image src="/badge_dark_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto hidden dark:block" />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">Free on the App Store</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
