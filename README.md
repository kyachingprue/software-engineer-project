# Kyachingprue Marma · Software Engineer Portfolio

React + TypeScript + Vite portfolio with 4 routes (Home, About, Projects, Contact), light / dark / system themes, GSAP + Motion animation, Tailwind CSS v4 and shadcn-style UI components.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Things you need to replace

| What | Where |
| --- | --- |
| GitHub / LinkedIn / Facebook / X links | `src/data/site.ts` → `socials` (currently generic homepages) |
| Resume / CV file | replace `public/resume.pdf` (keep the same name). The Navbar Resume button and the Contact "Download CV" button both use it |
| Profile photo | replace `public/profile.png` |
| Fake projects on the Projects page | `src/data/projects.ts` (add `liveUrl` / `repoUrl` and the buttons appear) |
| Featured project descriptions on Home | `src/data/featured.ts` (explanation only, no links) |
| Skills | `src/data/skills.ts` |
| Hero text / roles / email | `src/data/site.ts` |

## Notes

- Routing uses `react-router-dom`; page titles/meta use `react-helmet-async`.
- The contact form opens the visitor's email app (`mailto:`), so no backend is needed. Swap in EmailJS, Formspree or an API route later if you want in-page sending.
- `vercel.json` rewrites all routes to `index.html` so deep links work on Vercel.
- Computer-scientist cards use gradient initials rather than photos. You can add real image URLs in `src/data/scientists.ts` if you have licensed images.
