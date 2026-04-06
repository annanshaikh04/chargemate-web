# Task: Cordline regression test pass

**Objective:** Re-verify the Cordline prototype after FR-015 Phase A and accessibility polish; record automated results and manual smoke status so future sessions can repeat the same gate.

**Priority:** High (before demos or merges)

**Scope:** MUS routes + `/fund` feedback section + footer; no FR-010+ backend. Playwright optional (not in repo unless you add it).

---

## Requirements

### Automated (mandatory)

- **[REQ-001]** From repo root: `npx tsc --noEmit`, `npm run lint`, `npm run build`, `python scripts/vibe-verify.py` — all PASS.

### Manual smoke (browser)

- **[REQ-002]** Routes: `/`, `/shop`, `/product/core`, invalid slug `/product/bad-slug`, `/cart`, `/fund`, `/about`, `/legal`.
- **[REQ-003]** `/fund`: new **Questions and feedback** block; **FAQ** includes features / customization / size; tier **Choose** buttons are disabled with clear styling.
- **[REQ-004]** Footer: **Feedback** mailto + **Legal** link; `nav` has `aria-label="Footer"`.
- **[REQ-005]** Header: desktop nav focus rings; cart link has `aria-label` with count; mobile menu toggle has focus ring; SVG `aria-hidden="true"`.
- **[REQ-006]** Cart: quantity group `aria-label`; quantity `role="status"` `aria-live="polite"`; +/- focus rings.
- **[REQ-007]** Skip link: visible on focus with ring (Tab from top).

### Definition of done

- All automated checks PASS.
- Manual checklist executed or explicitly deferred (note reason + date).
- [`docs/Builder_Handoff_Report.md`](../Builder_Handoff_Report.md) QA section updated for this pass.

---

## Implementation plan (executor)

### Phase 1 — Automated

- [ ] Run commands in REQ-001; fix any failures before closing task.

### Phase 2 — Manual

- [ ] Walk REQ-002–REQ-007 in Chrome or Edge; narrow viewport once for mobile menu.

### Phase 3 — Documentation

- [ ] Append **Regression session** notes to [`Cordline_QA_and_Release.md`](Cordline_QA_and_Release.md).
- [ ] Update Builder Handoff Report QA subsection.

---

## Files to touch (if fixing bugs)

| Area | Files |
| --- | --- |
| Fund / FR-015 | `src/app/fund/page.tsx` |
| Footer | `src/components/layout/footer.tsx` |
| Chrome / a11y | `src/components/layout/header.tsx`, `skip-link.tsx`, `src/app/cart/cart-page-client.tsx` |

---

## Success criteria

- TypeScript: PASS  
- ESLint: PASS  
- Production build: PASS  
- `vibe-verify.py`: PASS  
- Manual: documented pass/defer  

---

## Dependencies

**Depends on:** npm install complete, Python available for `vibe-verify.py`  
**Related:** [`Cordline_QA_and_Release.md`](Cordline_QA_and_Release.md), [`docs/issues/FR-015.md`](../issues/FR-015.md)

---

## Getting started

1. Read this task end-to-end.  
2. Run Phase 1 commands.  
3. Execute Phase 2 in a browser.  
4. Update QA docs (Phase 3).
