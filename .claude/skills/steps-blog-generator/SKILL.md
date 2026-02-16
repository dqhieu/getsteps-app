---
name: steps-blog-generator
description: Generate SEO-optimized blog posts for Steps app (getsteps.app). Creates MDX files with frontmatter, downloads Unsplash thumbnails, and follows the app's blog architecture. Use for keyword-targeted content creation.
license: MIT
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - WebSearch
  - WebFetch
---

# Steps Blog Generator

Generate SEO-optimized blog posts for the Steps fitness app website.

## When to Use

- Creating new blog posts based on keywords
- SEO content creation for fitness/pedometer topics
- Generating blog thumbnails from Unsplash

## Quick Start

```
/steps:blog "gpx export apple watch"
/steps:blog "best pedometer app 2026"
/steps:blog "how to track steps for weight loss"
```

## Workflow

### 1. Keyword Research
- Analyze keyword intent (informational vs transactional)
- Identify related long-tail keywords
- Check keyword research files in `assets/seo/keywords/`

### 2. Content Creation
- Generate SEO-optimized title (include keyword, <60 chars)
- Write meta description (include keyword, <160 chars)
- Create structured content with H2/H3 headings
- Include keyword naturally throughout (2-3% density)
- Add internal links to app download
- Include FAQ section for featured snippets

### 3. Image Download
Download relevant Unsplash image:
```bash
# Create blog images directory
mkdir -p public/blog

# Download image (1200x630 for OG)
curl -L -o public/blog/{slug}.jpg \
  "https://images.unsplash.com/photo-{PHOTO_ID}?w=1200&h=630&fit=crop"
```

**Finding the right Unsplash photo:**
1. Use `WebSearch` with query: `site:unsplash.com {blog topic} photo`
2. Extract the photo ID from the Unsplash URL (the part after `/photo-`)
3. Download at 1200x630 for OG image size
4. Pick a photo that matches the blog topic — avoid generic stock photos

### 4. File Output

**Blog post location:** `content/blog/{slug}.mdx`

**Frontmatter template:**
```yaml
---
title: "SEO Title with Keyword - Complete Guide 2026"
description: "Meta description under 160 chars with keyword."
date: "YYYY-MM-DD"
author:
  name: "Steps Team"
  avatar: "/app_icon.png"
image: "/blog/{slug}.jpg"
---
```

### 5. Build & Verify
```bash
npm run build
# Check sitemap includes new post
# Verify OG meta tags in HTML output
```

## Content Structure

```markdown
# H1: Main Keyword Title

Intro paragraph with keyword in first 100 words.

## H2: What is [Topic]?
Definition/explanation section.

## H2: How to [Action] with Steps App
Main tutorial/guide section with:
- Numbered steps
- Screenshots (optional)
- Tips and best practices

## H2: Benefits of [Topic]
Value proposition section.

## H2: Tips for [Topic]
Practical advice section.

## H2: Common Questions
FAQ section for featured snippets:
### Can I [action]?
### How do I [action]?
### What is [term]?

## H2: Get Started Today
CTA section with app download link.

---
**Ready to [benefit]?** [Download Steps](https://apps.apple.com/app/steps-workout-pedometer/id6720646621)
```

## SEO Checklist

- [ ] Keyword in title (preferably near start)
- [ ] Keyword in meta description
- [ ] Keyword in H1 (matches title)
- [ ] Keyword in first paragraph
- [ ] Keyword in 2-3 H2 headings
- [ ] Keyword density 2-3%
- [ ] Internal link to app download
- [ ] External links to authoritative sources (optional)
- [ ] Image with descriptive filename
- [ ] Alt text with keyword (handled by blog system)
- [ ] URL slug contains keyword

## References

| File | Purpose |
|------|---------|
| `references/steps-blog-post-template.md` | Full blog post template |
| `references/steps-app-keyword-clusters.md` | Steps app keyword clusters |

## Blog Architecture

- **Location:** `content/blog/{slug}.mdx`
- **Renderer:** next-mdx-remote with remark-gfm
- **Schema:** Auto-generated Article JSON-LD
- **Sitemap:** Auto-included via `lib/blog.ts`

## Related Skills

- `seo-optimization` - Keyword research, technical SEO
- `copywriting` - Content formulas (AIDA, PAS)
- `content-marketing` - Content strategy
