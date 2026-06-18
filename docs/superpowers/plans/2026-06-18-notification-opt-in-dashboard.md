# Notification Opt-In Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a private `/dashboard` page that shows aggregate metrics and a searchable raw table for the Supabase `notification_opt_in` table.

**Architecture:** Mirror the existing `app/feedback/` pattern — a server component fetches rows (via a server-only service-role Supabase client), computes aggregates with a pure function, and passes `{ stats, rows }` to a `"use client"` view. The route is gated by HTTP Basic Auth in `middleware.ts`. Anon `SELECT` on the table is removed (RLS) so device tokens are no longer readable with the public anon key.

**Tech Stack:** Next.js 16 (App Router), `@supabase/supabase-js`, Tailwind v4, vitest (new dev dependency, for the pure aggregation unit test).

## Global Constraints

- Next.js App Router server/client component split — fetch on server, interactivity in `"use client"`.
- No chart library — bars are plain CSS divs.
- Do **not** fetch or display `fcm_token`.
- Tailwind, dark-mode classes, accent color `#ED772F` — match `app/feedback/feedback-board.tsx`.
- Service-role key is **server-only** — never import `getSupabaseAdmin()` into a `"use client"` file.
- RLS migration: drop only anon `SELECT`; preserve anon `INSERT` / `UPDATE` / `DELETE`. Never touch `notification_opt_in_development`.
- Spec: `docs/superpowers/specs/2026-06-18-notification-opt-in-dashboard-design.md`.

---

## File Structure

- Create `lib/notification-stats.ts` — pure `computeStats(rows)` aggregation + types.
- Create `lib/notification-stats.test.ts` — unit test for `computeStats`.
- Modify `lib/supabase.ts` — add `NotificationOptIn` type + `getSupabaseAdmin()`.
- Create `app/dashboard/page.tsx` — server component: fetch + compute + render.
- Create `app/dashboard/dashboard-view.tsx` — `"use client"` cards/chart/table.
- Modify `middleware.ts` — Basic Auth gate for `/dashboard`.
- Create `scripts/sql/disable-anon-select-notification-opt-in.sql` — RLS migration (owner-applied).
- Modify `package.json` — add `vitest` dev dep + `test` script.

---

## Task 1: Pure aggregation module + unit test

**Files:**
- Create: `lib/notification-stats.ts`
- Test: `lib/notification-stats.test.ts`
- Modify: `package.json` (add `vitest`, `test` script)

**Interfaces:**
- Consumes: `NotificationOptIn` type (defined in Task 2; for this task, the test uses inline object literals matching `{ device_token: string; is_pro_user: boolean | null; plan: string | null; updated_at: string | null }`).
- Produces: `computeStats(rows: NotificationOptIn[]): NotificationStats`, and types `NotificationStats`, `PlanBreakdown`, `MonthBucket`.

> Note: `lib/notification-stats.ts` imports `NotificationOptIn` as a **type-only** import from `./supabase`. Because it's `import type`, the test never loads the Supabase client at runtime. Task 2 adds that type; if running Task 1 first, temporarily inline the type, then switch to the import after Task 2. (Recommended: do Task 2 first if executing out of order.)

- [ ] **Step 1: Install vitest and add the test script**

Run:
```bash
npm install -D vitest
```

Then edit `package.json` `scripts` to add (keep existing scripts):
```json
    "test": "vitest run",
    "test:watch": "vitest"
```

- [ ] **Step 2: Write the failing test**

