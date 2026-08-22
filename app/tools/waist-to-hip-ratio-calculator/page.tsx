import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { WaistHipRatioCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "waist-to-hip-ratio-calculator";

export const metadata: Metadata = {
  title: "Waist to Hip Ratio Calculator: WHO Risk Bands",
  description:
    "Calculate your waist-to-hip ratio against WHO thresholds. Risk rises above 0.90 for men and 0.85 for women. Free calculator with waist circumference check.",
  keywords: [
    "waist to hip ratio calculator",
    "WHR calculator",
    "waist hip ratio",
    "body shape calculator",
    "visceral fat calculator",
    "waist circumference risk",
    "apple vs pear body shape",
    "WHO waist hip ratio",
  ],
  openGraph: {
    title: "Waist to Hip Ratio Calculator: WHO Risk Bands",
    description:
      "Calculate your waist-to-hip ratio and see where it falls against WHO cardiovascular risk thresholds.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [{ url: `/og/${SLUG}.png`, width: 1200, height: 630, alt: "Waist to Hip Ratio Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}` },
  twitter: {
    card: "summary_large_image",
    title: "Waist to Hip Ratio Calculator: WHO Risk Bands",
    description:
      "Calculate your waist-to-hip ratio and see where it falls against WHO cardiovascular risk thresholds.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    q: "What is a healthy waist-to-hip ratio?",
    a: "The WHO puts low risk below 0.90 for men and below 0.80 for women. Between 0.90 and 0.99 for men, or 0.80 and 0.84 for women, is moderate risk. At or above 1.0 for men and 0.85 for women, risk is substantially elevated. Women's thresholds sit lower because they naturally carry more hip and thigh fat, so the same ratio means more abdominal fat in a woman than in a man.",
  },
  {
    q: "Why does waist-to-hip ratio matter more than BMI?",
    a: "Because it can see where the fat is, and BMI cannot. Visceral fat packed around the abdominal organs is metabolically active: it releases inflammatory signals and free fatty acids straight into the portal circulation. Fat on the hips and thighs does not behave that way. Two people with identical BMIs can carry very different risk depending on distribution, and WHR picks that up.",
  },
  {
    q: "How do I measure my waist and hips correctly?",
    a: "Waist at the narrowest point between your lowest rib and the top of your hip bone, measured at the end of a normal breath out, not sucked in. Hips at the widest point around your buttocks. Keep the tape level and snug without compressing the skin, and measure over bare skin or thin clothing. Measuring at a different height is the most common source of error, so use the same landmarks each time.",
  },
  {
    q: "What is the difference between an apple and a pear body shape?",
    a: "Apple shapes carry fat around the middle, producing a higher ratio and the greater metabolic risk. Pear shapes carry it on the hips and thighs, giving a lower ratio and a more favourable risk profile. Distribution is largely genetic and strongly influenced by sex hormones, which is why many women shift toward an apple pattern after menopause even without gaining weight.",
  },
  {
    q: "Can I reduce my waist-to-hip ratio?",
    a: "Yes, though not by targeting it directly. Spot reduction does not work: no amount of abdominal exercise preferentially burns abdominal fat. What does work is an overall calorie deficit, and visceral fat happens to be among the first stores mobilised, so early weight loss often improves the ratio faster than it improves total weight. Regular aerobic activity reduces visceral fat specifically, even at stable body weight.",
  },
  {
    q: "Does walking reduce belly fat?",
    a: "It reduces visceral fat, which is the part that matters here. Regular moderate aerobic activity lowers visceral fat measurably even when body weight does not change much, and walking is the easiest form to sustain at the volume required. Trials generally use 150 to 300 minutes a week of moderate activity, which is 30 to 60 minutes most days.",
  },
  {
    q: "Should I use waist circumference or the ratio?",
    a: "Both, which is why this calculator reports both. The ratio can be misleading on its own: someone with a large waist and unusually wide hips can score in the low-risk band despite a waist circumference that the WHO would flag independently. The thresholds there are 94 and 102 cm for men, 80 and 88 cm for women. When the two measures disagree, take the more cautious reading.",
  },
];

export default function WaistToHipRatioCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Waist to Hip Ratio Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Two tape measurements predict cardiovascular risk better than BMI,
            because they show where your body stores fat rather than just how
            much of it there is.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WaistHipRatioCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Walking targets the fat this measures"
                description="Regular aerobic activity reduces visceral fat specifically, even at stable body weight. Steps tracks yours automatically so the habit sticks."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Your Risk Band
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                The arithmetic is trivial. The value is in the thresholds, which
                come from the WHO&apos;s 2008 expert consultation on waist
                circumference and waist-hip ratio.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula and Thresholds
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>WHR</strong> = waist circumference ÷ hip circumference</li>
                  <li><strong>Men:</strong> low below 0.90, moderate 0.90 to 0.99, high 1.0 and above</li>
                  <li><strong>Women:</strong> low below 0.80, moderate 0.80 to 0.84, high 0.85 and above</li>
                  <li><strong>Waist alone (men):</strong> increased risk at 94 cm, substantially increased at 102 cm</li>
                  <li><strong>Waist alone (women):</strong> increased risk at 80 cm, substantially increased at 88 cm</li>
                  <li><strong>Example:</strong> a man with a 90 cm waist and 100 cm hips scores 0.90, the bottom of the moderate band.</li>
                </ul>
              </div>

              <p className="text-sm">
                The waist circumference check runs independently of the ratio,
                because the two can disagree. Wide hips can pull a ratio into the
                low-risk band while the waist measurement alone would still be
                flagged. When they conflict, the more cautious reading is the one
                to act on.
              </p>

              <p className="text-sm">
                This is a screening measure, not a diagnosis. A result in the
                moderate or high band is worth raising with a doctor, particularly
                alongside blood pressure, fasting glucose or lipid results.
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
            Walk Off the Fat That Matters
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily walking and build the
            aerobic habit that reduces visceral fat.
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
