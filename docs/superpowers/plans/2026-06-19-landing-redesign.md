# Landing Page Redesign ("Quiet Precision") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Steps landing page into a refined-minimal ("quiet precision") system — replacing emoji with line icons, restructuring sections, and adding 4 feature spotlights — so it reads as premium and distinctive rather than template-y.

**Architecture:** Next.js 16 App Router with React 19 server components for all sections plus one small client `Reveal` wrapper for scroll-in animation. Data (spotlights, feature grid, records, workouts) lives in `lib/constants.ts` as plain objects keyed to a lucide icon name; a single `lib/landing-icons.ts` map resolves those names to `lucide-react` components, guarded by a unit test. `app/page.tsx` composes the sections in the new order.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, `lucide-react` (new), Vitest (node env).

## Global Constraints

- `lucide-react` is the ONLY new dependency. No animation library — scroll-reveal is CSS + a tiny IntersectionObserver client component.
- Keep all existing content, copy values, links, and assets (screenshots, `appreciation.mp4`, reviews, press). Light hero-copy edits only.
- Preserve every `data-fast-goal="open-app-store"` attribute and the App Store URL `SITE_CONFIG.appStoreUrl`.
- Preserve dark mode in every section and accessibility (alt text, aria-labels, semantic headings).
- Orange `#ED772F` is a RARE accent (one highlighted word, the CTA, an active state). Base palette: near-black `#171717` / neutral white; no broad orange/amber gradient washes (one subtle use allowed in Yearly Insights).
- Spotlight images live at `public/spotlights/{route-3d,ai-coach,stepboard,apple-watch}.png`. Missing files must NOT break the build — the bordered media frame renders as a neutral placeholder.
- No plan/spec/finding references in code comments or filenames (no "phase", "task N", "F1", etc.). Comments explain the why, not the origin.
- Navbar (`landing-navbar.tsx`) and Footer (`landing-footer.tsx`) already match the minimal aesthetic — leave them unchanged to keep scope tight.

---

## File Structure

**Create:**
- `lib/landing-icons.ts` — maps lucide icon-name strings → `lucide-react` components; exports `LANDING_ICONS`, `LandingIconName`, `getLandingIcon`.
- `lib/landing-icons.test.ts` — integrity test: every data `icon` key resolves to a component.
- `components/landing-reveal.tsx` — `"use client"` IntersectionObserver fade/translate wrapper.
- `components/landing-trust.tsx` — social-proof band (rating + press + Appreciation video). Replaces `landing-featured.tsx`.
- `components/landing-spotlights.tsx` — 4 alternating hero-feature blocks.
- `components/landing-feature-grid.tsx` — consolidated "everything else": feature cards + personal records + workout types. Replaces `landing-features.tsx`, `landing-personal-records.tsx`, `landing-workouts.tsx`.

**Modify:**
- `lib/constants.ts` — add `SPOTLIGHTS`, `FEATURE_GRID`; convert `PERSONAL_RECORDS`/`WORKOUT_TYPES` `.icon` from emoji to lucide keys; remove `FEATURES`.
- `app/globals.css` — add `scrollbar-hide` utility.
- `components/landing-hero.tsx`, `landing-screenshots.tsx`, `landing-yearly-insights.tsx`, `landing-privacy.tsx`, `landing-reviews.tsx`, `landing-cta.tsx` — restyle in place (export names unchanged).
- `components/index.ts` — swap exports.
- `app/page.tsx` — new section order.

**Delete (in the task that replaces them):**
- `components/landing-featured.tsx`, `landing-features.tsx`, `landing-personal-records.tsx`, `landing-workouts.tsx`.

---

## Task 1: Foundation — dependency, icon map, Reveal, constants, tokens

**Files:**
- Modify: `package.json` (via `npm install`)
- Create: `lib/landing-icons.ts`
- Create: `lib/landing-icons.test.ts`
- Create: `components/landing-reveal.tsx`
- Modify: `lib/constants.ts`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: `LANDING_ICONS` (record of name→`LucideIcon`), `LandingIconName` (union of keys), `getLandingIcon(name: LandingIconName): LucideIcon` from `lib/landing-icons.ts`.
- Produces: `SPOTLIGHTS` and `FEATURE_GRID` from `lib/constants.ts` (shapes below).
- Produces: `Reveal` component `({ children, className?, delay? }) => JSX` from `components/landing-reveal.tsx`.

