# Portfolio — Sudarvel

Cinematic UX / product design portfolio for **Sudarvel**.

| Piece | Project |
|-------|---------|
| GitHub | [`SUDARVEL/Portfolio`](https://github.com/SUDARVEL/Portfolio) |
| Supabase | Separate project named **portfolio** (not the fitness DB) |
| Host | Vercel → Root = repo root |

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Framer Motion (scroll / hero presence)
- React Three Fiber / Drei (Gallery room)
- Supabase (profile, projects, contact — optional until keys are set)

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s in the site

- **Home** — full-bleed cinematic hero video, selected work, about, closing CTA
- **Work** + case studies — Oncosmart, Pulse Clinic, Atelier Market (sample narratives)
- **Gallery** — orbitable 3D frames
- **Resume** / **Contact**

Replace sample copy, email, and case studies in `src/content/site.ts` anytime. Drop a new hero file at `public/videos/hero.mp4` to swap the reel.

## Supabase

1. Create project **portfolio**
2. Run [`supabase/schema.sql`](supabase/schema.sql)
3. Create public Storage bucket `portfolio-media`
4. Set in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Without keys, the contact form falls back to `mailto:`.

Inspiration notes: [`docs/INSPIRATION.md`](docs/INSPIRATION.md)
