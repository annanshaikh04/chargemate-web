import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Product
      </p>
      <h1 className="mt-2 font-display text-2xl font-bold text-ink-900 md:text-3xl">
        Product not found
      </h1>
      <p className="mt-4 text-ink-600">
        We could not find a device with that slug in the prototype catalog.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-ds bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        Back to shop
      </Link>
    </div>
  );
}
