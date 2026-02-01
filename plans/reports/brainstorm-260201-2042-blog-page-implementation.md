# Brainstorm: Blog Page Implementation

## Problem Statement
Add a blog section to the Steps App landing page to support content marketing, SEO, and user engagement. Need to handle 20+ posts with pagination.

## Requirements
- **Content format:** MDX files (Markdown + JSX)
- **Scale:** 20+ posts
- **Features:** Pagination (10 posts/page), author info, sitemap integration
- **Design:** List view for blog index

## Evaluated Approaches

### Option 1: @next/mdx (Selected)
**Pros:**
- Official Next.js integration, well-maintained
- Simple setup with next.config.ts
- Excellent build-time performance
- Full static generation support

**Cons:**
- Manual file management
- Need rebuild for new posts

### Option 2: next-mdx-remote
**Pros:**
- More flexible, can load MDX from any source
- Battle-tested in production

**Cons:**
- Slight runtime overhead
- More complex setup

### Option 3: Velite
**Pros:**
- Modern type-safe content layer
- Great developer experience

**Cons:**
- Newer/less mature
- Additional learning curve

## Final Solution

### Architecture
```
content/blog/*.mdx          # Blog content
app/blog/page.tsx           # List with pagination
app/blog/[slug]/page.tsx    # Individual posts
lib/blog.ts                 # Utilities
```

### Dependencies
- `@next/mdx` - MDX processing
- `@mdx-js/loader` - MDX loader
- `gray-matter` - Frontmatter parsing

### MDX Frontmatter
```yaml
---
title: "Post Title"
description: "SEO description"
date: "2026-01-15"
author:
  name: "Steps Team"
  avatar: "/avatars/team.png"
image: "/blog/cover.jpg"
---
```

### Features
| Feature | Implementation |
|---------|---------------|
| Pagination | Query params, 10 posts/page |
| SEO | generateMetadata, sitemap integration |
| Static gen | generateStaticParams |
| Author | Name + avatar on post page |
| Navigation | Blog link in navbar/footer |

## Implementation Considerations
1. Update `next.config.ts` for MDX support
2. Create blog utility functions with proper TypeScript types
3. Design consistent with existing landing page components
4. Add Blog link to navbar and footer
5. Update sitemap.ts to include blog posts
6. Create sample blog post to verify setup

## Success Criteria
- Blog list page loads at /blog
- Individual posts load at /blog/[slug]
- Pagination works correctly
- Posts appear in sitemap
- Author info displays on posts
- Mobile responsive design
- Dark mode support (matching existing site)

## Risks
| Risk | Mitigation |
|------|------------|
| MDX build errors | Validate frontmatter schema |
| Performance with many posts | Static generation handles this |
| SEO indexing delay | Submit sitemap to Google |

## Next Steps
Create detailed implementation plan with phases.
