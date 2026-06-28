# Pro Upsell CTA on Tool + Blog Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a secondary "Get Pro" web-checkout CTA to tool/calculator pages and blog posts without disturbing the primary App Store free-download funnel.

**Architecture:** A single self-contained `ProUpsell` component (warm lead-in + outlined secondary button → `/get-pro`) is dropped into the existing `ToolAppCta` card on tool pages. A small `BlogProCta` card wraps `ProUpsell` with a heading and is rendered in the blog post page. The existing `/get-pro` redirect route and RevenueCat config are untouched.

**Tech Stack:** Next.js (App Router, React Server Components), TypeScript, Tailwind CSS, Vitest + Testing Library (jsdom).

## Global Constraints

- CTA links point at `/get-pro` (never the raw RevenueCat URL) — `/get-pro` already 307-redirects to `SITE_CONFIG.proWebCheckoutUrl`.
- Pro CTA conversion goal attribute: `data-fast-goal="get-pro"` (App Store CTA keeps `data-fast-goal="open-app-store"`).
- App Store "download free" CTA stays the visual primary; Pro CTA is the secondary, less-prominent option.
- Button copy (verbatim): `Get Pro — 20% off the App Store`. Lead-in copy (verbatim): `Already using Steps?`
- Brand orange: `#ED772F`. Match existing dark-mode conventions (`dark:` variants).
- Blog CTA card contains the Pro CTA only — no App Store badge.
- Do NOT modify `ToolStickyCta` (mobile bar stays App-Store-only), the `/get-pro` route, or the landing page.
- Run tests with `npm test` (alias for `vitest run`); run a single file with `npx vitest run <path>`.

---

### Task 1: `ProUpsell` component

**Files:**
- Create: `components/pro-upsell.tsx`
- Test: `components/pro-upsell.test.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces: `export function ProUpsell(): React.JSX.Element` — no props. Renders the lead-in text `Already using Steps?` followed by an anchor (`<a href="/get-pro" data-fast-goal="get-pro">`) whose accessible name contains `Get Pro — 20% off the App Store`.

- [ ] **Step 1: Write the failing test**

```tsx
// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProUpsell } from "./pro-upsell";

afterEach(cleanup);

