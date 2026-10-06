import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

interface PersonaHeroProps {
  headline: string;
  subheadline: string;
}

export function PersonaHero({ headline, subheadline }: PersonaHeroProps) {
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
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 max-w-4xl text-foreground">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-6 leading-relaxed">
          {subheadline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-8 text-sm text-muted">
          <span className="text-amber-500">★★★★★</span>
          <span>{SITE_CONFIG.appStoreRating} Rating</span>
          <span className="text-muted">·</span>
          <span>Free Download</span>
        </div>

        {/* App Store Badge */}
        <div className="wide-safe-action">
          <a
            href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
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
      </div>
    </section>
  );
}
