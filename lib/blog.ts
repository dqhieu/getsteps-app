import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { resolveAuthor, type AuthorProfile } from "./authors";

const POSTS_DIR = path.join(process.cwd(), "content/blog");
const POSTS_PER_PAGE = 10;

export type Author = AuthorProfile;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  author: AuthorProfile;
  image?: string;
  keyword?: string;
  content: string;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
}

function parsePostFile(filename: string): BlogPost | null {
  try {
    const slug = filename.replace(/\.mdx?$/, "");
    const filePath = path.join(POSTS_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      lastUpdated: data.lastUpdated || data.updated || undefined,
      author: resolveAuthor(data.author),
      image: data.image,
      keyword: data.keyword,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(POSTS_DIR)) {
      return [];
    }

    const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
    const posts = files
      .map(parsePostFile)
      .filter((post): post is BlogPost => post !== null);

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
    const mdPath = path.join(POSTS_DIR, `${slug}.md`);

    let filePath: string | null = null;
    if (fs.existsSync(mdxPath)) {
      filePath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      filePath = mdPath;
    }

    if (!filePath) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      lastUpdated: data.lastUpdated || data.updated || undefined,
      author: resolveAuthor(data.author),
      image: data.image,
      keyword: data.keyword,
      content,
    };
  } catch {
    return null;
  }
}

export function getPaginatedPosts(page: number): PaginatedPosts {
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return {
    posts,
    totalPages,
    currentPage,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Extract FAQ Q&A pairs from markdown content (### headings under ## FAQ or ## Common Questions) */
export function extractFaqFromContent(content: string): FaqItem[] {
  // Find FAQ section start
  const faqHeaderPattern = /^## (?:FAQ|Common Questions|Frequently Asked Questions)\s*$/m;
  const headerMatch = faqHeaderPattern.exec(content);
  if (!headerMatch) return [];

  const afterHeader = content.substring(headerMatch.index + headerMatch[0].length);

  // Find where FAQ section ends (next ## heading or --- separator)
  const endMatch = afterHeader.match(/\n## [^#]|\n---\s*\n/);
  const faqSection = endMatch
    ? afterHeader.substring(0, endMatch.index)
    : afterHeader;

  const faqs: FaqItem[] = [];

  // Split by ### headings to get Q&A pairs
  const parts = faqSection.split(/^### /m).filter(Boolean);
  for (const part of parts) {
    const lines = part.trim().split("\n");
    const question = lines[0]?.trim();
    if (!question) continue;

    // Rest is the answer — strip markdown formatting for schema
    const answerLines = lines.slice(1).filter((l) => l.trim());
    const answer = answerLines
      .map((l) => l.replace(/\*\*([^*]+)\*\*/g, "$1")) // strip bold
      .map((l) => l.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")) // strip links
      .map((l) => l.replace(/^- /, "• ")) // bullets
      .join(" ")
      .trim();

    if (answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

export function getAllSlugs(): string[] {
  try {
    if (!fs.existsSync(POSTS_DIR)) {
      return [];
    }

    return fs
      .readdirSync(POSTS_DIR)
      .filter((f) => /\.mdx?$/.test(f))
      .map((f) => f.replace(/\.mdx?$/, ""));
  } catch {
    return [];
  }
}
