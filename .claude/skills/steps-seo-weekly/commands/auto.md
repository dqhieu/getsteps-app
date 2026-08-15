---
allowed-tools: Read, Write, Edit, Bash, WebSearch, WebFetch, Glob, Grep, mcp__gsc__search_analytics, mcp__gsc__enhanced_search_analytics, mcp__gsc__detect_quick_wins, mcp__keywords-everywhere__get_related_keywords, mcp__keywords-everywhere__get_pasf_keywords, mcp__keywords-everywhere__get_keyword_data, mcp__keywords-everywhere__get_credit_balance
description: Full SEO pipeline — analyze GSC, expand keywords, pick best opportunity, write and publish blog post
---

# Analyze and Publish Best Opportunity

Single command that runs the entire weekly SEO workflow end-to-end:
GSC analysis → keyword expansion → pick best opportunity → content brief → blog post → build.

## Configuration

- **Site:** sc-domain:getsteps.app
- **References:**
  - `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` — site context
  - `.claude/skills/steps-blog-generator/SKILL.md` — blog generation rules

## Phase 1: GSC Analysis

### 1a. Current Period (last 28 days)
Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago (YYYY-MM-DD)
- endDate: 3 days ago (GSC data delay)
- dimensions: "query"
- rowLimit: 100

### 1b. Previous Period (28 days before that)
Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 56 days ago
- endDate: 29 days ago
- dimensions: "query"
- rowLimit: 100

### 1c. Page-Level Performance
Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- dimensions: "page"
- rowLimit: 50

### 1d. Quick Wins Detection
Call `mcp__gsc__detect_quick_wins` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- positionRangeMin: 4
- positionRangeMax: 15
- minImpressions: 100
- maxCtr: 5

**Always pass `maxCtr` explicitly.** It defaults to 2 and is ANDed with the other three
thresholds, so omitting it silently drops every keyword already earning above 2% CTR — including
most calculator-intent queries, which are the highest-converting class on this site.

The tool has no row limit and returns every match, which is a very large response on this
property. Results are pre-sorted by `additionalClicks` descending, so read from the top and stop
once you have the rows you need.

## Phase 2: Keyword Expansion

Pick top 10 seed keywords from GSC (highest impressions) and expand via the Keywords Everywhere
MCP tools. See `.claude/skills/steps-seo-weekly/SKILL.md` for the full tool contract.

If the `mcp__keywords-everywhere__*` tools are unavailable, skip to the fallback at the end of
this phase. Do not fail the run.

### 2a. Cost check

This phase costs roughly 10 seeds × 20 related × 2 credits ≈ 400 credits, doubled if PASF
expansion is also run, plus 1 credit per keyword scored in 2c. Call
`mcp__keywords-everywhere__get_credit_balance` first if the balance is unknown.

### 2b. Get Related Keywords (for each seed)

Call `mcp__keywords-everywhere__get_related_keywords` with:
- keyword: {seed keyword}
- num: 20

Returns `{"data": ["related keyword", ...], "credits_consumed": N}` — a flat array of strings
with no metrics attached. Do not pass `country`, `currency`, or `dataSource`; they are not
parameters of this tool.

Optionally also call `mcp__keywords-everywhere__get_pasf_keywords` with the same arguments for
"People Also Search For" terms, which surface question-shaped and adjacent-intent keywords that
related-keyword expansion tends to miss.

### 2c. Get Volume Data for Candidates

Collect and de-duplicate all related keywords, then batch-score them with
`mcp__keywords-everywhere__get_keyword_data`:
- kw: [array of keywords, **maximum 100 per call** — chunk longer lists]
- country: "us"
- currency: "usd"
- dataSource: "gkp"

All four arguments are required. 10 seeds at 20 related each yields ~200 candidates, so expect
two calls. Each keyword costs 1 credit.

Each entry in `data` is `{keyword, vol, cpc: {currency, value}, competition, trend[]}`. Sort by
`vol` descending and use `vol` plus `competition` for the Phase 3 selection criteria. A keyword
absent from `data` has no Keyword Planner data — treat its volume as unknown, not zero.

**Fallback if the MCP tools are unavailable:** rely on GSC data plus `WebSearch` for "related
searches" and "people also ask" results on the top seeds, and note in the report that volume and
competition figures were unavailable.

## Phase 3: Pick Top 7 Opportunities

Select **7 keyword opportunities** for blog posts. Score using this priority:

1. **New content opportunities** → high-volume keywords we don't rank for yet
2. **Quick wins** (position 8-15, high impressions) → existing page could be supported by a new blog post
3. **Keyword clusters** → group related long-tail keywords under one blog post

**Selection criteria:**
- Prefer keywords with volume > 500/month (from KE) or impressions > 50 (from GSC)
- Prefer keywords where we DON'T already have a dedicated blog post
- Prefer informational intent (how-to, what-is, guide)
- Each keyword should target a DIFFERENT topic (no overlap between the 7)
- Check existing blog posts to avoid duplicate topics:
  - Read `content/blog/` directory to see what's already published

**Present all 7 candidates ranked by priority:**
```
#1: "walking 30 minutes a day results"
    Volume: 2,400/mo | Position: not ranking | Intent: informational
    Why: High volume, no existing content, fits walking calories calculator

#2: "steps to lose 1 pound" (1,600/mo)
#3: "is 5000 steps a day enough" (1,200/mo)
#4: ...
#5: ...
#6: ...
#7: ...
```

## Phase 4: SERP Research (for all 7 keywords)

