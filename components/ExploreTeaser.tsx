import Reveal from "./Reveal";
import { pillars } from "@/lib/data";
import home from "@/content/pages/home.json";

const c = home.exploreTeaser;

export default function ExploreTeaser() {
  return (
    <section id="explore" className="bg-cream-deep py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                {c.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[26px] leading-[1.16] tracking-[-0.01em] text-ink text-balance sm:text-[30px]">
                {c.heading}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <a
              href="/explore"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-[13.5px] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              {c.ctaLabel} <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {pillars.map((p) => (
              <div
                key={p.key}
                className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-line bg-cream px-4 py-5 text-center last:col-span-2 sm:last:col-span-1"
              >
                <span className="font-display text-[15px] leading-snug text-ink">{p.label}</span>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-teal">
                  {p.outcome}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
