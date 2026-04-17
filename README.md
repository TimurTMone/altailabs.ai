# Altai Labs — altailabs.ai

An AI Software Factory. We don't take projects. We build companies.

This is the company site + private admin dashboard for managing leads and AI chat transcripts.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** + Framer Motion + next-themes
- **Claude API** (Sonnet 4) for the AI chat widget
- **Vercel KV** (Upstash Redis) for lead + chat persistence
- **Resend** (optional) for lead email notifications
- Basic-auth middleware for `/admin`

## Structure

```
src/
├── app/
│   ├── page.tsx              Landing (hero, ventures, collaborate, thesis, contact)
│   ├── cases/[slug]/         Individual venture case study pages
│   ├── admin/                Protected admin dashboard (basic auth)
│   │   ├── page.tsx          Dashboard home (stats + recent activity)
│   │   ├── leads/            Lead inbox
│   │   └── chats/            AI chat transcripts viewer
│   └── api/
│       ├── contact/          Contact form handler (writes to KV + emails)
│       ├── chat/             Claude-powered AI chat (writes to KV)
│       └── admin/            Admin-only read APIs
├── components/
│   ├── layout/               Header, Footer
│   ├── sections/             Landing page sections
│   ├── ui/                   ScrollReveal, GlowCard, SectionHeading, etc.
│   ├── admin/                Sidebar, StatCard
│   └── ai-chat.tsx           Floating chat widget
├── lib/
│   ├── projects.ts           Venture data (12 projects)
│   ├── services.ts           Collaboration tiers
│   ├── kv.ts                 KV helpers (saveLead, getLeads, saveChatMessage...)
│   └── auth.ts               Basic-auth helper
└── middleware.ts             Admin route protection
```

## Local development

```bash
cp .env.example .env.local    # Fill in your keys
npm install
npm run dev                   # http://localhost:3000
```

Visit `/admin` — your browser will prompt for basic auth. Enter `ADMIN_PASSWORD`.

## Environment variables

See [.env.example](.env.example). At minimum you need:

- `ADMIN_PASSWORD` — any string you pick, used to log into `/admin`
- `ANTHROPIC_API_KEY` — powers the AI chat widget
- `KV_*` — 4 values from a Vercel KV database (Upstash Redis)

Optional:
- `RESEND_API_KEY` — sends you an email when a lead comes in (requires `altailabs.ai` verified as a sending domain)

## Deploy (Vercel)

1. Push to the connected GitHub repo
2. Import the repo in Vercel (framework: Next.js, auto-detected)
3. Create a Vercel KV database in the dashboard → copy env vars into the project
4. Add `ADMIN_PASSWORD` + `ANTHROPIC_API_KEY`
5. Deploy
6. In Settings → Domains, add `altailabs.ai` and `www.altailabs.ai`

## Admin access

`/admin` is protected by HTTP basic auth via [src/middleware.ts](src/middleware.ts). No login page, no session — just browser-native auth.

- Username: *(anything, ignored)*
- Password: `ADMIN_PASSWORD` env var

To change the password, update the env var in Vercel and redeploy.

## What's inside `/admin`

- **Dashboard** — total leads, unhandled count, leads today, total chat sessions, recent activity
- **Leads** — full table of contact form submissions, mark as handled, quick reply links
- **AI Chats** — every conversation prospects have had with the assistant
