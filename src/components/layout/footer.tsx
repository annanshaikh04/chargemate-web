import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm text-ink-500">© ChargeMate · 2026 Innovation Team</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:hello@example.com?subject=ChargeMate%20feedback"
            className="text-sm font-medium text-brand-700 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Feedback
          </a>
          <Link
            href="/legal"
            className="text-sm font-medium text-brand-700 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Legal
          </Link>
        </nav>
      </div>
    </footer>
  );
}
