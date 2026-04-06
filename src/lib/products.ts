export type Product = {
  slug: string;
  title: string;
  priceUsd: number;
  description: string;
  image: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "core",
    title: "ChargeMate Core",
    priceUsd: 99,
    description:
      "The world's first fully integrated charging hub with high-density power.",
    image: "/hero-product.png",
    features: ["25,000mAh Battery", "5 Output Ports", "Adjustable Tension"],
  },
  {
    slug: "travel-kit",
    title: "ChargeMate Travel Kit",
    priceUsd: 129,
    description:
      "Everything you need for international travel—Core plus global adapter set.",
    image: "/side-detail.png",
    features: ["US/EU/UK Compatible", "Retractable Cables", "Protective Case"],
  },
  {
    slug: "refill-pack",
    title: "ChargeMate Refill Pack",
    priceUsd: 24,
    description:
      "Keep your ChargeMate running like new with extra clips and bands.",
    image: "/close-up.png",
    features: ["3x Cable Clips", "5x Elastic Bands", "Premium Texture"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
