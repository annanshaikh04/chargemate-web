# PDF → repository gap matrix

Crosswalk from the **Everyday Friction** MVP deck ([`PDF_Review_Findings.md`](PDF_Review_Findings.md)) to Cordline docs and app. Use this when prioritizing **documentation updates** and **future** implementation (not MUS).

| PDF theme / slide | Covered by existing doc or code | Action |
| :--- | :--- | :--- |
| Title + team roster | N/A in repo | **none** (reference only); optional credits on `/about` |
| Physical mock-up / parts list (ports, EU–US, removable bank, retractables, plugs) | [`Vision_Brief.md`](../Vision_Brief.md) high-level only; PDP bullets are generic | **SUGGESTION:** add “Hardware reference (deck)” bullet list in Vision or [`mode-architecture_Cordline.md`](../mode-architecture_Cordline.md) appendix |
| Model plan diagram (5 female ports, 4 male retractables, removable battery) | Not in mockups | **SUGGESTION:** future PDP/specs table; link to [`page-003.png`](everyday-friction-mvp/page-003.png) |
| GoFundMe-type site + create-fundraiser wireframe | [`FR-007`](../issues/FR-007.md) static `/fund`; [`fund.html`](../mockups/fund.html) | **Future:** **FR-015** (feedback, Q&A, story editor parity); **not** MUS |
| Manufacturing plan (partners, cost, pricing) | Not a web FR | **none** for `src/`; track in playbook / business backlog |
| Audience questions (features, customization, size) | [`fund.html`](../mockups/fund.html) FAQ is static | **SUGGESTION:** extend FAQ copy from slide 6 for demos; optional future “feedback form” under FR-015 |
| Thank you / Q&A | N/A | **none** |

## PRD / issue changes applied from this sync

- **FR-015** added (Future): deck-aligned **campaign + community** features beyond static `/fund`.
- **Vision Brief:** one-line note on **Everyday Friction** (deck) vs **Cordline** (public prototype name).

## Explicit non-actions (scope control)

- No new mockup HTML required **unless** you decide to visualize the slide-4 wireframe.
- No change to MUS verification (`FR-001`–`FR-009` remain complete as implemented).
