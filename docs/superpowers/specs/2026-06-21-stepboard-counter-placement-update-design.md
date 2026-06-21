# Design Update: Stepboard Counter Placement and Simplification

## Goal

Move the live Stepboard total to the end of the landing page, immediately below
the “Ready to track every step?” CTA, and show only the retro flip-clock number.

## Placement

Keep `LandingStepboardTotal` inside the landing page `<main>`, but move it from
between `LandingScreenshots` and `LandingTrust` to immediately after
`LandingCTA`. The footer remains outside `<main>` and follows the counter.

The final order is:

1. `LandingPrivacy`
2. `LandingCTA`
3. `LandingStepboardTotal`
4. closing `</main>`
5. `LandingFooter`

## Presentation

The counter renders only the retro split-flap digit tiles and thousands
separators. Remove all other visible presentation:

- outer card, border/shadow, and gradient background;
- “Walking together” eyebrow;
- visible and screen-reader-only section heading;
- “steps walked by the Steps community” supporting line;
- “and counting” and “Live from Stepboard” status lines;
- “Total currently unavailable” error copy.

Use a compact, centered section with enough vertical spacing to separate the CTA
from the footer. Preserve the existing responsive digit sizing, grouping at
thousands boundaries, one-time flip animation, and reduced-motion override.

## Data and States

Do not change the Supabase RPC or one-request-per-mounted-session behavior.

- **Loading:** show subdued blank flip tiles in the same compact number area.
- **Loaded:** show only the formatted live number.
- **Unavailable:** render no visible counter content and collapse the section so
  the failure does not create an empty decorative block.

The loaded number retains one accessible label: “{formatted total} steps walked
by the Steps community.” Decorative tiles remain hidden from assistive
technology.

## Component Boundaries

- `app/page.tsx` owns the new position after `LandingCTA`.
- `LandingStepboardTotal` keeps data fetching and states but reduces its rendered
  output to the number area only.
- `FlipCounter`, `FlipDigit`, formatting helpers, SQL, and global animation CSS
  remain unchanged unless a test requires a focused adjustment.

## Verification

Update automated tests to verify:

- the landing page places the counter after the CTA and before the footer;
- the previous visible copy is absent;
- success still exposes one accessible formatted aggregate;
- RPC errors render no visible fallback text or counter role;
- the RPC still runs once under React Strict Mode.

Run the full test suite, TypeScript, and production build. Manually verify the
number-only row at mobile and desktop widths, including its spacing between the
CTA and footer.
