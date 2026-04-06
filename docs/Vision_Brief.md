# Vision Brief — Cordline (placeholder brand)

## Executive summary

**Cordline** is a preliminary hardware startup brand (placeholder name—replace before launch) for an **adjustable, portable cable-management device with an onboard battery**. The first public touchpoint is a **lean multi-page web prototype** that feels like a credible **online store** (browse, product detail, cart) and a **crowdfunding campaign** (story, goal, tiers, FAQ)—without real payments or backend complexity in v1.

**Course / deck name:** The stakeholder deck uses the group name **Everyday Friction** (see [`docs/reference/everyday-friction-mvp/`](reference/everyday-friction-mvp/)). **Cordline** remains the **public prototype** product name in mockups and code until branding is finalized.

## Mission

Reduce everyday friction from tangled cables and dead devices by combining **organized routing**, **portability**, and **on-device power** in one compact product.

## Audience

- **Shoppers:** People comparing pre-order / early-access hardware online.
- **Backers:** People willing to support an early-stage device via a campaign-style page.

## Product pillars (messaging)

1. **Adjustable** — Fits different bags, desks, and travel setups.
2. **Portable** — Designed to move with you, not stay behind a monitor.
3. **Powered** — Onboard battery addresses “low battery at the wrong time.”

## Prototype goals (v1)

- **Multi-page** experience: Home, Shop, Product, Cart, Fund (campaign), About, Legal.
- **E-commerce patterns** inspired by large retailers: clear catalog grid, PDP with specs and primary actions.
- **Campaign patterns** inspired by crowdfunding: narrative, progress, tiers, FAQ—**static/mock numbers** acceptable.
- **Fast to build:** static or client-only state; no payment processor, no user accounts, no inventory API.

## Non-goals (explicitly out of scope for MUS)

- Real checkout, Stripe, or wallet flows.
- Authentication, profiles, or order history backed by a database.
- Live crowdfunding platform embeds or webhook sync.
- CMS, analytics pipelines, or email marketing automation.

## Tech direction (for builders)

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS v4**, **pnpm** on Windows/PowerShell.
- **Mockup-driven UI:** implement from `docs/mockups/` and tokens in `docs/design/design-system.html`.

## Orchestrator handoff

1. Confirm PRD and issues: [`Project_Requirements.md`](Project_Requirements.md), [`docs/issues/`](issues/).
2. Design artifacts: [`design/sitemap.md`](design/sitemap.md), [`design/design-system.html`](design/design-system.html), [`mockups/`](../mockups/).
3. Builder instructions: [`Builder_Prompt.md`](Builder_Prompt.md).
4. Session plan: [`tasks/orchestrator-sessions/orch-20260330-140000/master_plan.md`](tasks/orchestrator-sessions/orch-20260330-140000/master_plan.md).
5. PDF-derived reference: [`reference/PDF_Review_Findings.md`](reference/PDF_Review_Findings.md), [`reference/PDF_to_Repo_Gap_Matrix.md`](reference/PDF_to_Repo_Gap_Matrix.md).

**Suggested next commands in a fresh agent session:**

- `/vibe-primeAgent` — load guidelines and issue state.
- `/vibe-build` — scaffold Next.js per Builder workflow, then implement FRs in order listed in `Builder_Prompt.md`.
- `/vibe-continueBuild` — resume incomplete acceptance criteria in `docs/issues/`.

## Skills registry (reference)

| Skill / area | Use when |
|--------------|----------|
| nextjs-standards | App Router, Tailwind v4, typing discipline |
| 21st-dev-components | Optional presentational blocks **after** mockups are locked |
| frontend-design / ui-ux-pro-max | Visual polish pass if mockups need refinement |

---

*Replace the Cordline name, logo, and final palette in `design-system.html` and mockups before external launch.*
