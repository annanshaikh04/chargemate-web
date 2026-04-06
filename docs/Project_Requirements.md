# Project Requirements Document

## Project overview

| Field | Value |
| :--- | :--- |
| **Name** | Cordline (placeholder) — adjustable portable cable management + onboard battery |
| **Mission** | Credible startup web prototype: shop-like flows + campaign-style fundraising page, built quickly with mock data. |
| **Tech stack** | Next.js (App Router), TypeScript, Tailwind CSS v4, ESLint, pnpm |
| **MUS** | Static/mock commerce + campaign UI; client-side cart persistence acceptable (e.g. localStorage). |

## Functional requirements

| FR ID | Description | User Story | Status |
| :--- | :--- | :--- | :--- |
| FR-001 | Next.js project scaffold | As a developer, I want a standard App Router project with TS, Tailwind, and pnpm, so that features can be added consistently. | MUS |
| FR-002 | App shell (nav + footer) | As a visitor, I want a responsive header and footer on every page, so that I can navigate the whole prototype. | MUS |
| FR-003 | Home / landing | As a visitor, I want a clear hero and CTAs to shop and back the project, so that I understand the product quickly. | MUS |
| FR-004 | Shop (catalog) | As a shopper, I want a simple product grid with placeholder SKUs, so that the site feels like a real store. | MUS |
| FR-005 | Product detail (PDP) | As a shopper, I want specs, price, and add-to-cart on a product page, so that I can evaluate the device. | MUS |
| FR-006 | Cart | As a shopper, I want a cart with line items and subtotal, so that I can review selections (checkout remains prototype). | MUS |
| FR-007 | Fund / campaign page | As a backer, I want a campaign-style page with story, progress, tiers, and FAQ, so that the ask for early support is clear. | MUS |
| FR-008 | About | As a visitor, I want a short team/mission page, so that the startup feels real. | MUS |
| FR-009 | Legal placeholder + a11y baseline | As a visitor, I want legal placeholders and sensible heading/landmark structure, so that the prototype is presentable and accessible. | MUS |
| FR-010 | Real payments & checkout | As a shopper, I want to pay securely, so that I can complete a purchase. | Future |
| FR-011 | User accounts & orders | As a user, I want sign-in and order history, so that I can track purchases. | Future |
| FR-012 | Inventory / admin API | As an operator, I want backend inventory, so that stock is authoritative. | Future |
| FR-013 | Live crowdfunding integration | As a backer, I want embedded live campaign data, so that totals stay in sync with a platform. | Future |
| FR-014 | CMS & marketing automation | As marketing, I want CMS and email capture workflows, so that we can scale content. | Future |
| FR-015 | Campaign community (deck-aligned) | As a visitor, I want feedback and Q&A paths and richer campaign story support, so that the site matches the MVP deck’s crowdfunding-style goals beyond static copy. | Future |

## Issue mapping

Each FR has a matching file under [`docs/issues/`](issues/) (FR-001 through FR-015 for traceability; MUS implementation focuses on FR-001–FR-009).

## Dependencies

- **Design:** [`docs/design/design-system.html`](design/design-system.html), [`docs/mockups/`](../mockups/)
- **Law:** [`Coding_Guidelines.md`](Coding_Guidelines.md)
- **Verification:** [`scripts/vibe-verify.py`](../scripts/vibe-verify.py) (after `package.json` exists)
