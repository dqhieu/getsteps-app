# Design: `/dashboard` — Notification Opt-In Admin Dashboard

**Date:** 2026-06-18
**Status:** Approved

## Purpose

A private, single-admin dashboard at `/dashboard` that displays data from the
Supabase `notification_opt_in` table: aggregate metrics plus a searchable raw
table. Used by the site owner to monitor push opt-ins and Pro conversion.

## Decisions (locked)

- **Audience:** Private (single admin), full data including raw `device_token`.
- **Auth:** HTTP Basic Auth via the existing `middleware.ts`.
- **Data security:** Lock down RLS now — disable anon `SELECT` on
  `notification_opt_in`; dashboard fetches with a server-only service-role key.
- **FCM tokens:** Excluded entirely (not fetched, not displayed).
- **Charts:** Plain CSS, no chart library (matches the codebase's no-dep style).

## Data source

Table `notification_opt_in` (~4,200 rows). Columns used:

| Column         | Type      | Notes                                              |
|----------------|-----------|----------------------------------------------------|
| `device_token` | string    | Sensitive. Displayed truncated + copy button.      |
| `is_pro_user`  | bool/null | 565 currently `true`.                              |
| `plan`         | string/null | e.g. `com.hieudinh.steps.pro.monthly` / `.yearly`. |
| `updated_at`   | timestamp/null | 3,596 present. Drives the time chart.          |

`fcm_token` is intentionally **not** selected.

## Architecture

Mirrors the existing `app/feedback/` pattern (server component fetch → client
view component).

```
middleware.ts                      # add /dashboard Basic Auth gate
lib/supabase.ts                    # add getSupabaseAdmin() (service-role, server-only)
app/dashboard/page.tsx             # server component: fetch + compute aggregates
app/dashboard/dashboard-view.tsx   # "use client": stat cards, chart, raw table
```

### 1. Auth (`middleware.ts`)

- Extend matcher to include `/dashboard` (keep existing `/ingest` matcher + its
  cookie-strip logic, branch by `request.nextUrl.pathname`).
- Read `Authorization: Basic` header; decode and compare against
  `DASHBOARD_USER` / `DASHBOARD_PASSWORD` env vars.
- On missing/invalid credentials → `401` with
  `WWW-Authenticate: Basic realm="Dashboard"` (native browser prompt).
- New env vars: `DASHBOARD_USER`, `DASHBOARD_PASSWORD` (`.env.local` + Vercel).

### 2. Data fetch (`app/dashboard/page.tsx`)

- Server component, `export const revalidate = 300`.
- `export const dynamic = "force-dynamic"`? No — keep ISR via `revalidate` (data
  is not per-request; 5-min freshness is fine and avoids hammering the DB).
- Use `getSupabaseAdmin()` (service-role key, never shipped to client).
- Query: `.from("notification_opt_in").select("device_token, is_pro_user, plan, updated_at").range(0, 9999)`
  (the default 1,000-row cap requires `range` to cover all rows).
- Compute aggregates server-side, pass `{ stats, rows }` to the client view.
- Wrap in try/catch; on failure pass empty data (matches feedback page).

### 3. Aggregates (`stats`)

- `total` — total rows.
- `pro` — count where `is_pro_user === true`, with % of total.
- `free` — total − pro.
- `planBreakdown` — counts grouped into `monthly` / `yearly` / `other` / `none`
  (derived from `plan` string: contains `monthly` / `yearly`; non-null-but-other
  → `other`; null → `none`).
- `byMonth` — `{ month: "YYYY-MM", count }[]` from `updated_at` (rows with null
  `updated_at` excluded from the chart), sorted chronologically.

### 4. UI (`app/dashboard/dashboard-view.tsx`, `"use client"`)

- Tailwind, dark-mode, `#ED772F` accent. Reuse `relativeTime()` helper pattern
  from `feedback-board.tsx`. No `LandingNavbar`/`LandingFooter` (internal tool).
- **Stat cards grid:** Total, Pro (+%), Free, plan breakdown chips.
- **Monthly chart:** horizontal/vertical bars built from CSS divs, height/width
  proportional to count; month label + count.
- **Raw table:**
  - Columns: `device_token` (truncated, e.g. first 12 chars + `…`, with a
    copy-to-clipboard button), `is_pro_user` (badge), `plan`, `updated_at`
    (relative time).
  - **Search:** substring match on `device_token`.
  - **Filter tabs:** all / pro / free.
  - **Sort:** newest / oldest (by `updated_at`).
  - **Pagination:** 50 rows per page (4,200 rows is too many to render at once).
- No public metadata/SEO; `robots: noindex` on the page metadata.

### 5. RLS lockdown (Supabase)

- Disable anonymous `SELECT` on `notification_opt_in` so the public anon key can
  no longer read device tokens directly.
- **CRITICAL RISK:** the iOS Steps app writes opt-ins to this table. Removing the
  SELECT policy must not break those writes.
  - supabase-js `upsert`/`insert` returns the row by default
    (`Prefer: return=representation`), which requires `SELECT`. If the app reads
    back the written row, dropping SELECT breaks it.
  - **Mitigation:** before changing any policy, inspect the app's write code in
    `/Users/hieudinh/Projects/Steps` to confirm how it writes (and whether it
    relies on return representation or its own SELECTs). Adjust the app to use
    `returning: "minimal"` if needed, OR scope the SELECT-removal narrowly.
  - The migration is **gated on this verification** — do not apply blind.

## Components & responsibilities

| Unit                         | Does                                              | Depends on |
|------------------------------|---------------------------------------------------|------------|
| `middleware.ts`              | Gate `/dashboard` with Basic Auth; existing `/ingest` logic | env vars |
| `getSupabaseAdmin()`         | Server-only Supabase client (service-role key)    | env var    |
| `app/dashboard/page.tsx`     | Fetch rows, compute `stats`, render view          | supabase, view |
| `dashboard-view.tsx`         | Render cards/chart/table; client-side search/filter/sort/paginate | stats + rows props |

## Error handling

- Fetch failure → empty `stats`/`rows`, view shows "No data" states.
- Missing `DASHBOARD_USER`/`DASHBOARD_PASSWORD` env → middleware denies all (401)
  rather than allowing through.
- Missing service-role key → `getSupabaseAdmin()` throws (caught by page try/catch
  → empty data).

## Testing / verification

- Manual: `/dashboard` returns 401 without credentials; correct credentials show
  the dashboard; wrong credentials re-prompt.
- Aggregates match direct count queries against Supabase (spot-check total / pro).
- Time chart buckets match `updated_at` distribution.
- After RLS change: anon key `SELECT` on `notification_opt_in` returns 0 rows /
  denied; iOS app opt-in write still succeeds (verified against app code).
- `next build` passes.

## Out of scope (YAGNI)

- Editing/deleting rows from the dashboard.
- CSV export.
- Multi-user roles / Supabase Auth.
- Real-time updates (ISR 5-min refresh is enough).
- FCM token display or push-sending.
