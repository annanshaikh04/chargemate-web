# Orchestrator master plan — Cordline web prototype

**Session ID:** `orch-20260330-140000`  
**Created:** 2026-03-30  
**Vision:** [`docs/Vision_Brief.md`](../../../Vision_Brief.md)

## Overview

Documentation and build orchestration for a **lean Next.js prototype**: e-commerce-style pages (home, shop, PDP, cart) plus a **GoFundMe-style** campaign page, About, and Legal. MUS is static/mock data with no real payments.

## Skills registry

| Skill | Path (Cursor) | When to use |
|-------|----------------|-------------|
| nextjs-standards | `C:\Users\ravul\.cursor\skills\nextjs-standards\SKILL.md` | App Router, Tailwind v4, typing, project conventions |
| 21st-dev-components | `C:\Users\ravul\.cursor\skills\21st-dev-components\SKILL.md` | Optional UI blocks **after** mockups; structure must match |
| frontend-design | `C:\Users\ravul\.cursor\skills\frontend-design\SKILL.md` | Polish pass if mockups need visual refinement |
| ui-ux-pro-max | `C:\Users\ravul\.cursor\skills\ui-ux-pro-max\SKILL.md` | UX review / design tokens tuning |

## Workflows registry

| Phase | Workflow | Purpose |
|-------|-----------|---------|
| Documentation | `/vibe-genesis` | PRD, issues, guidelines, scripts (done for this repo) |
| Design | `/vibe-design` | Design system + mockups (done — see `docs/design`, `docs/mockups`) |
| Scaffold | `/vibe-build` | Next.js + Tailwind v4 baseline |
| Implementation | `/vibe-continueBuild` | FR-by-FR with `tsc --noEmit` discipline |
| Session start | `/vibe-primeAgent` | Load guidelines, PRD, incomplete issues |

## Task dependency graph

```text
01_prd_and_issues (verify docs) → 02_design_system_mockups (verify artifacts)
  → 03_scaffold_next (FR-001) → 04_mus_pages (FR-002–FR-009)
```

## Progress checklist

- [x] PRD and issues authored (`docs/Project_Requirements.md`, `docs/issues/FR-001`–`FR-015`)
- [x] Coding guidelines and `scripts/vibe-verify.py` present
- [x] Design system and mockups present
- [x] Next.js scaffold (FR-001)
- [x] MUS pages and cart (FR-002–FR-009)
- [x] `python scripts/vibe-verify.py` full pass
- [x] `docs/Builder_Handoff_Report.md` generated
- [x] PDF deck export + reference docs (`docs/reference/`)

## Task files

| Order | File | Status |
|-------|------|--------|
| 1 | [`completed/01_prd_and_issues.task.md`](completed/01_prd_and_issues.task.md) | Completed |
| 2 | [`completed/02_design_system_mockups.task.md`](completed/02_design_system_mockups.task.md) | Completed |
| 3 | [`completed/03_scaffold_next.task.md`](completed/03_scaffold_next.task.md) | Completed |
| 4 | [`completed/04_mus_pages.task.md`](completed/04_mus_pages.task.md) | Completed |

Task files live under `completed/` for this session. For new work, start a new `orch-*` session or follow [`docs/Implementation_Playbook_Next_Steps.md`](../../../Implementation_Playbook_Next_Steps.md).

## Delegation snippet

```yaml
mode: vibe-code
message: |
  Continue from docs/Implementation_Playbook_Next_Steps.md and the next open Future FR (FR-010+).
  Read docs/Coding_Guidelines.md and docs/issues/FR-XXX.md for the chosen FR.
```

See [`Orchestrator_Summary.md`](Orchestrator_Summary.md) for verification results and outstanding risks.
