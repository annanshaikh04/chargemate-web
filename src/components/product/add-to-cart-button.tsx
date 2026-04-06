"use client";

import { useCart } from "@/features/cart/cart-context";

export function AddToCartButton({ slug }: { slug: string }) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      className="rounded-ds bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      onClick={() => addToCart(slug, 1)}
    >
      Add to cart
    </button>
  );
}
