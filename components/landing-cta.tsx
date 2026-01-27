import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function LandingCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
          Ready to track every step?
        </h2>

        {/* App Store Badge */}
        <a
          href={SITE_CONFIG.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 active:scale-95 inline-block mb-6"
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
          Free forever · Pro features available
        </p>
      </div>
    </section>
  );
}
