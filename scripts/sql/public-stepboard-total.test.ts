import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const sql = readFileSync(
  new URL("./add-public-stepboard-total.sql", import.meta.url),
  "utf8",
);

describe("public Stepboard total migration", () => {
  it("defines a no-argument bigint aggregate over retained daily stats", () => {
    expect(sql).toMatch(
      /function\s+public\.get_public_stepboard_total_steps\s*\(\s*\)/i,
    );
    expect(sql).toMatch(/returns\s+bigint/i);
    expect(sql).toMatch(/sum\s*\(\s*stats\.steps/i);
    expect(sql).toMatch(/from\s+public\.user_daily_stats\s+as\s+stats/i);
    expect(sql).toMatch(/coalesce/i);
  });

  it("uses a fixed security-definer context", () => {
    expect(sql).toMatch(/security\s+definer/i);
    expect(sql).toMatch(/set\s+search_path\s*=\s*pg_catalog\s*,\s*public/i);
  });

  it("revokes default execution and grants only expected roles", () => {
    expect(sql).toMatch(
      /revoke\s+all\s+on\s+function\s+public\.get_public_stepboard_total_steps\(\)\s+from\s+public/i,
    );
    expect(sql).toMatch(
      /grant\s+execute\s+on\s+function\s+public\.get_public_stepboard_total_steps\(\)\s+to\s+anon\s*,\s*authenticated\s*,\s*service_role/i,
    );
  });
});
