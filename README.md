# Bob Mazzei — Author Website

Official author website for Bob Mazzei, built with Next.js, TypeScript, the App Router, Nextra 4, MDX and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
```

The repository is intended for GitHub + Vercel deployment.

## Publishing a new piece

Create an `.mdx` file inside `src/content/`. The folder/file path becomes the URL beneath `/writing/`.

For example:

```text
src/content/the-shape-of-evidence.mdx
→ /writing/the-shape-of-evidence/
```

Use front matter like this:

```yaml
---
title: "Article title"
description: "Short description used in listings and metadata."
date: "2026-10-04"
type: "essay"
tags:
  - reasoning
featured: false
draft: false
---
```

Fields:

- `title`: public title.
- `description`: listing and metadata summary.
- `date`: publication date in `YYYY-MM-DD` format.
- `type`: `essay`, `fiction` or `extract`.
- `tags`: optional list of internal/content tags.
- `featured`: optional editorial flag reserved for future use.
- `draft`: set to `true` to keep a piece out of production listings, RSS and sitemap; direct production access returns 404.

Reading time is calculated automatically from the MDX body.

Publishing workflow: create the file, write the piece, commit to GitHub and let Vercel deploy.
