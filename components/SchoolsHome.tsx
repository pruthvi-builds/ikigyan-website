import Reveal from "./Reveal";
import home from "@/content/pages/home.json";

const c = home.schoolsHome;

export default function SchoolsHome() {
  return (
    <section id="schools" className="relative overflow-hidden bg-ink py-16 text-cream md:py-20">
      <svg
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] text-cream/[0.035]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container-wide relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div>
          <Reveal>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-yellow">
              {c.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-[28px] leading-[1.16] tracking-[-0.01em] text-balance sm:text-[34px] md:text-[38px]">
              {c.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-cream/70">
              {c.copy}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/schools"
                className="rounded-full bg-yellow px-6 py-3.5 font-body text-[14px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                {c.primaryLabel}
              </a>
              <a
                href="/schools#enquiry"
                className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cream"
              >
                {c.secondaryLabel} <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="grid grid-cols-3 gap-4 rounded-[24px] border border-cream/12 bg-cream/[0.04] p-6 sm:gap-6 sm:p-8">
            {c.facts.map((f) => (
              <div key={f.u}>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[26px] text-yellow sm:text-[32px]">
                    {f.n}
                  </span>
                </div>
                <p className="mt-0.5 font-body text-[12px] font-semibold text-cream/80">
                  {f.u}
                </p>
                <p className="mt-1.5 font-body text-[11.5px] leading-snug text-cream/55">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
