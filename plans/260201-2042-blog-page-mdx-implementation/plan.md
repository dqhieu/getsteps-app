---
title: "MDX Blog Implementation"
description: "Add blog section with MDX content, pagination, author info, and sitemap integration"
status: pending
priority: P2
effort: 3h
branch: main
tags: [blog, mdx, content, seo]
created: 2026-02-01
---

# MDX Blog Implementation Plan

## Overview
Add a blog section to Steps App landing site using MDX for content management. Supports 20+ posts with pagination.

## Architecture
```
content/blog/*.mdx           # Blog posts with frontmatter
app/blog/page.tsx            # List view with pagination
app/blog/[slug]/page.tsx     # Individual post with generateStaticParams
lib/blog.ts                  # Utilities + types
components/blog-*.tsx        # Blog UI components
```

## Phases

| Phase | Description | Status | Effort |
|-------|-------------|--------|--------|
| [01](phase-01-setup-mdx-dependencies-and-nextjs-config.md) | Setup MDX dependencies & config | pending | 30m |
| [02](phase-02-create-blog-utilities-and-typescript-types.md) | Create blog utilities & types | pending | 45m |
| [03](phase-03-implement-blog-list-and-post-pages.md) | Implement blog list & post pages | pending | 1h |
| [04](phase-04-update-navigation-footer-and-sitemap.md) | Update nav, footer, sitemap | pending | 30m |
| [05](phase-05-create-sample-post-and-verify-build.md) | Create sample post & verify | pending | 15m |

## Dependencies
- @next/mdx
- @mdx-js/loader
- gray-matter

## Success Criteria
- [ ] /blog shows paginated list
- [ ] /blog/[slug] renders MDX posts
- [ ] Author info displays correctly
- [ ] Sitemap includes blog posts
- [ ] Dark mode + responsive design works
- [ ] Build succeeds without errors

## Related
- Brainstorm: [brainstorm-260201-2042-blog-page-implementation.md](../reports/brainstorm-260201-2042-blog-page-implementation.md)
