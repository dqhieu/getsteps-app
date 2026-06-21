# Live Stepboard Community Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the current all-time sum of retained Stepboard steps once per landing-page session in a responsive retro split-flap counter.

**Architecture:** A narrowly permissioned `SECURITY DEFINER` Supabase RPC computes the aggregate without exposing member rows. A client-only landing component calls that RPC once on mount, validates the scalar without precision loss, and delegates formatting and decorative digit rendering to focused helpers.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Supabase/PostgREST, Vitest 4, Testing Library, jsdom.

---

## File Map

- Create `scripts/sql/add-public-stepboard-total.sql` — idempotent aggregate RPC and execute permissions.
- Create `scripts/sql/public-stepboard-total.test.ts` — structural security/contract checks for the SQL migration.
- Create `lib/stepboard-total.ts` — precision-safe scalar normalization and thousands formatting.
- Create `lib/stepboard-total.test.ts` — unit tests for normalization and formatting.
- Modify `package.json` and `package-lock.json` — add jsdom and React Testing Library test support.
- Create `components/landing-stepboard-total.tsx` — one-time RPC fetch, states, accessible counter, and visual tiles.
- Create `components/landing-stepboard-total.test.tsx` — component fetch, success, error, malformed-data, and accessibility tests.
- Modify `app/globals.css` — split-flap animation and reduced-motion override.
- Modify `components/index.ts` — export the new landing component.
- Modify `app/page.tsx` — place the section after `LandingScreenshots` and before `LandingTrust`.

## Task 1: Secure Aggregate RPC

**Files:**
- Create: `scripts/sql/public-stepboard-total.test.ts`
- Create: `scripts/sql/add-public-stepboard-total.sql`

- [ ] **Step 1: Write the failing SQL contract test**

Create `scripts/sql/public-stepboard-total.test.ts`:

```ts
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- scripts/sql/public-stepboard-total.test.ts
```

Expected: FAIL because `scripts/sql/add-public-stepboard-total.sql` does not exist.

- [ ] **Step 3: Implement the idempotent SQL migration**

Create `scripts/sql/add-public-stepboard-total.sql`:

```sql
-- Expose one aggregate value for the public landing page without granting
-- anonymous access to any Stepboard member or daily-stat row.

create or replace function public.get_public_stepboard_total_steps()
returns bigint
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select greatest(
    coalesce(sum(stats.steps::bigint), 0::numeric),
    0::numeric
  )::bigint
  from public.user_daily_stats as stats;
$function$;

revoke all
on function public.get_public_stepboard_total_steps()
from public;

grant execute
on function public.get_public_stepboard_total_steps()
to anon, authenticated, service_role;

comment on function public.get_public_stepboard_total_steps() is
  'Returns the all-time step total across retained Stepboard daily stats.';
```

- [ ] **Step 4: Run the SQL contract test**

Run:

```bash
npm test -- scripts/sql/public-stepboard-total.test.ts
```

Expected: 3 tests PASS.

- [ ] **Step 5: Apply and verify the migration in Supabase**

Run the contents of `scripts/sql/add-public-stepboard-total.sql` in the production
Supabase SQL editor, then verify with the configured environment:

```bash
node -e 'const {loadEnvConfig}=require("@next/env"); loadEnvConfig(process.cwd()); const u=process.env.NEXT_PUBLIC_SUPABASE_URL; const k=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; fetch(u+"/rest/v1/rpc/get_public_stepboard_total_steps",{method:"POST",headers:{apikey:k,Authorization:"Bearer "+k,"Content-Type":"application/json"},body:"{}"}).then(async r=>console.log(r.status,await r.text()))'
```

Expected: HTTP `200` and one non-negative integer scalar. Do not proceed to the
public UI rollout if this returns `404` or a permission error.

- [ ] **Step 6: Commit the RPC contract and migration**

```bash
git add scripts/sql/add-public-stepboard-total.sql scripts/sql/public-stepboard-total.test.ts
git commit -m "feat: add public Stepboard total RPC"
```

## Task 2: Precision-Safe Total Formatting

**Files:**
- Create: `lib/stepboard-total.test.ts`
- Create: `lib/stepboard-total.ts`

- [ ] **Step 1: Write failing normalization and formatting tests**

Create `lib/stepboard-total.test.ts`:

```ts
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
```

- [ ] **Step 2: Run the unit test to verify it fails**

