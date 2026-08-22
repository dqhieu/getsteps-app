import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { IdealWeightCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "ideal-weight-calculator";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator: 4 Formulas Plus Healthy BMI Range",
  description:
    "Devine, Robinson, Miller and Hamwi side by side, plus the healthy BMI band. A 175 cm man lands between 68.7 and 72 kg. Free ideal body weight calculator.",
  keywords: [
    "ideal weight calculator",
    "ideal body weight calculator",
    "healthy weight calculator",
    "how much should I weigh",
    "Devine formula",
    "Robinson formula",
    "Hamwi formula",
    "ideal weight for height",
    "healthy weight range",
  ],
  openGraph: {
    title: "Ideal Weight Calculator: 4 Formulas Plus Healthy BMI Range",
    description:
      "Four clinical ideal body weight formulas side by side, plus the healthy BMI range for your height.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [{ url: `/og/${SLUG}.png`, width: 1200, height: 630, alt: "Ideal Weight Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}` },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Weight Calculator: 4 Formulas Plus Healthy BMI Range",
    description:
      "Four clinical ideal body weight formulas side by side, plus the healthy BMI range for your height.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    q: "What is ideal body weight?",
    a: "It is a clinical estimate of a healthy weight based on height and sex, and it is worth knowing where it came from: all four common formulas were developed for drug dosing, not for body goals. Devine wrote his in 1974 to calculate gentamicin doses. They were adopted as health targets afterwards, which is why they behave oddly when used that way.",
  },
  {
    q: "Which ideal weight formula should I use?",
    a: "None of them alone. They disagree by 3 to 4 kg at an average height and diverge further at the extremes, which tells you how much precision is really on offer. The average of the four is a reasonable midpoint, but the healthy BMI range is the more useful answer because it gives you a band of about 20 kg rather than a single number to hit.",
  },
  {
    q: "Why do the four formulas give different answers?",
    a: "They were built from different populations and disagree about how much weight each inch of height should add. Hamwi adds 2.7 kg per inch for men, Miller only 1.41. At 175 cm that spread is small, but at 195 cm Hamwi returns around 87 kg and Miller around 78. The taller or shorter you are, the more they part company.",
  },
  {
    q: "Is ideal weight accurate for muscular people?",
    a: "No, and this is the formulas' clearest failure. They see only height and sex, so they cannot distinguish 80 kg of muscle from 80 kg of fat. A trained athlete will read as overweight on all four and on BMI too. If you carry meaningful muscle, body fat percentage and waist-to-hip ratio will tell you far more than any weight target.",
  },
  {
    q: "What is a healthy BMI range?",
    a: "18.5 to 24.9. Converted to weight at 175 cm that is 56.7 to 76.3 kg, a band of nearly 20 kg. That width is the point: healthy weight is a range, not a number, and where you sit within it depends on your build, muscle mass and what you can actually maintain.",
  },
  {
    q: "Should I try to reach my ideal weight?",
    a: "Only if it happens to line up with something sustainable for you. Health outcomes track behaviours more reliably than they track a number on a scale: people who are active at a higher weight generally do better than sedentary people at a lower one. If your weight already sits inside the healthy BMI range, chasing a formula's midpoint is not worth much.",
  },
];

export default function IdealWeightCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Ideal Weight Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Four clinical formulas run side by side, with the healthy BMI range
            alongside them. Seeing how much they disagree is the most useful
            thing this calculator does.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <IdealWeightCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Habits move the number. Nothing else does."
                description="Steps tracks your daily activity automatically, so you can build the consistency that actually shifts body weight over months."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Ideal Weight
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                All four formulas share a shape: a base weight at 5 feet, plus a
                fixed amount for every inch above that. Only the constants
                differ.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">The Formulas</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Devine (1974)</strong><br />Men: 50 kg + 2.3 kg per inch over 5 ft. Women: 45.5 kg + 2.3 kg per inch.</li>
                  <li><strong>Robinson (1983)</strong><br />Men: 52 kg + 1.9 kg per inch. Women: 49 kg + 1.7 kg per inch.</li>
                  <li><strong>Miller (1983)</strong><br />Men: 56.2 kg + 1.41 kg per inch. Women: 53.1 kg + 1.36 kg per inch.</li>
                  <li><strong>Hamwi (1964)</strong><br />Men: 48 kg + 2.7 kg per inch. Women: 45.5 kg + 2.2 kg per inch.</li>
                  <li><strong>Healthy BMI range</strong><br />Weight for BMI 18.5 to 24.9 at your height.</li>
                  <li><strong>Example:</strong> a 175 cm man gets 70.5 (Devine), 68.9 (Robinson), 68.7 (Miller) and 72.0 (Hamwi), averaging 70.0 kg. The healthy BMI band is 56.7 to 76.3 kg.</li>
                </ul>
              </div>

              <p className="text-sm">
                Notice that the four-formula average sits near the middle of a
                BMI band nearly 20 kg wide. That gap is the honest summary: these
                equations produce a plausible point inside a much larger healthy
                range, not a target you have missed if you are not on it.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Related Calculators</h3>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS[SLUG]?.map((tool) => (
                  <a key={tool.href} href={tool.href}
                    className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {tool.title}
                  </a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS[SLUG] || []} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Build the Habit That Moves the Number
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily steps and stay consistent
            over the months that actually change body weight.
          </p>
          <a href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
            target="_blank" rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store">
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
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <LandingFooter />
      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta label="Track your steps with Steps" />
    </div>
  );
}