describe("ProUpsell", () => {
  it("links to /get-pro and fires the get-pro conversion goal", () => {
    render(<ProUpsell />);
    const link = screen.getByRole("link", { name: /get pro/i });
    expect(link.getAttribute("href")).toBe("/get-pro");
    expect(link.getAttribute("data-fast-goal")).toBe("get-pro");
  });

  it("shows the warm lead-in and discount copy", () => {
    render(<ProUpsell />);
    expect(screen.getByText("Already using Steps?")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /20% off the App Store/i }),
    ).toBeTruthy();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/pro-upsell.test.tsx`
Expected: FAIL — cannot resolve `./pro-upsell` (module not found).

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/pro-upsell.tsx

/**
 * Secondary, warm-audience upsell to the web2app Pro checkout. Rendered
 * alongside (never instead of) the primary App Store free-download CTA, so the
 * proven download funnel stays the primary action. Links to /get-pro, which
 * redirects to the RevenueCat web checkout.
 */
export function ProUpsell() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        Already using Steps?
      </span>
      <a
        href="/get-pro"
        data-fast-goal="get-pro"
        className="inline-block rounded-full border border-[#ED772F] text-[#ED772F] text-sm font-semibold px-4 py-2 transition-colors hover:bg-[#ED772F]/10 active:scale-95"
      >
        Get Pro — 20% off the App Store
      </a>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/pro-upsell.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add components/pro-upsell.tsx components/pro-upsell.test.tsx
git commit -m "feat: add ProUpsell secondary web-checkout CTA"
```

---

### Task 2: Wire `ProUpsell` into tool pages via `ToolAppCta`

**Files:**
- Modify: `components/tool-app-cta.tsx` (the `ToolAppCta` function only; leave `AppStoreBadge` and `ToolStickyCta` unchanged)
- Test: `components/tool-app-cta.test.tsx`

**Interfaces:**
- Consumes: `ProUpsell` from `./pro-upsell` (Task 1); `SITE_CONFIG` from `@/lib/constants` (existing).
- Produces: `ToolAppCta` renders both the existing App Store badge (`href = SITE_CONFIG.appStoreUrl`, `data-fast-goal="open-app-store"`) and a `ProUpsell` (`href="/get-pro"`).

- [ ] **Step 1: Write the failing test**

```tsx
// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ToolAppCta } from "./tool-app-cta";
import { SITE_CONFIG } from "@/lib/constants";

afterEach(cleanup);

describe("ToolAppCta", () => {
  it("keeps the App Store CTA primary and adds the secondary Pro upsell", () => {
    render(<ToolAppCta headline="Track your steps" description="Get the app." />);

    const appStore = screen.getByRole("link", {
      name: /download on the app store/i,
    });
    expect(appStore.getAttribute("href")).toBe(SITE_CONFIG.appStoreUrl);
    expect(appStore.getAttribute("data-fast-goal")).toBe("open-app-store");

    const pro = screen.getByRole("link", { name: /get pro/i });
    expect(pro.getAttribute("href")).toBe("/get-pro");
    expect(pro.getAttribute("data-fast-goal")).toBe("get-pro");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/tool-app-cta.test.tsx`
Expected: FAIL — `getByRole("link", { name: /get pro/i })` throws (no Pro link rendered yet).

- [ ] **Step 3: Add the import**

At the top of `components/tool-app-cta.tsx`, add the import alongside the existing ones:

```tsx
import { ProUpsell } from "./pro-upsell";
```

- [ ] **Step 4: Render `ProUpsell` under the App Store badge**

In the `ToolAppCta` function, the right-hand CTA block currently is:

```tsx
        <div className="flex-shrink-0">
          <AppStoreBadge />
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Free on the App Store
          </p>
        </div>
```

Replace it with:

```tsx
        <div className="flex-shrink-0">
          <AppStoreBadge />
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Free on the App Store
          </p>
          <ProUpsell />
        </div>
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run components/tool-app-cta.test.tsx`
Expected: PASS (1 test).

- [ ] **Step 6: Commit**

```bash
git add components/tool-app-cta.tsx components/tool-app-cta.test.tsx
git commit -m "feat: surface Pro upsell in tool page CTA"
```

---

### Task 3: `BlogProCta` card + wire into blog post page

**Files:**
- Create: `components/blog-pro-cta.tsx`
- Test: `components/blog-pro-cta.test.tsx`
- Modify: `app/blog/[slug]/page.tsx` (import + render after `RelatedContentSection`)

**Interfaces:**
- Consumes: `ProUpsell` from `./pro-upsell` (Task 1).
- Produces: `export function BlogProCta(): React.JSX.Element` — a bordered card with a heading and a `ProUpsell`. No App Store badge.

- [ ] **Step 1: Write the failing test**

```tsx
// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { BlogProCta } from "./blog-pro-cta";

afterEach(cleanup);

describe("BlogProCta", () => {
  it("renders a heading and the Pro upsell, with no App Store link", () => {
    render(<BlogProCta />);

    expect(
      screen.getByRole("heading", { name: /get more from every walk/i }),
    ).toBeTruthy();

    const pro = screen.getByRole("link", { name: /get pro/i });
    expect(pro.getAttribute("href")).toBe("/get-pro");
    expect(pro.getAttribute("data-fast-goal")).toBe("get-pro");

    expect(
      screen.queryByRole("link", { name: /download on the app store/i }),
    ).toBeNull();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/blog-pro-cta.test.tsx`
Expected: FAIL — cannot resolve `./blog-pro-cta` (module not found).

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/blog-pro-cta.tsx

import { ProUpsell } from "./pro-upsell";

/**
 * Pro-only CTA card for blog posts, which otherwise carry no app CTA. Blog
 * traffic is the coldest segment, so this is a low-prominence upsell measured
 * via the get-pro goal rather than a primary download push.
 */
export function BlogProCta() {
  return (
    <div className="mt-8 rounded-2xl border border-[#ED772F]/30 bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 p-6">
      <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
        Get more from every walk
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Steps Pro unlocks deeper insights and goals.
      </p>
      <ProUpsell />
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/blog-pro-cta.test.tsx`
Expected: PASS (1 test).

- [ ] **Step 5: Import `BlogProCta` in the blog post page**

In `app/blog/[slug]/page.tsx`, add the import next to the other component imports (after the `RelatedContentSection` import on line 10):

```tsx
import { BlogProCta } from "@/components/blog-pro-cta";
```

- [ ] **Step 6: Render `BlogProCta` after the related content section**

The page currently renders (around lines 225-229):

```tsx
        <RelatedContentSection
          relatedPosts={BLOG_RELATED_POSTS[slug] || []}
          relatedTools={BLOG_RELATED_TOOLS[slug] || []}
        />
        <PersonaLinks items={BLOG_RELATED_PERSONAS[slug] || []} />
```

Insert `<BlogProCta />` immediately after the `RelatedContentSection`:

```tsx
        <RelatedContentSection
          relatedPosts={BLOG_RELATED_POSTS[slug] || []}
          relatedTools={BLOG_RELATED_TOOLS[slug] || []}
        />
        <BlogProCta />
        <PersonaLinks items={BLOG_RELATED_PERSONAS[slug] || []} />
```

- [ ] **Step 7: Verify the build type-checks and the full suite passes**

Run: `npm test`
Expected: PASS — all tests, including the three new files.

Run: `npm run build`
Expected: build completes with no type errors (the blog page is statically generated for all slugs).

- [ ] **Step 8: Commit**

```bash
git add components/blog-pro-cta.tsx components/blog-pro-cta.test.tsx "app/blog/[slug]/page.tsx"
git commit -m "feat: add Pro CTA card to blog posts"
```

---

## Self-Review

**Spec coverage:**
- `ProUpsell` component (warm lead-in + outlined secondary button, `/get-pro`, `data-fast-goal="get-pro"`) → Task 1. ✓
- Tool pages: render inside `ToolAppCta` under the App Store badge; sticky bar unchanged → Task 2 (only `ToolAppCta` edited). ✓
- Blog posts: compact bordered Pro-only card after `RelatedContentSection` → Task 3. ✓
- App Store CTA stays primary with `open-app-store` goal → asserted in Task 2 test. ✓
- Out of scope (route, RevenueCat, landing, sticky bar) untouched → no task modifies them. ✓

**Placeholder scan:** No TBD/TODO/"handle edge cases"; every code step shows full code and exact commands. ✓

**Type consistency:** `ProUpsell` is a no-prop component used identically in Tasks 2 and 3. `BlogProCta` is no-prop. `ToolAppCta` keeps its existing `{ headline, description }` props (unchanged). Goal strings (`get-pro`, `open-app-store`) and copy strings are consistent across tasks and match the Global Constraints. ✓