`SPOTLIGHTS` item shape: `{ key: string; eyebrow: string; title: string; description: string; media: string; icon: LandingIconName }`.
`FEATURE_GRID` item shape: `{ icon: LandingIconName; title: string; description: string }`.

- [ ] **Step 1: Write the failing test**

Create `lib/landing-icons.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { LANDING_ICONS } from "./landing-icons";
import { SPOTLIGHTS, FEATURE_GRID } from "./constants";

describe("landing icon integrity", () => {
  const keys = new Set(Object.keys(LANDING_ICONS));
  const cases: Array<[string, ReadonlyArray<{ icon: string }>]> = [
    ["SPOTLIGHTS", SPOTLIGHTS],
    ["FEATURE_GRID", FEATURE_GRID],
  ];

  for (const [name, list] of cases) {
    it(`${name}: every icon key resolves to a lucide component`, () => {
      for (const item of list) {
        expect(
          keys.has(item.icon),
          `${name} icon "${item.icon}" missing from LANDING_ICONS`,
        ).toBe(true);
      }
    });
  }

  it("every mapped icon is a renderable component", () => {
    for (const Icon of Object.values(LANDING_ICONS)) {
      const t = typeof Icon;
      expect(t === "function" || t === "object").toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run lib/landing-icons.test.ts`
Expected: FAIL — cannot resolve `./landing-icons` and `SPOTLIGHTS`/`FEATURE_GRID` not exported.

- [ ] **Step 3: Install lucide-react**

Run: `npm install lucide-react`
Expected: adds `lucide-react` to `package.json` dependencies, exits 0.

- [ ] **Step 4: Create the icon map**

Create `lib/landing-icons.ts`:

```ts
import {
  Orbit,
  Bot,
  Trophy,
  Watch,
  LineChart,
  Flame,
  LayoutGrid,
  Lock,
  Route,
  HeartPulse,
  Zap,
  Sunrise,
  Mountain,
  Timer,
  Ruler,
  Moon,
  Footprints,
  PersonStanding,
  Bike,
  Waves,
  Dumbbell,
  Flower2,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

// Single source of truth: every icon name referenced in lib/constants.ts data
// must appear here so the data stays renderable. Guarded by landing-icons.test.ts.
export const LANDING_ICONS = {
  Orbit,
  Bot,
  Trophy,
  Watch,
  LineChart,
  Flame,
  LayoutGrid,
  Lock,
  Route,
  HeartPulse,
  Zap,
  Sunrise,
  Mountain,
  Timer,
  Ruler,
  Moon,
  Footprints,
  PersonStanding,
  Bike,
  Waves,
  Dumbbell,
  Flower2,
  CircleDot,
} satisfies Record<string, LucideIcon>;

export type LandingIconName = keyof typeof LANDING_ICONS;

export function getLandingIcon(name: LandingIconName): LucideIcon {
  return LANDING_ICONS[name];
}
```

- [ ] **Step 5: Add `SPOTLIGHTS` and `FEATURE_GRID` to constants**

In `lib/constants.ts`, add these exports (after the existing `WORKOUT_TYPES` block; leave `FEATURES`, `PERSONAL_RECORDS`, `WORKOUT_TYPES` untouched in this task). Copy is sourced from the mobile app changelog:

