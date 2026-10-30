# Yakasista Ltd — company website

Design "2a · Warm, village green". Five pages, all static: Home, Services, Case studies, About, Contact. Next.js (App Router), TypeScript, Tailwind CSS v4; Newsreader, DM Sans and JetBrains Mono via `next/font`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- Design tokens are in `src/app/globals.css`.
- Every page except Contact ends with the "Get in touch" banner: those pages live in the `src/app/(cta)` route group, whose layout adds it.
- VillageWatch screenshots (its own demo data) are in `public/screenshots/`. The About photo is a striped placeholder (`Photo` in `src/components/ui.tsx`) until a picture of the Bradfield Centre is added.
- The contact form has no backend: Send opens the visitor's email app addressed to info@yakasista.com. To deliver directly, add a route handler with an email service.
- No personal names or home address on the site.

Deployed to Vercel from the CLI (`vercel deploy --prod`); the project isn't connected to GitHub, so pushing doesn't deploy.
