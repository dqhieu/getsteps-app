# Pro upsell CTA on tool + blog pages — Design

**Date:** 2026-06-28
**Status:** Implemented (this doc updated to reflect what shipped)
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
| Relationship to App Store CTA | Complement (add alongside) on tool/blog cards; **replace** on the mobile sticky bar | The fixed nav already carries the free App Store download on every page, so the sticky bar was a redundant second App Store CTA — repurposed for Pro |
| Tool-card prominence | Compact outlined pill ("Get Pro · 20% off") right-aligned under the App Store badge | Visible but clearly secondary; right-aligned so it doesn't stretch the two-column card |
| Blog CTA shape | Icon-led horizontal banner (crown badge + heading + compact pill), Pro-only | Gives the upsell premium identity, stays tight at the end of a long article |
| Mobile sticky bar | Points to `/get-pro` ("Get more from every step" / "Steps Pro — 20% off the App Store" / "Get Pro") | Most thumb-reachable slot; free download stays guaranteed via the fixed nav |
| Audience framing | Warm / returning-user ("Already using Steps?") on the full variant; benefit-forward on the sticky bar | Self-selects for users who have the app and can redeem the web purchase |
| Blog CTA contents | Pro CTA only (no App Store badge) | User decision. Caveat acknowledged: cold blog audience with no free option may underperform — measured via the `get-pro` goal. |
| Tracking | `data-fast-goal="get-pro"` | Lets us measure Pro CTA conversion in Datafast vs. `open-app-store` |

## Component: `ProUpsell`

New file: `components/pro-upsell.tsx`

- Styled **outlined/ghost button** in brand orange (`#ED772F`) linking to `/get-pro` with
  `data-fast-goal="get-pro"`.
- `compact` prop: when `false` (default) it shows the lead-in "Already using Steps?" + full
  label "Get Pro — 20% off the App Store"; when `true` it drops the lead-in and uses the short
  label "Get Pro · 20% off" (so it fits under the badge in the tool card without stretching it).
- Self-contained (no card wrapper of its own).
- Dark-mode aware, matching existing component conventions.

## Placement (as shipped)

### Tool / calculator pages (`components/tool-app-cta.tsx`)
- `ToolAppCta`: right column is a vertical stack — App Store badge → "Free on the App Store" →
  `<ProUpsell compact />`, right-aligned on desktop. App Store badge stays primary.
- `ToolStickyCta` (mobile bottom bar): repurposed to point at `/get-pro`. Copy: "Get more from
  every step" / "Steps Pro — 20% off the App Store" / "Get Pro" button (`data-fast-goal="get-pro"`).
  The per-page `label` prop was removed (the bold line is now fixed); all 8 call sites updated.

### Blog posts (`app/blog/[slug]/page.tsx`)
- `BlogProCta`: icon-led horizontal banner (lucide `Crown` badge + heading + subtext +
  `<ProUpsell compact />`) rendered after `RelatedContentSection`. Pro-only, no App Store badge.

## Out of scope (no change)

- `/get-pro` route and RevenueCat config.
- Landing page (hero / pricing).
- Nav "Download" button (stays → App Store, the guaranteed free-download path everywhere).

## Success criteria

- `ProUpsell` renders on all tool pages (inside `ToolAppCta`) and on all blog posts.
- All Pro CTA links resolve to `/get-pro` and fire the `get-pro` Datafast goal.
- The nav "Download" + in-page App Store badge keep the `open-app-store` goal on the free path.
- No layout regression on tool result cards or blog articles (mobile + desktop, light + dark).

## Risks

- **Cannibalization:** the Pro pill could divert clicks from the free App Store badge in the
  tool card. Mitigated by compact/secondary styling; monitor `open-app-store` vs `get-pro`.
- **Sticky-bar trade-off:** the mobile bar is the most thumb-reachable slot; pointing it at the
  higher-friction Pro ask (instead of free download) could dip free installs even as Pro clicks
  rise. Free download stays guaranteed via the fixed nav; reversible one-liner. Watch both goals.
- **Cold blog audience:** Pro-only CTA on informational blog traffic may convert poorly.
  Accepted; measured via `get-pro` goal — revisit placement if conversion is negligible.

## Known issues (accepted, not fixed)

- On mobile the fixed sticky bar overlaps the bottom of the in-page `ToolAppCta` card
  (pre-existing; the page lacks bottom padding to clear the fixed bar). Left as-is per decision.
