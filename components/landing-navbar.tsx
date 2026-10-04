import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { docsPath, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./language-switcher";

const LINK_CLASS =
  "text-sm font-medium text-foreground transition-opacity duration-150 hover:opacity-70";

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className="mx-auto flex h-11 w-full max-w-6xl items-center justify-between gap-3 rounded-full bg-background px-3 shadow-[var(--shadow-border)] sm:px-4">
        <Link href={localizePath(lang, "/")} className="flex min-w-0 items-center gap-2">
          <Image
            src="/app_icon.png"
            alt="Steps"
            width={20}
            height={20}
            className="size-5 shrink-0 rounded-full ring-1 ring-border"
          />
          <span className="hidden truncate text-sm font-medium tracking-tight text-foreground sm:inline">
            Steps: Workout & Pedometer
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
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
          <ThemeToggle />
          <Button asChild variant="primary" size="sm">
            <a
              href={SITE_CONFIG.appStoreUrl}
              data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.download}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
