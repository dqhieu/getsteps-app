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

## Default Behavior

**When invoked without a subcommand (`/steps-seo-weekly`), run the full auto pipeline.**
Follow the instructions in `commands/auto.md` — GSC analysis → keyword expansion → pick top 7 → write & publish all 7 blog posts.

## Subcommands

```
/steps-seo-weekly              # Full auto pipeline (default)
/steps-seo-weekly:weekly       # GSC report only (no blog writing)
/steps-seo-weekly:quick-wins   # Just quick wins
/steps-seo-weekly:brief "kw"   # Content brief for keyword
/steps-seo-weekly:publish "kw" # Research + write + publish single post
/steps-seo-weekly:auto         # Same as default — full pipeline
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
