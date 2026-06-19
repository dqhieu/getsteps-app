import { describe, it, expect } from "vitest";
import { LANDING_ICONS } from "./landing-icons";
import { SPOTLIGHTS, FEATURE_GRID, PERSONAL_RECORDS, WORKOUT_TYPES } from "./constants";

describe("landing icon integrity", () => {
  const keys = new Set(Object.keys(LANDING_ICONS));
  const cases: Array<[string, ReadonlyArray<{ icon: string }>]> = [
    ["SPOTLIGHTS", SPOTLIGHTS],
    ["FEATURE_GRID", FEATURE_GRID],
    ["PERSONAL_RECORDS", PERSONAL_RECORDS],
    ["WORKOUT_TYPES", WORKOUT_TYPES],
  ];

  for (const [name, list] of cases) {
    it(`${name}: every icon key resolves to a lucide component`, () => {
      for (const item of list) {
        expect(
          keys.has(item.icon),
          `${name} icon "${item.icon}" missing from LANDING_ICONS`,
        ).toBe(true);
      }
    });
  }

  it("every mapped icon is a renderable component", () => {
    for (const Icon of Object.values(LANDING_ICONS)) {
      const t = typeof Icon;
      expect(t === "function" || t === "object").toBe(true);
    }
  });
});
