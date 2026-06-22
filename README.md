# Robel Yohannes — Portfolio

A modern, premium personal portfolio website built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- Dark mode with professional blue/purple accents
- Glass morphism UI effects
- Smooth scroll animations via `@vueuse/motion`
- Fully responsive design
- SEO optimized with structured data
- Accessible navigation with skip links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

1. **Contact links** — Update `src/data/portfolio.ts` with your real email, LinkedIn, GitHub, and Telegram URLs.
2. **CV download** — Place your resume at `public/files/Robel-Yohannes-CV.pdf`.
3. **Domain** — Update canonical URLs in `index.html` and `public/robots.txt`.

## Tech Stack

- Vue 3 + TypeScript
- Vite
- Tailwind CSS v4
- @vueuse/motion
- Lucide Vue icons

## Deploy

Deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static hosting provider.

```bash
npm run build
```

The output will be in the `dist/` directory.
