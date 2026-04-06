import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="mx-auto max-w-6xl px-4 py-16 md:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Everyday Friction · Team Innovation
            </p>
            <h1
              id="hero-heading"
              className="mt-2 font-display text-4xl font-bold tracking-tight text-ink-900 md:text-5xl lg:text-6xl"
            >
              One Solution for Universal Friction.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Stop carrying multiple chargers and wasting time on tangled cables. ChargeMate is the first fully integrated system designed for the global professional.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-ds bg-brand-700 px-6 py-4 text-sm font-bold text-white shadow-ds hover:bg-brand-600 transition-all duration-200 active:scale-[0.98]"
              >
                Pre-order ChargeMate
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-ds border border-ink-200 bg-white px-6 py-4 text-sm font-bold text-ink-800 hover:bg-ink-50 transition-all duration-200"
              >
                Learn our Story
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-ds-lg bg-white shadow-2xl ring-1 ring-black/5">
            <img
              src="/hero-product.png"
              alt="ChargeMate: The universal charging solution"
              className="h-full w-full object-contain p-12 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 id="problem-heading" className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
                The Problem
              </h2>
              <div className="mt-8 space-y-6 text-lg text-ink-600">
                <p>
                  Not always having the right cable or adapter when you need it isn’t just a niche inconvenience — it’s a universal daily friction point.
                </p>
                <ul className="space-y-4">
                  {[
                    "Dead devices during critical travel moments",
                    "Wasted time looking for specific adapters",
                    "Carrying multiple chargers causing tangling and clutter",
                    "Wasted money on duplicate cables and productivity loss"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-base">
                      <span className="text-brand-600 shrink-0 mt-1">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-ds-lg bg-brand-900 p-10 text-white shadow-ds flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold italic">"The scale of this problem is vast."</h3>
              <p className="mt-6 text-brand-100 leading-relaxed">
                Virtually every American carries a device—and the majority carry several. Industry workers, office workers, students, and travelers of all ages are directly affected.
              </p>
              <div className="mt-8 flex gap-8 border-t border-brand-800 pt-8">
                <div>
                  <p className="text-3xl font-bold">100M+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-300 mt-1">Users Affected</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">$2.4B</p>
                  <p className="text-xs uppercase tracking-widest text-brand-300 mt-1">Market Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-ink-100 bg-ink-50 py-16"
        aria-labelledby="market-heading"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2
              id="market-heading"
              className="font-display text-3xl font-bold text-ink-900"
            >
              A $2.4B Market Opportunity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              The charging cable problem isn't a niche inconvenience; it's a
              universal daily friction point affecting hundreds of millions.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "Global Market Size",
                value: "$2.4B+",
                sub: "And rapidly growing",
              },
              {
                label: "Target Segments",
                value: "Students & Pro",
                sub: "Industry & Office workers",
              },
              {
                label: "Tech Partners",
                value: "Google / Apple",
                sub: "Enormous incentive to fix daily friction",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center rounded-ds-lg bg-white p-8 shadow-sm ring-1 ring-ink-100"
              >
                <dt className="text-sm font-medium text-ink-500">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-4xl font-bold tracking-tight text-brand-700">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-ink-400">{stat.sub}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Technical Specifications
            </h2>
            <p className="mt-4 text-ink-500">
              Engineered for mobility without compromising on power density or
              mechanical reliability.
            </p>
            <div className="mt-8 flow-root">
              <table className="min-w-full divide-y divide-ink-200">
                <tbody className="divide-y divide-ink-100">
                  {[
                    ["Weight", "Approx. 12-14 oz"],
                    ["Dimensions", "150mm × 50mm × 30–77mm"],
                    ["Manufacturing", "Injection Molded Plastic (OEM/ODM)"],
                    ["Standard", "US, EU, UK, and Global compatible"],
                    ["Battery", "25,000mAh High-Density Core"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="py-4 text-sm font-semibold text-ink-900">
                        {label}
                      </td>
                      <td className="py-4 text-right text-sm text-ink-500">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-ds-lg border border-ink-100 p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-ink-900">
                Why It Matters
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Wastes time looking for the correct charger, dead devices during
                traveling, and the cost of replacing tangled cables. ChargeMate
                consolidates your entire mobile toolkit into one sleek device.
              </p>
            </div>
            <div className="rounded-ds-lg bg-brand-900 p-8 text-white shadow-ds">
              <h3 className="font-display text-xl font-bold">The Way Forward</h3>
              <p className="mt-4 text-sm opacity-90">
                Currently partnering with strategic contract manufacturers for
                tooling and setup. CAD models are finalized and functional
                requirements are fully validated.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section
        className="mx-auto max-w-6xl px-4 py-12"
        aria-label="Presentation Credits"
      >
        <p className="text-center text-xs font-medium uppercase tracking-widest text-ink-400">
          Sarah Stantial · Shannon Cullen · Ryan Jankowski · Rohan Pratap Reddy
          Ravula · Annanahmed Shaikh
        </p>
      </section>
    </>
  );
}
