import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { BodyFatCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Body Fat Percentage Calculator - Navy Method (No Equipment Needed)",
  description:
    "Calculate your body fat percentage using the accurate U.S. Navy method. Just enter your measurements — no gym equipment or body fat scale required.",
  keywords: [
    "body fat percentage calculator",
    "body fat calculator",
    "navy method body fat",
    "how to calculate body fat",
    "body fat percentage men",
    "body fat percentage women",
  ],
  openGraph: {
    title: "Body Fat Percentage Calculator - Navy Method",
    description:
      "Calculate your body fat percentage using the accurate U.S. Navy method. Just enter your measurements — no gym equipment or body fat scale required.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/body-fat-calculator`,
    images: [
      {
        url: "/og/body-fat-calculator.png",
        width: 1200,
        height: 630,
        alt: "Body Fat Percentage Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/body-fat-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Fat Percentage Calculator - Navy Method (No Equipment Needed)",
    description: "Calculate your body fat percentage using the accurate U.S. Navy method. Just enter your measurements — no gym equipment or body fat scale required.",
    images: ["/og/body-fat-calculator.png"],
  },
};

export default function BodyFatCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Body Fat Percentage Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate your body fat percentage accurately using the U.S. Navy
            method — just a tape measure required.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your gender, height, and body measurements to calculate body fat percentage using the proven U.S. Navy formula — no body fat scale or gym equipment needed.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <BodyFatCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Body Fat Percentage
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Body fat percentage is a more accurate measure of fitness than
                BMI alone. While BMI only considers weight and height, body fat
                percentage distinguishes between fat mass and lean mass (muscle,
                bone, water).
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is a healthy body fat percentage?
                    </summary>
                    <p className="mt-2 text-sm">
                      For men, a fitness range of 14–17% and acceptable range of
                      18–24% are considered healthy. For women, fitness falls
                      between 21–24% and acceptable between 25–31%. Athletes
                      typically carry less — 6–13% for men and 14–20% for women.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How accurate is the Navy method?
                    </summary>
                    <p className="mt-2 text-sm">
                      The U.S. Navy method is typically within 3–4% of a DEXA
                      scan result, making it one of the most accurate
                      tape-measure methods available without equipment. Accuracy
                      improves when measurements are taken carefully and
                      consistently.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Where should I measure my waist?
                    </summary>
                    <p className="mt-2 text-sm">
                      Measure your waist at the narrowest point, usually at or
                      just above the navel. Keep the tape measure parallel to
                      the floor and measure after exhaling normally — do not
                      suck in your stomach.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What&apos;s the difference between body fat and BMI?
                    </summary>
                    <p className="mt-2 text-sm">
                      BMI only uses height and weight, so it cannot distinguish
                      between fat and muscle. A muscular athlete may have a high
                      BMI but low body fat. Body fat percentage is a more
                      precise indicator of actual body composition and health
                      risk.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How can I reduce body fat?
                    </summary>
                    <p className="mt-2 text-sm">
                      Combine regular walking or cardio with strength training
                      and a modest calorie deficit. Aim for 0.5–1 kg of fat loss
                      per week. Daily step goals of 10,000+ steps are an
                      effective and sustainable way to increase calorie
                      expenditure without intense exercise.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              <a href="/tools/bmi-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">BMI Calculator</a>
              <a href="/tools/calorie-deficit-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Calorie Deficit Calculator</a>
              <a href="/tools/weight-loss-walking-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Weight Loss Walking Calculator</a>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["body-fat-calculator"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["body-fat-calculator"] || []} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Health Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Pair your body composition goals with daily step tracking in Steps.
          </p>

          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
            <Image
              src="/badge_light_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto dark:hidden"
            />
            <Image
              src="/badge_dark_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto hidden dark:block"
            />
          </a>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            Free on the App Store
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a healthy body fat percentage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For men, a fitness range of 14–17% and acceptable range of 18–24% are considered healthy. For women, fitness falls between 21–24% and acceptable between 25–31%. Athletes typically carry less — 6–13% for men and 14–20% for women. Essential fat (minimum for bodily functions) is 2–5% for men and 10–13% for women."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is the Navy method for body fat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The U.S. Navy method is typically within 3–4% of a DEXA scan result, making it one of the most accurate tape-measure methods available. Accuracy improves when measurements are taken carefully: use a flexible tape measure, keep it parallel to the floor, and measure at the same time of day consistently."
                }
              },
              {
                "@type": "Question",
                "name": "Where should I measure my waist for the body fat calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Measure your waist at the narrowest point, usually at or just above the navel. Keep the tape measure parallel to the floor and measure after exhaling normally — do not hold your breath or suck in your stomach. For the neck, measure just below the larynx (Adam's apple)."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between body fat percentage and BMI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BMI only uses height and weight, so it cannot distinguish between fat and muscle. A muscular athlete may have a high BMI but low body fat. Body fat percentage measures the actual proportion of fat mass to total body mass, making it a more precise indicator of body composition and health risk."
                }
              },
              {
                "@type": "Question",
                "name": "How can I reduce my body fat percentage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Combine regular cardio (including daily walking of 8,000–12,000 steps) with strength training 2–3 times per week, and maintain a modest calorie deficit of 300–500 calories per day. Aim for 0.5–1 kg of fat loss per week. Building muscle simultaneously will improve body composition even if scale weight changes slowly."
                }
              }
            ]
          })
        }}
      />

      <LandingFooter />
    </div>
  );
}
