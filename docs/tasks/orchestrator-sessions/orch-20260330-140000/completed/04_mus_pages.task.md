# Task 04 — Implement MUS pages (FR-002–FR-009)

## Agent Setup (DO THIS FIRST)

### Workflow to follow
Read **`/vibe-build`** MUS implementation loop and **`/vibe-continueBuild`**. After **every** TypeScript/TSX file edit: `npx tsc --noEmit`.

### Prime agent context
Run **`/vibe-primeAgent`**. Incomplete work lives in [`docs/issues/`](../../../../issues/) — start at FR-002 if FR-001 is done.

### Required skills

| Skill | Why |
|-------|-----|
| nextjs-standards | Components, Server vs Client, routing |
| 21st-dev-components | Optional: fetch presentational blocks **only** if they match mockups |
| frontend-design | Cohesive UI if deviating from Tailwind utility patterns |

---

## Objective
Implement layout and all MUS routes to match mockups; wire static catalog and client cart.

## Scope
- FR-002: App shell
- FR-003: Home
- FR-004: Shop
- FR-005: PDP `[slug]`
- FR-006: Cart + persistence
- FR-007: Fund
- FR-008: About
- FR-009: Legal + a11y baseline

## Definition of done
- [ ] All acceptance criteria checked for FR-002–FR-009
- [ ] `python scripts/vibe-verify.py` passes (after `package.json` exists)
- [ ] `docs/Builder_Handoff_Report.md` created per `/vibe-build`

## Expected artifacts
- `src/components/layout/*`, `src/app/**/page.tsx`, `src/lib/products.ts`, cart feature module
- Handoff report with file tree and verification table

## Constraints
- No real payments (FR-010). No auth (FR-011).
- Mockup-driven: [`docs/mockups/`](../../../../mockups/) is source of truth for layout.
