"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { CONTACT } from "@/lib/data";

type Slide = {
  eyebrow: string;
  heading: React.ReactNode;
  copy: string;
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; external?: boolean };
  src: string;
  alt: string;
};

// 5 slides per the brief: 1) sales/order, 2) curriculum structure
// (financial literacy · mental health · digital awareness), 3–5) related.
const SLIDES: Slide[] = [
  {
    eyebrow: "Book 01 · Where Financial Confidence Begins",
    heading: (
      <>
        Give your child
        <br />a <span className="text-teal">head start</span> with money.
      </>
    ),
    copy: "Educonomy turns saving, spending, earning and smart choices into an engaging story children will actually enjoy reading.",
    primary: { label: "Order Educonomy", href: "#books" },
    secondary: {
      label: "Order on WhatsApp",
      href: `https://wa.me/${CONTACT.whatsapp}`,
      external: true,
    },
    src: "/illustrations/hero-money-tree.png",
    alt: "A tree growing rupee coins above an open book and a stack of coins beside an Ikigyan money pouch.",
  },
  {
    eyebrow: "The Curriculum",
    heading: (
      <>
        One curriculum.
        <br />
        <span className="text-teal">Five real-world subjects.</span>
      </>
    ),
    copy: "Financial literacy, mental & emotional wellbeing and digital awareness — taught side by side with physical wellness and social awareness, every week.",
    primary: { label: "See the Curriculum", href: "#explore" },
    secondary: { label: "View the 26-Week Programme", href: "#schools" },
    src: "/illustrations/hero-pillars-boy.png",
    alt: "A child at a desk looks up thoughtfully, surrounded by five circles representing financial, emotional, physical, social and digital learning.",
  },
  {
    eyebrow: "For Schools",
    heading: (
      <>
        26 weeks of Curiosity,
        <br />
        <span className="text-teal">Growth and Discovery.</span>
      </>
    ),
    copy: "Two free demo classes to begin. A full year of weekly experiences designed to engage, inspire and empower students.",
    primary: { label: "Explore the Programme", href: "#schools" },
    secondary: { label: "Book 2 Free Demo Classes", href: "#schools" },
    src: "/illustrations/hero-journey.png",
    alt: "A winding path connects a school, a calendar, a puzzle book, a globe and a child climbing stairs made of books toward a star.",
  },
  {
    eyebrow: "Curiosity, Every Week",
    heading: (
      <>
        Questions worth
        <br />
        <span className="text-teal">staying curious about.</span>
      </>
    ),
    copy: "A new fact, question and challenge every week — the kind of thinking that actually sticks.",
    primary: { label: "This Week's Curiosity", href: "#curiosity" },
    secondary: { label: "Explore All Topics", href: "/explore" },
    src: "/illustrations/hero-question.png",
    alt: "A telescope, a magnifying glass over a lightbulb, an open book and a hot air balloon circle a large question mark.",
  },
  {
    eyebrow: "A world of discovery, one week at a time",
    heading: (
      <>
        Curious. <span className="text-teal">Knowledgeable.</span>
        <br />
        Ready for the real world.
      </>
    ),
    copy: "Ikigyan helps children discover the world beyond textbooks — through a 26-week learning programme, books, activities and real-world knowledge that stays with them.",
    primary: { label: "Explore the Programme", href: "#schools" },
    secondary: { label: "Meet Educonomy", href: "#books" },
    src: "/illustrations/hero-thinking-boy.png",
    alt: "A child sits cross-legged on a giant open book, surrounded by a lightbulb, a rocket, a magnifying glass and a globe — imagining beyond the page.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      6000
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setActive((i + SLIDES.length) % SLIDES.length);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      6000
    );
  }

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const shiftX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  function onMouseMove(e: React.MouseEvent) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  const slide = SLIDES[active];

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-cream-hero pt-28 pb-6 md:pt-36 md:pb-0"
    >
      {/* ambient linework, echoes illustration style */}
      <svg
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 text-teal/10 md:h-96 md:w-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      </svg>

      <div className="container-wide relative grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-6">
        <div className="relative z-10">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/5 px-3.5 py-1.5 font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-teal">
              {slide.eyebrow}
            </span>

            <h1 className="font-display text-[11vw] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[52px] md:text-[46px] lg:text-[58px] xl:text-[64px]">
              {slide.heading}
            </h1>

            <p className="mt-7 max-w-md font-body text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
              {slide.copy}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={slide.primary.href}
                {...(slide.primary.external ? { target: "_blank", rel: "noopener" } : {})}
                className="rounded-full bg-ink px-6 py-3.5 font-body text-[14px] font-semibold text-cream shadow-[0_10px_30px_rgba(27,28,38,0.25)] transition-transform hover:-translate-y-0.5"
              >
                {slide.primary.label}
              </a>
              <a
                href={slide.secondary.href}
                {...(slide.secondary.external ? { target: "_blank", rel: "noopener" } : {})}
                className="group flex items-center gap-2 font-body text-[14px] font-semibold text-ink"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-cream">
                  →
                </span>
                {slide.secondary.label}
              </a>
            </div>
          </motion.div>

          <div className="mt-12 flex items-center gap-5">
            <button
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 font-body text-[15px] text-ink/60 transition-colors hover:border-teal hover:text-teal"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-8 bg-teal" : "w-1.5 bg-ink/15"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 font-body text-[15px] text-ink/60 transition-colors hover:border-teal hover:text-teal"
            >
              ›
            </button>
          </div>
        </div>

        <motion.div
          ref={wrapRef}
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
          className="relative aspect-[4/3] w-full md:aspect-[16/13]"
        >
          {SLIDES.map((s, i) => (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              style={{ x: shiftX, y: shiftY }}
              initial={false}
              animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.02 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center md:object-right"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-6 h-6 bg-gradient-to-b from-transparent to-cream md:mt-4 md:h-10" />
    </section>
  );
}
