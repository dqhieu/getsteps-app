import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getCommonMessages } from "@/lib/i18n/messages/common";

export function AppStoreBadge({
  locale = DEFAULT_LOCALE,
  className = "transition-transform hover:scale-105 active:scale-95 inline-block",
  imageClassName = "h-12 w-auto",
  width = 120,
  height = 40,
}: {
  locale?: Locale;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}) {
  const alt = getCommonMessages(locale).appStore.badgeAlt;
  return (
    <a
      href={SITE_CONFIG.appStoreUrl}
      data-fast-goal="open-app-store"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={alt}
    >
      <Image
        src="/badge_light_mode.svg"
        alt={alt}
        width={width}
        height={height}
        className={`${imageClassName} dark:hidden`}
      />
      <Image
        src="/badge_dark_mode.svg"
        alt={alt}
        width={width}
        height={height}
        className={`${imageClassName} hidden dark:block`}
      />
    </a>
  );
}

/** Centered "download the app" section used at the bottom of tool pages. */
export function AppDownloadSection({
  locale = DEFAULT_LOCALE,
  title,
  description,
  className = "py-16 md:py-24",
}: {
  locale?: Locale;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <AppStoreBadge locale={locale} />
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          {getCommonMessages(locale).appStore.freeOnAppStore}
        </p>
      </div>
    </section>
  );
}
