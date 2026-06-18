import { describe, it, expect } from "vitest";
import { computeStats } from "./notification-stats";

describe("computeStats", () => {
  it("counts totals, pro/free split, percentage, plans, and months", () => {
    const stats = computeStats([
      { device_token: "a", is_pro_user: true, plan: "com.hieudinh.steps.pro.monthly", updated_at: "2026-06-01T00:00:00Z" },
      { device_token: "b", is_pro_user: false, plan: null, updated_at: "2026-06-02T12:00:00Z" },
      { device_token: "c", is_pro_user: null, plan: "com.hieudinh.steps.pro.yearly", updated_at: "2026-05-15T00:00:00Z" },
      { device_token: "d", is_pro_user: true, plan: "weird.legacy.plan", updated_at: null },
    ]);

    expect(stats.total).toBe(4);
    expect(stats.pro).toBe(2);
    expect(stats.free).toBe(2);
    expect(stats.proPct).toBe(50);
    expect(stats.planBreakdown).toEqual({ monthly: 1, yearly: 1, other: 1, none: 1 });
    expect(stats.byMonth).toEqual([
      { month: "2026-05", count: 1 },
      { month: "2026-06", count: 2 },
    ]);
  });

  it("handles empty input without dividing by zero", () => {
    const stats = computeStats([]);
    expect(stats.total).toBe(0);
    expect(stats.pro).toBe(0);
    expect(stats.proPct).toBe(0);
    expect(stats.planBreakdown).toEqual({ monthly: 0, yearly: 0, other: 0, none: 0 });
    expect(stats.byMonth).toEqual([]);
  });
});
