# Phase 1 Free Tools — Implementation Plan
> Created: 2026-02-18 | Branch: main

## Overview

Build 6 new free calculator tools following the established pattern in `app/tools/`.

**Strategy reference:** `plans/reports/free-tool-strategy-260218-1017-steps-app.md`

## Tools to Build

| # | Tool | Route | Est. Monthly Searches |
|---|------|-------|----------------------|
| 1 | Water Intake Calculator | `/tools/water-intake-calculator` | 14K |
| 2 | Heart Rate Zones Calculator | `/tools/heart-rate-zones-calculator` | 35K |
| 3 | Activity → Steps Converter | `/tools/activity-to-steps-converter` | 8.5K |
| 4 | Running Pace Calculator | `/tools/running-pace-calculator` | 28K |
| 5 | Body Fat % Calculator | `/tools/body-fat-calculator` | 22K |
| 6 | Calorie Deficit Calculator | `/tools/calorie-deficit-calculator` | 9K |

**Total:** ~116K new monthly searches

## Code Pattern (from existing tools)

```
lib/[tool]-calculator.ts              ← Pure calculation logic (no React)
components/[tool]-calculator.tsx      ← "use client" UI component
app/tools/[tool]/page.tsx             ← Server component: metadata + hero + FAQ + CTA
app/tools/[tool]/client.tsx           ← Thin wrapper rendering the component
```

## Phases

| Phase | Work | Status |
|-------|------|--------|
| [Phase 1](phase-01-lib-calculators.md) | Create 6 lib calculation files | ⬜ Pending |
| [Phase 2](phase-02-ui-components.md) | Create 6 React calculator components | ⬜ Pending |
| [Phase 3](phase-03-tool-pages.md) | Create 12 page files (page.tsx + client.tsx × 6) | ⬜ Pending |
| [Phase 4](phase-04-sitemap-update.md) | Update sitemap.ts + tools landing page | ⬜ Pending |

## Key Dependencies

- All 6 tools can be built in parallel (no cross-dependencies)
- Phase 2 depends on Phase 1 (components import lib functions)
- Phase 3 depends on Phase 2 (pages import components)
- Phase 4 depends on Phase 3 (sitemap lists routes)

## Reuse Opportunities

- `lib/unit-converter.ts` — `lbsToKg`, `kgToLbs`, `feetInchesToCm`, `formatNumber`, `formatTime`
- `lib/calorie-calculator.ts` — `CALORIES_PER_KG_FAT`, `getMET`
- `components/bmi-calculator.tsx` — UI patterns: input cards, result cards, toggle buttons, FAQ section
- `app/tools/bmi-calculator/page.tsx` — page structure: hero + calculator section + info section + CTA
