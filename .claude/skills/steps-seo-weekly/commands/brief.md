---
allowed-tools: Read, Write, Bash, WebSearch, WebFetch, Glob, Grep, mcp__gsc__enhanced_search_analytics, mcp__keywords-everywhere__get_related_keywords, mcp__keywords-everywhere__get_keyword_data
argument-hint: "<keyword>"
description: Generate a content brief for a target keyword — SERP analysis, outline, internal links
---

# Content Brief from Keyword

Generate a detailed content brief for getsteps.app based on a target keyword.

**Keyword:** $ARGUMENTS

## Configuration

- **Site:** sc-domain:getsteps.app
- **References:** Read `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` first

## Workflow

### Step 1: Check Current Rankings

Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago
- endDate: 3 days ago
- dimensions: "query,page"
- queryFilter: "$ARGUMENTS"
- filterOperator: "contains"
- rowLimit: 20

This tells us if we already rank for this keyword and on which page.

### Step 2: SERP Analysis

Use `WebSearch` to search for the target keyword. Analyze the top 10 results:
- What type of content ranks? (tool, blog, listicle, guide)
- What's the average word count?
- What H2/H3 sections do they cover?
- What's missing from top results?

### Step 3: Keyword Expansion via Keywords Everywhere

**3a. Related keywords.** Call `mcp__keywords-everywhere__get_related_keywords` with:
- keyword: "$ARGUMENTS"
- num: 20

Returns a flat array of keyword strings under `data`, no metrics attached. Do not pass `country`,
`currency`, or `dataSource` — they are not parameters of this tool. Costs 2 credits per keyword
returned (~40 for this call).

**3b. Volume data.** Batch the target keyword plus its related keywords through
`mcp__keywords-everywhere__get_keyword_data`:
- kw: ["$ARGUMENTS", ...related keywords] — **maximum 100 per call**
- country: "us"
- currency: "usd"
- dataSource: "gkp"

All four arguments are required. Each keyword costs 1 credit. Each entry in `data` is
`{keyword, vol, cpc: {currency, value}, competition, trend[]}`. A keyword absent from `data` has
no Keyword Planner data — record its volume as unknown, not zero.

If the `mcp__keywords-everywhere__*` tools are unavailable, skip and rely on WebSearch + GSC data.
Do not fail the run.

### Step 4: Internal Linking Analysis

Scan existing tool pages and blog posts for internal linking opportunities:
- Which existing pages should link TO this new content?
- Which existing pages should this new content link TO?
- Reference the tool pages list from site-context-and-tool-pages.md

### Step 5: Generate Brief

## Output Format

Save to `plans/reports/content-brief-{YYMMDD}-{keyword-slug}.md`:

```markdown
# Content Brief: "{keyword}"

## Overview
- **Target Keyword:** {keyword}
- **Search Volume:** {from Keywords Everywhere, or "N/A"}
- **CPC:** {from Keywords Everywhere, or "N/A"}
- **Search Intent:** {informational | transactional | navigational}
- **Current Ranking:** {position if we rank, or "Not ranking"}
- **Content Type:** {blog post | tool page | landing page}
- **Target Word Count:** {based on SERP analysis}

## Title Options
1. "{Title option 1}" (include keyword, <60 chars)
2. "{Title option 2}"
3. "{Title option 3}"

## Meta Description
"{Meta description with keyword, <160 chars}"

## Outline

### H1: {Main Title}

### H2: {Section 1}
- Key points to cover
- Data/stats to include

### H2: {Section 2}
...

### H2: FAQ
- Q: {Common question from SERP "People also ask"}
- Q: {Another question}
- Q: {Another question}

### H2: {CTA section}
- Link to Steps app download
- Link to relevant calculator tool

## Related Keywords to Include
| Keyword | Volume | Where to Use |
|---------|--------|-------------|
| {related kw} | {vol} | H2 heading |
| {related kw} | {vol} | Body text |

## Internal Linking Plan
**Link FROM these existing pages:**
- /tools/{tool} — anchor text: "{text}"
- /blog/{post} — anchor text: "{text}"

**Link TO these existing pages:**
- /tools/{tool} — context: "{when to link}"

## Competitor Gaps
What the top 3 results are MISSING that we should include:
1. {Gap 1}
2. {Gap 2}
3. {Gap 3}

## Next Steps
- [ ] Write content (use /steps:blog "{keyword}" to generate)
- [ ] Add internal links from existing pages
- [ ] Generate OG image (use /steps-seo:og-image)
- [ ] Submit URL to GSC for indexing
```
