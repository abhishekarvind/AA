# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.a

## Project

Personal portfolio site built with React 19 + Vite + Tailwind CSS v4.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # eslint check
npm run preview   # preview production build
```

## Architecture

Single-page app — all content renders in `src/App.jsx`. No routing is active despite `react-router-dom` being installed.

- Content lives in `src/data.js`; sections are components in `src/App.jsx`
- Static images must be in `public/assets/` (not `src/assets/`) — Vite serves `public/` at the root, and Vercel requires this for static assets to resolve correctly
- Custom fonts are in `src/assets/fonts/`

## Key details

- **Tailwind CSS v4**: configured via the `@tailwindcss/vite` plugin in `vite.config.js` — there is no `tailwind.config.js` or PostCSS config. Use the v4 API (e.g., `@import "tailwindcss"` in CSS, not `@tailwind base/components/utilities`).
- **No TypeScript**: project uses plain `.jsx` files.
- **No tests**: no test framework is set up.
- **`no-unused-vars` rule** ignores names matching `^[A-Z_]` — uppercase constants are exempt.