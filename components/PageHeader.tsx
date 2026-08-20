import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="bg-cream-hero pt-32 pb-14 md:pt-40 md:pb-16">
      <div className="container-wide">
        <Reveal>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-display text-[34px] leading-[1.1] tracking-[-0.01em] text-ink text-balance sm:text-[44px] md:text-[52px]">
            {title}
          </h1>
        </Reveal>
        {copy && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl font-body text-[16px] leading-relaxed text-ink-soft">
              {copy}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