For each of the 7 keywords, use `WebSearch` to analyze top results:
- Content type ranking (blog, tool, listicle)
- Sections covered by top results
- Gaps we can fill
- Target word count

**Efficiency tip:** Run WebSearch for multiple keywords in parallel when possible.

## Phase 5: Write 7 Blog Posts

### 5a. Determine publish dates

Before writing, scan `content/blog/*.mdx` frontmatter to find the latest existing `date` value. Assign each of the 7 new posts a sequential date starting from the day after that latest date (one post per day). This ensures consistent chronological ordering and avoids date collisions.

Example: if latest existing post is `2026-03-05`, assign dates `2026-03-06` through `2026-03-12`.

### 5b. Write blog posts via content-creator agent

For each of the 7 keywords, delegate to `content-creator` agent with this prompt:

> Write an SEO-optimized blog post for getsteps.app.
>
> **Keyword:** {keyword}
> **Volume:** {volume}/mo
> **Publish date:** {assigned date from 5a, YYYY-MM-DD}
> **SERP insights:** {summary from Phase 4}
>
> **Follow these rules exactly:**
> - Read `.claude/skills/steps-blog-generator/SKILL.md` for content structure, frontmatter format, and SEO checklist
> - Read `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` for internal linking targets
> - Output: `content/blog/{slug}.mdx`
> - Use the provided publish date in frontmatter `date` field
> - Include FAQ section for featured snippets
> - Cross-link to these related new posts: {list other 6 slugs}
> - CTA with Steps app download link
> - 2-3% keyword density

**Efficiency tip:** Spawn multiple `content-creator` agents in parallel for independent posts. Ensure each agent receives the full list of 7 slugs for cross-linking.

### 5c. Download Unsplash thumbnails

For each post, search for a fresh, relevant photo:

1. Use `WebSearch` with query: `site:unsplash.com {blog topic} photo`
2. Extract the photo ID from the Unsplash URL (the part after `/photo-`)
3. Download at 1200x630 for OG image size
4. Use a DIFFERENT photo for each of the 7 posts — no duplicates

```bash
mkdir -p public/blog
curl -L -o public/blog/{slug}.jpg \
  "https://images.unsplash.com/photo-{PHOTO_ID}?w=1200&h=630&fit=crop"
```

### 5d. Update internal links registry

Add all 7 new posts to `lib/internal-links.ts`:

1. **`BLOG_RELATED_POSTS`** — add an entry for each new blog slug with 3 related posts (mix of new + existing)
2. **`BLOG_RELATED_TOOLS`** — add an entry for each new blog slug with 2 related tool pages

**DO NOT** modify `TOOL_RELATED_BLOGS` — existing tool pages should keep linking to established posts that already have search authority. The new posts get internal links through their own `BLOG_RELATED_*` entries and inline content links.

### 5e. Build and verify (once after all 7 posts)
```bash
npm run build
```

Only run build ONCE after all 7 posts are written, not after each individual post.

## Phase 6: Save Report + Summary

Save full report to `plans/reports/seo-weekly-{YYMMDD}-analyze-and-publish.md`:

```markdown
# SEO Weekly Report + Published Content — getsteps.app
**Period:** {start_date} to {end_date}
**Generated:** {today}

## GSC Summary
- Total clicks: X (prev: Y, delta: Z%)
- Total impressions: X (prev: Y, delta: Z%)
- Avg CTR: X% | Avg position: X

## Winners (Position Up 3+)
| Keyword | Pos Now | Pos Before | Clicks | Impressions |

## Losers (Position Down 3+)
| Keyword | Pos Now | Pos Before | Clicks | Impressions |

## Quick Wins
| Keyword | Position | Impressions | Action |

## CTR Opportunities
| Keyword | Impressions | CTR | Suggested Title |

## New Keyword Opportunities (Keywords Everywhere)
| Keyword | Volume | CPC | Action |

## Published Blog Posts (7)

| # | Title | URL | Keyword | Volume |
|---|-------|-----|---------|--------|
| 1 | {title} | /blog/{slug} | {keyword} | {vol}/mo |
| 2 | {title} | /blog/{slug} | {keyword} | {vol}/mo |
| 3 | ... | ... | ... | ... |
| 4 | ... | ... | ... | ... |
| 5 | ... | ... | ... | ... |
| 6 | ... | ... | ... | ... |
| 7 | ... | ... | ... | ... |

**Total new content volume target:** X/mo combined

## Remaining Action Items
1. Quick win fixes (title rewrites, content additions for existing pages)
2. Internal links to add FROM existing pages TO new posts
3. Submit all 7 new URLs to GSC for indexing
4. Cross-linking verification between new posts
```

Then print a concise console summary:

```
SEO WEEKLY COMPLETE

GSC: X clicks (+Y%) | X impressions | X avg position

PUBLISHED 7 BLOG POSTS:
  1. "{title}" → /blog/{slug} ({volume}/mo)
  2. "{title}" → /blog/{slug} ({volume}/mo)
  3. "{title}" → /blog/{slug} ({volume}/mo)
  4. "{title}" → /blog/{slug} ({volume}/mo)
  5. "{title}" → /blog/{slug} ({volume}/mo)
  6. "{title}" → /blog/{slug} ({volume}/mo)
  7. "{title}" → /blog/{slug} ({volume}/mo)

Total keyword volume target: X/mo

TOP REMAINING ACTIONS:
1. [quick win action]
2. [CTR fix action]
3. Submit 7 new URLs to GSC

Full report: plans/reports/seo-weekly-{date}-analyze-and-publish.md
```
