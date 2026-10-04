"use client";

import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { HREFLANG, LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/href";
import { localeCookie } from "@/lib/i18n/preference";
import { splitLocale } from "@/lib/i18n/routing";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const { path } = splitLocale(usePathname() || "/");

  return (
    <details className="relative">
      <summary
        aria-label={label}
        className="flex min-h-[40px] cursor-pointer list-none items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors [&::-webkit-details-marker]:hidden"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="hidden md:inline">{LOCALE_NAMES[locale]}</span>
      </summary>
      <ul className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl bg-card py-1 shadow-[var(--shadow-border)]">
        {LOCALES.map((option) => (
          <li key={option}>
            <a
              href={`${localizePath(option, path)}?hl=${option}`}
              hrefLang={HREFLANG[option]}
              lang={HREFLANG[option]}
              aria-current={option === locale ? "true" : undefined}
              onClick={(event) => {
                document.cookie = localeCookie(option);
                event.preventDefault();
                window.location.assign(localizePath(option, path));
              }}
              className={`block px-4 py-2 text-sm transition-colors hover:bg-ghost-hover ${
                option === locale
                  ? "font-medium text-accent"
                  : "text-muted-soft"
              }`}
            >
              {LOCALE_NAMES[option]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
