import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { parse } from "parse5";

const root = path.resolve("dist");
const failures = [];
const pages = new Map();
const origin = "https://jessecanderson.dev";

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  }))).flat();
}

function elements(node) {
  return [...(node.tagName ? [node] : []), ...(node.childNodes ?? []).flatMap(elements)];
}

function attribute(node, name) {
  return node.attrs.find((attr) => attr.name === name)?.value;
}

function check(condition, file, message) {
  if (!condition) failures.push(`${path.relative(root, file)}: ${message}`);
}

for (const file of (await files(root)).filter((file) => file.endsWith(".html"))) {
  const nodes = elements(parse(await readFile(file, "utf8")));
  const ids = nodes.map((node) => attribute(node, "id")).filter(Boolean);
  const urlPath = `/${path.relative(root, file).split(path.sep).join("/").replace(/index\.html$/, "")}`;
  pages.set(file, { nodes, ids: new Set(ids), url: new URL(urlPath, origin) });
  check(ids.length === new Set(ids).size, file, "duplicate element IDs");
  check(nodes.filter((node) => node.tagName === "main").length === 1, file, "expected one main landmark");
  for (const tag of ["header", "footer"]) {
    check(nodes.filter((node) => node.tagName === tag && attribute(node, "class")?.split(" ").includes(`site-${tag}`)).length === 1,
      file, `expected one shared ${tag}`);
  }
  check(ids.includes("main-content") && ids.includes("top"), file, "missing navigation targets");
  check(nodes.some((node) => node.tagName === "main" && attribute(node, "tabindex") === "-1"), file, "main target must accept skip-link focus");
  check(nodes.some((node) => attribute(node, "class") === "skip-link" && attribute(node, "href") === "#main-content"), file, "missing skip link");
  for (const node of nodes) {
    if (node.tagName === "img") check(attribute(node, "alt") !== undefined, file, "image missing alt text");
    if (node.tagName === "iframe") check(Boolean(attribute(node, "title")), file, "iframe missing title");
  }
  if ((urlPath.startsWith("/notes/") && urlPath !== "/notes/") || (urlPath.startsWith("/archive/") && urlPath !== "/archive/")) {
    check(nodes.some((node) => attribute(node, "property") === "og:type" && attribute(node, "content") === "article"), file, "missing article metadata");
    check(nodes.some((node) => attribute(node, "aria-label") === "Continue reading"), file, "missing article navigation");
  }
}

for (const [file, page] of pages) {
  for (const node of page.nodes) {
    const links = [attribute(node, "href"), attribute(node, "src")];
    if (node.tagName === "meta" && ["og:image", "twitter:image"].includes(attribute(node, "property") ?? attribute(node, "name"))) {
      links.push(attribute(node, "content"));
    }
    for (const link of links.filter(Boolean)) {
      let url;
      try { url = new URL(link, page.url); }
      catch { check(false, file, `invalid URL: ${link}`); continue; }
      if (url.origin !== origin) continue;
      let target = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
      try {
        if ((await stat(target)).isDirectory()) target = path.join(target, "index.html");
        await stat(target);
      } catch { check(false, file, `missing local target: ${link}`); continue; }
      if (url.hash && pages.has(target)) {
        check(pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1))), file, `missing anchor: ${link}`);
      }
      if (node.tagName === "meta" && attribute(node, "property") === "og:image") {
        const png = await readFile(target);
        check(png.subarray(1, 4).toString() === "PNG" && png.length >= 24 && png.readUInt32BE(16) === 1200 && png.readUInt32BE(20) === 630,
          file, "sharing image must be a 1200 × 630 PNG");
      }
    }
  }
}

const css = (await Promise.all((await files(root)).filter((file) => file.endsWith(".css")).map((file) => readFile(file, "utf8")))).join("\n");
const definitions = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1]));
for (const [, variable] of css.matchAll(/var\((--[\w-]+)\)/g)) {
  check(definitions.has(variable), root, `undefined CSS variable: ${variable}`);
}
check(pages.size > 0, root, "no built HTML pages found");
if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Site checks passed: ${pages.size} pages; local links, assets, anchors, landmarks, article metadata, and CSS variables.`);
}
