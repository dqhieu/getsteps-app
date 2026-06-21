# Design: Live Stepboard Community Step Counter

## Goal

Add a dedicated social-proof strip to the landing page that displays the live,
all-time sum of steps retained for all Stepboard members. Present the value as a
retro split-flap counter and fetch it once per visitor page session.

## Scope

### Included

- One combined all-time step total across retained rows in `user_daily_stats`.
- A narrow public Supabase RPC that returns only the aggregate integer.
- A landing-page client component that fetches the total once on mount.
- A responsive retro split-flap visual treatment with reduced-motion support.
- Loading and unavailable states that preserve layout stability.
- Automated coverage for aggregation, formatting, fetch behavior, and failure
  behavior, plus production-build verification.

### Excluded

- Member names, identifiers, avatars, individual totals, or rankings.
- Repeated polling or live subscriptions during a visitor session.
- Persisting contributions after a member leaves Stepboard and their rows are
  deleted.
- Changes to the iOS sync pipeline or a separately maintained counter table.
- Changes to the existing Stepboard spotlight.

## Placement and Content

Insert a new landing-page section after `LandingScreenshots` and before
`LandingTrust`. The approved treatment is a standalone social-proof strip,
separate from the hero and existing Stepboard spotlight.

The content hierarchy is:

1. Eyebrow: **Walking together**
2. Retro split-flap digit counter
3. Supporting line: **steps walked by the Steps community**
4. Status line: **and counting**

The section must fit the existing restrained landing-page aesthetic rather than
look like a separate themed page.

## Data Architecture

Add an idempotent SQL migration under `scripts/sql/` that creates a function
named `get_public_stepboard_total_steps()`.

The function:

- accepts no arguments;
- returns one `bigint`;
- calculates `COALESCE(SUM(steps), 0)` from all retained rows in
  `public.user_daily_stats`;
- never returns row-level data;
- uses `SECURITY DEFINER`, a fixed `search_path`, and a schema-qualified table
  reference so anonymous callers never receive direct table access;
- revokes the default execute privilege from `public`, then grants execute only
  to `anon`, `authenticated`, and `service_role`;
- leaves all existing raw-table RLS policies and privileges unchanged.

Because leaving Stepboard removes a member's synced data, deleted rows no longer
contribute to the aggregate. The public counter therefore represents all-time
steps for currently retained Stepboard data, not a permanent historical ledger.

## Client Data Flow

Create a dedicated client component for the counter. On first mount it calls
`get_public_stepboard_total_steps` through the existing Supabase client and
stores the normalized non-negative integer in local component state.

The request runs exactly once for that mounted page session. There is no polling,
subscription, retry loop, or cross-session browser cache. A later page load makes
a new request and receives the current database total.

Normalize malformed, negative, null, or unsafe numeric results to the unavailable
state rather than displaying a misleading value. JavaScript precision must be
handled explicitly: the RPC result is treated as a decimal string or otherwise
validated before formatting so totals above `Number.MAX_SAFE_INTEGER` are not
silently rounded.

## Visual Design

Render each digit in a dark charcoal mechanical tile with:

- warm off-white numerals;
- a horizontal center seam;
- subtle inset shading and depth;
- compact spacing and tabular/monospaced numerals;
- the existing `#ED772F` orange used sparingly for the eyebrow or status accent.

Thousands separators remain visually distinct from digit tiles. Tile size and
gaps scale down on narrow screens, and long totals may wrap only at separator
boundaries if they exceed the smallest supported viewport. The section reserves
the final counter height during loading to avoid cumulative layout shift and
supports both existing light and dark modes.

## Animation and Accessibility

After the value loads, each digit performs one short flip-in animation. The
animation is decorative and must not block display of the final value.

When `prefers-reduced-motion: reduce` is active, render the final digits without
the flip animation. Decorative tiles and separators are `aria-hidden`; the
component exposes one accessible text value such as “84,261,940 steps walked by
the Steps community.” Loading status is not repeatedly announced.

## States and Error Handling

- **Loading:** render reserved counter space with subdued placeholder tiles.
- **Loaded:** render the formatted aggregate and one-time flip animation.
- **Unavailable:** render “Total currently unavailable” in the same reserved
  space. Do not show a fabricated, stale, or demo number.

An RPC failure must remain isolated to this section and must not fail the landing
page render. No member-level or backend error details are sent to the UI.

## Component Boundaries

- SQL migration: owns aggregate computation and public permissions.
- `LandingStepboardTotal`: owns one-time fetch, validation, state, accessible
  labeling, and section-level content.
- `FlipCounter` and `FlipDigit` (or equivalent focused subcomponents): own number
  formatting and the visual tile/animation implementation without knowing about
  Supabase.
- `app/page.tsx`: owns only section placement.
- `components/index.ts`: exports the new landing component consistently with the
  existing landing-page modules.

## Verification

Automated tests should verify:

- the formatting layer handles zero, separators, large integer strings, and
  invalid values without precision loss;
- the component invokes the RPC once per mount;
- a successful response renders one accessible aggregate value;
- a failed or malformed response renders the unavailable state;
- decorative digits do not duplicate the number for assistive technology;
- the SQL migration defines a no-argument `bigint` aggregate function, uses a
  fixed search path, revokes default execution, and grants only the function
  execution needed for public reads.

Manual verification should cover mobile and desktop widths, light and dark mode,
normal and reduced motion, loading stability, and the unavailable state. Run the
test suite and a production Next.js build before completion.

## Rollout Requirement

The SQL migration must be applied to the production Supabase project before the
website change is deployed. If the UI deploys first, it will safely show the
unavailable state, but that ordering is not the intended release path.
