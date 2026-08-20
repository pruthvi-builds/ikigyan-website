import Reveal from "./Reveal";

export default function WhatIsIkigyan() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
            What is Ikigyan
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-[34px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[42px] md:text-[48px]">
            Some of life&rsquo;s most important lessons{" "}
            <span className="text-teal">aren&rsquo;t in the textbook.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl font-body text-[17px] leading-relaxed text-ink-soft md:text-[18px]">
            Ikigyan is a children&rsquo;s learning and knowledge platform
            designed to prepare young minds for the real world. We bring
            together essential life skills — financial literacy, mental and
            emotional wellbeing, digital awareness, physical wellness and
            social awareness — through engaging, age-appropriate learning
            experiences.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl font-body text-[17px] leading-relaxed text-ink-soft md:text-[18px]">
            Our approach goes beyond traditional academics. Through stories,
            activities, puzzles, projects and curiosity-led exploration,
            children learn to Discover → Question → Think → Apply — turning
            knowledge into understanding, and understanding into everyday
            life skills.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-10 sm:grid-cols-3 md:gap-10">
            {[
              { n: "26", u: "weeks", d: "of guided curiosity, mapped for schools" },
              { n: "5", u: "pillars", d: "of real-world learning, side by side" },
              { n: "1", u: "method", d: "Discover → Question → Think → Apply" },
            ].map((s) => (
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
