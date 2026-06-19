import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <Reveal>
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-7 rounded-[22px] overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/app_icon.png"
              alt="Steps app icon"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400 mb-4">
            {SITE_CONFIG.name}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-balance max-w-3xl text-neutral-900 dark:text-white">
            Every step counts.{" "}
            <span className="text-[#ED772F]">Every milestone shows.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed text-pretty">
            A beautifully simple pedometer and workout tracker for iPhone and
            Apple Watch — powered by Apple Health.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href={SITE_CONFIG.appStoreUrl}
              data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-12 w-auto hidden dark:block"
              />
            </a>
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span>
                <span className="tabular-nums">{SITE_CONFIG.appStoreRating}</span>{" "}
                on the App Store
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>Free download</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
