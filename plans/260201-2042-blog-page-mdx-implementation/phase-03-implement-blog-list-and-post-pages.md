# Phase 03: Implement Blog List & Post Pages

## Context
- Plan: [plan.md](plan.md)
- Depends on: Phase 02 (blog utilities)

## Overview
| Field | Value |
|-------|-------|
| Priority | P1 - Core |
| Status | pending |
| Effort | 1h |

Create blog list page with pagination and individual post page with MDX rendering.

## Requirements
- Blog list at /blog with pagination via query params
- Individual post at /blog/[slug]
- generateStaticParams for static generation
- generateMetadata for SEO
- Author info display on posts
- Dark mode + responsive design

## Architecture

```
app/blog/
  page.tsx              # List with pagination
  [slug]/
    page.tsx            # Post page

components/
  blog-post-card.tsx    # Card for list view
  blog-pagination.tsx   # Pagination controls
```

## Related Code Files

### To Create
- `app/blog/page.tsx` - Blog list page
- `app/blog/[slug]/page.tsx` - Post detail page
- `components/blog-post-card.tsx` - Post card component
- `components/blog-pagination.tsx` - Pagination component

### Reference (styling patterns)
- `app/privacy/page.tsx` - Page layout pattern
- `components/landing-*.tsx` - Component patterns

## Implementation Steps

### 1. Create blog-post-card.tsx
```typescript
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface Props {
  post: BlogPost;
}

export function BlogPostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group border rounded-2xl p-6 hover:border-orange-500 transition">
        {post.image && <Image ... />}
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div>
          <span>{post.author.name}</span>
          <time>{post.date}</time>
        </div>
      </article>
    </Link>
  );
}
```

### 2. Create blog-pagination.tsx
```typescript
import Link from 'next/link';

interface Props {
  currentPage: number;
  totalPages: number;
}

export function BlogPagination({ currentPage, totalPages }: Props) {
  return (
    <nav className="flex justify-center gap-2">
      {currentPage > 1 && <Link href={`/blog?page=${currentPage - 1}`}>Prev</Link>}
      <span>Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages && <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>}
    </nav>
  );
}
```

### 3. Create app/blog/page.tsx
```typescript
import { Metadata } from 'next';
import { getPaginatedPosts } from '@/lib/blog';
import { BlogPostCard } from '@/components/blog-post-card';
import { BlogPagination } from '@/components/blog-pagination';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, guides, and updates from Steps App',
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const { posts, totalPages, currentPage } = getPaginatedPosts(page);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-24">
        <h1>Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => <BlogPostCard key={post.slug} post={post} />)}
        </div>
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
```

### 4. Create app/blog/[slug]/page.tsx
```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { images: post.image ? [post.image] : [] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Dynamic import of MDX content
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <header>
          <h1>{post.title}</h1>
          <div className="flex items-center gap-3">
            {post.author.avatar && <img src={post.author.avatar} />}
            <span>{post.author.name}</span>
            <time>{post.date}</time>
          </div>
        </header>
        <div className="prose dark:prose-invert">
          <Content />
        </div>
      </div>
    </article>
  );
}
```

## Todo
- [ ] Create components/blog-post-card.tsx
- [ ] Create components/blog-pagination.tsx
- [ ] Create app/blog/page.tsx
- [ ] Create app/blog/[slug]/page.tsx
- [ ] Update components/index.ts exports
- [ ] Add Tailwind typography plugin for prose styles

## Success Criteria
- /blog renders list with cards
- Pagination links work
- /blog/[slug] renders MDX content
- Author info displays
- Responsive + dark mode

## Risk Assessment
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| MDX import errors | Medium | Use try-catch, test with sample |
| Styling inconsistency | Low | Follow existing patterns |

## Next Steps
→ Phase 04: Update navigation & sitemap
