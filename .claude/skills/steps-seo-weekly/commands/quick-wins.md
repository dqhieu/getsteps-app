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
- minImpressions: 10

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
