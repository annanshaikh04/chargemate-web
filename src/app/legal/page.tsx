export const metadata = {
  title: "Legal",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-ink-900">Legal</h1>
      <p className="mt-2 text-sm text-ink-500">
        Placeholder content for prototype. Replace with counsel-approved copy
        before launch.
      </p>

      <section className="mt-10" aria-labelledby="privacy-heading">
        <h2
          id="privacy-heading"
          className="font-display text-xl font-semibold text-ink-900"
        >
          Privacy policy
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. This section
          will describe what data is collected, cookies, third parties, and user
          rights. Not legal advice.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="terms-heading">
        <h2
          id="terms-heading"
          className="font-display text-xl font-semibold text-ink-900"
        >
          Terms of use
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-600">
          Placeholder terms governing use of this website, pre-order disclaimers,
          limitation of liability, and governing law. Replace entirely before
          production.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="crowdfunding-heading">
        <h2
          id="crowdfunding-heading"
          className="font-display text-xl font-semibold text-ink-900"
        >
          Crowdfunding disclaimer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-600">
          Backing a project is not a guarantee of delivery. Risks include
          manufacturing delays and design changes. Final legal language depends
          on your jurisdiction and platform.
        </p>
      </section>
    </div>
  );
}
