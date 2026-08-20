import Image from "next/image";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: "🧠",
    label: "Builds the mind",
    copy: "Helping children understand their thoughts, emotions, choices and strengths.",
  },
  {
    icon: "💰",
    label: "Prepares them for real life",
    copy: "Making money, decision-making, responsibility and everyday life skills easier to understand.",
  },
  {
    icon: "🌱",
    label: "Develops healthy habits",
    copy: "Encouraging physical wellbeing, self-care, discipline and balanced routines.",
  },
  {
    icon: "🤝",
    label: "Helps them navigate the world",
    copy: "Building empathy, communication, respect, relationships and social responsibility.",
  },
  {
    icon: "🔐",
    label: "Designed with safety in mind",
    copy: "Age-appropriate content, thoughtful experiences and minimal dependence on digital engagement.",
  },
  {
    icon: "📚",
    label: "Learning that goes beyond the screen",
    copy: "Books, puzzles, activities and experiences children can explore independently or with their families.",
  },
];

export default function Parents() {
  return (
    <section id="parents" className="bg-cream-deep py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                For parents
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[40px] md:text-[44px]">
                More than what they learn.
                <br />
                <span className="text-teal">Who they become.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md font-body text-[15.5px] leading-relaxed text-ink-soft">
                Children don&rsquo;t need another screen competing for their
                attention. They need experiences that help them think
                better, feel better and grow with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-md font-body text-[15.5px] leading-relaxed text-ink-soft">
                At Ikigyan, every book, activity and learning experience is
                designed to build the skills that matter beyond the
                classroom.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-cream-hero">
              <Image
                src="/illustrations/hero-pillars-boy.png"
                alt="A child looks up thoughtfully at desk, surrounded by five circles representing financial, emotional, physical, social and digital learning."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
            Why parents choose Ikigyan
          </p>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
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
            Because education isn&rsquo;t only about getting ahead.
            <br />
            <span className="text-teal">It&rsquo;s about being ready for life.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
