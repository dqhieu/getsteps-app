---
name: steps-seo-weekly
description: Weekly SEO automation for Steps app (getsteps.app). Pulls GSC data, detects quick wins, expands keywords via Keywords Everywhere API, and generates actionable reports. Use for ongoing SEO monitoring and content planning.
license: MIT
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - WebSearch
  - WebFetch
  - mcp__gsc__search_analytics
  - mcp__gsc__enhanced_search_analytics
  - mcp__gsc__detect_quick_wins
  - mcp__gsc__index_inspect
---

# Steps SEO Weekly

Weekly SEO automation for getsteps.app — GSC monitoring, keyword expansion, and content briefs.

## When to Use

- Weekly SEO performance check
- Finding quick-win keywords close to page 1
- Discovering new keyword opportunities (Keywords Everywhere)
- Generating content briefs for blog posts or new tool pages

## Quick Start

```
/steps-seo:weekly                          # Full weekly report
/steps-seo:quick-wins                      # Just quick wins
/steps-seo:brief "steps to calories"       # Content brief for keyword
```

## Setup

### Keywords Everywhere API Key
Set env var `KEYWORDS_EVERYWHERE_API_KEY` with your API key from https://keywordseverywhere.com/api
```bash
export KEYWORDS_EVERYWHERE_API_KEY="your-key-here"
```

### GSC Access
Already configured via `mcp__gsc` MCP server. Site: `sc-domain:getsteps.app`

## Components

### 1. GSC Performance Analysis
- Pull last 28 days vs previous 28 days
- Identify winners (position improved 3+), losers (dropped 3+)
- Page-level breakdown for each tool page and blog post

### 2. Quick Wins Detection
- Keywords ranking position 4-10 with decent impressions
- CTR opportunities (high impressions, low CTR)
- Specific action items for each opportunity

### 3. Keyword Expansion (Keywords Everywhere)
- Expand seed keywords from GSC top queries
- Discover related keywords we don't rank for yet
- Get volume, CPC, competition data for prioritization

### 4. Content Brief Generation
- Analyze SERP for target keyword
- Generate title options, outline, word count target
- Internal linking to existing tool pages
- Competitor gap analysis

## Report Output

Reports saved to: `plans/reports/seo-weekly-{date}-{slug}.md`

## Related Skills

- `steps-blog-generator` — Create blog posts from briefs
- `seo-optimization` — Technical SEO audits
- `og-image-generator` — OG images for new pages
