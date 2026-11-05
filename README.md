# Bob Mazzei — Author Website

Official author and publishing website for Bob Mazzei, built with Next.js, TypeScript, the App Router, Nextra 4, MDX and Tailwind CSS.

## Local development

Run `npm install`, then `npm run dev`.

Production verification uses `npm run build`.

The repository is intended for GitHub + Vercel deployment.

## Publishing a new article

1. Create an `.mdx` file under `src/content/`.
2. Add front matter using `docs/writing-template.mdx` as the starting point.
3. Write the article in normal Markdown/MDX. The front-matter `title` becomes the H1, so do not start the body with another H1.
4. Set `draft: false` when ready.
5. Commit and push to GitHub.
6. Vercel deploys it automatically and the piece appears under `/writing/`, RSS and the sitemap.

The file path is the stable public slug:

`src/content/the-memory-of-a-crime.mdx` → `/writing/the-memory-of-a-crime/`

Nested folders also work:

`src/content/essays/the-age-of-certainty.mdx` → `/writing/essays/the-age-of-certainty/`

Publication types:

- `article` — factual, analytical, cultural, political, technical or investigative writing.
- `essay` — personal, philosophical, argumentative or literary long-form writing.
- `fiction` — original short fiction or standalone fictional pieces.
- `extract` — extracts from published or forthcoming books.

Required front matter: `title`, `description`, `date`, `type`, `draft`.

Optional fields: `subtitle`, `seoDescription`, `updated`, `tags`, `featured`, `image`, `imageAlt`, `series`, `canonical`, `bookTitle`.

Reading time is calculated automatically. Drafts and future-dated pieces remain unpublished in production. Tags automatically generate tag pages, and related writing is selected from shared tags.

Publishing source of truth:

GitHub = editorial repository  
Nextra/MDX = content engine  
Next.js = application/site  
Vercel = publication/deployment
