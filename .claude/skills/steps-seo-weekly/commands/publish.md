---
allowed-tools: Read, Write, Edit, Bash, WebSearch, WebFetch, Glob, Grep, mcp__gsc__enhanced_search_analytics
argument-hint: "<keyword>"
description: Full pipeline — research keyword, generate brief, write and publish blog post in one command
---

# Research and Publish Blog from Keyword

End-to-end pipeline: keyword research → content brief → blog post creation.

**Keyword:** $ARGUMENTS

## Configuration

- **Site:** sc-domain:getsteps.app
- **References:**
  - `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` — site context
  - `.claude/skills/steps-blog-generator/SKILL.md` — blog generation rules

## Workflow

### Phase 1: Keyword Research

#### 1a. Check Current Rankings
Call `mcp__gsc__enhanced_search_analytics` with:
- siteUrl: "sc-domain:getsteps.app"
- startDate: 28 days ago (YYYY-MM-DD)
- endDate: 3 days ago
- dimensions: "query,page"
- queryFilter: "$ARGUMENTS"
- filterOperator: "contains"
- rowLimit: 20

#### 1b. Keyword Expansion (Keywords Everywhere)

**IMPORTANT:** Use Node.js `fetch` for KE API calls (curl has shell quoting issues with the API key).

```bash
node -e "
const key = process.env.KEYWORDS_EVERYWHERE_API_KEY;
if (!key) { console.log('SKIP: KEYWORDS_EVERYWHERE_API_KEY not set'); process.exit(0); }
const params = new URLSearchParams();
params.append('country', 'us');
params.append('currency', 'usd');
params.append('dataSource', 'gkp');
params.append('keyword', '$ARGUMENTS');
params.append('num', '20');
fetch('https://api.keywordseverywhere.com/v1/get_related_keywords', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + key, 'Accept': 'application/json' },
  body: params
}).then(r => r.json()).then(d => console.log(JSON.stringify(d, null, 2))).catch(e => console.error(e));
"
```

If `KEYWORDS_EVERYWHERE_API_KEY` is not set, skip and rely on WebSearch.

#### 1c. SERP Analysis
Use `WebSearch` to search for the target keyword. Analyze top 10 results:
- Content type (tool, blog, listicle, guide)
- Average word count
- H2/H3 sections covered
- Gaps in top results

### Phase 2: Content Brief (internal — don't save separate file)

From the research, determine:
- **Search intent** (informational vs transactional)
- **Target word count** (based on SERP)
- **Title** (include keyword, <60 chars)
- **Meta description** (<160 chars)
- **Outline** (H2/H3 structure covering topic comprehensively)
- **Competitor gaps** (2-3 things top results miss)
- **Internal links** (which tool pages to link to/from)
- **Related keywords** to weave into content

### Phase 3: Blog Post Creation

#### 3a. Determine publish date

Scan `content/blog/*.mdx` frontmatter to find the latest existing `date` value. Assign this new post the day after that latest date. This ensures chronological ordering and avoids date collisions with existing posts.

#### 3b. Write blog post via content-creator agent

Delegate to `content-creator` agent with this prompt:

> Write an SEO-optimized blog post for getsteps.app.
>
> **Keyword:** $ARGUMENTS
> **Publish date:** {date from 3a, YYYY-MM-DD}
> **SERP insights:** {summary from Phase 1c}
> **Content brief:** {outline from Phase 2}
>
> **Follow these rules exactly:**
> - Read `.claude/skills/steps-blog-generator/SKILL.md` for content structure, frontmatter format, and SEO checklist
> - Read `.claude/skills/steps-seo-weekly/references/site-context-and-tool-pages.md` for internal linking targets
> - Output: `content/blog/{slug}.mdx`
> - Use the provided publish date in frontmatter `date` field
> - Include FAQ section for featured snippets
> - CTA with Steps app download link
> - 2-3% keyword density

#### 3c. Download Thumbnail from Unsplash
```bash
mkdir -p public/blog
curl -L -o public/blog/{slug}.jpg \
  "https://images.unsplash.com/photo-{PHOTO_ID}?w=1200&h=630&fit=crop"
```

Pick photo ID based on topic from the reference table in steps-blog-generator SKILL.md.

#### 3d. Build and Verify
```bash
npm run build
```

Check that:
- New blog post appears in sitemap
- No build errors
- OG meta tags are correct

### Phase 4: Output Summary

Print a summary after completion:

```
PUBLISHED: "{title}"
URL: /blog/{slug}
Keyword: {primary keyword}
Volume: {from KE if available}
Word count: {actual}
Internal links: {count} outbound, {suggestions} inbound
Thumbnail: /blog/{slug}.jpg

NEXT STEPS:
- [ ] Add internal links FROM these existing pages:
  - /tools/{page} — add link in {section}
  - /blog/{post} — add link in {section}
- [ ] Submit to GSC for indexing
- [ ] Share on social media
```

## SEO Checklist (verify before finishing)

- [ ] Keyword in title (near start)
- [ ] Keyword in meta description
- [ ] Keyword in H1
- [ ] Keyword in first paragraph
- [ ] Keyword in 2-3 H2 headings
- [ ] Keyword density 2-3%
- [ ] Internal link to app download
- [ ] Internal links to relevant tool pages
- [ ] Image with descriptive filename
- [ ] URL slug contains keyword
- [ ] FAQ section for featured snippets
- [ ] Build passes with no errors