Run:

```bash
npm test -- lib/stepboard-total.test.ts
```

Expected: FAIL because `lib/stepboard-total.ts` does not exist.

- [ ] **Step 3: Implement minimal precision-safe helpers**

Create `lib/stepboard-total.ts`:

```ts
export function normalizeStepboardTotal(value: unknown): string | null {
  if (typeof value === "bigint") {
    return value >= BigInt(0) ? value.toString() : null;
  }

  if (typeof value === "number") {
    return Number.isSafeInteger(value) && value >= 0 ? value.toString() : null;
  }

  if (typeof value !== "string" || !/^\d+$/.test(value)) {
    return null;
  }

  return value.replace(/^0+(?=\d)/, "");
}

export function formatStepboardTotal(total: string): string {
  return total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

- [ ] **Step 4: Run the unit test**

Run:

```bash
npm test -- lib/stepboard-total.test.ts
```

Expected: all normalization and formatting tests PASS.

- [ ] **Step 5: Run the full existing test suite**

Run:

```bash
npm test
```

Expected: all tests PASS with no regressions.

- [ ] **Step 6: Commit the formatting boundary**

```bash
git add lib/stepboard-total.ts lib/stepboard-total.test.ts
git commit -m "feat: add Stepboard total formatting"
```

## Task 3: Add Browser Component Test Support

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Install the minimal DOM testing dependencies**

Run:

```bash
npm install --save-dev @testing-library/react jsdom
```

Expected: `package.json` and `package-lock.json` add both packages under
`devDependencies`; no runtime dependency changes are required.

- [ ] **Step 2: Verify the existing suite still passes**

Run:

```bash
npm test
```

Expected: all existing tests PASS.

- [ ] **Step 3: Commit the test tooling**

```bash
git add package.json package-lock.json
git commit -m "test: add landing component test support"
```

## Task 4: One-Time Fetching and Accessible Flip Counter

**Files:**
- Create: `components/landing-stepboard-total.test.tsx`
- Create: `components/landing-stepboard-total.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Write failing component behavior tests**

Create `components/landing-stepboard-total.test.tsx`:

```tsx
// @vitest-environment jsdom

import { StrictMode } from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LandingStepboardTotal } from "./landing-stepboard-total";

const { rpcMock } = vi.hoisted(() => ({ rpcMock: vi.fn() }));

vi.mock("../lib/supabase", () => ({
  getSupabase: () => ({ rpc: rpcMock }),
}));

afterEach(cleanup);

beforeEach(() => {
  rpcMock.mockReset();
});

describe("LandingStepboardTotal", () => {
  it("fetches once and exposes one readable aggregate", async () => {
    rpcMock.mockResolvedValue({ data: "84261940", error: null });

    const { container } = render(
      <StrictMode>
        <LandingStepboardTotal />
      </StrictMode>,
    );

    await waitFor(() => expect(rpcMock).toHaveBeenCalledTimes(1));
    expect(rpcMock).toHaveBeenCalledWith(
      "get_public_stepboard_total_steps",
    );

    const counter = await screen.findByRole("img", {
      name: "84,261,940 steps walked by the Steps community",
    });
    expect(counter.getAttribute("aria-label")).toBe(
      "84,261,940 steps walked by the Steps community",
    );
    expect(
      container.querySelector('[data-testid="flip-counter-visual"]')
        ?.getAttribute("aria-hidden"),
    ).toBe("true");
  });

  it("renders the unavailable state when the RPC fails", async () => {
    rpcMock.mockResolvedValue({
      data: null,
      error: { message: "permission denied" },
    });

    render(<LandingStepboardTotal />);

    expect(await screen.findByText("Total currently unavailable")).toBeTruthy();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("rejects unsafe or malformed totals", async () => {
    rpcMock.mockResolvedValue({
      data: Number.MAX_SAFE_INTEGER + 1,
      error: null,
    });

    render(<LandingStepboardTotal />);

    expect(await screen.findByText("Total currently unavailable")).toBeTruthy();
  });
});
```

- [ ] **Step 2: Run the component test to verify it fails**

Run:

```bash
npm test -- components/landing-stepboard-total.test.tsx
```

Expected: FAIL because `components/landing-stepboard-total.tsx` does not exist.

- [ ] **Step 3: Implement the component and one-time data flow**

