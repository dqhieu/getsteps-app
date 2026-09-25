import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { localizePath } from "./href";
import { isLocalizedPath, splitLocale } from "./routing";

/** Remembers an explicit language choice. Not HttpOnly, so the switcher can set it. */
export const LOCALE_COOKIE = "locale";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function localeCookie(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * Maps an Accept-Language header onto a supported locale.
 * Unknown languages, and Traditional Chinese, stay on English.
 */
export function negotiateLocale(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranges = header
    .split(",")
    .map(parseLanguageRange)
    .filter((range): range is LanguageRange => range !== null && range.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const range of ranges) {
    const locale = matchLanguage(range.tag);
    if (locale) return locale;
  }
  return DEFAULT_LOCALE;
}

interface LanguageRange {
  tag: string;
  q: number;
}

function parseLanguageRange(value: string): LanguageRange | null {
  const [tagPart, ...params] = value.trim().split(";");
  const tag = tagPart?.trim().toLowerCase();
  if (!tag) return null;

  let q = 1;
  for (const param of params) {
    const [key, raw] = param.split("=").map((part) => part.trim());
    if (key === "q") {
      const parsed = Number(raw);
      if (!Number.isFinite(parsed)) return null;
      q = parsed;
    }
  }
  return { tag, q };
}

function matchLanguage(tag: string): Locale | null {
  if (tag === "*") return null;
  if (tag === "pt" || tag.startsWith("pt-")) return "pt-BR";
  if (tag === "zh" || tag === "zh-cn" || tag === "zh-hans" || tag.startsWith("zh-hans-")) return "zh";
  if (tag.startsWith("zh-")) return null;

  const primary = tag.split("-")[0];
  if (primary === "de") return "de";
  if (primary === "fr") return "fr";
  if (primary === "it") return "it";
  if (primary === "es") return "es";
  if (primary === "en") return "en";
  return null;
}

export type LocalePreference =
  | { action: "redirect"; pathname: string; locale: Locale }
  | { action: "persist"; locale: Locale }
  | { action: "none" };

/**
 * First visit to an unprefixed localized URL follows Accept-Language.
 * A saved choice, or a `hl` query from the language switcher, wins over that.
 * A locale prefix in the URL is never overridden.
 */
export function resolveLocalePreference(input: {
  pathname: string;
  searchHl: string | null;
  cookie: string | null;
  acceptLanguage: string | null;
}): LocalePreference {
  if (isLocale(input.searchHl)) {
    const barePath = splitLocale(input.pathname).path;
    const target = localizePath(input.searchHl, isLocalizedPath(barePath) ? barePath : input.pathname);
    if (target !== input.pathname) {
      return { action: "redirect", pathname: target, locale: input.searchHl };
    }
    return { action: "persist", locale: input.searchHl };
  }

  const { locale, path } = splitLocale(input.pathname);
  if (locale && locale !== DEFAULT_LOCALE && isLocalizedPath(path)) {
    return { action: "persist", locale };
  }

  if (!locale && isLocalizedPath(input.pathname)) {
    const saved = isLocale(input.cookie) ? input.cookie : null;
    const chosen = saved ?? negotiateLocale(input.acceptLanguage);
    if (chosen !== DEFAULT_LOCALE) {
      return {
        action: "redirect",
        pathname: localizePath(chosen, input.pathname),
        locale: chosen,
      };
    }
  }

  return { action: "none" };
}
