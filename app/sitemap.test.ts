import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  const entries = sitemap();
  const byUrl = new Map(entries.map((entry) => [entry.url, entry]));

  it("lists every localized page in each locale with hreflang alternates", () => {
    for (const url of [
      "https://getsteps.app/tools/bmi-calculator",
      "https://getsteps.app/fr/tools/bmi-calculator",
      "https://getsteps.app/zh",
      "https://getsteps.app/pt-BR/conversions/steps-to-km/10000",
    ]) {
      expect(byUrl.has(url), url).toBe(true);
    }

    const languages = byUrl.get("https://getsteps.app/de/tools")?.alternates?.languages;
    expect(languages).toMatchObject({
      en: "https://getsteps.app/tools",
      de: "https://getsteps.app/de/tools",
      "x-default": "https://getsteps.app/tools",
    });
  });

  it("keeps English-only sections unprefixed", () => {
    expect(byUrl.has("https://getsteps.app/blog")).toBe(true);
    expect([...byUrl.keys()].some((url) => url.startsWith("https://getsteps.app/fr/blog"))).toBe(
      false,
    );
  });

  it("has no duplicate URLs and stays under the 50k sitemap limit", () => {
    expect(byUrl.size).toBe(entries.length);
    expect(entries.length).toBeLessThan(50_000);
  });
});
