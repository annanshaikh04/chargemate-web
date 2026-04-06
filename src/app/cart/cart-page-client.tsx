"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/cart-context";
import { products } from "@/lib/products";

export function CartPageClient() {
  const { lines, setLineQty, ready } = useCart();

  const entries = products
    .map((p) => ({ product: p, qty: lines[p.slug] ?? 0 }))
    .filter((e) => e.qty > 0);

  const subtotal = entries.reduce(
    (sum, { product, qty }) => sum + product.priceUsd * qty,
    0,
  );

  if (!ready) {
    return (
      <p className="text-sm text-ink-500" aria-live="polite">
        Loading cart…
      </p>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="rounded-ds-lg border border-ink-100 bg-white p-8 text-center shadow-card">
        <p className="text-ink-600">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          Browse shop
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul
        className="divide-y divide-ink-100 rounded-ds-lg border border-ink-100 bg-white shadow-card"
        role="list"
      >
        {entries.map(({ product, qty }) => (
          <li
            key={product.slug}
            className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4">
              <div
                className="h-20 w-20 shrink-0 rounded-ds bg-ink-100"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-display font-semibold text-ink-900">
                  <Link
                    href={`/product/${product.slug}`}
                    className="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    {product.title}
                  </Link>
                </h2>
                <p className="text-sm text-ink-500">${product.priceUsd} each</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                role="group"
                className="flex items-center rounded-ds border border-ink-200"
                aria-label={`Quantity for ${product.title}`}
              >
                <button
                  type="button"
                  className="px-3 py-2 text-ink-600 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                  aria-label="Decrease quantity"
                  onClick={() => setLineQty(product.slug, qty - 1)}
                >
                  −
                </button>
                <span
                  className="w-10 border-x border-ink-200 py-2 text-center text-sm tabular-nums"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {qty}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 text-ink-600 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                  aria-label="Increase quantity"
                  onClick={() => setLineQty(product.slug, qty + 1)}
                >
                  +
                </button>
              </div>
              <p className="min-w-[4rem] text-right font-display font-semibold text-ink-900">
                ${product.priceUsd * qty}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-ds-lg border border-ink-100 bg-white p-6 shadow-card">
        <div className="flex justify-between text-sm">
          <span className="text-ink-500">Subtotal</span>
          <span className="font-semibold text-ink-900">${subtotal}</span>
        </div>
        <button
          type="button"
          disabled
          className="mt-6 w-full cursor-not-allowed rounded-ds bg-ink-200 py-3 text-sm font-semibold text-ink-500"
        >
          Checkout — coming soon
        </button>
        <p className="mt-3 text-center text-xs text-ink-500">
          No payment processing in v1 prototype.
        </p>
      </div>
    </>
  );
}