Create `components/landing-stepboard-total.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  formatStepboardTotal,
  normalizeStepboardTotal,
} from "../lib/stepboard-total";
import { getSupabase } from "../lib/supabase";
import { Reveal } from "./landing-reveal";

type TotalState =
  | { status: "loading" }
  | { status: "loaded"; total: string }
  | { status: "unavailable" };

function FlipDigit({ digit, index }: { digit: string; index: number }) {
  return (
    <span
      className="stepboard-flip-digit relative inline-flex h-11 w-8 items-center justify-center overflow-hidden rounded-md bg-neutral-900 font-mono text-2xl font-bold tabular-nums text-[#F8EAD8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-2px_5px_rgba(0,0,0,0.55),0_4px_10px_rgba(0,0,0,0.16)] sm:h-14 sm:w-10 sm:rounded-lg sm:text-3xl md:h-16 md:w-12 md:text-4xl"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <span className="absolute inset-x-0 top-1/2 h-px bg-black/80" />
      <span className="absolute inset-x-0 top-[calc(50%+1px)] h-px bg-white/10" />
      <span className="relative">{digit}</span>
    </span>
  );
}

function FlipCounter({ total }: { total: string }) {
  const formatted = formatStepboardTotal(total);
  let digitIndex = 0;

  return (
    <div
      role="img"
      aria-label={`${formatted} steps walked by the Steps community`}
      className="flex min-h-16 items-center justify-center md:min-h-20"
    >
      <span
        aria-hidden="true"
        data-testid="flip-counter-visual"
        className="flex max-w-full flex-wrap justify-center gap-y-2"
      >
        {formatted.split(",").map((group, groupIndex, groups) => (
          <span key={`${group}-${groupIndex}`} className="inline-flex items-center">
            {group.split("").map((digit) => {
              const index = digitIndex++;
              return (
                <span key={`${index}-${digit}`} className="mx-0.5 sm:mx-1">
                  <FlipDigit digit={digit} index={index} />
                </span>
              );
            })}
            {groupIndex < groups.length - 1 ? (
              <span className="mx-0.5 self-end pb-1 font-mono text-xl font-bold text-neutral-400 sm:mx-1 sm:pb-2 sm:text-3xl">
                ,
              </span>
            ) : null}
          </span>
        ))}
      </span>
    </div>
  );
}

function CounterPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-16 items-center justify-center gap-1 md:min-h-20"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          className="h-9 w-6 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800 sm:h-14 sm:w-10 md:h-16 md:w-12"
        />
      ))}
    </div>
  );
}

export function LandingStepboardTotal() {
  const [state, setState] = useState<TotalState>({ status: "loading" });
  const requestRef = useRef<Promise<string | null> | null>(null);

  useEffect(() => {
    let cancelled = false;
    let request = requestRef.current;

    if (!request) {
      request = (async () => {
        try {
          const { data, error } = await getSupabase().rpc(
            "get_public_stepboard_total_steps",
          );
          return error ? null : normalizeStepboardTotal(data);
        } catch {
          return null;
        }
      })();
      requestRef.current = request;
    }

    void request.then((total) => {
      if (!cancelled) {
        setState(
          total === null
            ? { status: "unavailable" }
            : { status: "loaded", total },
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="px-4 py-12 md:py-16" aria-labelledby="stepboard-total-title">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-white px-4 py-10 text-center shadow-sm dark:border-orange-500/15 dark:from-orange-950/20 dark:via-neutral-900 dark:to-neutral-950 sm:px-8 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ED772F]">
            Walking together
          </p>
          <h2 id="stepboard-total-title" className="sr-only">
            Stepboard community step total
          </h2>

          <div className="mt-5">
            {state.status === "loading" ? <CounterPlaceholder /> : null}
            {state.status === "loaded" ? <FlipCounter total={state.total} /> : null}
            {state.status === "unavailable" ? (
              <p className="flex min-h-16 items-center justify-center text-lg font-medium text-neutral-500 dark:text-neutral-400 md:min-h-20">
                Total currently unavailable
              </p>
            ) : null}
          </div>

          <p className="mt-5 text-lg font-medium tracking-tight text-neutral-800 dark:text-neutral-100 md:text-xl">
            steps walked by the Steps community
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {state.status === "loaded" ? "and counting" : "Live from Stepboard"}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 4: Add the flip animation and reduced-motion behavior**

Append to `app/globals.css`:

```css
@keyframes stepboard-flip-in {
  0% {
    opacity: 0;
    transform: perspective(480px) rotateX(-88deg);
  }
  55% {
    opacity: 1;
    transform: perspective(480px) rotateX(8deg);
  }
  100% {
    opacity: 1;
    transform: perspective(480px) rotateX(0deg);
  }
}

