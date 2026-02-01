import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");
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
      author: {
        name: data.author?.name || "Steps Team",
        avatar: data.author?.avatar,
      },
      image: data.image,
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
      author: {
        name: data.author?.name || "Steps Team",
        avatar: data.author?.avatar,
      },
      image: data.image,
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
