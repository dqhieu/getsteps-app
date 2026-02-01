# SEO Audit: getsteps.app (Local Files)
**Date:** 2026-02-01 | **Score:** 82/100 (B+)

## Executive Summary
The Steps App website has a solid SEO foundation with proper metadata, JSON-LD schema, sitemap, and robots.txt. Key improvements needed: missing canonical URLs, incomplete heading hierarchy in privacy/terms pages, and blog schema enhancements. Overall structure is search-engine friendly.

## Quick Stats
| Metric | Value | Status |
|--------|-------|--------|
| Pages Indexed | 5+ (dynamic blog) | ✅ |
| Sitemap | Dynamic with blog posts | ✅ |
| Robots.txt | Configured | ✅ |
| JSON-LD Schema | SoftwareApplication | ✅ |
| Blog Posts | 1 | ⚠️ |

---

## Technical SEO Checklist

| Element | Status | Details |
|---------|--------|---------|
| Title Tag | ✅ | 35/60 chars, includes brand + keywords |
| Meta Description | ✅ | 108/160 chars, descriptive |
| H1 Tag | ✅ | 1 per page, properly structured |
| Heading Hierarchy | ⚠️ | Homepage good (H1→H2→H3), privacy/terms skip H2 |
| URL Structure | ✅ | Clean, semantic (/blog, /privacy, /terms) |
| Image Alt Tags | ✅ | 10/10 images have alt text |
| Schema Markup | ⚠️ | SoftwareApplication present, missing Article schema for blog |
| Mobile Friendly | ✅ | Responsive viewport, touch-friendly |
| Sitemap | ✅ | Dynamic, includes all pages + blog posts |
| Robots.txt | ✅ | Allows all, points to sitemap |
| Canonical URLs | ❌ | Not explicitly set |
| Hreflang | ⚠️ | Not set (single language site, acceptable) |
| Open Graph | ✅ | Complete with image, title, description |
| Twitter Cards | ✅ | summary_large_image with meta.png |

---

## Issues by Priority

### 🔴 Critical
None found

### 🟠 High

1. **Missing Canonical URLs**
   - File: `app/layout.tsx`
   - Issue: No `alternates.canonical` in metadata
   - Impact: Potential duplicate content issues

2. **Blog Posts Missing Article Schema**
   - File: `app/blog/[slug]/page.tsx`
   - Issue: No JSON-LD Article schema for blog posts
   - Impact: Rich snippets won't appear in search results

### 🟡 Medium

3. **Privacy/Terms Pages Skip H2 Level**
   - Files: `app/privacy/page.tsx`, `app/terms/page.tsx`
   - Issue: H1 → H3 (skips H2), invalid heading hierarchy
   - Impact: Semantic structure issues for accessibility/SEO

4. **Blog Index Meta Title Not Using Template**
   - File: `app/blog/page.tsx`
   - Issue: Hard-coded title doesn't use layout template pattern
   - Suggestion: Use `title: "Blog"` to get "Blog | Steps App"

5. **Low Blog Content Volume**
   - Issue: Only 1 blog post exists
   - Impact: Limited organic traffic potential

6. **Schema AggregateRating Has Only 1 Review**
   - File: `app/layout.tsx` line 129
   - Issue: `ratingCount: "1"` with 5-star rating looks suspicious
   - Suggestion: Update when more reviews available

### 🟢 Low

7. **Missing Keywords Meta in Blog Posts**
   - File: `app/blog/[slug]/page.tsx`
   - Issue: No keywords in blog post metadata
   - Impact: Minor (keywords meta less important now)

8. **No Breadcrumb Schema**
   - Files: Blog pages
   - Issue: Missing BreadcrumbList JSON-LD
   - Impact: No breadcrumb rich snippets

9. **No FAQ Schema on Landing Page**
   - File: `app/page.tsx`
   - Impact: Missing FAQ rich snippet opportunity

---

## Recommendations

| # | Action | Priority | Effort | Impact |
|---|--------|----------|--------|--------|
| 1 | Add canonical URLs to metadata | High | Quick Win | High |
| 2 | Add Article schema to blog posts | High | Quick Win | High |
| 3 | Fix heading hierarchy in privacy/terms | Medium | Quick Win | Medium |
| 4 | Use title template for blog pages | Medium | Quick Win | Low |
| 5 | Create more blog content | Medium | Major | High |
| 6 | Add BreadcrumbList schema | Low | Quick Win | Low |
| 7 | Add FAQ schema if applicable | Low | Medium | Medium |

---

## Detailed Findings

### Metadata Analysis

