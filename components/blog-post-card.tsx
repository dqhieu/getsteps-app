import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
}

export function BlogPostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500 dark:hover:border-orange-500 transition-colors bg-white dark:bg-neutral-900">
        {post.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500">
            {post.author.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span>{post.author.name}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
