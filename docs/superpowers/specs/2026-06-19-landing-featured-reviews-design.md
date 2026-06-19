# Landing page: Featured + Reviews sections

**Date:** 2026-06-19
**Status:** Approved

Port the PayWall "FEATURED IN" and "LOVED BY THOUSANDS" sections from the iOS
Steps app (`/Users/hieudinh/Projects/Steps`) onto the marketing landing page
(`getsteps-app`, Next.js 16 + Tailwind v4).

## Decisions

- **Featured** = looping video **and** a press strip (both).
- **Reviews** = responsive grid (no carousel JS), better for SEO.
- The existing single-quote `LandingTestimonial` is **replaced** by the new reviews section.
- Flag emojis kept as-is (won't render as flags on Windows — acceptable).

## Assets (copy into `public/`)

| Source | Destination |
|--------|-------------|
| `Steps/wwdc26.mp4` (908K) | `public/featured/appreciation.mp4` |
| `Assets.xcassets/Memoji/Memoji_{Liam,Hieu,Osca,Marco,Emma,Kenji,Priya,Yuki}.imageset/*.png` | `public/reviews/memoji/Memoji_*.png` |
| `Assets.xcassets/laurel/laurel-{left,right}.imageset/*.svg` | `public/reviews/laurel-left.svg`, `laurel-right.svg` |

## Data (`lib/constants.ts`)

Add `REVIEWS` array — 8 verbatim App Store reviews:

| title | author | country | image |
|-------|--------|---------|-------|
| Exactly what I was looking for | eric_geee | US | Memoji_Liam |
| Made iOS 10x Better for Me | daddy_jasveer | IN | Memoji_Hieu |
| Does one thing and it does it GREAT | Leavism | US | Memoji_Osca |
| Great app for daily activity tracking | Abdulrahman | SA | Memoji_Marco |
| Dad loves it | JustSuperHuman | US | Memoji_Emma |
| Great app | Đinh Văn Quý | VN | Memoji_Kenji |
| Awesome App | haresh1234 | IN | Memoji_Priya |
| Nice app | Al3c18 | IT | Memoji_Yuki |

Bodies are the verbatim review text from `Steps/Paywall/ReviewsView.swift`.

**Move** `PRESS_ARTICLES` from `app/press/page.tsx` into `lib/constants.ts` so the
press page and the new Featured section share one source. The press page imports it.

## Components

### `components/landing-featured.tsx` — "FEATURED IN"
- Looping `<video autoplay muted loop playsInline>` (`/featured/appreciation.mp4`)
  in a dark rounded card, with `APPRECIATION` / *starring Erick the Architect* caption.
- Press strip below: the `PRESS_ARTICLES` outlets as linked text badges (no logo
  image files exist), styled like the existing press-page cards.

### `components/landing-reviews.tsx` — "LOVED BY THOUSANDS"
- Title flanked by laurel SVGs, CSS-tinted to match text color (`img` + color via mask, or inline svg).
- Responsive grid (1 / 2 / 3 cols) of review cards: 5 amber stars, bold title,
  body, author + flag emoji, 40px memoji avatar (`next/image`).
- A small `flagEmoji(countryCode)` helper ports the iOS regional-indicator logic.
- Styled to match existing landing sections (neutral card + border, `#ED772F`
  accent, dark-mode aware) — not the iOS dark gradient.

## Wiring (`app/page.tsx`)

- `<LandingFeatured />` after `<LandingScreenshots />`.
- Replace `<LandingTestimonial />` with `<LandingReviews />` (between Privacy and CTA).
- Delete `components/landing-testimonial.tsx` and its `index.ts` export; add the two
  new component exports to `components/index.ts`.

## Success criteria

- `next build` / typecheck passes.
- Landing page shows the autoplay-looping video + press strip, and an 8-card review grid.
- Press page still renders (now importing `PRESS_ARTICLES` from constants).
- No leftover references to `LandingTestimonial`.
