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
  - mcp__keywords-everywhere__get_related_keywords
  - mcp__keywords-everywhere__get_pasf_keywords
  - mcp__keywords-everywhere__get_keyword_data
  - mcp__keywords-everywhere__get_credit_balance
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

### GSC Access
Already configured via `mcp__gsc` MCP server. Site: `sc-domain:getsteps.app`

### Keywords Everywhere (MCP)

Keyword data comes from the hosted Keywords Everywhere MCP server. Auth is handled by the MCP
client, so no API key is read at run time. If the `mcp__keywords-everywhere__*` tools are
unavailable, skip keyword expansion and fall back to `WebSearch` — never fail the run.

| Tool | Required args | Returns | Credits |
|------|--------------|---------|---------|
| `get_related_keywords` | `keyword`, `num` | `data`: array of keyword strings | 2 per keyword returned |
| `get_pasf_keywords` | `keyword`, `num` | `data`: array of "People Also Search For" strings | 2 per keyword returned |
| `get_keyword_data` | `kw`, `country`, `currency`, `dataSource` | `data[]`: `{keyword, vol, cpc:{currency,value}, competition, trend[]}` | 1 per keyword |
| `get_credit_balance` | — | array with one integer | free |

Every argument is required — none have defaults. `get_related_keywords` and `get_pasf_keywords`
take **only** `keyword` and `num`; `country`, `currency`, and `dataSource` do not apply to them
and are used solely by `get_keyword_data`.

**Standing values for this site:** `country: "us"`, `currency: "usd"`, `dataSource: "gkp"`,
`num: 20` per seed.

**Limits and cost:**
- `get_keyword_data` accepts a maximum of **100 keywords per call**. Chunk longer lists.
- `num` accepts up to 10,000, but expansion costs 2 credits per keyword *returned*. Keep it at 20.
- Call `get_credit_balance` before a run that expands many seeds. The full auto pipeline at
  10 seeds × 20 related costs ~400 credits, doubled again if PASF expansion is also run.
- A keyword absent from `get_keyword_data`'s `data` array has no Keyword Planner data — treat its
  volume as unknown, not zero.

## Components

### 1. GSC Performance Analysis
- Pull last 28 days vs previous 28 days
- Identify winners (position improved 3+), losers (dropped 3+)
- Page-level breakdown for each tool page and blog post

### 2. Quick Wins Detection
- Keywords ranking position 4-15 with decent impressions
- CTR opportunities (high impressions, low CTR)
- Specific action items for each opportunity

`mcp__gsc__detect_quick_wins` ANDs all four thresholds and defaults `maxCtr` to 2 — always pass
it explicitly (5 for this site) or it silently drops every keyword already above 2% CTR, which
on getsteps.app skews heavily toward calculator-intent queries. It also has no row limit; results
are sorted by `additionalClicks` descending, so read from the top and stop.

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
