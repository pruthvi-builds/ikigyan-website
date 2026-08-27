import Reveal from "./Reveal";
import home from "@/content/pages/home.json";

const c = home.whatIs;

export default function WhatIsIkigyan() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
            {c.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-[34px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[42px] md:text-[48px]">
            {c.headingLead}{" "}
            <span className="text-teal">{c.headingHighlight}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl font-body text-[17px] leading-relaxed text-ink-soft md:text-[18px]">
            {c.para1}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl font-body text-[17px] leading-relaxed text-ink-soft md:text-[18px]">
            {c.para2}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-10 sm:grid-cols-3 md:gap-10">
            {c.stats.map((s) => (
              <div key={s.u}>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[36px] text-teal md:text-[44px]">
                    {s.n}
                  </span>
                  <span className="font-body text-[13px] font-medium text-ink-soft">
                    {s.u}
                  </span>
                </div>
                <p className="mt-1.5 font-body text-[13.5px] leading-snug text-ink-soft">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
