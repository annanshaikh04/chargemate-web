# Everyday Friction — MVP prototype (PDF export)

Rasterized pages from the source deck for review and traceability against Cordline web docs.

| Field | Value |
| --- | --- |
| **Source PDF** | `other/Everyday Friction - Preparing MVP Protoype.pdf` (repo root relative) |
| **Export tool** | `scripts/export-pdf-pages.py` (PyMuPDF) |
| **DPI** | 150 |
| **Page count** | 7 |
| **Last export** | 2026-03-30 (UTC) — re-run script to refresh |

## Re-run

From repository root:

```bash
pip install pymupdf
python scripts/export-pdf-pages.py
```

Optional:

```bash
python scripts/export-pdf-pages.py --dpi 200 --out docs/reference/everyday-friction-mvp
```

## Files

- `page-001.png` … `page-007.png` — one PNG per PDF page, in order.

## Related docs

- Synthesized review: [`../PDF_Review_Findings.md`](../PDF_Review_Findings.md)
- Gap matrix: [`../PDF_to_Repo_Gap_Matrix.md`](../PDF_to_Repo_Gap_Matrix.md)
