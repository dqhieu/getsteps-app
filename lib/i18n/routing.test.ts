import { describe, expect, it } from "vitest";
import { isLocalizedPath, resolveLocaleRoute, splitLocale } from "./routing";

describe("isLocalizedPath", () => {
  it.each(["/", "/tools", "/tools/bmi-calculator", "/conversions", "/conversions/steps-to-km/10000"])(
    "treats %s as localized",
    (path) => expect(isLocalizedPath(path)).toBe(true),
  );

  it.each(["/blog", "/blog/x", "/for/seniors", "/about", "/toolshed", "/docs", "/llms.txt"])(
    "treats %s as English-only",
    (path) => expect(isLocalizedPath(path)).toBe(false),
  );
});

describe("splitLocale", () => {
  it("extracts a locale prefix", () => {
    expect(splitLocale("/pt-BR/tools/x")).toEqual({ locale: "pt-BR", path: "/tools/x" });
    expect(splitLocale("/fr")).toEqual({ locale: "fr", path: "/" });
  });

  it("leaves unprefixed paths alone", () => {
    expect(splitLocale("/tools/x")).toEqual({ locale: null, path: "/tools/x" });
    expect(splitLocale("/")).toEqual({ locale: null, path: "/" });
  });
});

describe("resolveLocaleRoute", () => {
  it("rewrites English URLs into the [lang] tree", () => {
    expect(resolveLocaleRoute("/")).toEqual({ type: "rewrite", pathname: "/en" });
    expect(resolveLocaleRoute("/tools/bmi-calculator")).toEqual({
      type: "rewrite",
      pathname: "/en/tools/bmi-calculator",
    });
  });

  it("serves locale-prefixed localized pages as-is", () => {
    expect(resolveLocaleRoute("/fr")).toEqual({ type: "next" });
    expect(resolveLocaleRoute("/de/tools/bmi-calculator")).toEqual({ type: "next" });
    expect(resolveLocaleRoute("/es/conversions/steps-to-km/10000")).toEqual({ type: "next" });
  });

  it("redirects the explicit /en prefix to the unprefixed URL", () => {
    expect(resolveLocaleRoute("/en")).toEqual({ type: "redirect", pathname: "/" });
    expect(resolveLocaleRoute("/en/tools/x")).toEqual({ type: "redirect", pathname: "/tools/x" });
  });

  it("keeps sending legacy locale paths to the docs", () => {
    expect(resolveLocaleRoute("/fr/features/app-lock")).toEqual({
      type: "redirect",
      pathname: "/docs/fr/features/app-lock",
    });
    expect(resolveLocaleRoute("/zh/blog")).toEqual({ type: "redirect", pathname: "/docs/zh/blog" });
  });

  it("ignores English-only sections", () => {
    expect(resolveLocaleRoute("/blog/what-is-tdee")).toEqual({ type: "next" });
    expect(resolveLocaleRoute("/docs/fr")).toEqual({ type: "next" });
  });
});
