import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { docsPath, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { LanguageSwitcher } from "./language-switcher";

const LINK_CLASS =
  "text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors";

/**
 * Pass `locale` on pages that exist in every language; that also enables the
 * language switcher. English-only pages omit it.
 */
export function LandingNavbar({ locale }: { locale?: Locale }) {
  const lang = locale ?? DEFAULT_LOCALE;
  const t = getCommonMessages(lang);
  // The switcher takes the room Blog/About used on narrow screens.
  const secondaryClass = locale ? `${LINK_CLASS} hidden sm:inline` : LINK_CLASS;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href={localizePath(lang, "/")} className="flex items-center gap-2">
          <Image
            src="/app_icon.png"
            alt="Steps"
            width={32}
            height={32}
            className="rounded-lg ring-1 ring-black/10 dark:ring-white/10"
          />
          <span className="font-semibold text-neutral-900 dark:text-white hidden sm:inline">
            Steps: Workout & Pedometer
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href={localizePath(lang, "/tools")} className={LINK_CLASS}>
            {t.nav.tools}
          </Link>
          <Link href="/blog" className={secondaryClass}>
            {t.nav.blog}
          </Link>
          <Link href="/about" className={secondaryClass}>
            {t.nav.about}
          </Link>
          <Link href={docsPath(lang)} className={LINK_CLASS}>
            {t.nav.docs}
          </Link>
          {locale && <LanguageSwitcher locale={locale} label={t.language.label} />}
          <a
            href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center justify-center text-sm font-medium px-4 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-[0.96]"
          >
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  );
}
