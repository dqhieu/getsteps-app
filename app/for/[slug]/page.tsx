import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedContentSection } from "@/components/related-content-section";
import { PersonaHero } from "@/components/persona-hero";
import { PersonaFeatures } from "@/components/persona-features";
import { PersonaFaq } from "@/components/persona-faq";
import { SITE_CONFIG } from "@/lib/constants";
import {
  getAllPersonaSlugs,
  getPersonaBySlug,
} from "@/lib/personas";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPersonaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);
  if (!persona) return {};

  const url = `${SITE_CONFIG.baseUrl}/for/${slug}`;

  return {
    title: persona.metaTitle,
    description: persona.metaDescription,
    keywords: persona.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: persona.metaTitle,
      description: persona.metaDescription,
      type: "website",
      url,
      images: [{ url: persona.ogImage ?? "/og/default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: persona.metaTitle,
      description: persona.metaDescription,
      images: [persona.ogImage ?? "/og/default.png"],
    },
  };
}

export default async function PersonaPage({ params }: Props) {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);
  if (!persona) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: persona.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "For", path: "/for" },
    { name: persona.headline, path: `/for/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <PersonaHero headline={persona.headline} subheadline={persona.subheadline} />

      {/* Intro */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {persona.introText}
          </p>
        </div>
      </section>

      {/* Problem Points */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Sound Familiar?
            </h2>
            <ul className="space-y-3">
              {persona.problemPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                  <span className="text-[#ED772F] mt-0.5 shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {persona.solutionText}
          </p>
        </div>
      </section>

      {/* Features */}
      <PersonaFeatures features={persona.features} />

      {/* Screenshots */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white text-center mb-8">
            See It In Action
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
            {["/screenshots/screenshot9.png", "/screenshots/screenshot1.png", "/screenshots/screenshot2.png"].map((src, i) => (
              <div key={i} className="relative shrink-0 w-48 h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src={src} alt={`Steps app screenshot ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white text-center mb-8">
            What People Are Saying
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {persona.testimonials.map((testimonial, i) => (
              <blockquote
                key={i}
                className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 p-6"
              >
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <span className="text-amber-500">★★★★★</span>
                  <span>— {testimonial.author}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PersonaFaq faqs={persona.faqs} />

      {/* Related Content */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <RelatedContentSection
            relatedPosts={persona.relatedPosts}
            relatedTools={persona.relatedTools}
          />
        </div>
      </section>

      {/* Related Personas */}
      {persona.relatedPersonas && persona.relatedPersonas.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              More Fitness Guides
            </h2>
            <div className="flex flex-wrap gap-2">
              {persona.relatedPersonas.map((p) => (
                <Link
                  key={p.slug}
                  href={`/for/${p.slug}`}
                  className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            {persona.ctaHeadline}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Free on the App Store. No subscriptions required to get started.
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
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LandingFooter />
    </div>
  );
}