Create `lib/notification-stats.test.ts`:
```ts
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
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npx vitest run lib/notification-stats.test.ts`
Expected: FAIL — `Failed to resolve import "./notification-stats"` (module doesn't exist yet).

- [ ] **Step 4: Write the implementation**

Create `lib/notification-stats.ts`:
```ts
import type { NotificationOptIn } from "./supabase";

export interface PlanBreakdown {
  monthly: number;
  yearly: number;
  other: number;
  none: number;
}

export interface MonthBucket {
  month: string; // "YYYY-MM"
  count: number;
}

export interface NotificationStats {
  total: number;
  pro: number;
  proPct: number; // 0–100, one decimal place
  free: number;
  planBreakdown: PlanBreakdown;
  byMonth: MonthBucket[];
}

export function computeStats(rows: NotificationOptIn[]): NotificationStats {
  const total = rows.length;
  const pro = rows.filter((r) => r.is_pro_user === true).length;
  const free = total - pro;
  const proPct = total === 0 ? 0 : Math.round((pro / total) * 1000) / 10;

  const planBreakdown: PlanBreakdown = { monthly: 0, yearly: 0, other: 0, none: 0 };
  for (const r of rows) {
    if (!r.plan) planBreakdown.none++;
    else if (r.plan.includes("monthly")) planBreakdown.monthly++;
    else if (r.plan.includes("yearly")) planBreakdown.yearly++;
    else planBreakdown.other++;
  }

  const monthMap = new Map<string, number>();
  for (const r of rows) {
    if (!r.updated_at) continue;
    const month = r.updated_at.slice(0, 7); // "YYYY-MM"
    monthMap.set(month, (monthMap.get(month) ?? 0) + 1);
  }
  const byMonth = [...monthMap.entries()]
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => a.month.localeCompare(b.month));

  return { total, pro, proPct, free, planBreakdown, byMonth };
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npx vitest run lib/notification-stats.test.ts`
Expected: PASS — 2 tests.

- [ ] **Step 6: Commit**

```bash
git add lib/notification-stats.ts lib/notification-stats.test.ts package.json package-lock.json
git commit -m "feat: add notification opt-in stats aggregation with tests"
```

---

## Task 2: Service-role Supabase client + row type

**Files:**
- Modify: `lib/supabase.ts`

**Interfaces:**
- Consumes: `createClient` from `@supabase/supabase-js` (already imported).
- Produces:
  - `interface NotificationOptIn { device_token: string; is_pro_user: boolean | null; plan: string | null; updated_at: string | null }`
  - `getSupabaseAdmin(): ReturnType<typeof createClient>` — uses `SUPABASE_SERVICE_ROLE_KEY`.

- [ ] **Step 1: Add the type and admin client**

Append to `lib/supabase.ts` (after the existing `getSupabase()` function):
```ts
export interface NotificationOptIn {
  device_token: string;
  is_pro_user: boolean | null;
  plan: string | null;
  updated_at: string | null;
}

let _admin: ReturnType<typeof createClient> | null = null;

// Server-only. Uses the service-role key, which bypasses RLS. NEVER import this
// into a "use client" module — it would leak the secret key into the browser.
export function getSupabaseAdmin() {
  if (!_admin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }
    _admin = createClient(url, key, { auth: { persistSession: false } });
  }
  return _admin;
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no new errors referencing `lib/supabase.ts`.

- [ ] **Step 3: Add the service-role key to local env**

Add to `.env.local` (value from Supabase → Project Settings → API → `service_role` secret):
```
SUPABASE_SERVICE_ROLE_KEY=<paste service_role key>
```
> ⚠️ Owner action. Without it, the dashboard renders empty (the page's try/catch swallows the throw). Also add it in Vercel → Project → Settings → Environment Variables before deploy.

- [ ] **Step 4: Commit**

```bash
git add lib/supabase.ts
git commit -m "feat: add server-only service-role supabase client and opt-in type"
```

---

## Task 3: Dashboard view component

**Files:**
- Create: `app/dashboard/dashboard-view.tsx`

**Interfaces:**
- Consumes: `NotificationStats` from `@/lib/notification-stats`, `NotificationOptIn` from `@/lib/supabase`.
- Produces: `export function DashboardView({ stats, rows }: { stats: NotificationStats; rows: NotificationOptIn[] }): JSX.Element`.

- [ ] **Step 1: Create the client view**

Create `app/dashboard/dashboard-view.tsx`:
```tsx
"use client";

import { useState, useMemo } from "react";
import type { NotificationStats } from "@/lib/notification-stats";
import type { NotificationOptIn } from "@/lib/supabase";

type FilterTab = "all" | "pro" | "free";
type SortOption = "newest" | "oldest";
const PAGE_SIZE = 50;

function relativeTime(dateStr: string | null): string {
  if (!dateStr) return "—";
  const diffSec = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diffSec < 60) return "just now";
  const m = Math.floor(diffSec / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
      <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">{sub}</div>}
    </div>
  );
}

