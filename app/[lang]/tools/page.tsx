import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { TOOLS } from "@/lib/tools";
import { ToolsClient } from "./tools-client";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Free Fitness Calculators - Steps, Calories, BMI & More",
  description:
    "Free online fitness calculators for steps, calories, BMI, walking time, and weight loss. Get personalized results based on your profile.",
  keywords: [
    "fitness calculator",
    "step calculator",
    "calorie calculator",
    "BMI calculator",
    "walking calculator",
    "weight loss calculator",
    "steps to calories",
    "walking time calculator",
  ],
  openGraph: {
    title: "Free Fitness Calculators",
    description:
      "Free online fitness calculators for steps, calories, BMI, walking time, and weight loss.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools`,
    images: [
      {
        url: "/og/tools.png",
        width: 1200,
        height: 630,
        alt: "Free Fitness Calculators",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools`,
  },
};

const popularTools = TOOLS.filter((tool) => tool.popular);

const breadcrumbSchema = buildBreadcrumbList([
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Fitness Calculators",
  description:
    "A directory of free, browser-based fitness calculators: steps, calories, pace, heart rate, BMI, body fat, TDEE, macros, and more.",
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_CONFIG.baseUrl}${tool.href}`,
    name: tool.title,
    description: tool.description,
  })),
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Free Fitness Calculators
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Personalized calculators for steps, calories, distance, and more.
            All free, no signup required.
          </p>
        </div>
      </section>

      <ToolsClient tools={TOOLS} popularTools={popularTools} />

      <LandingFooter />
    </div>
  );
}
