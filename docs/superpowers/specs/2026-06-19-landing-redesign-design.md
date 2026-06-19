# Landing Page Redesign — "Quiet Precision"

**Date:** 2026-06-19
**Status:** Approved direction, pending implementation plan

## Goal

Make the Steps landing page (`getsteps.app`) feel **premium and distinctive** rather than
generic/template-y. The current page is tidy but reads as a stock app-landing template — heavy
emoji usage, many thin sections, and orange/amber gradient washes throughout.

## Direction

A **refined-minimal** system in the Linear/Apple vein. The product screenshots and real data
carry the page; the UI around them recedes. Premium comes from restraint, hairline detail, and
consistent rhythm — not decoration.

## Design System

- **Typography:** Deliberate scale. Large, lower-weight headlines (`font-medium`, tight tracking)
  with generous line-height. Less "bold everywhere," more confident spacing.
- **Color:** Mostly neutral (near-black `#171717` / warm-white `#F2F0EF`). Orange `#ED772F` is a
  *rare* accent — one highlighted word, the CTA, an active state. Pull back the orange/amber
  background gradients (keep at most one subtle use in Yearly Insights).
- **Depth:** Hairline borders + soft, low shadows instead of `shadow-2xl`. Consistent radius
  (keep the 32px card radius language where it fits).
- **Icons:** Replace all emoji (feature cards, personal records, workout types) with a consistent
  **monochrome line-icon set via `lucide-react`** (new dependency, approved). Neutral tone with
  orange used sparingly for emphasis.
- **Motion:** Subtle CSS scroll-reveal + hover micro-interactions. No animation library.

## Section Restructure

Existing order: Hero → Screenshots → Featured → Features → YearlyInsights → PersonalRecords →
Workouts → Privacy → Reviews → CTA → Footer.

New flow (keeps every real asset, rebuilds rhythm):

1. **Hero** — Bigger. **H1 becomes the value-prop line** ("Every step counts. Every milestone
   shows."); the app name "Steps: Workout & Pedometer" shown smaller above the H1 (and retained in
   page metadata for SEO). Inline rating + "Free Download" + App Store badge. App icon retained.
2. **Screenshot showcase** — Keep the snap-scroll carousel. Refine framing/shadows to hairline +
   soft shadow.
3. **Trust strip** — Merge "Featured in" press links + rating + "loved by thousands" laurels into
   one quiet social-proof band. Drops the jarring full-black `Featured` section; the Appreciation
   video is retained but reframed within the new system.
4. **Feature spotlights** — 4 alternating hero-feature blocks pairing copy with a real screenshot,
   replacing the flat emoji grid for the headline features. Copy sourced from the mobile app
   changelog (`Steps/Steps/Localizable.xcstrings`):
   - **3D Route Playback** — "Replay your activity routes with a cinematic 3D follow camera. Pick
     your map style and adjust the playback speed to relive every workout your way." (lead — most
     distinctive/visual)
   - **AI Coach** — "Personalized feedback on every workout, plus chat about any activity powered
     by on-device Apple Intelligence."
   - **Stepboard** — "Daily leaderboards with friends. Create private boards, invite via a
     getsteps.app/join link, and compete by steps or distance."
   - **Apple Watch Workouts** — "Start and track workouts from your wrist with GPS routes, live
     metrics, and real-time mirroring to your phone."
5. **Yearly Insights** — Keep as a distinct "Spotify Wrapped for fitness" moment (most distinctive
   feature). May retain one subtle gradient here.
6. **Everything else** — Consolidate the remaining features + Personal Records + Workout Types into
   one clean monochrome line-icon grid (the long tail).
7. **Privacy** — Keep. Fits the trust narrative (HealthKit, on-device).
8. **Reviews** — Keep, refined cards (hairline borders, calmer).
9. **Final CTA + Footer** — Strong, calm close.

## Spotlight Assets (user-provided)

The 4 spotlights use **clean, caption-free** assets that the user will place under
`public/spotlights/`. The build references these fixed paths (phone aspect `1170/2532`, same as
existing screenshots; a `.mp4` is acceptable for the 3D route playback):

- `public/spotlights/route-3d.png` (or `.mp4`) — 3D Route Playback
- `public/spotlights/ai-coach.png` — AI Coach
- `public/spotlights/stepboard.png` — Stepboard
- `public/spotlights/apple-watch.png` — Apple Watch Workouts

Until the assets are added, spotlights render with a neutral placeholder frame so the page never
breaks. Existing caption-baked marketing screenshots remain in the carousel only.

## Components Affected

Restyle/rewrite under `components/`:
`landing-navbar`, `landing-hero`, `landing-screenshots`, `landing-featured` (→ trust strip),
`landing-features` (→ spotlights + long-tail grid), `landing-yearly-insights`,
`landing-personal-records` + `landing-workouts` (→ merged into long-tail grid),
`landing-privacy`, `landing-reviews`, `landing-cta`, `landing-footer` (light touch).
Update `app/page.tsx` section order. Add icon mapping for `lib/constants.ts` data
(features / records / workouts) since emoji are being replaced.

## Constraints

- Keep all existing content, copy values, links, and assets (screenshots, video, reviews, press).
- Preserve analytics hooks (e.g. `data-fast-goal="open-app-store"`) and the App Store URL.
- Preserve dark mode across every section.
- Keep accessibility: alt text, aria-labels, semantic headings.

## Success Criteria

- Page reads as crafted/premium, not template-y; emoji replaced with consistent line icons.
- Section flow is tighter (fewer, more intentional sections) per the new structure.
- Dark + light mode both polished; responsive on mobile and desktop.
- No regression in CTAs, analytics hooks, or links. Verified in the browser preview.

## Out of Scope

- Copywriting overhaul (light headline edits only).
- New screenshots/assets (reuse existing).
- Tool/blog/persona pages (landing page only).