```ts
import type { LandingIconName } from "./landing-icons";

// Hero feature spotlights. `media` points at a caption-free asset in
// public/spotlights/; a missing file degrades to the neutral media frame.
export const SPOTLIGHTS: ReadonlyArray<{
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  media: string;
  icon: LandingIconName;
}> = [
  {
    key: "route-3d",
    eyebrow: "New in 1.27",
    title: "3D Route Playback",
    description:
      "Replay your activity routes with a cinematic 3D follow camera. Pick your map style and adjust the playback speed to relive every workout your way.",
    media: "/spotlights/route-3d.png",
    icon: "Orbit",
  },
  {
    key: "ai-coach",
    eyebrow: "Apple Intelligence",
    title: "AI Coach",
    description:
      "Personalized feedback on every workout, plus chat about any activity — powered by on-device Apple Intelligence.",
    media: "/spotlights/ai-coach.png",
    icon: "Bot",
  },
  {
    key: "stepboard",
    eyebrow: "Compete with friends",
    title: "Stepboard",
    description:
      "Daily leaderboards with friends. Create private boards, invite with a getsteps.app/join link, and rank by steps or distance.",
    media: "/spotlights/stepboard.png",
    icon: "Trophy",
  },
  {
    key: "apple-watch",
    eyebrow: "On your wrist",
    title: "Apple Watch Workouts",
    description:
      "Start and track workouts from your wrist with GPS routes, live metrics, and real-time mirroring to your phone.",
    media: "/spotlights/apple-watch.png",
    icon: "Watch",
  },
];

// Secondary features ("everything else"). Spotlighted features, Yearly Insights
// (own section), records and workout types (own sub-blocks) are intentionally
// excluded to avoid duplication.
export const FEATURE_GRID: ReadonlyArray<{
  icon: LandingIconName;
  title: string;
  description: string;
}> = [
  { icon: "LineChart", title: "Beautiful Charts", description: "Hourly, weekly & monthly views" },
  { icon: "Flame", title: "Goals & Streaks", description: "Stay motivated every day" },
  { icon: "LayoutGrid", title: "Home Widgets", description: "10 widgets for your home screen" },
  { icon: "Lock", title: "App Lock", description: "Block apps until you hit your goal" },
  { icon: "Route", title: "GPX Export", description: "Export & share your workout routes" },
  { icon: "HeartPulse", title: "Apple Health Sync", description: "Accurate, automatic tracking" },
];
```

- [ ] **Step 6: Create the Reveal component**

Create `components/landing-reveal.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades + lifts children into view on first scroll intersection. Respects
// prefers-reduced-motion and degrades to visible when IntersectionObserver
// is unavailable (e.g. SSR snapshot before hydration).
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 7: Add the `scrollbar-hide` utility**

In `app/globals.css`, append after the `@plugin` line block (before or after `:root` is fine):

```css
@utility scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
```

- [ ] **Step 8: Run tests + typecheck**

Run: `npx vitest run lib/landing-icons.test.ts && npx tsc --noEmit`
Expected: tests PASS; tsc reports no errors. (Existing `landing-features.tsx` etc. still compile — their data is untouched this task.)

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json lib/landing-icons.ts lib/landing-icons.test.ts components/landing-reveal.tsx lib/constants.ts app/globals.css
git commit -m "feat(landing): add icon map, reveal, spotlight/feature data, scrollbar utility"
```

---

## Task 2: Hero rewrite

**Files:**
- Modify: `components/landing-hero.tsx` (full replace)

**Interfaces:**
- Consumes: `SITE_CONFIG` (`lib/constants.ts`), `Reveal` (Task 1).
- Produces: `LandingHero` (unchanged export name).

- [ ] **Step 1: Replace the hero**

Replace the entire contents of `components/landing-hero.tsx`:

```tsx
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <Reveal>
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-7 rounded-[22px] overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/app_icon.png"
              alt="Steps app icon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400 mb-4">
            {SITE_CONFIG.name}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-balance max-w-3xl text-neutral-900 dark:text-white">
            Every step counts.{" "}
            <span className="text-[#ED772F]">Every milestone shows.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed text-pretty">
            A beautifully simple pedometer and workout tracker for iPhone and
            Apple Watch — powered by Apple Health.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href={SITE_CONFIG.appStoreUrl}
              data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-12 w-auto hidden dark:block"
              />
            </a>
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span>
                <span className="tabular-nums">{SITE_CONFIG.appStoreRating}</span>{" "}
                on the App Store
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>Free download</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Verify in browser**

Start the dev server (`preview_start` / `npm run dev`), load `/`, and take a screenshot of the hero in light and dark mode. Expected: value-prop H1 with one orange phrase, app name as small eyebrow, badge + inline rating, calm spacing. Check console for no errors.

- [ ] **Step 4: Commit**

```bash
git add components/landing-hero.tsx
git commit -m "feat(landing): rebuild hero with value-prop headline"
```

---

## Task 3: Screenshots refine

**Files:**
- Modify: `components/landing-screenshots.tsx`

**Interfaces:**
- Consumes: `SCREENSHOTS` (`lib/constants.ts`). Produces: `LandingScreenshots` (unchanged).

- [ ] **Step 1: Soften the device frames**

In `components/landing-screenshots.tsx`, change the phone frame wrapper (currently `border-[8px] border-neutral-100 dark:border-neutral-800 ... shadow-2xl`) to a lighter frame and softer shadow. Replace the inner frame `div` className:

```tsx
              <div className="relative w-[280px] md:w-[320px] aspect-[1170/2532] rounded-[2.5rem] overflow-hidden border-[7px] border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/40">
