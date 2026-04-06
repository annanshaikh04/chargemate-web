# Builder Prompt — Cordline web prototype

## Stack-specific instructions

- **Framework:** Next.js App Router, **TypeScript**, **`src/` directory**, import alias `@/*`.
- **Package manager:** **pnpm** (PowerShell-safe commands on Windows).
- **Styling:** Tailwind CSS **v4** — apply the theme tokens from the `/vibe-build` workflow to `src/app/globals.css` after scaffold (see `docs/Coding_Guidelines.md`).
- **Data:** Use static modules (e.g. `src/lib/products.ts`) for catalog and campaign copy until a Future FR adds a backend.

## Mandatory mockup-driven implementation

The `docs/mockups/` folder is the **source of truth** for front-end layout, hierarchy, and component structure for v1.

You must **not** deviate from the layout, color palette, typography, or section order defined in the mockups without explicit user approval.

Before implementing any route, open the corresponding mockup file and replicate it in React:

| Route (planned) | Mockup |
| :--- | :--- |
| `/` | [`docs/mockups/home.html`](mockups/home.html) |
| `/shop` | [`docs/mockups/shop.html`](mockups/shop.html) |
| `/product/[slug]` (or single PDP) | [`docs/mockups/product.html`](mockups/product.html) |
| `/cart` | [`docs/mockups/cart.html`](mockups/cart.html) |
| `/fund` | [`docs/mockups/fund.html`](mockups/fund.html) |
| `/about` | [`docs/mockups/about.html`](mockups/about.html) |
| `/legal` | [`docs/mockups/legal.html`](mockups/legal.html) |

Cross-check tokens and patterns in [`docs/design/design-system.html`](design/design-system.html).

## MUS priority order

Implement in this order; after **every** TypeScript/TSX file edit run `npx tsc --noEmit`.

1. **FR-001:** Scaffold Next.js (pnpm, `--skip-install` merge pattern per `/vibe-build` if used), then `pnpm install`, verify `package.json` scripts.
2. **FR-002:** Root `layout.tsx`, header, footer, mobile nav — match mockup chrome.
3. **FR-003:** Home page.
4. **FR-004:** Shop catalog + static product list.
5. **FR-005:** Product detail (dynamic `[slug]` preferred; single product acceptable for speed if documented in the issue).
6. **FR-006:** Cart UI + persistence (client component + localStorage is acceptable).
7. **FR-007:** Fund / campaign page.
8. **FR-008:** About page.
9. **FR-009:** Legal placeholder + landmarks / heading order per mockups.

After MUS pages exist, run `python scripts/vibe-verify.py` (full pass before claiming done).

## Special considerations

- **Checkout:** Disable or label as “Prototype — coming soon.” No real card collection.
- **Campaign numbers:** Static percentages and amounts are fine; add a code comment that they are placeholders.
- **Images:** Use placeholders (gray boxes or `placeholder.com`-style) until real assets exist.
- **SEO:** Optional minimal `metadata` export per page; not required for internal prototype beyond sensible `<title>`.

## 21st.dev integration (optional)

Use the **21st-dev-components** skill only **after** mockups are approved and when a section’s **structure** matches a chosen component.

- Resolve component pages with the skill’s scripts (`resolve-21st-component.mjs`, `fetch-21st-source.mjs`) when you have a specific 21st.dev URL.
- **Do not** change information architecture or section order to fit a component; adapt the component to the mockup.
- If 21st.dev is unavailable or adds heavy dependencies, implement directly from the mockups.

## Handoff

When MUS is complete, create `docs/Builder_Handoff_Report.md` per `/vibe-build` workflow with verification table and file list.
