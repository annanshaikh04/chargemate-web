export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-ink-900">
        About ChargeMate
      </h1>
      <p className="mt-4 text-lg text-ink-600">
        Everyday Friction is a hardware-focused team dedicated to solving the universal daily pain points of the modern professional. ChargeMate is our first commercial innovation: a fully integrated system that ends the compromise between high-density power and portable cable management.
      </p>

      <section className="mt-12" aria-labelledby="team-heading">
        <h2 id="team-heading" className="font-display text-2xl font-bold text-ink-900">
          Meet the Founders
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            { name: "Shannon Cullen", role: "Design, Cost Structure" },
            { name: "Ryan Jankowski", role: "Creative, Manufacturing, Sales" },
            { name: "Rohan Reddy", role: "Tech Developer" },
            { name: "Annanahmed Shaikh", role: "Research, Market Analysis" },
            { name: "Sarah Stantial", role: "Product Design, Modeling" },
          ].map((member) => (
            <div
              key={member.name}
              className="flex gap-4 rounded-ds-lg border border-ink-100 bg-white p-5 shadow-sm ring-1 ring-ink-100"
            >
              <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-full bg-brand-50 text-brand-700 font-display font-bold text-lg ring-1 ring-brand-100">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-ink-900">{member.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mt-0.5">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-ink-500 leading-relaxed">
                  Leading the {member.role.toLowerCase()} efforts to bring ChargeMate from concept to market.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-ink-500">
        Contact:{" "}
        <a
          className="font-medium text-brand-700 hover:underline"
          href="mailto:hello@example.com"
        >
          hello@example.com
        </a>
      </p>
    </div>
  );
}