**Root Layout (`app/layout.tsx`)**
```
✅ Title: "Steps: Workout & Pedometer" (35 chars)
✅ Description: 108 chars, keyword-rich
✅ Keywords: 10 relevant terms
✅ Robots: index, follow, googleBot configured
✅ OpenGraph: Complete
✅ Twitter: Complete with large image
✅ Viewport: Responsive with theme-color
```

**Blog Page (`app/blog/page.tsx`)**
```
✅ Title: "Blog - Steps: Workout & Pedometer"
✅ Description: 64 chars
⚠️ Doesn't follow template pattern
```

**Blog Posts (`app/blog/[slug]/page.tsx`)**
```
✅ Dynamic title with post title
✅ OpenGraph with article type
✅ Published time and author
❌ Missing Article JSON-LD schema
❌ Missing canonical URL
```

### Schema Markup Analysis

**Current Schema (SoftwareApplication)**
```json
{
  "@type": "SoftwareApplication",
  "name": "Steps: Workout & Pedometer",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS",
  "offers": { "price": "0" },
  "aggregateRating": { "ratingValue": "5", "ratingCount": "1" }
}
```
✅ Properly structured
⚠️ ratingCount should reflect actual reviews

**Missing Schemas**
- Article (for blog posts)
- BreadcrumbList (for navigation)
- Organization (for business info)
- FAQPage (if FAQs exist)

### Heading Structure

**Homepage**
```
H1: Steps: Workout & Pedometer
  H2: Beautiful Year in Review
    H3: Total Steps, Yearly Goals, Top Workout
  H2: Personal Records
  H2: 23+ Workouts
  H2: Ready to Start? (CTA)
  H3: Privacy (in privacy section)
```
✅ Proper hierarchy

**Blog Post Page**
```
H1: [Post Title]
  H2, H3... (from MDX content)
```
✅ Proper hierarchy

**Privacy/Terms Pages**
```
H1: PRIVACY POLICY / EULA
  H3: INFORMATION WE COLLECT (skips H2!)
  H3: HOW WE USE INFORMATION
  ...
```
❌ Skips H2 level

### Internal Linking

**Navigation Links (Navbar)**
- / (Home)
- /blog
- /privacy
- /terms
- External: App Store

**Footer Links**
- /blog
- /privacy
- /terms
- mailto:support@getsteps.app

✅ Good internal link structure
✅ Footer has consistent navigation

### Image Optimization

| Image | Alt Text | Status |
|-------|----------|--------|
| App Icon | "Steps App Icon" | ✅ |
| App Store Badge | "Download on the App Store" | ✅ |
| Screenshots | Dynamic alt with context | ✅ |
| Blog Images | Post title | ✅ |
| Author Avatar | Author name | ✅ |

✅ All images have descriptive alt text

### Sitemap Analysis

**Included URLs:**
- `/` (priority: 1.0, monthly)
- `/blog` (priority: 0.8, weekly)
- `/blog/[slug]` (priority: 0.7, monthly, dynamic)
- `/terms` (priority: 0.5, yearly)
- `/privacy` (priority: 0.5, yearly)

✅ Proper priority weighting
✅ Appropriate change frequencies
✅ Dynamic blog post inclusion

### Robots.txt Analysis
```
User-agent: *
Allow: /
Sitemap: https://getsteps.app/sitemap.xml
```
✅ Allows all crawlers
✅ Points to sitemap

---

## Implementation Code Snippets

### 1. Add Canonical URL (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  // ... existing config
  alternates: {
    canonical: "https://getsteps.app",
  },
  // ...
};
```

### 2. Add Article Schema (app/blog/[slug]/page.tsx)

```typescript
// Add in generateMetadata or as a script in the component
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.date,
  author: {
    "@type": "Person",
    name: post.author.name,
  },
  publisher: {
    "@type": "Organization",
    name: "Steps App",
    logo: {
      "@type": "ImageObject",
      url: "https://getsteps.app/app_icon.png"
    }
  }
};
```

### 3. Fix Heading Hierarchy (privacy/terms pages)

Change `<h3>` to `<h2>` for main sections:
```typescript
// Before
<h3 className="...">INFORMATION WE COLLECT</h3>

// After
<h2 className="...">INFORMATION WE COLLECT</h2>
```

---

## Data Sources
- Local file analysis: yes
- WebFetch analysis: no (local audit)
- ReviewWeb API: no (no API key / local audit)

---

## Unresolved Questions
1. Is there an actual App Store rating count to update the schema?
2. Are there plans for FAQ content that could use FAQPage schema?
3. Is multi-language support planned (for hreflang consideration)?
