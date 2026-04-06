# Implementation playbook — next steps (post-MUS)

Use this after **FR-001–FR-009** are done (see [`Builder_Handoff_Report.md`](Builder_Handoff_Report.md)). It encodes the **vibe-continueBuild / vibe-primeAgent / orchestrator** style sequence without duplicating full workflow files.

## 1. Prime context (start of every build session)

1. Read [`Coding_Guidelines.md`](Coding_Guidelines.md)
2. Read [`Builder_Prompt.md`](Builder_Prompt.md)
3. Scan [`docs/issues/`](issues/) — open acceptance boxes = work (`grep` for `- [ ]`)
4. Run health checks from repo root:
   - `npx tsc --noEmit`
   - `npm run lint` (or `pnpm lint`)
   - `python scripts/vibe-verify.py`

## 2. Pick the next FR

| Priority | FRs | Notes |
| :--- | :--- | :--- |
| Payments & revenue | FR-010 | Needs provider, legal, webhooks |
| Accounts | FR-011 | Auth provider, session, order storage |
| Operations | FR-012 | Inventory API, admin |
| Campaign data | FR-013 | Live totals / embed |
| Marketing | FR-014 | CMS, email, consent |
| Deck-aligned community | FR-015 | Feedback + Q&A + richer `/fund` — see [`reference/PDF_to_Repo_Gap_Matrix.md`](reference/PDF_to_Repo_Gap_Matrix.md) |

Implement one FR at a time; update the matching `docs/issues/FR-XXX.md` checkboxes when done.

## 3. Architecture before large changes

For anything touching auth, payments, or new APIs, skim [`mode-architecture_Cordline.md`](mode-architecture_Cordline.md) and extend it (or add `docs/features/<name>.md` per [`features/README.md`](features/README.md)).

## 4. QA and release

- Follow [`tasks/Cordline_QA_and_Release.md`](tasks/Cordline_QA_and_Release.md)
- Optional CI: add `@playwright/test` and `e2e/smoke.spec.ts` if the team wants automated smoke (not required for MUS)

## 5. Web Interface Guidelines pass

When UI is stable:

1. Fetch the latest rules: [Vercel Web Interface Guidelines (raw)](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md)
2. Review `src/**/*.tsx` (layout, pages, cart, header/footer)
3. Track fixes in `file:line` form as the guideline document specifies
4. Re-run `npm run lint` and manual keyboard checks (skip link, focus order)

## 6. 21st.dev components (optional polish)

**After** mockups are source of truth per [`Builder_Prompt.md`](Builder_Prompt.md):

- Use **Manual mode**: collect component URLs or prompts per section (header, hero, cards, FAQ)
- Do **not** change information architecture to fit a component
- Integrate only presentational slices; keep tokens aligned with [`design/design-system.html`](design/design-system.html)

## 7. PDF / course deck alignment

- Raster export: `python scripts/export-pdf-pages.py`
- Review output: [`reference/PDF_Review_Findings.md`](reference/PDF_Review_Findings.md)
- Gap tracking: [`reference/PDF_to_Repo_Gap_Matrix.md`](reference/PDF_to_Repo_Gap_Matrix.md)

## 8. Orchestrator session (optional)

New multi-phase effort: create `docs/tasks/orchestrator-sessions/orch-<timestamp>/` with `master_plan.md` and task files; see existing [`tasks/orchestrator-sessions/orch-20260330-140000/`](tasks/orchestrator-sessions/orch-20260330-140000/) as a template.
