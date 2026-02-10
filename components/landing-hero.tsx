import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function LandingHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* App Icon */}
        <div className="relative w-24 h-24 mb-8 shadow-xl rounded-[22px] overflow-hidden">
          <Image
            src="/app_icon.png"
            alt="Steps App Icon"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
          {SITE_CONFIG.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-6 leading-relaxed">
          Track every step. Celebrate every milestone.
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="text-amber-500">★★★★★</span>
          <span>{SITE_CONFIG.appStoreRating} Rating</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Free Download</span>
        </div>

        {/* App Store Badge */}
        <a
          href={SITE_CONFIG.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 active:scale-95 inline-block"
          aria-label="Download on the App Store"
          data-fast-goal="open-app-store"
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

        {/* Uneed Badge */}
        <a
          href="https://www.uneed.best/tool/steps"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 transition-transform hover:scale-105 active:scale-95 inline-block"
        >
          <img
            src="https://www.uneed.best/EMBED1.png"
            alt="Featured on Uneed"
            className="h-12 w-auto"
          />
        </a>
      </div>
    </section>
  );
}
