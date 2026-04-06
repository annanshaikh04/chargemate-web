# Architecture memo — Cordline web prototype (MUS)

Lightweight map of routes, data, and client boundaries. For full requirements see [`Project_Requirements.md`](Project_Requirements.md) and [`Builder_Prompt.md`](Builder_Prompt.md).

## Stack

- **Next.js** App Router, **TypeScript**, **Tailwind CSS v4**
- **No server database** in MUS; **no** authenticated APIs
- **Package manager:** docs often say `pnpm`; repo may use `npm` (see [`Builder_Handoff_Report.md`](Builder_Handoff_Report.md))

## Route map

| Path | Role |
| :--- | :--- |
| `/` | Marketing home |
| `/shop` | Catalog |
| `/product/[slug]` | PDP; `generateStaticParams` from catalog |
| `/cart` | Cart UI (client-heavy) |
| `/fund` | Static campaign story, tiers, FAQ |
| `/about`, `/legal` | Static |

**Not-found:** `src/app/not-found.tsx` (global); `src/app/product/[slug]/not-found.tsx` (invalid slug).

## Data model (static)

**Product** (`src/lib/products.ts`):

- `slug`, `title`, `priceUsd`, `description`
- Helpers: `products[]`, `getProductBySlug`

All catalog edits happen in that module until FR-012 / CMS.

## Cart (client-only)

- **`CartProvider`** (`src/features/cart/cart-context.tsx`) — client component; wraps app via `src/components/providers.tsx`.
- **Shape:** `CartLines = Record<string, number>` (slug → quantity).
- **Persistence:** `localStorage` key `cordline-cart`; hydration deferred (`setTimeout(0)`) to satisfy React lint rules and avoid SSR mismatch.

## Server vs client

- **Server by default:** page shells, static copy, `generateStaticParams` for PDP.
- **Client:** cart provider, cart page interactions, mobile nav toggle (header), add-to-cart control.

## Hardware context (non-web)

Physical product details from the Everyday Friction deck (ports, retractables, removable battery) are **not** modeled in code. See [`reference/PDF_Review_Findings.md`](reference/PDF_Review_Findings.md) and [`reference/everyday-friction-mvp/page-003.png`](reference/everyday-friction-mvp/page-003.png) for diagram traceability. Future PDP copy can align bullets to that reference.

## Future extension points

- **FR-010–FR-015:** payments, auth, inventory, live fund data, CMS, campaign community — each needs backend or third-party services before implementation.
