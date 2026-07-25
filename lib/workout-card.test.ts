import { describe, expect, it } from "vitest";
import {
  buildWorkoutCardData,
  convertDistanceInput,
  EMPTY_VALUE,
  type WorkoutCardInput,
} from "./workout-card";

const base: WorkoutCardInput = {
  distance: "10",
  unit: "km",
  duration: "52:30",
};

describe("buildWorkoutCardData", () => {
  it("derives pace from distance and time", () => {
    const data = buildWorkoutCardData(base);

    expect(data.isValid).toBe(true);
    expect(data.distanceValue).toBe("10.00");
    expect(data.distanceUnit).toBe("km");
    expect(data.durationValue).toBe("52:30");
    expect(data.paceValue).toBe("5:15");
    expect(data.paceUnit).toBe("/km");
  });

  it("reports pace per mile when the unit is miles", () => {
    const data = buildWorkoutCardData({
      ...base,
      distance: "6.21",
      unit: "mile",
    });

    expect(data.distanceUnit).toBe("mi");
    expect(data.paceUnit).toBe("/mi");
    // 6.21 mi in 52:30 is ~8:27/mi
    expect(data.paceValue).toBe("8:27");
  });

  it("accepts H:MM:SS for runs over an hour", () => {
    const data = buildWorkoutCardData({
      ...base,
      distance: "21.1",
      duration: "1:45:00",
    });

    expect(data.durationValue).toBe("1:45:00");
    // 6300s / 21.1km = 298.58 s/km
    expect(data.paceValue).toBe("4:59");
  });

  it("falls back to placeholders instead of NaN when input is empty", () => {
    const data = buildWorkoutCardData({ ...base, distance: "", duration: "" });

    expect(data.isValid).toBe(false);
    expect(data.distanceValue).toBe(EMPTY_VALUE);
    expect(data.durationValue).toBe(EMPTY_VALUE);
    expect(data.paceValue).toBe(EMPTY_VALUE);
  });

  it("treats zero distance as invalid rather than dividing by it", () => {
    const data = buildWorkoutCardData({ ...base, distance: "0" });

    expect(data.isValid).toBe(false);
    expect(data.paceValue).toBe(EMPTY_VALUE);
  });

  it("rejects an unparseable duration", () => {
    const data = buildWorkoutCardData({ ...base, duration: "abc" });

    expect(data.isValid).toBe(false);
    expect(data.durationValue).toBe(EMPTY_VALUE);
  });

  it("keeps the distance visible when only the time is missing", () => {
    const data = buildWorkoutCardData({ ...base, duration: "" });

    expect(data.isValid).toBe(false);
    expect(data.distanceValue).toBe("10.00");
  });
});

describe("convertDistanceInput", () => {
  it("converts between km and miles", () => {
    expect(convertDistanceInput("10", "km", "mile")).toBe("6.21");
    expect(convertDistanceInput("6.21", "mile", "km")).toBe("9.99");
  });

  it("leaves the value alone when the unit is unchanged or unparseable", () => {
    expect(convertDistanceInput("10", "km", "km")).toBe("10");
    expect(convertDistanceInput("", "km", "mile")).toBe("");
  });
});
