import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const notes=(await getCollection("notes",({data})=>!data.draft)).sort((a,b)=>b.data.published.valueOf()-a.data.published.valueOf());
  return rss({
    title: "Jesse Anderson — Field Notes",
    description: "Build logs, experiments, and lessons from software, systems, and AI.",
    site: context.site,
    items: notes.map((note)=>({ title:note.data.title, description:note.data.description, pubDate:note.data.published, link:`/notes/${note.id.replace(/\.(md|mdx)$/,"")}/` })),
  });
}
