# Phase 04: Update Navigation, Footer & Sitemap

## Context
- Plan: [plan.md](plan.md)
- Depends on: Phase 03 (blog pages)

## Overview
| Field | Value |
|-------|-------|
| Priority | P2 |
| Status | pending |
| Effort | 30m |

Add Blog link to navbar/footer and integrate blog posts into sitemap.

## Requirements
- Add "Blog" link to navbar (before Privacy)
- Add "Blog" link to footer
- Update sitemap.ts to include /blog and all post URLs

## Related Code Files

### To Modify
- `components/landing-navbar.tsx` - Add Blog link
- `components/landing-footer.tsx` - Add Blog link
- `app/sitemap.ts` - Add blog URLs

## Implementation Steps

### 1. Update landing-navbar.tsx
Add Blog link before Privacy:
```typescript
<Link
  href="/blog"
  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
>
  Blog
</Link>
```

### 2. Update landing-footer.tsx
Add Blog link before Privacy:
```typescript
<Link
  href="/blog"
  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
>
  Blog
</Link>
```

### 3. Update app/sitemap.ts
```typescript
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getsteps.app";
  const posts = getAllPosts();

  const blogUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
```

## Todo
- [ ] Add Blog link to navbar
- [ ] Add Blog link to footer
- [ ] Update sitemap with blog URLs
- [ ] Verify sitemap.xml output

## Success Criteria
- Blog link visible in navbar and footer
- /sitemap.xml includes /blog and all posts
- Links navigate correctly

## Risk Assessment
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Sitemap build error | Low | Handle empty posts array |

## Next Steps
→ Phase 05: Create sample post & verify
