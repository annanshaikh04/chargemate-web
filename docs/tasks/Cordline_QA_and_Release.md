# Task: Cordline QA and release

**Objective:** Run automated verification plus manual (or browser-assisted) smoke on all public routes before treating the MUS prototype as release-ready for demos. Fix any regressions before handoff.

**Prerequisites:** `npm install` complete; dev server optional for manual checks (`npm run dev`).

---

## Automated verification (mandatory)

Run from repository root:

```bash
npx tsc --noEmit
npm run lint
npm run build
python scripts/vibe-verify.py
```

On Windows, if the script errors on Unicode console output, use `PYTHONUTF8=1` (PowerShell: `$env:PYTHONUTF8=1`) or UTF-8 code page (`chcp 65001`).

**Optional:** Add `@playwright/test` and `e2e/smoke.spec.ts` only if the team wants CI browser checks; otherwise keep QA manual and record results below.

---

## Manual smoke checklist

Complete in a browser (desktop). For mobile menu, narrow the viewport or use device emulation.

| # | Check | Pass |
|:-:|---|:---:|
| 1 | `/` — hero, “Why Cordline”, trust strip, primary CTAs | [x] |
| 2 | `/shop` — three products, links to PDP | [x] |
| 3 | `/product/core` — detail, breadcrumb, disabled checkout note, Add to cart | [x] |
| 4 | Invalid product slug (e.g. `/product/invalid-slug-xyz`) — Cordline “Product not found” + Back to shop | [x] |
| 5 | `/cart` — line item after add; quantity − / + ; checkout disabled | [x] |
| 6 | Cart persists after full page refresh (same origin) | [ ] |
| 7 | `/fund` — campaign copy, disabled tiers, expanded FAQ, **Questions and feedback** mailto block | [x] |
| 8 | `/about` — team placeholders, contact | [x] |
| 9 | `/legal` — placeholder sections + regions | [x] |
| 10 | Header nav: Home, Shop, Fund, About; cart count updates after add | [x] |
| 11 | Mobile menu — open/close, links reachable (re-test before demo) | [ ] |
| 12 | Skip link — Tab from top of page, activate, focus moves to main content | [ ] |
| 13 | Footer: Legal + **Feedback** mailto | [x] |

Items 6, 11, 12 were not fully re-run in the finalize session; complete before a stakeholder demo.

---

## Regression session (2026-03-30 — verify + FR-015 + a11y)

**Task spec:** [`Cordline_Regression_Test_Pass.md`](Cordline_Regression_Test_Pass.md)

| Suite | Result |
| --- | --- |
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `python scripts/vibe-verify.py` | PASS |

**Code/doc changes in this pass:** FR-015 Phase A (`/fund` feedback section + footer Feedback link + FAQ from deck themes); Web Interface Guidelines–oriented fixes (header focus rings, cart `aria-label` / quantity `aria-live`, skip-link ring, fund tier buttons `disabled` + `aria-label`).

**Manual:** Same deferrals as above for items 6, 11, 12 unless re-run in browser before demo.

---

## QA results (finalize session — 2026-03-30)

| Suite | Result |
| --- | --- |
| `npx tsc --noEmit` | PASS (also covered by `next build` TypeScript step) |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `python scripts/vibe-verify.py` | PASS |
| Browser smoke (Cursor IDE browser, `localhost:3000`) | PASS for routes 1–5, 7–10, 13; invalid slug shows `src/app/product/[slug]/not-found.tsx` |

**MUS issues audit:** `docs/issues/FR-001.md`–`FR-009.md` have no unchecked acceptance boxes. **FR-015** Phase A acceptance criteria are checked; **FR-010**–**FR-014** remain Future with unchecked criteria.

**Follow-up:** Re-verify cart persistence after refresh (localStorage), skip-link focus order, and mobile menu in target browsers.
