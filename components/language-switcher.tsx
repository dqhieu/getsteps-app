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
        className="flex min-h-[40px] cursor-pointer list-none items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors [&::-webkit-details-marker]:hidden"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="hidden md:inline">{LOCALE_NAMES[locale]}</span>
      </summary>
      <ul className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-1 shadow-lg">
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
              className={`block px-4 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                option === locale
                  ? "font-medium text-[#ED772F]"
                  : "text-neutral-700 dark:text-neutral-300"
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
