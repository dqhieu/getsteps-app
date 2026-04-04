import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { StepsPerMileCalculatorClient } from "./client";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Steps Per Mile Calculator [Free] — How Many Steps in a Mile?",
  description:
    "How many steps in a mile? About 2,000-2,500 depending on height and pace. Get personalized step counts per mile and per km — includes walking vs running comparison table.",
  keywords: [
    "steps per mile",
    "steps per km",
    "how many steps in a mile",
    "steps in a kilometer",
    "step length calculator",
    "walking steps per mile",
    "steps to miles",
    "miles to steps",
  ],
  openGraph: {
    title: "Steps Per Mile Calculator [Free] — Personalized by Height",
    description:
      "How many steps in a mile? 2,000-2,500 depending on your height. Get personalized step counts per mile and per km.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/steps-per-mile-calculator`,
    images: [
      {
        url: "/og/steps-per-mile-calculator.png",
        width: 1200,
        height: 630,
        alt: "Steps Per Mile Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/steps-per-mile-calculator`,
  },
};

export default function StepsPerMileCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Steps Per Mile Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find out how many steps you take per mile or kilometer based on your
            height. Get personalized step counts for any distance.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <StepsPerMileCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Steps Per Mile
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                The number of steps you take per mile depends on your step
                length, which is primarily determined by your height and gender.
                Taller people generally have longer strides and take fewer steps
                to cover the same distance.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Step length:</strong> Height (cm) × 0.415 (male) or
                    0.413 (female)
                  </li>
                  <li>
                    <strong>Steps per km:</strong> 100,000 ÷ step length (cm)
                  </li>
                  <li>
                    <strong>Steps per mile:</strong> Steps per km × 1.609
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  Average Steps by Height
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>5&apos;0&quot; (152 cm):</strong> ~2,500 steps/mile
                  </li>
                  <li>
                    <strong>5&apos;6&quot; (168 cm):</strong> ~2,300 steps/mile
                  </li>
                  <li>
                    <strong>6&apos;0&quot; (183 cm):</strong> ~2,100 steps/mile
                  </li>
                  <li>
                    <strong>6&apos;6&quot; (198 cm):</strong> ~1,950 steps/mile
                  </li>
                </ul>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps are in a mile?
                    </summary>
                    <p className="mt-2 text-sm">
                      On average, there are about 2,000-2,500 steps in a mile.
                      The exact number depends on your height and stride length.
                      Shorter people take more steps, while taller people take
                      fewer.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps are in a kilometer?
                    </summary>
                    <p className="mt-2 text-sm">
                      On average, there are about 1,250-1,550 steps in a
                      kilometer. This is roughly 62% of the steps in a mile,
                      since a kilometer is about 0.62 miles.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Does walking speed affect steps per mile?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, slightly. When you walk faster or run, your stride
                      lengthens, so you take fewer steps per mile. However, for
                      most walking speeds, the difference is relatively small.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How can I measure my actual step length?
                    </summary>
                    <p className="mt-2 text-sm">
                      Walk a known distance (like 100 feet) at your normal pace
                      and count your steps. Divide the distance by the number of
                      steps to get your average step length. You can also mark a
                      starting point, take 10 steps, and measure the distance
                      covered.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS["steps-per-mile-calculator"]?.map((tool) => (
                  <a key={tool.href} href={tool.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">{tool.title}</a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS["steps-per-mile-calculator"] || []} />
            <PersonaLinks items={TOOL_RELATED_PERSONAS["steps-per-mile-calculator"] || []} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Steps & Distance
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to automatically track your steps and
            distance on your iPhone and Apple Watch.
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
                "name": "How many steps are in a mile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On average, there are about 2,000-2,500 steps in a mile. The exact number depends on your height and stride length. Shorter people take more steps, while taller people take fewer."
                }
              },
              {
                "@type": "Question",
                "name": "How many steps are in a kilometer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On average, there are about 1,250-1,550 steps in a kilometer. This is roughly 62% of the steps in a mile, since a kilometer is about 0.62 miles."
                }
              },
              {
                "@type": "Question",
                "name": "Does walking speed affect steps per mile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, slightly. When you walk faster or run, your stride lengthens, so you take fewer steps per mile. However, for most walking speeds, the difference is relatively small."
                }
              },
              {
                "@type": "Question",
                "name": "How can I measure my actual step length?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Walk a known distance (like 100 feet) at your normal pace and count your steps. Divide the distance by the number of steps to get your average step length. You can also mark a starting point, take 10 steps, and measure the distance covered."
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
