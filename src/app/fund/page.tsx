import Link from "next/link";

export const metadata = {
  title: "Fund the project",
};

/* Placeholder campaign numbers — not live data */
const CAMPAIGN = { raised: 0, goal: 100000 };
const pct = Math.round((CAMPAIGN.raised / CAMPAIGN.goal) * 100);

export default function FundPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center">
          <h1 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
            Help us ship ChargeMate
          </h1>
          <p className="mt-4 text-ink-600">
            We’re raising early support to finalize tooling and certification.
            Numbers below are{" "}
            <strong className="font-medium text-ink-800">
              static placeholders
            </strong>{" "}
            for this prototype.
          </p>
          <div className="mx-auto mt-8 max-w-xl text-left">
            <div className="h-3 w-full overflow-hidden rounded-full bg-ink-100" role="img" aria-label={`Funding progress ${pct} percent`}>
              <div
                className="h-full rounded-full bg-brand-600 transition-all duration-1000"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-ink-900 tracking-tight">
                  ${CAMPAIGN.raised.toLocaleString()}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                  Raised of ${CAMPAIGN.goal.toLocaleString()} goal
                </span>
              </div>
              <span className="text-sm font-semibold text-brand-700 bg-brand-50 px-2 py-1 rounded">
                0 backers
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="rounded-ds bg-brand-700 px-8 py-3.5 text-sm font-bold text-white shadow-ds hover:bg-brand-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Back this project
            </a>
            <Link
              href="/shop"
              className="rounded-ds border border-ink-200 bg-white px-8 py-3.5 text-sm font-bold text-ink-800 hover:bg-ink-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Order Prototype
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div id="story-section">
            <h2 id="story-heading" className="font-display text-3xl font-bold text-ink-900">
              The $2.4B Market Gap
            </h2>
            <p className="mt-6 leading-relaxed text-ink-600">
              Virtually every modern professional carries multiple devices, yet the charging adapter market remains fragmented. ChargeMate addresses this universal friction point with a fully integrated system.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Our mission is to consolidate power, conversion, and cable management into one high-performance device. This campaign helps us finalize tooling and certification for our initial production run.
            </p>

            <h3 className="mt-12 font-display text-xl font-bold text-ink-900">Strategic Alignment</h3>
            <p className="mt-4 text-sm text-ink-500">
              We identify significant incentive for global technology partners including:
            </p>
            <div className="mt-4 flex flex-wrap gap-4 grayscale opacity-60">
              {["Google", "Apple", "Amazon", "HP", "Samsung", "Dell"].map(partner => (
                <span key={partner} className="px-3 py-1 border border-ink-200 rounded text-xs font-bold text-ink-400">
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-ds-lg bg-ink-900 p-8 text-white shadow-card">
            <h2 className="font-display text-2xl font-bold">Manufacturing Roadmap</h2>
            <div className="mt-8 space-y-8">
              {[
                { step: "01", title: "OEM/ODM Partnership", desc: "Locking contract manufacturing agreements with proven hardware partners." },
                { step: "02", title: "Tooling & Set Up", desc: "Creating high-precision injection molds for the 150mm x 50mm casing." },
                { step: "03", title: "Final Assembly", desc: "Automated soldering and insertion for mass-market reliability." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-2xl font-bold text-brand-400 opacity-50">{item.step}</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="mt-1 text-sm text-ink-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-100 bg-white py-20" aria-labelledby="tiers-heading">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 id="tiers-heading" className="font-display text-3xl font-bold text-ink-900">
            Investment Tiers
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "Supporter", price: 25, perks: "Sticker pack & community updates" },
              { title: "Early Bird", price: 79, perks: "1x ChargeMate Core (30% off)", featured: true },
              { title: "Enterprise Bundle", price: 349, perks: "5x ChargeMate Units for your team" }
            ].map((tier) => (
              <div
                key={tier.title}
                className={`flex flex-col rounded-ds-lg border p-8 transition-all hover:shadow-card ${tier.featured ? "border-brand-600 ring-4 ring-brand-600/5 bg-brand-50/10" : "border-ink-100"
                  }`}
              >
                <h3 className="font-display text-xl font-bold text-ink-900">{tier.title}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold tracking-tight text-ink-900">${tier.price}</span>
                  <span className="ml-1 text-sm text-ink-500">/tier</span>
                </div>
                <p className="mt-4 flex-1 text-sm text-ink-600">{tier.perks}</p>
                <button
                  disabled
                  className="mt-8 rounded-ds py-3 text-sm font-bold bg-ink-100 text-ink-400 cursor-not-allowed"
                >
                  Select Tier
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-center font-display text-3xl font-bold text-ink-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {[
            { q: "Why the 12-14 oz weight target?", a: "To ensure mechanical durability for the spool system and accommodate a 25,000mAh battery without overheating." },
            { q: "Is this travel ready?", a: "Yes. We support US, EU, and UK plug standards within our universal adapter toolkit." },
            { q: "When are delivery estimates?", a: "Production tooling starts post-campaign. We estimate a 6-9 month window for T1 samples." }
          ].map((item, i) => (
            <div key={i} className="rounded-ds-lg border border-ink-100 bg-white p-6 shadow-sm">
              <dt className="font-bold text-ink-900">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-600">{item.a}</dd>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <p className="text-xs text-ink-400 italic">
          Disclaimer: This is an innovation project prototype. Terms of investment and delivery schedules are for demonstration purposes only.
        </p>
      </div>
    </>
  );
}
