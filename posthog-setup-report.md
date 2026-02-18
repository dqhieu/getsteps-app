# PostHog Post-Wizard Report

The wizard has completed a deep integration of your Steps app project. PostHog analytics has been configured using the Next.js 16+ `instrumentation-client.ts` approach with automatic pageview tracking, exception capture, and custom event instrumentation across key conversion points and calculator tools.

## Integration Summary

### Files Created/Modified

| File | Change Type | Description |
|------|-------------|-------------|
| `instrumentation-client.ts` | Created | PostHog client initialization with exception capture |
| `next.config.ts` | Modified | Added reverse proxy rewrites for `/ingest` |
| `.env.local` | Modified | Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` |
| `components/landing-hero.tsx` | Modified | Added `app_store_link_clicked` and `uneed_badge_clicked` events |
| `components/landing-cta.tsx` | Modified | Added `app_store_link_clicked` event |
| `app/tools/page.tsx` | Modified | Extracted interactive sections to client component |
| `app/tools/tools-client.tsx` | Created | Client component with `tool_card_clicked` and `app_store_link_clicked` events |
| `components/tdee-calculator.tsx` | Modified | Added `tdee_calculated` event with user input properties |
| `components/macro-calculator.tsx` | Modified | Added `macro_calculated` event with nutrition results |
| `components/steps-to-calories-calculator.tsx` | Modified | Added `steps_to_calories_calculated` event |

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `app_store_link_clicked` | User clicks App Store download button | `landing-hero.tsx`, `landing-cta.tsx`, `tools-client.tsx` |
| `uneed_badge_clicked` | User clicks the Uneed featured badge | `landing-hero.tsx` |
| `tool_card_clicked` | User clicks a tool card from tools listing | `tools-client.tsx` |
| `tdee_calculated` | User calculates TDEE (with gender, age, weight, height, activity, result) | `tdee-calculator.tsx` |
| `macro_calculated` | User calculates macros (with protein, carbs, fat targets) | `macro-calculator.tsx` |
| `steps_to_calories_calculated` | User calculates calories from steps | `steps-to-calories-calculator.tsx` |

### Event Properties

All calculator events include relevant user input properties for analysis:
- **Demographics**: gender, age, weight_kg, height_cm
- **Settings**: activity_level, goal type
- **Results**: calculated values (TDEE, BMR, calories, macros)

## Next Steps

We've built insights and a dashboard to monitor user behavior based on the instrumented events:

### Dashboard
- **[Analytics basics](https://us.posthog.com/project/159490/dashboard/1287429)** - Core metrics for Steps app

### Insights
- **[App Store Clicks Over Time](https://us.posthog.com/project/159490/insights/zQUE1xhy)** - Daily trend of App Store link clicks
- **[Calculator Usage](https://us.posthog.com/project/159490/insights/drkYL0G6)** - Daily usage of fitness calculators (TDEE, Macros, Steps to Calories)
- **[Tool to App Store Conversion Funnel](https://us.posthog.com/project/159490/insights/P87gwCK0)** - Conversion from tool exploration to App Store
- **[App Store Clicks by Location](https://us.posthog.com/project/159490/insights/22xNnHnN)** - Breakdown by page section (hero, CTA, tools)
- **[Top Calculator Tools by Clicks](https://us.posthog.com/project/159490/insights/7s1eog6F)** - Most popular fitness calculators

### Agent Skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

## Technical Notes

- **Reverse Proxy**: PostHog requests are proxied through `/ingest` to avoid ad blockers
- **Exception Capture**: Enabled via `capture_exceptions: true` in instrumentation
- **Environment Variables**: API key and host are stored in `.env.local` (gitignored)
- **Next.js 16+**: Using `instrumentation-client.ts` approach (no provider wrapper needed)
