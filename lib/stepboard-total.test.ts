import { describe, expect, it } from "vitest";
import {
  formatStepboardTotal,
  normalizeStepboardTotal,
} from "./stepboard-total";

describe("normalizeStepboardTotal", () => {
  it.each([
    [0, "0"],
    [84261940, "84261940"],
    ["00084261940", "84261940"],
    ["9007199254740993", "9007199254740993"],
    [BigInt(0), "0"],
  ])("normalizes %p without losing precision", (value, expected) => {
    expect(normalizeStepboardTotal(value)).toBe(expected);
  });

  it.each([
    -1,
    1.5,
    Number.MAX_SAFE_INTEGER + 1,
    "-1",
    "1.5",
    "12,345",
    "",
    null,
    undefined,
    {},
  ])("rejects invalid scalar %p", (value) => {
    expect(normalizeStepboardTotal(value)).toBeNull();
  });
});

describe("formatStepboardTotal", () => {
  it.each([
    ["0", "0"],
    ["999", "999"],
    ["1000", "1,000"],
    ["84261940", "84,261,940"],
    ["9007199254740993", "9,007,199,254,740,993"],
  ])("formats %s as %s", (value, expected) => {
    expect(formatStepboardTotal(value)).toBe(expected);
  });
});