.stepboard-flip-digit {
  backface-visibility: hidden;
  transform-origin: center;
  animation: stepboard-flip-in 560ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .stepboard-flip-digit {
    animation: none;
  }
}
```

- [ ] **Step 5: Run the component test**

Run:

```bash
npm test -- components/landing-stepboard-total.test.tsx
```

Expected: 3 tests PASS; the RPC is called once, error/malformed values show the
unavailable state, and the visual number is hidden from assistive technology.

- [ ] **Step 6: Run type checking through the production compiler**

Run:

```bash
npx tsc --noEmit
```

Expected: exit code 0 with no TypeScript errors.

- [ ] **Step 7: Commit the tested counter component**

```bash
git add components/landing-stepboard-total.tsx components/landing-stepboard-total.test.tsx app/globals.css
git commit -m "feat: add accessible Stepboard flip counter"
```

## Task 5: Landing-Page Integration and Final Verification

**Files:**
- Modify: `components/index.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Export the new landing component**

Add this export after `LandingScreenshots` in `components/index.ts`:

```ts
export { LandingStepboardTotal } from "./landing-stepboard-total";
```

- [ ] **Step 2: Import and place the section**

Add `LandingStepboardTotal` to the import list in `app/page.tsx`, then render it
between `LandingScreenshots` and `LandingTrust`:

```tsx
import {
  LandingNavbar,
  LandingHero,
  LandingScreenshots,
  LandingStepboardTotal,
  LandingTrust,
  LandingSpotlights,
  LandingYearlyInsights,
  LandingFeatureGrid,
  LandingPrivacy,
  LandingCTA,
  LandingFooter,
} from "@/components";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden selection:bg-orange-500/30">
        <LandingHero />
        <LandingScreenshots />
        <LandingStepboardTotal />
        <LandingTrust />
        <LandingSpotlights />
        <LandingYearlyInsights />
        <LandingFeatureGrid />
        <LandingPrivacy />
        <LandingCTA />
      </main>
      <LandingFooter />
    </>
  );
}
```

- [ ] **Step 3: Run focused and full automated verification**

Run:

```bash
npm test -- lib/stepboard-total.test.ts components/landing-stepboard-total.test.tsx scripts/sql/public-stepboard-total.test.ts
npm test
npx tsc --noEmit
npm run build
```

Expected: focused tests PASS, full suite PASS, TypeScript exits 0, and the Next.js
production build completes successfully.

- [ ] **Step 4: Verify behavior in the browser**

Run:

```bash
npm run dev
```

Open `http://localhost:3000` and verify:

- the section appears after screenshots and before the black trust section;
- the RPC is requested once on a fresh page load and is not polled afterward;
- the displayed total matches a direct RPC call;
- no member-level values appear in network responses or page markup;
- digit groups fit at 320 px, 768 px, and 1280 px widths;
- light and dark color schemes retain readable contrast;
- normal motion flips each digit once;
- reduced motion renders the final value without animation;
- blocking the RPC shows `Total currently unavailable` without shifting later
  sections or breaking the page.

- [ ] **Step 5: Review the final diff for scope and secrets**

Run:

```bash
git diff --check
git status --short
git diff --stat HEAD
rg -n "SUPABASE_SERVICE_ROLE_KEY|service_role.*eyJ|user_id|display_name" components/landing-stepboard-total.tsx lib/stepboard-total.ts scripts/sql/add-public-stepboard-total.sql
```

Expected: no whitespace errors; only planned files are changed; no key material,
member identifiers, or display names are present in the UI/data helper. The SQL
may contain the role name `service_role`, but never a credential.

- [ ] **Step 6: Commit the landing integration**

```bash
git add components/index.ts app/page.tsx
git commit -m "feat: show live Stepboard total on landing page"
```

- [ ] **Step 7: Confirm clean handoff state**

Run:

```bash
git status --short
git log -5 --oneline
```

Expected: the planned source files are committed. The previously generated
`.superpowers/` visual-companion directory may remain untracked; do not include it
in feature commits.
