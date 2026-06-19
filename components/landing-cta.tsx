import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-balance mb-7 text-neutral-900 dark:text-white">
              Ready to track every step?
            </h2>
            <a
              href={SITE_CONFIG.appStoreUrl}
              data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5 transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-14 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-14 w-auto hidden dark:block"
              />
            </a>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Free forever · No account needed · Pro features available
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
