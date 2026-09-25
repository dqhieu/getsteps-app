import { describe, expect, it } from "vitest";
import { formatDecimal, formatNumber, groupSeparator, interpolate, plural } from "./format";

describe("formatNumber", () => {
  it("uses the locale's separators", () => {
    expect(formatNumber(10000, "en")).toBe("10,000");
    expect(formatNumber(10000, "de")).toBe("10.000");
    expect(formatDecimal(4.7, "de", 2)).toBe("4,70");
    expect(formatDecimal(4.7, "en", 2)).toBe("4.70");
  });

  it("exposes the group separator", () => {
    expect(groupSeparator("en")).toBe(",");
    expect(groupSeparator("de")).toBe(".");
  });
});

describe("interpolate", () => {
  it("replaces known placeholders only", () => {
    expect(interpolate("{steps} steps ≈ {km} km {x}", { steps: "10,000", km: 7.6 })).toBe(
      "10,000 steps ≈ 7.6 km {x}",
    );
  });
});

describe("plural", () => {
  it("picks the CLDR form", () => {
    const forms = { one: "{count} minute", other: "{count} minutes" };
    expect(plural("en", 1, forms)).toBe("1 minute");
    expect(plural("en", 12, forms)).toBe("12 minutes");
    expect(plural("fr", 0, { one: "{count} minute", other: "{count} minutes" })).toBe("0 minute");
  });
});
