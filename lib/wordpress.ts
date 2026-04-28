const WORDPRESS_SITE_URL = "https://happyho.in";
const WORDPRESS_API_BASE = `${WORDPRESS_SITE_URL}/wp-json/wp/v2`;

export interface WordPressRenderedField {
  rendered: string;
}

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  yoast_head_json?: {
    og_image?: Array<{ url: string }>;
  };
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://happyho.in";

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

export function stripHtml(value: string): string {
  const withoutTags = value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return decodeHtmlEntities(withoutTags);
}

export function resolvePostImage(post: WordPressPost): string {
  return post.yoast_head_json?.og_image?.[0]?.url ?? "/67.png";
}

export async function fetchWordPressPosts(search?: string): Promise<WordPressPost[]> {
  const params = new URLSearchParams({
    per_page: "24",
    _embed: "true",
  });

  if (search && search.trim().length > 0) {
    params.set("search", search.trim());
  }

  const response = await fetch(`${WORDPRESS_API_BASE}/posts?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status})`);
  }

  return (await response.json()) as WordPressPost[];
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const params = new URLSearchParams({
    slug,
    _embed: "true",
  });

  const response = await fetch(`${WORDPRESS_API_BASE}/posts?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post (${response.status})`);
  }

  const posts = (await response.json()) as WordPressPost[];
  return posts[0] ?? null;
}

export async function fetchAllWordPressPostSlugs(): Promise<Array<Pick<WordPressPost, "slug" | "modified">>> {
  const response = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=100&_fields=slug,modified`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post slugs (${response.status})`);
  }

  return (await response.json()) as Array<Pick<WordPressPost, "slug" | "modified">>;
}
