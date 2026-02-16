---
allowed-tools: Read, Write, Edit, Bash, WebSearch, WebFetch, Glob, Grep, mcp__gsc__search_analytics, mcp__gsc__enhanced_search_analytics, mcp__gsc__detect_quick_wins, mcp__gsc__index_inspect
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
- minImpressions: 20

### Step 5: Keyword Expansion via Keywords Everywhere API

Pick top 10 seed keywords from GSC data (highest impressions) and expand them.

```bash
# Get related keywords for each seed
curl -s -X POST "https://api.keywordseverywhere.com/v1/get_keyword_data" \
  -H "Authorization: Bearer $KEYWORDS_EVERYWHERE_API_KEY" \
  -H "Accept: application/json" \
  --data-urlencode "country=us" \
  --data-urlencode "currency=usd" \
  --data-urlencode "dataSource=gkp" \
  --data-urlencode "kw[]=seed keyword 1" \
  --data-urlencode "kw[]=seed keyword 2"
```

```bash
# Get related/long-tail keywords
curl -s -X POST "https://api.keywordseverywhere.com/v1/get_related_keywords" \
  -H "Authorization: Bearer $KEYWORDS_EVERYWHERE_API_KEY" \
  -H "Accept: application/json" \
  --data-urlencode "country=us" \
  --data-urlencode "currency=usd" \
  --data-urlencode "dataSource=gkp" \
  --data-urlencode "kw=seed keyword"
```

If `KEYWORDS_EVERYWHERE_API_KEY` is not set, skip this step and note it in the report.

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
