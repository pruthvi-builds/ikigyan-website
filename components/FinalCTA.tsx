import Reveal from "./Reveal";
import home from "@/content/pages/home.json";

const c = home.finalCta;

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 text-cream md:py-28 lg:py-36">
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full text-cream/[0.035]"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="120" cy="60" r="160" stroke="currentColor" strokeWidth="1" />
        <circle cx="700" cy="360" r="220" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container-narrow relative text-center">
        <Reveal>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-yellow">
            {c.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-[15vw] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[52px] md:text-[62px]">
            {c.headingLead}
            <br />
            <span className="text-yellow-soft">{c.headingHighlight}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg font-body text-[16px] leading-relaxed text-cream/70">
            {c.copy}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#schools"
              className="rounded-full bg-yellow px-7 py-4 font-body text-[14.5px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {c.primaryLabel}
            </a>
            <a
              href="#books"
              className="rounded-full border border-cream/25 px-7 py-4 font-body text-[14.5px] font-semibold text-cream transition-colors hover:border-cream/60"
            >
              {c.secondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
