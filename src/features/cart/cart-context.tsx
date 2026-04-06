"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "cordline-cart";

export type CartLines = Record<string, number>;

type CartContextValue = {
  lines: CartLines;
  ready: boolean;
  itemCount: number;
  addToCart: (slug: string, qty?: number) => void;
  setLineQty: (slug: string, qty: number) => void;
  removeLine: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLines>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as CartLines;
          if (parsed && typeof parsed === "object") setLines(parsed);
        }
      } catch {
        /* ignore */
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, ready]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    setLines((prev) => ({
      ...prev,
      [slug]: Math.max(0, (prev[slug] ?? 0) + qty),
    }));
  }, []);

  const setLineQty = useCallback((slug: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) {
        const next = { ...prev };
        delete next[slug];
        return next;
      }
      return { ...prev, [slug]: qty };
    });
  }, []);

  const removeLine = useCallback((slug: string) => {
    setLines((prev) => {
      const next = { ...prev };
      delete next[slug];
      return next;
    });
  }, []);

  const itemCount = useMemo(
    () => Object.values(lines).reduce((a, b) => a + b, 0),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      ready,
      itemCount,
      addToCart,
      setLineQty,
      removeLine,
    }),
    [lines, ready, itemCount, addToCart, setLineQty, removeLine],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
