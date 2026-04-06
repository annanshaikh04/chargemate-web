import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { getProductBySlug, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return { title: product.title };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-ink-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/shop" className="hover:text-brand-700">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink-800">{product.title}</li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-ds-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
            <img
              src="/hero-product.png"
              alt={`${product.title} Main view`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { src: "/hero-product.png", alt: "Front" },
              { src: "/side-detail.png", alt: "Side" },
              { src: "/back-detail.png", alt: "Back" },
              { src: "/close-up.png", alt: "Close up" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-ds border border-ink-100 bg-white p-1"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-ink-900">
            {product.title}
          </h1>
          <p className="mt-2 text-2xl font-bold text-ink-900">
            ${product.priceUsd}{" "}
            <span className="text-base font-normal text-ink-500">USD</span>
          </p>
          <p className="mt-4 text-ink-600">{product.description}</p>
          <p className="mt-4 text-ink-600">
            Portable cable management with adjustable routing and onboard
            battery. Prototype specs below.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-800">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-brand-700">•</span> {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton slug={product.slug} />
            <Link
              href="/fund"
              className="inline-flex items-center justify-center rounded-ds border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Back the project
            </Link>
          </div>
          <p className="mt-4 text-xs text-ink-500">
            Checkout is disabled in prototype builds.
          </p>
        </div>
      </div>
    </div>
  );
}
