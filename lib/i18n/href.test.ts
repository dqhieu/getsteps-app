import { describe, expect, it } from "vitest";
import { absoluteUrl, alternatesFor, docsPath, localizePath } from "./href";

describe("localizePath", () => {
  it("leaves English paths unprefixed", () => {
    expect(localizePath("en", "/tools/bmi-calculator")).toBe("/tools/bmi-calculator");
  });

  it("prefixes localized sections", () => {
    expect(localizePath("fr", "/")).toBe("/fr");
    expect(localizePath("fr", "/tools")).toBe("/fr/tools");
    expect(localizePath("pt-BR", "/conversions/steps-to-km/10000")).toBe(
      "/pt-BR/conversions/steps-to-km/10000",
    );
    expect(localizePath("de", "/tools/x?unit=km#result")).toBe("/de/tools/x?unit=km#result");
  });

  it("keeps English-only and external links unchanged", () => {
    expect(localizePath("fr", "/blog/what-is-tdee")).toBe("/blog/what-is-tdee");
    expect(localizePath("fr", "/for/seniors")).toBe("/for/seniors");
    expect(localizePath("fr", "https://apps.apple.com")).toBe("https://apps.apple.com");
  });
});

describe("absoluteUrl", () => {
  it("builds canonical URLs", () => {
    expect(absoluteUrl("en", "/")).toBe("https://getsteps.app");
    expect(absoluteUrl("zh", "/")).toBe("https://getsteps.app/zh");
    expect(absoluteUrl("es", "/tools")).toBe("https://getsteps.app/es/tools");
  });
});

describe("alternatesFor", () => {
  it("lists every locale plus x-default and a same-locale canonical", () => {
    const alternates = alternatesFor("it", "/tools/bmi-calculator");
    expect(alternates.canonical).toBe("https://getsteps.app/it/tools/bmi-calculator");
    expect(alternates.languages).toEqual({
      en: "https://getsteps.app/tools/bmi-calculator",
      "zh-Hans": "https://getsteps.app/zh/tools/bmi-calculator",
      fr: "https://getsteps.app/fr/tools/bmi-calculator",
      de: "https://getsteps.app/de/tools/bmi-calculator",
      it: "https://getsteps.app/it/tools/bmi-calculator",
      "pt-BR": "https://getsteps.app/pt-BR/tools/bmi-calculator",
      es: "https://getsteps.app/es/tools/bmi-calculator",
      "x-default": "https://getsteps.app/tools/bmi-calculator",
    });
  });

  it("points a consolidated canonical at the same locale", () => {
    expect(
      alternatesFor("fr", "/conversions/steps-to-km", "/tools/step-distance-calculator").canonical,
    ).toBe("https://getsteps.app/fr/tools/step-distance-calculator");
  });
});

describe("docsPath", () => {
  it("links to the localized docs", () => {
    expect(docsPath("en")).toBe("/docs");
    expect(docsPath("pt-BR")).toBe("/docs/pt-BR");
  });
});
