---
allowed-tools: Read, Write, Bash, mcp__gsc__detect_quick_wins, mcp__gsc__enhanced_search_analytics
description: Fast check for SEO quick wins — keywords close to page 1 with specific actions
---

# Quick Wins SEO Opportunities

Fast scan for low-hanging SEO fruit on getsteps.app.

## Configuration

- **Site:** sc-domain:getsteps.app
- **References:** Read `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` first

## Workflow

### Step 1: Detect Quick Wins

Call `mcp__gsc__detect_quick_wins` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago (YYYY-MM-DD)
- endDate: 3 days ago
- positionRangeMin: 4
- positionRangeMax: 15
- minImpressions: 100
- maxCtr: 5

**Why `maxCtr` must be passed explicitly.** The tool ANDs all four thresholds and `maxCtr`
defaults to 2, so leaving it off returns only keywords already below 2% CTR. That silently
excludes the "high impressions, low CTR" category this command is supposed to surface as a
*separate* bucket from striking-distance position.

Measured on this property (28d to 2026-08-11) at the thresholds above: the default `maxCtr` of 2
returned 1,096 rows and hid 49 more. Those 49 were **61.2% calculator-intent versus 4.6%** in the
default set — a 13x enrichment of the class that converts ~8.5% versus ~0.7% for informational
queries. Top suppressed: "steps to calories calculator" (3,982 impr, 2.03% CTR),
"walking calories calculator" (3,241 impr, 2.22%), "step calorie calculator" (1,555 impr, 2.83%).

The recovered rows are few and their modeled click upside is small — the tool gives high-CTR
keywords little headroom by design. Raise `maxCtr` for intent quality, not for modeled clicks.

**Response size:** the tool has no row limit and returns every match. At `minImpressions: 100`
that is ~433 KB (1,145 rows, measured) while still capturing 94% of the total modeled upside
available at a floor of 20. This still overflows a single tool result, so expect it to spill to
a file. Results are pre-sorted by `additionalClicks` descending, so read from the top and stop
once you have enough. If a run needs to be smaller, raise `minImpressions` further — a floor of
200 roughly halves the payload at 88% of upside. Never lower `maxCtr` to shrink the response;
that trades away the highest-intent queries first.

### Step 2: Get Page-Level Data for Context

Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- dimensions: "query,page"
- rowLimit: 200

This maps keywords to specific pages so we know WHERE to make changes.

### Step 3: Analyze and Recommend

For each quick win, provide a **specific, actionable** recommendation:

**Position 4-7 (almost page 1 top):**
- Improve content depth on the ranking page
- Add FAQ section targeting the exact query
- Improve internal linking TO this page

**Position 8-10 (bottom of page 1):**
- Rewrite title tag to be more compelling
- Add the exact query as an H2 section
- Build internal links from related blog posts

**Position 11-15 (page 2, close to page 1):**
- Consider a dedicated blog post if no page targets this
- Add substantial content section on the ranking page
- Check if a new tool page would serve this query better

**Low CTR with good position (< 3% CTR at position 1-5):**
- Rewrite title tag with numbers, brackets, or power words
- Improve meta description with clear value prop
- Add structured data for rich snippets

## Output Format

Print directly to console (no file save needed):

```
QUICK WINS — getsteps.app
Period: {date_range}

PRIORITY 1 — Almost There (Position 4-7)
  "keyword" — pos 5.2 — 340 impressions — 1.2% CTR
  Page: /tools/steps-to-calories-calculator
  Action: Add FAQ section answering "keyword" directly

PRIORITY 2 — Push to Page 1 (Position 8-15)
  "keyword" — pos 11.3 — 890 impressions — 0.4% CTR
  Page: /blog/walking-for-weight-loss
  Action: Expand section on [topic], add internal link from /tools/weight-loss-walking-calculator

CTR FIXES (Good Position, Bad CTR)
  "keyword" — pos 3.1 — 1200 impressions — 0.8% CTR
  Page: /tools/bmi-calculator
  Action: Rewrite title to "Free BMI Calculator — Check Your Score in 10 Seconds"
```
