import { Marked } from "marked";

const files = import.meta.glob("../../content/blog/*.md", {
  query: "?raw", import: "default", eager: true,
}) as Record<string, string>;

export type ArchivePost = {
  slug: string;
  title: string;
  date: Date;
  tags: string[];
  html: string;
  headings: { depth: number; slug: string; text: string }[];
  draft: boolean;
};

function value(source: string, key: string) {
  return source.match(new RegExp(`^${key}\\s*=\\s*(["'])(.*?)\\1\\s*$`, "m"))?.[2];
}

function parse(path: string, source: string): ArchivePost {
  const match = source.match(/^\+\+\+\s*\n([\s\S]*?)\n\+\+\+\s*\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing archive frontmatter: ${path}`);
  const [, frontmatter, body] = match;
  const filename = path.split("/").pop()!.replace(/\.md$/, "");
  const title = value(frontmatter, "title");
  const date = new Date(value(frontmatter, "date") ?? "");
  if (!title || Number.isNaN(date.valueOf())) throw new Error(`Invalid archive title or date: ${path}`);
  const tagsSource = frontmatter.match(/^tags\s*=\s*\[([^\]]*)\]/m)?.[1] ?? "";
  const headings: ArchivePost["headings"] = [];
  const slugs = new Map<string, number>();
  const markdown = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]*>/g, "");
        const base = plain.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "section";
        const count = slugs.get(base) ?? 0;
        slugs.set(base, count + 1);
        const slug = count ? `${base}-${count}` : base;
        headings.push({ depth, slug, text: plain });
        return `<h${depth} id="${slug}">${text}</h${depth}>\n`;
      },
    },
  });
  return {
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").toLowerCase(),
    title, date,
    tags: tagsSource.split(",").map((tag) => tag.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean),
    html: markdown.parse(body, { async: false }),
    headings,
    // Preserve the existing exclusion of the user's unpublished local draft.
    draft: /^draft\s*=\s*true/m.test(frontmatter) || path.endsWith("2022-06-05-acceptance.md"),
  };
}

export function getArchivePosts() {
  return Object.entries(files)
    .map(([path, source]) => parse(path, source))
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
