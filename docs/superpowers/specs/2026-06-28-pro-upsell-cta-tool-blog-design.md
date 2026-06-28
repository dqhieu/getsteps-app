# Pro upsell CTA on tool + blog pages — Design

**Date:** 2026-06-28
**Status:** Approved (design)
**Related:** `docs/superpowers/specs/2026-06-26-web2app-redemption-links-stripe-design.md`, `docs/superpowers/plans/2026-06-26-web2app-redemption-links.md`

## Goal

Surface the web2app Pro funnel (`/get-pro` → RevenueCat web checkout) on high-traffic
tool/calculator pages and blog posts, **without disrupting the proven free-download
funnel**. The App Store "download free" CTA remains the primary conversion path; the Pro
CTA is a secondary, warm-audience upsell.

## Context

- `/get-pro` is a 307 redirect to `SITE_CONFIG.proWebCheckoutUrl` (`app/get-pro/route.ts`).
  CTAs link to `/get-pro`, not the raw checkout URL, so the destination can change without
  editing links.
- Web Pro is a flat 20% under App Store (Monthly $3.99 / Yearly $23.99 / Lifetime $39.99).
  App is iOS-only; web purchase is redeemed in the app.
- Tool pages already render `ToolAppCta` (result card) + `ToolStickyCta` (mobile bar), both
  → App Store with `data-fast-goal="open-app-store"` (`components/tool-app-cta.tsx`).
- Blog posts currently have **no app CTA** — only an "about us" footer box
  (`app/blog/[slug]/page.tsx`).
- The funnel is fed by ~28K/28d **organic** traffic (no paid ads); placement + intent is the
  conversion lever. Most of this traffic is cold/informational.

## Design decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Relationship to App Store CTA | Complement (add alongside) | Lowest risk to the proven free-download funnel |
| Prominence | Styled secondary button (outlined/ghost), not a big button or full pricing card | Visible but clearly secondary; minimizes cannibalization |
| Audience framing | Warm / returning-user ("Already using Steps?") | Self-selects for users who have the app and can redeem the web purchase |
| Blog CTA contents | Pro CTA only (no App Store badge) | User decision. Caveat acknowledged: cold blog audience with no free option may underperform — measured via the `get-pro` goal. |
| Tracking | `data-fast-goal="get-pro"` | Lets us measure Pro CTA conversion in Datafast vs. `open-app-store` |

## Component: `ProUpsell`

New file: `components/pro-upsell.tsx`

- Renders a lead-in line ("Already using Steps?") + a styled **outlined/ghost button** in
  brand orange (`#ED772F`): **"Get Pro — 20% off the App Store"**.
- Button links to `/get-pro` with `data-fast-goal="get-pro"`.
- Self-contained (no card wrapper of its own) so it can be dropped into the existing tool CTA
  card or a blog CTA card.
- Dark-mode aware, matching existing component conventions.

## Placement

### Tool / calculator pages
- Render `<ProUpsell />` inside the existing `ToolAppCta` card, directly under the App Store
  badge block. App Store badge stays primary; Pro button reads as the secondary option.
- `ToolStickyCta` (mobile bottom bar) is unchanged — stays single-action (App Store only).

### Blog posts (`app/blog/[slug]/page.tsx`)
- Add a compact bordered CTA card after `RelatedContentSection` containing a short heading +
  `<ProUpsell />`. No App Store badge (per decision above).
- Card styling matches the existing "about us" box (`rounded-2xl border ... p-6`).

## Out of scope (no change)

- `/get-pro` route and RevenueCat config.
- `ToolStickyCta` mobile bar.
- Landing page (hero / pricing).

## Success criteria

- `ProUpsell` renders on all tool pages (inside `ToolAppCta`) and on all blog posts.
- All Pro CTA links resolve to `/get-pro` and fire the `get-pro` Datafast goal.
- App Store CTAs and their `open-app-store` goal are unchanged.
- No layout regression on tool result cards or blog articles (mobile + desktop, light + dark).

## Risks

- **Cannibalization:** a secondary Pro button could divert clicks from the free App Store CTA.
  Mitigated by warm framing + secondary styling; monitor `open-app-store` vs `get-pro` goals.
- **Cold blog audience:** Pro-only CTA on informational blog traffic may convert poorly.
  Accepted; measured via `get-pro` goal — revisit placement if conversion is negligible.
