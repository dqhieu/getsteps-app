import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs, extractFaqFromContent } from "@/lib/blog";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedContentSection } from "@/components/related-content-section";
import { PersonaLinks } from "@/components/persona-links";
import { BLOG_RELATED_POSTS, BLOG_RELATED_TOOLS, BLOG_RELATED_PERSONAS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SITE_KEYWORDS = [
  "step counter", "pedometer", "workout tracker", "fitness app",
  "Apple Watch", "health tracking", "daily steps", "exercise tracker",
  "walking tracker", "activity tracker",
];

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

  const keywords = post.keyword
    ? [post.keyword, ...SITE_KEYWORDS]
    : SITE_KEYWORDS;

  return {
    title: `${post.title} - Steps Blog`,
    description: post.description,
    keywords,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqs = extractFaqFromContent(post.content);

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_CONFIG.baseUrl}${post.image}` : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.baseUrl}/app_icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.baseUrl}/blog/${slug}`,
    },
    ...(post.keyword && { keywords: [post.keyword, ...SITE_KEYWORDS] }),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>

        <RelatedContentSection
          relatedPosts={BLOG_RELATED_POSTS[slug] || []}
          relatedTools={BLOG_RELATED_TOOLS[slug] || []}
        />
        <PersonaLinks items={BLOG_RELATED_PERSONAS[slug] || []} />

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
