import { describe, expect, it } from "vitest";
import { negotiateLocale, resolveLocalePreference } from "./preference";

describe("negotiateLocale", () => {
  it("picks German for a German browser", () => {
    expect(negotiateLocale("de-DE,de;q=0.9,en;q=0.8")).toBe("de");
    expect(negotiateLocale("de-AT,de;q=0.9")).toBe("de");
  });

  it("keeps English when the browser prefers English or an unsupported language", () => {
    expect(negotiateLocale("en-US,en;q=0.9")).toBe("en");
    expect(negotiateLocale("ja,en;q=0.5")).toBe("en");
    expect(negotiateLocale(null)).toBe("en");
  });

  it("maps Chinese and Portuguese tags onto the locales we ship", () => {
    expect(negotiateLocale("zh-CN,zh;q=0.9")).toBe("zh");
    expect(negotiateLocale("zh-TW,zh;q=0.9,en;q=0.8")).toBe("zh");
    expect(negotiateLocale("zh-TW,en;q=0.8")).toBe("en");
    expect(negotiateLocale("pt-BR,pt;q=0.9")).toBe("pt-BR");
    expect(negotiateLocale("pt-PT,pt;q=0.9")).toBe("pt-BR");
  });

  it("skips a language the browser explicitly rejects", () => {
    expect(negotiateLocale("de;q=0,en;q=0.8")).toBe("en");
  });
});

describe("resolveLocalePreference", () => {
  it("redirects a first visit when the browser language is German", () => {
    expect(
      resolveLocalePreference({
        pathname: "/tools/bmi-calculator",
        searchHl: null,
        cookie: null,
        acceptLanguage: "de-DE,de;q=0.9,en;q=0.8",
      }),
    ).toEqual({
      action: "redirect",
      pathname: "/de/tools/bmi-calculator",
      locale: "de",
    });
  });

  it("does not redirect English-only pages or an English browser", () => {
    expect(
      resolveLocalePreference({
        pathname: "/blog/what-is-tdee",
        searchHl: null,
        cookie: null,
        acceptLanguage: "de",
      }),
    ).toEqual({ action: "none" });

    expect(
      resolveLocalePreference({
        pathname: "/",
        searchHl: null,
        cookie: null,
        acceptLanguage: "en-US",
      }),
    ).toEqual({ action: "none" });
  });

  it("keeps a saved English choice ahead of the browser language", () => {
    expect(
      resolveLocalePreference({
        pathname: "/",
        searchHl: null,
        cookie: "en",
        acceptLanguage: "de-DE",
      }),
    ).toEqual({ action: "none" });
  });

  it("sends a saved German choice to the German URL", () => {
    expect(
      resolveLocalePreference({
        pathname: "/conversions/steps-to-km",
        searchHl: null,
        cookie: "de",
        acceptLanguage: "en",
      }),
    ).toEqual({
      action: "redirect",
      pathname: "/de/conversions/steps-to-km",
      locale: "de",
    });
  });

  it("does not override a locale prefix already in the URL", () => {
    expect(
      resolveLocalePreference({
        pathname: "/fr/tools",
        searchHl: null,
        cookie: "de",
        acceptLanguage: "de",
      }),
    ).toEqual({ action: "persist", locale: "fr" });
  });

  it("honors the language switcher query over the current prefix", () => {
    expect(
      resolveLocalePreference({
        pathname: "/de/tools/bmi-calculator",
        searchHl: "en",
        cookie: "de",
        acceptLanguage: "de",
      }),
    ).toEqual({
      action: "redirect",
      pathname: "/tools/bmi-calculator",
      locale: "en",
    });
  });
});
