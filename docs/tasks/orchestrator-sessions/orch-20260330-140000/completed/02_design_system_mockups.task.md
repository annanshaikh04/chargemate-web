# Task 02 — Verify design system and mockups

## Agent Setup (DO THIS FIRST)

### Workflow to follow
Read the **`/vibe-design`** workflow. Treat [`docs/design/design-system.html`](../../../../design/design-system.html) and [`docs/mockups/`](../../../../mockups/) as the visual contract.

### Prime agent context
Run **`/vibe-primeAgent`**. Open [`docs/Builder_Prompt.md`](../../../../Builder_Prompt.md) mockup mapping table.

### Required skills

| Skill | Why |
|-------|-----|
| ui-ux-pro-max | Spot obvious UX/a11y gaps in static HTML |
| 21st-dev-components | Optional reference only — **do not** swap IA for a component |

---

## Objective
Confirm design artifacts are complete, responsive in browser smoke check, and aligned with sitemap.

## Scope
- [`docs/design/sitemap.md`](../../../../design/sitemap.md) lists all pages.
- Each route in [`docs/Builder_Prompt.md`](../../../../Builder_Prompt.md) has a mockup HTML file.
- `design-system.html` documents tokens used in mockups (brand, ink, radius, fonts).

## Definition of done
- [ ] Seven mockups exist: `home`, `shop`, `product`, `cart`, `fund`, `about`, `legal`
- [ ] Shared nav/footer pattern is consistent across mockups
- [ ] Design system covers colors, type, buttons, cards, forms, nav pattern

## Expected artifacts
- List of any discrepancies to fix before `/vibe-build`

## Constraints
- Keep scope to verification; HTML edits only if correcting doc errors per user request.
