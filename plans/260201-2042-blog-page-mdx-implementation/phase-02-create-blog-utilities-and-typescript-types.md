# Phase 02: Create Blog Utilities & TypeScript Types

## Context
- Plan: [plan.md](plan.md)
- Depends on: Phase 01 (MDX setup)

## Overview
| Field | Value |
|-------|-------|
| Priority | P1 - Core |
| Status | pending |
| Effort | 45m |

Create blog utility functions and TypeScript types for reading/parsing MDX files.

## Requirements
- Define BlogPost type with frontmatter schema
- Implement getAllPosts() - returns sorted posts
- Implement getPostBySlug() - returns single post
- Implement getPaginatedPosts() - returns paginated results
- Parse frontmatter using gray-matter

## Architecture

```typescript
// Frontmatter schema
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  image?: string;
  content: string;
}
```

## Related Code Files

### To Create
- `lib/blog.ts` - Blog utilities and types

### Reference
- `lib/constants.ts` - Pattern for exports

## Implementation Steps

1. Create `lib/blog.ts`:
   ```typescript
   import fs from 'fs';
   import path from 'path';
   import matter from 'gray-matter';

   const POSTS_DIR = path.join(process.cwd(), 'content/blog');
   const POSTS_PER_PAGE = 10;

   export interface Author {
     name: string;
     avatar?: string;
   }

   export interface BlogPost {
     slug: string;
     title: string;
     description: string;
     date: string;
     author: Author;
     image?: string;
     content: string;
   }

   export interface PaginatedPosts {
     posts: BlogPost[];
     totalPages: number;
     currentPage: number;
   }

   export function getAllPosts(): BlogPost[] {
     // Read all .mdx files, parse frontmatter, sort by date desc
   }

   export function getPostBySlug(slug: string): BlogPost | null {
     // Read single post by slug
   }

   export function getPaginatedPosts(page: number): PaginatedPosts {
     // Return paginated subset
   }

   export function getAllSlugs(): string[] {
     // Return all slugs for generateStaticParams
   }
   ```

2. Create `content/blog/` directory:
   ```bash
   mkdir -p content/blog
   ```

## Todo
- [ ] Create lib/blog.ts with types
- [ ] Implement getAllPosts()
- [ ] Implement getPostBySlug()
- [ ] Implement getPaginatedPosts()
- [ ] Implement getAllSlugs()
- [ ] Create content/blog directory

## Success Criteria
- Types export correctly
- Functions handle missing directory gracefully
- Posts sorted by date descending

## Risk Assessment
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Empty directory errors | Medium | Add try-catch, return empty array |

## Next Steps
→ Phase 03: Implement blog pages
