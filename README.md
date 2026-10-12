# jessecanderson.dev

Jesse Anderson’s portfolio and Field Notes, built with Astro and deployed to GitHub Pages.

## Add a Field Note

1. Copy `src/content/notes/_template.md.example` to a new `.md` or `.mdx` file in the same directory.
2. Give the file a short URL-friendly name, such as `cyberdeck-agent-lessons.md`.
3. Update the title, description, date, and tags.
4. Write the post beneath the frontmatter.
5. Keep `draft: true` while working. Change it to `draft: false` when it is ready to publish.
6. Run `npm run dev` to preview, then commit and push to `main`. GitHub Pages deploys automatically.

The homepage shows the two most recent published notes. The complete collection lives at `/notes/`, the RSS feed at `/rss.xml`, and older writing at `/archive/`.

Markdown files use UTF-8 and fully support Japanese or mixed English/Japanese content:

```md
---
title: "Cyberdeck 開発ノート"
description: "ローカル AI エージェントを扱うために学んだこと。"
published: 2026-07-29
tags: [cyberdeck, ai, 日本語]
draft: false
---

## 今日学んだこと

日本語と English を同じ記事で自由に使えます。
```

Use `.md` for normal posts. Use `.mdx` when a post needs an embedded component or interactive demonstration.

Notes automatically receive reading time, an outline when they have at least three second-level headings, related notes based on shared tags, and a title-specific sharing image. Add an optional `updated` date to show when an existing note was revised.

## Local development

```sh
nvm use
npm install
npm run dev
```

Validate the production site with:

```sh
npm run build
```

The build also checks local links, assets, fragment targets, shared page landmarks, article metadata, and CSS variables. To rerun those checks against an existing build, use `npm run check:site`.

Shared navigation and article elements live in `src/components/`. Active styles are in `static/portfolio.css`, `static/archive.css`, and `static/notes.css`. Sharing images are generated at build time by `src/pages/social/[...slug].png.ts`.

The Cyberdeck capture in `static/images/cyberdeck-agent-command.svg` comes from the project’s `docs/screenshots/agent-command.svg`. Replace it with a fresh public sample capture when the interface changes.
