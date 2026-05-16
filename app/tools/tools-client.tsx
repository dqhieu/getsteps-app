"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { SITE_CONFIG } from "@/lib/constants";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: string;
  popular: boolean;
}

interface ToolsClientProps {
  tools: Tool[];
  popularTools: Tool[];
}

export function ToolsClient({ tools, popularTools }: ToolsClientProps) {
  const handleToolClick = (tool: Tool) => {
    posthog.capture("tool_card_clicked", {
      tool_title: tool.title,
      tool_href: tool.href,
      is_popular: tool.popular,
    });
  };

  const handleAppStoreClick = () => {
    posthog.capture("app_store_link_clicked", {
      location: "tools_cta",
    });
  };

  return (
    <>
      {/* Popular Tools */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            Most Popular
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => handleToolClick(tool)}
                className="group bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-2xl p-6 border border-[#ED772F]/20 hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <span className="text-3xl mb-4 block">{tool.icon}</span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#ED772F] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="py-8 md:py-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            All Calculators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => handleToolClick(tool)}
                className="group bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 hover:border-[#ED772F]/40 dark:hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-[#ED772F] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion tables — quick reference */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-1">
                  Quick conversion tables
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Pre-computed answers for common step, distance, and time conversions.
                </p>
              </div>
              <Link
                href="/conversions"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ED772F] text-white text-sm font-medium hover:bg-[#d8651f] transition-colors whitespace-nowrap self-start md:self-auto"
              >
                Conversion hub →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <Link href="/conversions/steps-to-miles" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Steps → miles
              </Link>
              <Link href="/conversions/miles-to-steps" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Miles → steps
              </Link>
              <Link href="/conversions/steps-to-km" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Steps → km
              </Link>
              <Link href="/conversions/km-to-steps" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Km → steps
              </Link>
              <Link href="/conversions/steps-to-calories" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Steps → calories
              </Link>
              <Link href="/conversions/steps-to-time" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Steps → walking time
              </Link>
              <Link href="/conversions/miles-to-time" className="p-3 rounded-xl bg-white/60 dark:bg-black/30 border border-transparent hover:border-[#ED772F] transition-colors text-neutral-700 dark:text-neutral-300">
                Miles → walking time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
            Why Use Our Calculators?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Personalized Results
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Calculations based on your height, weight, age, and gender for
                accurate estimates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Science-Based
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Using research-backed formulas and MET values for reliable
                calculations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                100% Free
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                No signup required. No ads. Just helpful fitness calculators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Fitness Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to automatically track your steps, calories,
            distance, and more on your iPhone and Apple Watch.
          </p>

          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
            onClick={handleAppStoreClick}
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
    </>
  );
}
