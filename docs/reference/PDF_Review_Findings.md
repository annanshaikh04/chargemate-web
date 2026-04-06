# PDF review findings — Everyday Friction MVP deck

**Source:** [`everyday-friction-mvp/`](everyday-friction-mvp/) (PNG exports of `other/Everyday Friction - Preparing MVP Protoype.pdf`)  
**Review style:** Structured pass aligned with a code-review workflow (artifacts = slide images, not git diffs).

## Summary

The deck is a **seven-slide academic/group deck** (“Everyday Friction”: Shannon Cullen, Ryan Jankowski, Rohan Pratap Reddy Ravula, Annanahmed Shaikh) focused on **MVP preparation** for an adjustable cable-management / travel-power product. It adds **concrete hardware vocabulary** (retractable cables, removable battery, multi-port front face, EU–US power conversion) and a **GoFundMe-style website brief** (story, feedback, Q&A, pre-selling) that goes **beyond** the current Cordline **static campaign page** (`/fund`). Manufacturing plan and audience questions are **out of band** for the web MUS but useful for **Vision / roadmap** and **future FRs**.

## Per-page notes

| Page | Image | Content |
| :---: | :--- | :--- |
| 1 | [`page-001.png`](everyday-friction-mvp/page-001.png) | Title: **Preparing MVP Prototype**. Group **Everyday Friction**; member list (ties deck to project stakeholders). |
| 2 | [`page-002.png`](everyday-friction-mvp/page-002.png) | **Mock-Up/Prototype (physical):** CAD / physical mock-up; parts list — female ports & male connectors; **EU↔US** voltage/amps conversion; **removable** travel power bank; **retractable** winding for long cables; built-in plugs. Photo of yellow female / orange male connector. |
| 3 | [`page-003.png`](everyday-friction-mvp/page-003.png) | **Model plan** diagram: TOP VIEW — removable battery + adapter body + **two retractable male cable pairs** (L/R); FRONT VIEW — **five distinct female ports** on adapter face. |
| 4 | [`page-004.png`](everyday-friction-mvp/page-004.png) | **Website:** Narrative asks for a **GoFundMe-type** site: product explanation, business plan, **feedback**, **questions**, **pre-selling** for traction / pre-revenue funding. Visual: **“Create your fundraiser”** wireframe (title, story, media upload, goal amount, category, CTA) — **not** implemented in Cordline v1. |
| 5 | [`page-005.png`](everyday-friction-mvp/page-005.png) | **Manufacturing plan:** partner plants/companies; product detail vs resources; **cost**; **predicted market pricing**. Internal business / ops — no web MUS requirement. |
| 6 | [`page-006.png`](everyday-friction-mvp/page-006.png) | **Questions for the audience:** desired features; **customization** (color, ports, cords); **size** concern. Research / validation themes — optional FAQ or future “configure” UX. |
| 7 | [`page-007.png`](everyday-friction-mvp/page-007.png) | Closing: thank you / Q&A. |

## Severity-tagged gaps (mapped to repo docs)

| Severity | Finding | Repo mapping |
| :--- | :--- | :--- |
| **SUGGESTION** | Hardware specificity (5 front ports, 4 retractable males, removable battery, EU–US, retractable winding) is richer than **generic** PDP copy in [`docs/mockups/product.html`](../mockups/product.html) / app. | Add a **Product facts** subsection in PRD or Vision; optionally refine PDP bullet list in a future polish task (no MUS blocker). |
| **SUGGESTION** | Deck product name is **Everyday Friction**; public site uses placeholder **Cordline**. | Document alias in [`Vision_Brief.md`](../Vision_Brief.md) (“working title vs deck name”) to avoid confusion for graders or investors. |
| **WARNING** | Slide 4 implies **interactive** fundraiser creation + media upload + category — **not** in MUS [`FR-007`](../issues/FR-007.md) (static campaign only). | Treat as **Future** scope; see [`PDF_to_Repo_Gap_Matrix.md`](PDF_to_Repo_Gap_Matrix.md) and **FR-015**. |
| **FUTURE** | Live GoFundMe / platform embed, real pre-orders, and manufacturing cost pages. | Aligns with existing **FR-010–FR-014** themes; **FR-015** captures deck-specific **feedback + Q&A + campaign editor** slice. |
| **INFO** | Manufacturing grid (slide 5) and audience questions (slide 6) support **pitch** and **user research**, not current Next.js routes. | Reference from [`Implementation_Playbook_Next_Steps.md`](../Implementation_Playbook_Next_Steps.md) for non-web backlog. |

## Verdict (review)

**APPROVE WITH SUGGESTIONS** — Deck does not invalidate the shipped Cordline MUS. **Action:** sync **narrative and hardware hints** into docs (gap matrix + optional Vision line + FR-015); **do not** block release on GoFundMe-parity UI.
