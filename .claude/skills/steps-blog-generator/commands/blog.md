---
allowed-tools: Read, Write, Edit, Bash, WebSearch, WebFetch, Glob
argument-hint: "<keyword>"
description: Generate SEO-optimized blog post for Steps app based on keyword
---

# Steps Blog Generator

Generate an SEO-optimized blog post for getsteps.app based on a keyword.

**Usage:** `$ARGUMENTS`

**Examples:**
```bash
/steps:blog "gpx export apple watch"
/steps:blog "best pedometer app 2026"
/steps:blog "how to track steps for weight loss"
/steps:blog "apple watch step counter widget"
```

## Workflow

### 1. Analyze Keyword
- Identify search intent (informational vs transactional)
- Check `.claude/skills/steps-blog-generator/references/steps-app-keyword-clusters-and-unsplash-images.md` for related keywords
- Determine best Unsplash image for topic

### 2. Generate Blog Post
Create MDX file at `content/blog/{slug}.mdx` with:

**Frontmatter:**
```yaml
---
title: "{Keyword} - Complete Guide 2026"
description: "{155 char meta description with keyword}"
date: "{today's date YYYY-MM-DD}"
author:
  name: "Steps Team"
  avatar: "/app_icon.png"
image: "/blog/{slug}.jpg"
---
```

**Content Structure:**
- H1 with primary keyword
- Intro paragraph (keyword in first 100 words)
- 4-6 H2 sections with keyword in 2-3 of them
- Table comparing features/workouts
- FAQ section (3-4 questions)
- CTA with App Store link

### 3. Download Thumbnail

**Step 1:** Use WebSearch to find Unsplash photos:
```
WebSearch: "unsplash {keyword} photo download free"
```

**Step 2:** Extract short photo ID from URL
- URL format: `unsplash.com/photos/{title}-{SHORT_ID}`
- Example: `unsplash.com/photos/a-man-running-eRINBXKOqIA` → ID: `eRINBXKOqIA`

**Step 3:** Download using download endpoint (auto-redirects):
```bash
mkdir -p public/blog
curl -L -o public/blog/{slug}.jpg \
  "https://unsplash.com/photos/{SHORT_ID}/download?w=1200"
```

**Example:**
```bash
# Search found: unsplash.com/photos/a-man-running-in-the-woods-eRINBXKOqIA
# Extract ID: eRINBXKOqIA
curl -L -o public/blog/running-tracker.jpg \
  "https://unsplash.com/photos/eRINBXKOqIA/download?w=1200"
```

**Search suggestions:**
| Topic | Search Query |
|-------|--------------|
| GPX/Hiking | `unsplash hiking trail mountain photo` |
| Walking | `unsplash walking outdoor nature photo` |
| Running | `unsplash running jogging fitness photo` |
| Apple Watch | `unsplash smartwatch wearable photo` |
| Fitness | `unsplash fitness workout exercise photo` |

### 4. Build & Verify
```bash
npm run build
```
- Verify post appears in sitemap
- Check OG meta tags in HTML output

## SEO Checklist
- [ ] Keyword in title (near start)
- [ ] Keyword in meta description
- [ ] Keyword in H1
- [ ] Keyword in first paragraph
- [ ] Keyword in 2-3 H2 headings
- [ ] Internal link to App Store
- [ ] Image with descriptive filename
- [ ] URL slug contains keyword

## Output
- Blog post: `content/blog/{slug}.mdx`
- Thumbnail: `public/blog/{slug}.jpg`

## References
- Template: `.claude/skills/steps-blog-generator/references/steps-blog-post-template.md`
- Keywords: `.claude/skills/steps-blog-generator/references/steps-app-keyword-clusters-and-unsplash-images.md`
