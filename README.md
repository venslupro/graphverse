# GraphVerse — Graph World Models

Bilingual (English / 中文) landing site for **GraphVerse**, the open academic and collaboration hub for Graph World Models. Built with Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## Structure

- `/` — redirects to `/en` or `/zh` (saved `lang` cookie first, then the browser's `Accept-Language`)
- `/en`, `/zh` — statically generated pages; the header toggle switches language and remembers the choice
- `src/i18n/dictionaries.ts` — all site copy for both languages (edit text here)
- `src/i18n/config.ts` — locales and contact email
- `src/components/GraphCanvas.tsx` — animated message-passing graph background

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

Production domain: **https://graphverse.vercel.app** (Vercel project name `graphverse`).

```bash
vercel login
vercel --prod
```

Or push this repo to GitHub and import it at https://vercel.com/new — no configuration needed.
