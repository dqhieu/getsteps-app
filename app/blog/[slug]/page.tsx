import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Steps Blog",
    };
  }

  return {
    title: `${post.title} - Steps Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />
      <article className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 hover:text-orange-500 dark:hover:text-orange-500 transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500">
            {post.author.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              {post.author.name}
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {post.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
      <LandingFooter />
    </div>
  );
}
