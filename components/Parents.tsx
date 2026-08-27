import Image from "next/image";
import Reveal from "./Reveal";
import parents from "@/content/parents.json";

export default function Parents() {
  return (
    <section id="parents" className="bg-cream-deep py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                {parents.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[40px] md:text-[44px]">
                {parents.headingLead}
                <br />
                <span className="text-teal">{parents.headingHighlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md font-body text-[15.5px] leading-relaxed text-ink-soft">
                {parents.intro1}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-md font-body text-[15.5px] leading-relaxed text-ink-soft">
                {parents.intro2}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-cream-hero">
              <Image
                src={parents.image}
                alt={parents.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
            {parents.reasonsHeading}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parents.reasons.map((r, i) => (
            <Reveal key={r.label} delay={0.24 + (i % 6) * 0.04}>
              <div className="flex h-full flex-col gap-2.5 rounded-[20px] border border-line bg-cream p-6">
                <span className="text-[22px]" aria-hidden>
                  {r.icon}
                </span>
                <p className="font-display text-[16px] leading-snug text-ink">
                  {r.label}
                </p>
                <p className="font-body text-[13.5px] leading-relaxed text-ink-soft">
                  {r.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-14 text-center font-display text-[20px] leading-snug text-ink sm:text-[24px]">
            {parents.closingLead}
            <br />
            <span className="text-teal">{parents.closingHighlight}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
