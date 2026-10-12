import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import sharp from "sharp";
import { getArchivePosts } from "../../lib/archive";

export async function getStaticPaths() {
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  return [
    { params: { slug: "home" }, props: { title: "The road is the work.", label: "SOFTWARE, SYSTEMS & AI" } },
    ...notes.map((note) => ({ params: { slug: `notes/${note.id}` }, props: { title: note.data.title, label: "FIELD NOTES" } })),
    ...getArchivePosts().map((post) => ({ params: { slug: `archive/${post.slug}` }, props: { title: post.title, label: "FROM THE ARCHIVE" } })),
  ];
}

function escape(text: string) {
  return text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!);
}

export const GET: APIRoute = async ({ props }) => {
  const { title, label } = props as { title: string; label: string };
  const lines: string[] = [];
  for (const word of title.split(/\s+/)) {
    const last = lines.length - 1;
    if (last < 0 || `${lines[last]} ${word}`.length > 28) lines.push(word);
    else lines[last] += ` ${word}`;
  }
  const size = lines.length > 3 ? 58 : 72;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f3efe3"/>
    <path d="M70 125H1130M70 535H1130" stroke="#c8c0ac"/>
    <text x="70" y="86" font-family="sans-serif" font-size="28" fill="#20201d">Jesse Anderson</text>
    <text x="70" y="174" font-family="monospace" font-size="20" fill="#a7352b">${escape(label)}</text>
    ${lines.slice(0, 4).map((line, index) => `<text x="70" y="${265 + index * 78}" font-family="serif" font-size="${size}" fill="#20201d">${escape(line)}</text>`).join("")}
    <text x="70" y="580" font-family="monospace" font-size="22" fill="#23354d">jessecanderson.dev / field notes</text>
    <rect x="1050" y="56" width="70" height="42" fill="none" stroke="#a7352b" stroke-width="2"/>
    <text x="1068" y="85" font-family="monospace" font-size="24" fill="#a7352b">JA</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