function TokenCell({ token }: { token: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      title="Click to copy full token"
      className="font-mono text-xs text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] transition-colors"
    >
      {copied ? "copied!" : `${token.slice(0, 12)}…`}
    </button>
  );
}

export function DashboardView({ stats, rows }: { stats: NotificationStats; rows: NotificationOptIn[] }) {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const maxMonth = useMemo(
    () => stats.byMonth.reduce((m, b) => Math.max(m, b.count), 0),
    [stats.byMonth]
  );

  const filtered = useMemo(() => {
    let list = rows;
    if (filter === "pro") list = list.filter((r) => r.is_pro_user === true);
    else if (filter === "free") list = list.filter((r) => r.is_pro_user !== true);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((r) => r.device_token.toLowerCase().includes(q));
    }
    const ts = (r: NotificationOptIn) => (r.updated_at ? new Date(r.updated_at).getTime() : 0);
    list = [...list].sort((a, b) => (sort === "newest" ? ts(b) - ts(a) : ts(a) - ts(b)));
    return list;
  }, [rows, filter, search, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const pageRows = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Notification Opt-Ins</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {stats.total.toLocaleString()} devices · data refreshes every 5 minutes
          </p>
        </header>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total opt-ins" value={stats.total.toLocaleString()} />
          <StatCard label="Pro users" value={stats.pro.toLocaleString()} sub={`${stats.proPct}% of total`} />
          <StatCard label="Free users" value={stats.free.toLocaleString()} />
          <StatCard
            label="Plans"
            value={`${stats.planBreakdown.monthly + stats.planBreakdown.yearly}`}
            sub={`${stats.planBreakdown.monthly} monthly · ${stats.planBreakdown.yearly} yearly`}
          />
        </div>

        {/* Monthly chart */}
        <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 mb-10">
          <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            Opt-ins by month (last updated)
          </h2>
          {stats.byMonth.length === 0 ? (
            <p className="text-sm text-neutral-500">No dated records.</p>
          ) : (
            <div className="space-y-2">
              {stats.byMonth.map((b) => (
                <div key={b.month} className="flex items-center gap-3 text-xs">
                  <span className="w-16 shrink-0 text-neutral-500 dark:text-neutral-400">{b.month}</span>
                  <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded">
                    <div
                      className="h-5 rounded bg-[#ED772F]"
                      style={{ width: `${maxMonth ? (b.count / maxMonth) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right text-neutral-700 dark:text-neutral-300">{b.count}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex gap-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 p-1">
            {(["all", "pro", "free"] as FilterTab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setFilter(t); setPage(0); }}
                className={`px-3 py-1.5 text-sm rounded-lg font-medium capitalize transition-colors ${
                  filter === t
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              placeholder="Search device token…"
              className="text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 w-56"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="px-4 py-3 font-medium">Device token</th>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Plan</th>
                <th className="px-4 py-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr><td colSpan={4} className="px-4 py-12 text-center text-neutral-500">No matching records.</td></tr>
              ) : (
                pageRows.map((r) => (
                  <tr key={r.device_token} className="border-b border-neutral-100 dark:border-neutral-900 last:border-0">
                    <td className="px-4 py-3"><TokenCell token={r.device_token} /></td>
                    <td className="px-4 py-3">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
                        r.is_pro_user
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      }`}>
                        {r.is_pro_user ? "Pro" : "Free"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400 font-mono text-xs">
                      {r.plan ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-neutral-500 dark:text-neutral-500">{relativeTime(r.updated_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-neutral-500">
          <span>{filtered.length.toLocaleString()} records</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={safePage === 0}
              className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 disabled:opacity-40"
            >
              Prev
            </button>
            <span>{safePage + 1} / {pageCount}</span>
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={safePage >= pageCount - 1}
              className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors. (The page that imports it doesn't exist yet — that's fine; `tsc` checks this file standalone.)

- [ ] **Step 3: Commit**

```bash
git add app/dashboard/dashboard-view.tsx
git commit -m "feat: add notification opt-in dashboard view component"
```

---

## Task 4: Dashboard page (server component)

**Files:**
- Create: `app/dashboard/page.tsx`

**Interfaces:**
- Consumes: `getSupabaseAdmin`, `NotificationOptIn` (`@/lib/supabase`); `computeStats` (`@/lib/notification-stats`); `DashboardView` (`./dashboard-view`).
- Produces: default-exported async `DashboardPage` React server component.

- [ ] **Step 1: Create the page**

Create `app/dashboard/page.tsx`:
```tsx
import type { Metadata } from "next";
import { getSupabaseAdmin, type NotificationOptIn } from "@/lib/supabase";
import { computeStats } from "@/lib/notification-stats";
import { DashboardView } from "./dashboard-view";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

async function fetchOptIns(): Promise<NotificationOptIn[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from("notification_opt_in")
      .select("device_token, is_pro_user, plan, updated_at")
      .range(0, 9999) // default cap is 1000 rows; lift it to cover all ~4.2k
      .returns<NotificationOptIn[]>();
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  const rows = await fetchOptIns();
  const stats = computeStats(rows);
  return <DashboardView stats={stats} rows={rows} />;
}
```

- [ ] **Step 2: Verify the build compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Manually verify the page renders (auth not added yet)**

Run: `npm run dev`, then open `http://localhost:3000/dashboard`.
Expected: stat cards show real numbers (Total ≈ 4,200; Pro ≈ 565), the monthly chart renders bars, and the table paginates. If everything is empty, `SUPABASE_SERVICE_ROLE_KEY` is missing from `.env.local` (Task 2 Step 3).

- [ ] **Step 4: Commit**

```bash
git add app/dashboard/page.tsx
git commit -m "feat: add notification opt-in dashboard page"
```

---

## Task 5: Basic Auth gate in middleware

**Files:**
- Modify: `middleware.ts`

**Interfaces:**
- Consumes: `DASHBOARD_USER`, `DASHBOARD_PASSWORD` env vars.
- Produces: `/dashboard*` requests without valid Basic Auth return `401`; the existing `/ingest` cookie-strip behavior is preserved.

- [ ] **Step 1: Rewrite middleware to branch by path**

Replace the entire contents of `middleware.ts` with:
```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Gate the internal dashboard with HTTP Basic Auth.
  if (pathname.startsWith("/dashboard")) {
    const expectedUser = process.env.DASHBOARD_USER;
    const expectedPass = process.env.DASHBOARD_PASSWORD;

    // Fail closed if credentials aren't configured.
    if (!expectedUser || !expectedPass) {
      return new NextResponse("Dashboard not configured", { status: 503 });
    }

    const auth = request.headers.get("authorization");
    if (auth?.startsWith("Basic ")) {
      const decoded = atob(auth.slice(6));
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }

    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Dashboard"' },
    });
  }

  // Strip cookies from PostHog proxy requests to avoid HTTP 431 errors
  // (Request Header Fields Too Large).
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete("cookie");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/ingest/:path*", "/dashboard", "/dashboard/:path*"],
};
```

- [ ] **Step 2: Add dashboard credentials to local env**

Add to `.env.local`:
```
DASHBOARD_USER=admin
DASHBOARD_PASSWORD=<choose a strong password>
```
> Owner action. Add the same two vars in Vercel before deploy.

- [ ] **Step 3: Manually verify the gate**

Run: `npm run dev`.
- Open `http://localhost:3000/dashboard` → browser shows a native login prompt; Cancel → "Authentication required" (401).
- Enter wrong credentials → re-prompts.
- Enter the `DASHBOARD_USER` / `DASHBOARD_PASSWORD` values → dashboard renders.
- Confirm `http://localhost:3000/feedback` still loads normally (ingest/other routes unaffected).

Optional CLI check:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/dashboard          # 401
curl -s -o /dev/null -w "%{http_code}\n" -u admin:<password> http://localhost:3000/dashboard  # 200
```

- [ ] **Step 4: Commit**

```bash
git add middleware.ts
git commit -m "feat: gate /dashboard with HTTP basic auth"
```

---

## Task 6: RLS migration — remove anon SELECT (owner-applied)

**Files:**
- Create: `scripts/sql/disable-anon-select-notification-opt-in.sql`

**Interfaces:**
- Consumes: nothing in code. This is a Supabase-side change run by the owner.
- Produces: anon role can no longer `SELECT` `notification_opt_in`; the dashboard (service-role) still reads it; the iOS app's `INSERT`/`UPDATE`/`DELETE` still work.

**Context:** The app write-path was verified — it never `SELECT`s this table and ignores write responses (`Steps/Supabase/SupabaseClient.swift`), so removing anon `SELECT` is safe. Production uses `notification_opt_in`; DEBUG builds use `notification_opt_in_development` (do not touch). Exact current policies could not be read from the web repo (no elevated access), so **inspect before applying**.

- [ ] **Step 1: Write the migration SQL**

Create `scripts/sql/disable-anon-select-notification-opt-in.sql`:
```sql
-- Goal: anon may WRITE opt-ins but may NOT READ them. service_role bypasses RLS,
-- so the dashboard keeps working. Applies to the production table only.

-- 1. INSPECT FIRST (run these and review output before continuing):
--    select relrowsecurity, relforcerowsecurity
--      from pg_class where relname = 'notification_opt_in';
--    select policyname, cmd, roles, qual, with_check
--      from pg_policies where tablename = 'notification_opt_in';
--
--    Then DROP any existing policy that grants anon SELECT or "ALL", e.g.:
--    -- drop policy "<existing_policy_name>" on public.notification_opt_in;

-- 2. APPLY target end-state:
alter table public.notification_opt_in enable row level security;

-- Write-only access for the anon role (used by the iOS app):
create policy "anon can insert opt-ins"
  on public.notification_opt_in for insert to anon with check (true);

create policy "anon can update opt-ins"
  on public.notification_opt_in for update to anon using (true) with check (true);

create policy "anon can delete opt-ins"
  on public.notification_opt_in for delete to anon using (true);

-- No SELECT policy for anon => anon cannot read the table.
-- (service_role and the dashboard are unaffected: service_role bypasses RLS.)
```

- [ ] **Step 2: Commit the SQL file**

```bash
git add scripts/sql/disable-anon-select-notification-opt-in.sql
git commit -m "chore: add RLS migration to remove anon select on notification_opt_in"
```

- [ ] **Step 3: Owner applies and verifies in Supabase**

1. In Supabase SQL editor, run the INSPECT queries; drop any anon SELECT/ALL policy found.
2. Run the APPLY block.
3. **Verify anon can no longer read** (should return `[]` or an RLS error):
```bash
set -a; source .env.local; set +a
curl -s "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/notification_opt_in?select=device_token&limit=1" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_ANON_KEY"
```
4. **Verify anon can still write** (insert a throwaway row, then delete it):
```bash
curl -s -X POST "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/notification_opt_in" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" -H "Prefer: resolution=merge-duplicates" \
  -d '{"device_token":"__rls_test__","is_pro_user":false}'
curl -s -X DELETE "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/notification_opt_in?device_token=eq.__rls_test__" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_ANON_KEY"
```
Expected: insert returns 201 (no body / success), delete returns 204. If the insert fails, an INSERT/UPDATE policy is missing — re-check Step 2.
5. **Verify the dashboard still loads** (it uses service-role): reload `/dashboard`, data still present.

---

## Final verification

- [ ] `npx vitest run` — all tests pass.
- [ ] `npm run build` — production build succeeds.
- [ ] `/dashboard` requires Basic Auth; with credentials, shows correct totals (≈4,200 total, ≈565 Pro), monthly chart, searchable/sortable/paginated table.
- [ ] After RLS applied: anon `SELECT` on `notification_opt_in` denied; iOS app opt-in/opt-out still functional.
- [ ] Vercel env vars set: `SUPABASE_SERVICE_ROLE_KEY`, `DASHBOARD_USER`, `DASHBOARD_PASSWORD`.
