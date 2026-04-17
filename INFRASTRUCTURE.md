# Altai Labs — Infrastructure

> A single-server setup that runs the entire Altai Labs domain portfolio.
> No Vercel. No Render. No Netlify. Just Hetzner + nginx + PM2 + Postgres + Redis.

## Why this architecture

- **Cost**: €5/month for the server, vs. scaling fees on serverless platforms
- **Control**: every byte lives on hardware we rent; no vendor lock-in
- **Simplicity**: one SSH, one `pm2 status` shows everything
- **Portability**: move to any VPS by running the same scripts

## Architecture diagram

```
                          Internet
                             │
                             ▼
                    ┌────────────────┐
                    │   Cloudflare   │  ← DNS for altailabs.ai
                    │   Namecheap    │  ← DNS for .co/.club/.fit/.xyz/.art
                    │   Hostinger    │  ← DNS for timurmone.com
                    └────────┬───────┘
                             │ (DNS → A record)
                             ▼
            ┌──────────────────────────────────┐
            │    Hetzner CX22  (116.203.125.2)  │
            │    Ubuntu 24.04 · 15GB · 150GB   │
            └─────────────┬────────────────────┘
                          │
          ┌───────────────┼───────────────────┐
          ▼               ▼                   ▼
      ┌───────┐      ┌─────────┐        ┌──────────┐
      │ Nginx │      │  PM2    │        │  Disk    │
      │ 80/443│      │ (5 apps)│        │/var/www/ │
      └───┬───┘      └────┬────┘        └──────────┘
          │               │
          │  routes by    │
          │  Host header  │
          ▼               ▼
 ┌─────────────────────────────────────────────┐
 │  Services running on localhost               │
 │                                              │
 │  :3000  altailabs         (Next.js)          │
 │  :3010  altailabs-club-web (Next.js)         │
 │  :3011  altailabs-club-api (Express)         │
 │  :3020  altailabs-art      (Next.js)         │
 │  :3030  timurmone          (Next.js)         │
 │                                              │
 │  :5432  PostgreSQL 16                        │
 │  :6379  Redis 7                              │
 │  :13779 aaPanel GUI                          │
 └─────────────────────────────────────────────┘
```

## Domain → Service map

| Domain | Behavior | Process |
|--------|----------|---------|
| `altailabs.ai` | Serves site | `altailabs` (:3000) |
| `altailabs.ai/admin` | Basic-auth gate → admin UI | same process |
| `altailabs.club` | Serves tournament UI | `altailabs-club-web` (:3010) |
| `api.altailabs.club` | Backend API (Express) | `altailabs-club-api` (:3011) |
| `altailabs.art` | Serves Ai-Prez | `altailabs-art` (:3020) |
| `altailabs.xyz` | Serves static JARAAN pitch page | Nginx `root` directive only |
| `timurmone.com` | Serves personal site | `timurmone` (:3030) |
| `altailabs.co`, `.fit` | 301 redirect → altailabs.ai | Nginx return directive |

## Auto-deploy pipeline

```
Local edit
    │ git commit + push
    ▼
GitHub repo main branch
    │ triggers workflow
    ▼
GitHub Actions (ubuntu-latest)
    │ SSH with restricted deploy key
    ▼
Hetzner server
    │ runs /usr/local/bin/<project>-deploy.sh
    │   - git fetch / reset
    │   - install deps
    │   - build
    │   - pm2 reload
    ▼
Live in ~2-3 minutes
```

## Shared infrastructure

- **PostgreSQL** — multi-tenant via database per project (`altailabs_club`, `ai_prez`)
- **Redis** — multi-tenant via DB index (`/0` altailabs.ai, `/1` altailabs.club)
- **SSL** — Let's Encrypt via Certbot, auto-renews every 90 days for all domains

## Adding a new project

1. Build Next.js app locally, push to a new GitHub repo
2. On server: `cd /var/www && git clone <repo> <domain>`
3. On server: install deps, create `.env`, build, `pm2 start ecosystem.config.js`
4. On server: write `/etc/nginx/sites-available/<domain>` block (proxy to new port)
5. On server: `certbot --nginx -d <domain> -d www.<domain>`
6. In repo: add `.github/workflows/deploy.yml` (copy from existing)
7. In repo: add GitHub secrets `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`
8. On server: install deploy script + restricted key

## File locations

| Path | Purpose |
|------|---------|
| `/var/www/<domain>/` | Project source + build output |
| `/etc/nginx/sites-available/<domain>` | Nginx server block |
| `/etc/letsencrypt/live/<domain>/` | SSL cert + key |
| `/usr/local/bin/<name>-deploy.sh` | Server-side deploy script |
| `/root/.ssh/authorized_keys` | SSH public keys (main + deploy keys) |
| `/var/log/<name>-deploy.log` | Deploy history |
| `~/.pm2/logs/` | App runtime logs |

## Runbook

See `HETZNER_CREDS.md` (gitignored) for ops commands with real credentials.
