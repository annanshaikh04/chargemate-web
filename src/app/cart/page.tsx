import { CartPageClient } from "./cart-page-client";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold text-ink-900">Cart</h1>
      <p className="mt-2 text-sm text-ink-500">
        Prototype — quantities are UI only.
      </p>
      <div className="mt-8">
        <CartPageClient />
      </div>
    </div>
  );
}
