import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">Shop</h1>
        <p className="mt-2 text-ink-500">
          Early-access hardware — placeholder catalog for prototype.
        </p>
      </header>

      <ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {products.map((product) => (
          <li key={product.slug}>
            <article className="flex h-full flex-col overflow-hidden rounded-ds-lg border border-ink-100 bg-white shadow-card">
              <div className="relative aspect-square overflow-hidden bg-ink-50 p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold text-ink-900 border-b border-ink-100 pb-2 mb-2">
                  <Link
                    href={`/product/${product.slug}`}
                    className="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    {product.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-500 line-clamp-2">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-medium text-ink-700">
                      <span className="h-1 w-1 rounded-full bg-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-ink-50 pt-4">
                  <p className="font-display text-xl font-bold text-ink-900">
                    ${product.priceUsd}
                  </p>
                  <Link
                    href={`/product/${product.slug}`}
                    className="inline-flex justify-center rounded-ds bg-brand-700 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
