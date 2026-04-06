# Cordline web prototype

Early-access **hardware startup** marketing site: shop catalog, product detail, cart (client + `localStorage`), crowdfunding-style fund page, about, and legal placeholders. Static data only — no payments, auth, or live campaign API in this milestone.

## Stack

- **Next.js** (App Router), **TypeScript**
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- App and components under **`src/`** with **`@/*`** import alias

## How to run

### Development (frontend + app server)

This repo is a **single Next.js application**. There is no separate “backend” process for the MUS prototype: pages render on the server or as static HTML, and the cart uses the browser (`localStorage`). One command starts everything you need for local work.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (default port **3000**). The dev server serves the UI and would also host any future [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) under `src/app/api/` in the **same** Node process.

### Production

```bash
npm run build
npm run start
```

Same single process: optimized build, then `next start` (default port **3000** unless you set `PORT`).

### “Backend” in this milestone

- **No standalone API or database server** ships with Cordline MUS. Product data lives in [`src/lib/products.ts`](src/lib/products.ts); cart state is client-side.
- When you implement Future FRs (e.g. FR-010 payments, FR-011 auth), add **Next.js Route Handlers** (`src/app/api/...`) and/or a **separate service**, then document the **second** terminal/command here.

### Optional second terminal

Not required for the prototype. Examples:

- **Terminal 1:** `npm run dev` — web app  
- **Terminal 2:** `python scripts/vibe-verify.py` — automated checks, or a future worker/API once you add one

### Verification commands

```bash
npm run lint
npx tsc --noEmit
python scripts/vibe-verify.py
```

**Package manager:** Docs may reference **pnpm**; this repo was verified with **npm** (`package-lock.json`). Use pnpm if your team standardizes on it.

## Environment variables

**None required** for the MUS prototype. Add secrets only when implementing Future FRs (payments, auth, CMS, live fund data).

## Documentation

| Doc | Purpose |
| --- | --- |
| [docs/Vision_Brief.md](docs/Vision_Brief.md) | Product vision |
| [docs/Project_Requirements.md](docs/Project_Requirements.md) | Requirements and MUS scope |
| [docs/Builder_Prompt.md](docs/Builder_Prompt.md) | Build instructions and mockup mapping |
| [docs/mockups/](docs/mockups/) | HTML mockups (layout source of truth) |
| [docs/Coding_Guidelines.md](docs/Coding_Guidelines.md) | Code conventions |
| [docs/dev/AGENTS.md](docs/dev/AGENTS.md) | Agent / Next.js notes |
| [docs/reference/](docs/reference/) | MVP deck PNGs + PDF review / gap matrix |
| [docs/mode-architecture_Cordline.md](docs/mode-architecture_Cordline.md) | Routes, data, cart boundaries |
| [docs/Implementation_Playbook_Next_Steps.md](docs/Implementation_Playbook_Next_Steps.md) | Post-MUS FR order, QA, guidelines, 21st.dev |
| [docs/tasks/Cordline_QA_and_Release.md](docs/tasks/Cordline_QA_and_Release.md) | Manual + automated QA checklist |
| [docs/tasks/Cordline_Regression_Test_Pass.md](docs/tasks/Cordline_Regression_Test_Pass.md) | Repeatable regression gate |

**PDF page export:** `pip install pymupdf` then `python scripts/export-pdf-pages.py` (writes `docs/reference/everyday-friction-mvp/`).

## Routes

| Path | Description |
| --- | --- |
| `/` | Home |
| `/shop` | Product grid |
| `/product/[slug]` | Product detail (`core`, `travel-kit`, `refill-pack`) |
| `/cart` | Cart + quantity + prototype checkout |
| `/fund` | Campaign story, static metrics, tiers, FAQ, feedback mailto (FR-015 Phase A) |
| `/about` | Team / contact placeholders |
| `/legal` | Legal placeholders |

Unknown product slugs use the segment **not-found** UI; other unknown paths use the root **`not-found`** page (HTTP 404).

## QA

See [docs/tasks/Cordline_QA_and_Release.md](docs/tasks/Cordline_QA_and_Release.md) for the full checklist and recorded results.

## License / brand

Placeholder content only until legal and brand assets are finalized.
