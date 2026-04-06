# Task 03 — Scaffold Next.js (FR-001)

## Agent Setup (DO THIS FIRST)

### Workflow to follow
Read **`/vibe-build`** (Context Loading + Project Scaffolding + Tailwind v4 globals). Use **pnpm** and PowerShell-safe commands per [`docs/Builder_Prompt.md`](../../../../Builder_Prompt.md).

### Prime agent context
Run **`/vibe-primeAgent`**. Read [`docs/issues/FR-001.md`](../../../../issues/FR-001.md) and [`docs/Coding_Guidelines.md`](../../../../Coding_Guidelines.md).

### Required skills

| Skill | Why |
|-------|-----|
| nextjs-standards | Scaffold options, Tailwind v4 `@theme`, App Router layout |

---

## Objective
Create the Next.js project at repo root and apply baseline styling tokens.

## Scope
- Execute FR-001 acceptance criteria exactly.
- Merge scaffold from temp directory per `/vibe-build` instructions.
- Apply `globals.css` content from Builder workflow / Coding Guidelines.
- `pnpm install`; run `npx tsc --noEmit` when TS exists.

## Definition of done
- [ ] All FR-001 acceptance criteria checked in `docs/issues/FR-001.md`
- [ ] `pnpm dev` starts without errors
- [ ] Type-check passes after edits

## Expected artifacts
- `package.json`, `src/app/`, `src/app/globals.css` with Tailwind v4 theme
- `pnpm-lock.yaml`

## Constraints
- Do not implement FR-002+ in this task unless trivial fallout from scaffold.
