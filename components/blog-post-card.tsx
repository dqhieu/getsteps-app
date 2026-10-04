import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
}

export function BlogPostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full overflow-hidden rounded-[20px] bg-card shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:-translate-y-px hover:shadow-[var(--shadow-border-hover)]">
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
          <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-muted text-sm mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-muted">
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
            <span className="text-muted">•</span>
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
