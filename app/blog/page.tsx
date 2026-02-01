import type { Metadata } from "next";
import { getPaginatedPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";
import { BlogPagination } from "@/components/blog-pagination";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and updates from Steps App - your fitness companion.",
  alternates: {
    canonical: "https://getsteps.app/blog",
  },
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
      <LandingNavbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Tips, guides, and updates to help you stay active and reach your
            fitness goals.
          </p>
        </header>

        {posts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
            <BlogPagination currentPage={currentPage} totalPages={totalPages} />
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500 dark:text-neutral-500">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
      <LandingFooter />
    </div>
  );
}
