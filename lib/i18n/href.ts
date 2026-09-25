import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, HREFLANG, LOCALES, type Locale } from "./config";
import { isLocalizedPath } from "./routing";

/**
 * Prefixes `path` with the locale when it points into a localized section.
 * English-only sections (blog, personas, about...) are returned unchanged.
 */
export function localizePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  const pathname = path.split(/[?#]/)[0];
  if (!pathname.startsWith("/") || !isLocalizedPath(pathname)) return path;
  return pathname === "/" ? `/${locale}${path.slice(1)}` : `/${locale}${path}`;
}

export function absoluteUrl(locale: Locale, path: string): string {
  const localized = localizePath(locale, path);
  return localized === "/" ? SITE_CONFIG.baseUrl : `${SITE_CONFIG.baseUrl}${localized}`;
}

/** Link to the Mintlify docs in the reader's language. */
export function docsPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/docs" : `/docs/${locale}`;
}

export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[HREFLANG[locale]] = absoluteUrl(locale, path);
  }
  languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
  return languages;
}

/**
 * Canonical + hreflang alternates for a page that exists in every locale.
 * `canonicalPath` lets a page consolidate onto another URL; the canonical
 * stays within the same locale.
 */
export function alternatesFor(
  locale: Locale,
  path: string,
  canonicalPath: string = path,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: absoluteUrl(locale, canonicalPath),
    languages: languageAlternates(path),
  };
}
