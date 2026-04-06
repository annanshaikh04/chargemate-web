#!/usr/bin/env python3
"""
Rasterize each page of a PDF to PNG (PyMuPDF — no Poppler on Windows).

Usage:
  python scripts/export-pdf-pages.py [--pdf PATH] [--out DIR] [--dpi 150]

Default PDF: other/Everyday Friction - Preparing MVP Protoype.pdf
Default out: docs/reference/everyday-friction-mvp
"""

from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    default_pdf = root / "other" / "Everyday Friction - Preparing MVP Protoype.pdf"
    default_out = root / "docs" / "reference" / "everyday-friction-mvp"

    p = argparse.ArgumentParser(description="Export PDF pages to PNG via PyMuPDF")
    p.add_argument("--pdf", type=Path, default=default_pdf, help="Input PDF path")
    p.add_argument("--out", type=Path, default=default_out, help="Output directory")
    p.add_argument("--dpi", type=float, default=150.0, help="Rasterization DPI")
    args = p.parse_args()

    pdf_path: Path = args.pdf.resolve()
    out_dir: Path = args.out.resolve()
    dpi: float = args.dpi

    if not pdf_path.is_file():
        print(f"ERROR: PDF not found: {pdf_path}", file=sys.stderr)
        return 1

    try:
        import fitz  # PyMuPDF
    except ImportError:
        print(
            "ERROR: PyMuPDF not installed. Run: pip install pymupdf",
            file=sys.stderr,
        )
        return 1

    out_dir.mkdir(parents=True, exist_ok=True)
    zoom = dpi / 72.0
    mat = fitz.Matrix(zoom, zoom)

    doc = fitz.open(pdf_path)
    try:
        n = doc.page_count
        for i in range(n):
            page = doc.load_page(i)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            num = i + 1
            out_file = out_dir / f"page-{num:03d}.png"
            pix.save(out_file.as_posix())
            print(f"Wrote {out_file.relative_to(root)}")
    finally:
        doc.close()

    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
    print(f"Done: {n} page(s) at {dpi} DPI -> {out_dir.relative_to(root)} ({stamp})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