```

Leave the rest of the file (edge fades, `scrollbar-hide`, snap behavior, alt text) unchanged. `scrollbar-hide` now works because the utility was added in Task 1.

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Verify in browser**

Reload `/`, screenshot the carousel. Expected: thinner bezel, softer shadow, no visible scrollbar under the row.

- [ ] **Step 4: Commit**

```bash
git add components/landing-screenshots.tsx
git commit -m "refine(landing): soften screenshot device frames"
```

---

## Task 4: Trust strip (replaces Featured)

**Files:**
- Create: `components/landing-trust.tsx`
- Delete: `components/landing-featured.tsx`
- Modify: `components/index.ts`, `app/page.tsx`

**Interfaces:**
- Consumes: `PRESS_ARTICLES`, `SITE_CONFIG` (`lib/constants.ts`), `Reveal` (Task 1).
- Produces: `LandingTrust` (replaces `LandingFeatured`).

- [ ] **Step 1: Create the trust strip**

Create `components/landing-trust.tsx`:

```tsx
import { PRESS_ARTICLES, SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingTrust() {
  return (
    <section className="py-14 md:py-20 border-y border-neutral-200/70 dark:border-white/5 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span className="font-medium">
                <span className="tabular-nums">{SITE_CONFIG.appStoreRating}</span>{" "}
                rating
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>Loved by thousands of walkers</span>
            </div>

            <p className="mt-10 text-xs font-medium tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
              FEATURED IN
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {PRESS_ARTICLES.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 dark:border-white/10 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:border-[#ED772F]/50 hover:text-[#ED772F] transition-colors"
                >
                  {article.outlet}
                </a>
              ))}
            </div>

            <a
              href="https://www.youtube.com/watch?v=hx-JzOCNBbM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Appreciation, starring Erick the Architect, on YouTube"
              className="mt-10 relative block w-full max-w-sm rounded-3xl overflow-hidden bg-black shadow-sm"
            >
              <video
                className="w-full aspect-square object-cover"
                src="/featured/appreciation.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 pb-5 pt-10 bg-gradient-to-t from-black/80 to-transparent text-center">
                <p className="text-sm font-semibold tracking-[0.3em] text-white/80">
                  APPRECIATION
                </p>
                <p className="text-xs font-medium text-white/50 mt-1">
                  starring Erick the Architect
                </p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Swap the export**

In `components/index.ts`, replace the line
`export { LandingFeatured } from "./landing-featured";`
with
`export { LandingTrust } from "./landing-trust";`

- [ ] **Step 3: Swap in the page**

In `app/page.tsx`, replace `LandingFeatured` with `LandingTrust` in both the import block and the JSX (`<LandingFeatured />` → `<LandingTrust />`).

- [ ] **Step 4: Delete the old component**

Run: `git rm components/landing-featured.tsx`

- [ ] **Step 5: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors (no remaining references to `LandingFeatured`).

- [ ] **Step 6: Verify in browser**

Reload `/`, screenshot the trust band. Expected: one quiet band with rating line, "FEATURED IN" press pills, and the Appreciation video — no full-black section. Dark mode intact.

- [ ] **Step 7: Commit**

```bash
git add components/landing-trust.tsx components/index.ts app/page.tsx
git commit -m "feat(landing): merge featured + social proof into trust strip"
```

---

## Task 5: Feature spotlights

**Files:**
- Create: `components/landing-spotlights.tsx`
- Modify: `components/index.ts`, `app/page.tsx`

**Interfaces:**
- Consumes: `SPOTLIGHTS` (Task 1), `getLandingIcon` (Task 1), `Reveal` (Task 1).
- Produces: `LandingSpotlights`.

- [ ] **Step 1: Create the spotlights section**

Create `components/landing-spotlights.tsx`:

```tsx
import Image from "next/image";
import { SPOTLIGHTS } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { Reveal } from "./landing-reveal";

function SpotlightMedia({ src, title }: { src: string; title: string }) {
  const isVideo = src.endsWith(".mp4");
  return (
    <div className="relative mx-auto w-[240px] md:w-[280px] aspect-[1170/2532] rounded-[2.25rem] overflow-hidden border-[7px] border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/40">
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        <Image
          src={src}
          alt={`${title} shown in the Steps app`}
          fill
          className="object-cover"
          sizes="280px"
        />
      )}
    </div>
  );
}

export function LandingSpotlights() {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-4 flex flex-col gap-20 md:gap-28">
        {SPOTLIGHTS.map((item, index) => {
          const Icon = getLandingIcon(item.icon);
          const reversed = index % 2 === 1;
          return (
            <Reveal key={item.key}>
              <div
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex-1 max-w-md text-center md:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {item.eyebrow}
                  </span>
                  <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <SpotlightMedia src={item.media} title={item.title} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Export it**

In `components/index.ts`, add after the `LandingTrust` line:
`export { LandingSpotlights } from "./landing-spotlights";`

- [ ] **Step 3: Add to the page**

In `app/page.tsx`, add `LandingSpotlights` to the import block and render `<LandingSpotlights />` immediately after `<LandingTrust />`.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Verify in browser**

Reload `/`. Since `public/spotlights/*` assets are not yet provided, the media frames render as neutral placeholders — confirm the page does NOT error (check console/network: image 404s are acceptable, no runtime crash). Confirm 4 alternating blocks (3D Route Playback first), eyebrow pill with line icon, copy reads correctly. Screenshot desktop + mobile widths.

- [ ] **Step 6: Commit**

```bash
git add components/landing-spotlights.tsx components/index.ts app/page.tsx
git commit -m "feat(landing): add alternating feature spotlights"
```

---

## Task 6: Yearly Insights restyle

**Files:**
- Modify: `components/landing-yearly-insights.tsx` (full replace)

**Interfaces:**
- Consumes: `Reveal` (Task 1), `lucide-react` icons (direct import). Produces: `LandingYearlyInsights` (unchanged).

- [ ] **Step 1: Replace the section**

Replace the entire contents of `components/landing-yearly-insights.tsx`:

```tsx
import { Receipt, Ticket, Stamp } from "lucide-react";
import { Reveal } from "./landing-reveal";

const CARDS = [
  {
    Icon: Receipt,
    title: "Fitness Receipt",
    description: "Your year's stats as a personalized receipt",
  },
  {
    Icon: Ticket,
    title: "Achievement Tickets",
    description: "Milestone achievements as flight tickets",
  },
  {
    Icon: Stamp,
    title: "Passport Stamps",
    description: "Collect a stamp for every milestone reached",
  },
] as const;

export function LandingYearlyInsights() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* The single allowed accent wash on the page. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ED772F]/[0.06] to-transparent dark:from-[#ED772F]/[0.04]" />

      <div className="container mx-auto px-4 relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block rounded-full border border-[#ED772F]/30 px-3 py-1 text-xs font-medium text-[#ED772F] mb-4">
              Steps Pro
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance mb-3 text-neutral-900 dark:text-white">
              Your Year in Review
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-pretty">
              Your fitness journey turned into beautiful, shareable
              visualizations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {CARDS.map(({ Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 text-center">
                <Icon
                  className="mx-auto h-6 w-6 text-neutral-700 dark:text-neutral-300"
                  aria-hidden
                />
                <h3 className="mt-4 font-medium text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Verify in browser**

Reload `/`, screenshot the Yearly Insights section. Expected: line icons (no emoji), "Steps Pro" outline badge, one subtle orange wash, hairline cards. Dark mode intact.

- [ ] **Step 4: Commit**

```bash
git add components/landing-yearly-insights.tsx
git commit -m "refine(landing): restyle yearly insights with line icons"
```

---

## Task 7: Feature grid (consolidates features + records + workouts)

**Files:**
- Create: `components/landing-feature-grid.tsx`
- Modify: `lib/constants.ts`, `lib/landing-icons.test.ts`, `components/index.ts`, `app/page.tsx`
- Delete: `components/landing-features.tsx`, `landing-personal-records.tsx`, `landing-workouts.tsx`

**Interfaces:**
- Consumes: `FEATURE_GRID` (Task 1), `PERSONAL_RECORDS`, `WORKOUT_TYPES` (re-shaped here), `getLandingIcon`, `Reveal`.
- Produces: `LandingFeatureGrid` (replaces `LandingFeatures`, `LandingPersonalRecords`, `LandingWorkouts`).

- [ ] **Step 1: Extend the integrity test (failing)**

In `lib/landing-icons.test.ts`, update the imports and `cases` array to also cover the re-shaped records/workouts:

```ts
import { SPOTLIGHTS, FEATURE_GRID, PERSONAL_RECORDS, WORKOUT_TYPES } from "./constants";
```

```ts
  const cases: Array<[string, ReadonlyArray<{ icon: string }>]> = [
    ["SPOTLIGHTS", SPOTLIGHTS],
    ["FEATURE_GRID", FEATURE_GRID],
    ["PERSONAL_RECORDS", PERSONAL_RECORDS],
    ["WORKOUT_TYPES", WORKOUT_TYPES],
  ];
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run lib/landing-icons.test.ts`
Expected: FAIL — `PERSONAL_RECORDS`/`WORKOUT_TYPES` icons are still emoji, not keys in `LANDING_ICONS`.

- [ ] **Step 3: Re-shape `PERSONAL_RECORDS` and `WORKOUT_TYPES`; remove `FEATURES`**

In `lib/constants.ts`: delete the entire `FEATURES` export. Replace the `PERSONAL_RECORDS` and `WORKOUT_TYPES` blocks with lucide icon keys:

```ts
export const PERSONAL_RECORDS = [
  { icon: "Zap", title: "Fastest Pace" },
  { icon: "Flame", title: "Most Calories" },
  { icon: "Sunrise", title: "Earliest Start" },
  { icon: "Mountain", title: "Most Elevation" },
  { icon: "Timer", title: "Longest Duration" },
  { icon: "Ruler", title: "Farthest Distance" },
  { icon: "Moon", title: "Latest Night" },
  { icon: "HeartPulse", title: "Max Heart Rate" },
] as const;

export const WORKOUT_TYPES = [
  { icon: "Footprints", name: "Running" },
  { icon: "PersonStanding", name: "Walking" },
  { icon: "Bike", name: "Cycling" },
  { icon: "Mountain", name: "Hiking" },
  { icon: "Waves", name: "Swimming" },
  { icon: "Dumbbell", name: "Strength" },
  { icon: "Flower2", name: "Yoga" },
  { icon: "CircleDot", name: "Pickleball" },
] as const;
```

(lucide has no exact running/pickleball glyphs; `Footprints` and `CircleDot` are accepted approximations.)

- [ ] **Step 4: Create the feature grid**

Create `components/landing-feature-grid.tsx`:

```tsx
import Image from "next/image";
import { FEATURE_GRID, PERSONAL_RECORDS, WORKOUT_TYPES } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { Reveal } from "./landing-reveal";

export function LandingFeatureGrid() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
              Everything else you&apos;d want
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-pretty">
              Built natively for iPhone and Apple Watch, powered by Apple Health.
            </p>
            <div className="mt-5 flex justify-center">
              <Image
                src="/Apple_Health_badge.svg"
                alt="Works with Apple Health"
                width={123}
                height={34}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </Reveal>

        {/* Secondary features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {FEATURE_GRID.map((feature, index) => {
            const Icon = getLandingIcon(feature.icon);
            return (
              <Reveal key={feature.title} delay={index * 40}>
                <div className="h-full rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 md:p-6">
                  <Icon
                    className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
                    aria-hidden
                  />
                  <h3 className="mt-4 font-medium text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Personal records */}
        <Reveal>
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-center text-sm font-medium tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              <span className="tabular-nums">8</span> PERSONAL RECORDS
            </h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_RECORDS.map((record) => {
                const Icon = getLandingIcon(record.icon);
                return (
                  <div
                    key={record.title}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 px-3.5 py-3"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400"
                      aria-hidden
                    />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {record.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Workout types */}
        <Reveal>
          <div className="mt-14 max-w-2xl mx-auto text-center">
            <h3 className="text-sm font-medium tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              <span className="tabular-nums">23+</span> WORKOUT TYPES
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {WORKOUT_TYPES.map((workout) => {
                const Icon = getLandingIcon(workout.icon);
                return (
                  <span
                    key={workout.name}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3.5 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <Icon
                      className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400"
                      aria-hidden
                    />
                    {workout.name}
                  </span>
                );
              })}
              <span className="inline-flex items-center rounded-full bg-[#ED772F]/10 px-3.5 py-1.5 text-sm font-medium text-[#ED772F]">
                +15 more
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Swap exports**

In `components/index.ts`, remove the three lines exporting `LandingFeatures`, `LandingPersonalRecords`, `LandingWorkouts`, and add:
`export { LandingFeatureGrid } from "./landing-feature-grid";`

- [ ] **Step 6: Update the page order**

In `app/page.tsx`: remove `LandingFeatures`, `LandingPersonalRecords`, `LandingWorkouts` from imports and JSX; import `LandingFeatureGrid`; render `<LandingFeatureGrid />` immediately AFTER `<LandingYearlyInsights />` (and before `<LandingPrivacy />`).

- [ ] **Step 7: Delete old components**

Run: `git rm components/landing-features.tsx components/landing-personal-records.tsx components/landing-workouts.tsx`

- [ ] **Step 8: Run tests + typecheck**

Run: `npx vitest run lib/landing-icons.test.ts && npx tsc --noEmit`
Expected: tests PASS (all 4 datasets validated); tsc clean (no references to removed exports/`FEATURES`).

- [ ] **Step 9: Verify in browser**

Reload `/`, screenshot the consolidated section. Expected: one section with 6 line-icon feature cards, an 8-item Personal Records sub-grid, and a workout-type chip row with "+15 more" (the only orange in this section). No emoji anywhere. Dark mode intact.

- [ ] **Step 10: Commit**

```bash
git add lib/constants.ts lib/landing-icons.test.ts components/landing-feature-grid.tsx components/index.ts app/page.tsx
git commit -m "feat(landing): consolidate features, records, workouts into line-icon grid"
```

---

## Task 8: Privacy, Reviews, CTA restyle

**Files:**
- Modify: `components/landing-privacy.tsx`, `components/landing-reviews.tsx`, `components/landing-cta.tsx` (full replaces)

**Interfaces:**
- Consumes: `REVIEWS`, `SITE_CONFIG`, `Reveal`, `lucide-react`. Produces: same export names.

- [ ] **Step 1: Replace privacy**

Replace the entire contents of `components/landing-privacy.tsx`:

```tsx
import { ShieldCheck } from "lucide-react";
import { Reveal } from "./landing-reveal";

export function LandingPrivacy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-8">
            <ShieldCheck
              className="mx-auto h-7 w-7 text-neutral-700 dark:text-neutral-300"
              aria-hidden
            />
            <h3 className="mt-4 text-xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
              Your data stays on your device by default
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
              Health data is stored locally and accessed securely through Apple
              HealthKit with your permission. If you opt into the Stepboard
              leaderboard, selected metrics are synced to power the rankings.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace reviews**

Replace the entire contents of `components/landing-reviews.tsx`:

```tsx
import Image from "next/image";
import { REVIEWS } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

// Convert an ISO 3166-1 alpha-2 country code to its flag emoji.
function flagEmoji(countryCode: string): string {
  const base = 0x1f1e6;
  const offset = 0x41;
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(base + char.charCodeAt(0) - offset))
    .join("");
}

function Laurel({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className="block h-7 shrink-0 text-neutral-400 dark:text-neutral-500"
      style={{
        width: "1.05rem",
        backgroundColor: "currentColor",
        maskImage: `url(/reviews/laurel-${side}.svg)`,
        WebkitMaskImage: `url(/reviews/laurel-${side}.svg)`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

export function LandingReviews() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Laurel side="left" />
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-neutral-600 dark:text-neutral-300">
            LOVED BY THOUSANDS
          </h2>
          <Laurel side="right" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.title} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
                <div className="text-amber-500 mb-3" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  {review.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 flex-1">
                  {review.body}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {review.author}
                  </span>
                  <span className="text-base" aria-hidden>
                    {flagEmoji(review.country)}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Replace CTA**

Replace the entire contents of `components/landing-cta.tsx`:

```tsx
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-balance mb-7 text-neutral-900 dark:text-white">
              Ready to track every step?
            </h2>
            <a
              href={SITE_CONFIG.appStoreUrl}
              data-fast-goal="open-app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5 transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-14 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-14 w-auto hidden dark:block"
              />
            </a>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Free forever · Pro features available
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Verify in browser**

Reload `/`, screenshot Privacy, Reviews, and CTA. Expected: hairline cards, line-icon shield, calmer type weights, laurels preserved. Confirm both CTA badge link and `data-fast-goal` attribute present (inspect element). Dark mode intact.

- [ ] **Step 6: Commit**

```bash
git add components/landing-privacy.tsx components/landing-reviews.tsx components/landing-cta.tsx
git commit -m "refine(landing): restyle privacy, reviews, and CTA"
```

---

## Task 9: Integration & QA

**Files:**
- Verify/finalize: `app/page.tsx`
- No new code unless QA surfaces a defect.

**Interfaces:** none (composition + verification only).

- [ ] **Step 1: Confirm final page composition**

Confirm `app/page.tsx` matches this exact composition (order matters):

```tsx
import {
  LandingNavbar,
  LandingHero,
  LandingScreenshots,
  LandingTrust,
  LandingSpotlights,
  LandingYearlyInsights,
  LandingFeatureGrid,
  LandingPrivacy,
  LandingReviews,
  LandingCTA,
  LandingFooter,
} from "@/components";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden selection:bg-orange-500/30">
        <LandingHero />
        <LandingScreenshots />
        <LandingTrust />
        <LandingSpotlights />
        <LandingYearlyInsights />
        <LandingFeatureGrid />
        <LandingPrivacy />
        <LandingReviews />
        <LandingCTA />
      </main>
      <LandingFooter />
    </>
  );
}
```

- [ ] **Step 2: Confirm `components/index.ts`**

It should export exactly: `LandingNavbar`, `LandingHero`, `LandingScreenshots`, `LandingTrust`, `LandingSpotlights`, `LandingYearlyInsights`, `LandingFeatureGrid`, `LandingPrivacy`, `LandingReviews`, `LandingCTA`, `LandingFooter`. No references to removed components.

- [ ] **Step 3: Lint, test, build**

Run: `npm run lint && npm run test && npm run build`
Expected: lint clean, all tests pass, production build succeeds with no type errors.

- [ ] **Step 4: Cross-cutting browser QA**

With the dev server running, verify on `/`:
- Light + dark mode across all sections (`preview_resize` / OS theme).
- Mobile width (~390px) and desktop (~1280px): spotlights stack, grids reflow, no overflow.
- Reduced motion: reveals show content (no stuck-invisible sections).
- Every App Store CTA still carries `data-fast-goal="open-app-store"` (hero, navbar, CTA) — inspect each.
- Press links, join/YouTube links, and review images all load.
- Console has no errors; only acceptable network 404s are the not-yet-provided `public/spotlights/*` images.

Capture final desktop + mobile screenshots (light + dark) as proof.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore(landing): finalize section order and redesign QA"
```

---

## Notes for the implementer

- **Spotlight assets:** the user provides caption-free images at `public/spotlights/{route-3d,ai-coach,stepboard,apple-watch}.png`. If `route-3d` is delivered as a video, change `SPOTLIGHTS[0].media` to `/spotlights/route-3d.mp4` — `SpotlightMedia` already branches on `.mp4`.
- **Server vs client:** only `landing-reveal.tsx` is `"use client"`. All sections stay server components and may render `<Reveal>` and lucide icons directly.
- **Font:** the page keeps the existing body font. A premium typeface swap is a possible follow-up but is intentionally out of scope here.
