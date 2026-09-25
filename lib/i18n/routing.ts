import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

/** Top-level sections served in every locale under `app/[lang]`. */
const LOCALIZED_SECTIONS = ["/tools", "/conversions"];

export function isLocalizedPath(path: string): boolean {
  if (path === "/" || path === "") return true;
  return LOCALIZED_SECTIONS.some(
    (section) => path === section || path.startsWith(`${section}/`),
  );
}

/** Splits `/fr/tools/x` into `{ locale: "fr", path: "/tools/x" }`. */
export function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
  if (match && isLocale(match[1])) {
    return { locale: match[1], path: match[2] || "/" };
  }
  return { locale: null, path: pathname };
}

export type LocaleRoute =
  | { type: "next" }
  | { type: "rewrite"; pathname: string }
  | { type: "redirect"; pathname: string };

/**
 * English lives at unprefixed URLs but is rendered by `app/[lang]`, so those
 * paths are rewritten to `/en/...`. Locale prefixes outside the localized
 * sections predate this site localization and pointed at the Mintlify docs,
 * so they keep redirecting there.
 */
export function resolveLocaleRoute(pathname: string): LocaleRoute {
  const { locale, path } = splitLocale(pathname);

  if (locale === DEFAULT_LOCALE) {
    return { type: "redirect", pathname: path };
  }

  if (locale) {
    if (isLocalizedPath(path)) return { type: "next" };
    return { type: "redirect", pathname: `/docs/${locale}${path}` };
  }

  if (isLocalizedPath(pathname)) {
    return {
      type: "rewrite",
      pathname: pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`,
    };
  }

  return { type: "next" };
}
