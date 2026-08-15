---
allowed-tools: Read, Write, Edit, Bash, WebSearch, WebFetch, Glob, Grep, mcp__gsc__search_analytics, mcp__gsc__enhanced_search_analytics, mcp__gsc__detect_quick_wins, mcp__gsc__index_inspect, mcp__keywords-everywhere__get_related_keywords, mcp__keywords-everywhere__get_keyword_data, mcp__keywords-everywhere__get_credit_balance
description: Full weekly SEO report — GSC analysis, quick wins, keyword expansion, action items
---

# Weekly SEO Performance Report

Generate a comprehensive weekly SEO report for getsteps.app.

## Configuration

- **Site:** sc-domain:getsteps.app
- **Date range:** Last 28 days vs previous 28 days
- **References:** Read `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` first

## Workflow

### Step 1: GSC Performance — Current Period (last 28 days)

Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago (YYYY-MM-DD)
- endDate: 3 days ago (GSC data delay)
- dimensions: "query"
- rowLimit: 100

### Step 2: GSC Performance — Previous Period (28 days before that)

Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 56 days ago
- endDate: 29 days ago
- dimensions: "query"
- rowLimit: 100

### Step 3: Page-Level Performance

Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- dimensions: "page"
- rowLimit: 50

### Step 4: Quick Wins Detection

Call `mcp__gsc__detect_quick_wins` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- positionRangeMin: 4
- positionRangeMax: 15
- minImpressions: 100
- maxCtr: 5

**Always pass `maxCtr` explicitly.** It defaults to 2 and is ANDed with the other three
thresholds, so omitting it silently drops every keyword already earning above 2% CTR. On this
site that hides ~19% of matching rows, and those rows skew heavily toward calculator-intent
queries — the class that converts best. See `commands/quick-wins.md` for the full rationale.

The tool has no row limit and returns every match, which is a very large response on this
property. Results are pre-sorted by `additionalClicks` descending, so read from the top and stop
once you have the rows you need.

### Step 5: Keyword Expansion via Keywords Everywhere

Pick top 10 seed keywords from GSC data (highest impressions) and expand them. This step costs
roughly 10 × 20 × 2 ≈ 400 credits plus 1 credit per keyword scored — call
`mcp__keywords-everywhere__get_credit_balance` first if the balance is unknown.

**5a. Related keywords.** For each seed, call `mcp__keywords-everywhere__get_related_keywords`:
- keyword: {seed keyword}
- num: 20

Returns a flat array of keyword strings under `data`. Do not pass `country`, `currency`, or
`dataSource` — they are not parameters of this tool.

**5b. Volume data.** De-duplicate the results and batch-score them with
`mcp__keywords-everywhere__get_keyword_data`:
- kw: [array of keywords, **maximum 100 per call** — chunk longer lists]
- country: "us"
- currency: "usd"
- dataSource: "gkp"

Each entry in `data` is `{keyword, vol, cpc: {currency, value}, competition, trend[]}`. A keyword
absent from `data` has no Keyword Planner data — record its volume as unknown, not zero.

If the `mcp__keywords-everywhere__*` tools are unavailable, skip this step and note it in the
report. Do not fail the run.

### Step 6: Analyze and Generate Report

Compare current vs previous period. For each query present in both periods, calculate position delta.

## Report Format

Save to `plans/reports/seo-weekly-{YYMMDD}-weekly-performance.md`:

```markdown
# SEO Weekly Report — getsteps.app
**Period:** {start_date} to {end_date}
**Generated:** {today}

## Summary
- Total clicks: X (previous: Y, delta: Z%)
- Total impressions: X (previous: Y, delta: Z%)
- Avg CTR: X% (previous: Y%)
- Avg position: X (previous: Y)

## Winners (Position Improved 3+)
| Keyword | Position Now | Position Before | Delta | Clicks | Impressions |
|---------|-------------|-----------------|-------|--------|-------------|

## Losers (Position Dropped 3+)
| Keyword | Position Now | Position Before | Delta | Clicks | Impressions |
|---------|-------------|-----------------|-------|--------|-------------|

## Quick Wins (Position 4-15, Improvable)
| Keyword | Position | Impressions | CTR | Action |
|---------|----------|-------------|-----|--------|

For each quick win, provide a specific action:
- "Add dedicated section to [tool page]"
- "Rewrite title tag to include keyword"
- "Create new blog post targeting this keyword"

## CTR Opportunities (High Impressions, Low CTR)
| Keyword | Impressions | CTR | Position | Suggested Title |
|---------|-------------|-----|----------|-----------------|

## Page Performance
| Page | Clicks | Impressions | CTR | Avg Position |
|------|--------|-------------|-----|--------------|

## New Keyword Opportunities (Keywords Everywhere)
Keywords we don't rank for yet but should target:
| Keyword | Monthly Volume | CPC | Competition | Suggested Action |
|---------|---------------|-----|-------------|-----------------|

## Action Items (Priority Order)
1. [Highest impact action]
2. [Second action]
3. ...

## Content Brief Candidates
Keywords worth creating new content for:
- Keyword A (volume: X) → Blog post or tool page?
- Keyword B (volume: Y) → ...
```

## Important Notes
- GSC data has ~3 day delay, adjust dates accordingly
- Use position delta of 3+ to filter signal from noise
- Quick wins are the highest-ROI items — prioritize them
- For keyword expansion, pick seeds that are already performing (not random)
