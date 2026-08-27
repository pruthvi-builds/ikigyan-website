"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import heroData from "@/content/hero.json";

const SLIDES = heroData.slides;
const AUTOPLAY_MS = (heroData.autoplaySeconds || 6) * 1000;

// Render a plain-text heading: "\n" becomes a line break, and the `highlight`
// substring (if present) is drawn in the accent colour. Keeps the heading fully
// editable as plain text in the CMS.
function renderHeading(text: string, highlight?: string) {
  return text.split("\n").map((line, li) => {
    const idx = highlight ? line.indexOf(highlight) : -1;
    return (
      <Fragment key={li}>
        {li > 0 && <br />}
        {idx === -1 ? (
          line
        ) : (
          <>
            {line.slice(0, idx)}
            <span className="text-teal">{highlight}</span>
            {line.slice(idx + (highlight as string).length)}
          </>
        )}
      </Fragment>
    );
  });
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      AUTOPLAY_MS
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
      AUTOPLAY_MS
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
              {renderHeading(slide.heading, slide.highlight)}
            </h1>

            <p className="mt-7 max-w-md font-body text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
              {slide.copy}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={slide.primaryHref}
                {...(slide.primaryExternal ? { target: "_blank", rel: "noopener" } : {})}
                className="rounded-full bg-ink px-6 py-3.5 font-body text-[14px] font-semibold text-cream shadow-[0_10px_30px_rgba(27,28,38,0.25)] transition-transform hover:-translate-y-0.5"
              >
                {slide.primaryLabel}
              </a>
              <a
                href={slide.secondaryHref}
                {...(slide.secondaryExternal ? { target: "_blank", rel: "noopener" } : {})}
                className="group flex items-center gap-2 font-body text-[14px] font-semibold text-ink"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-cream">
                  →
                </span>
                {slide.secondaryLabel}
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
              key={s.image}
              className="absolute inset-0"
              style={{ x: shiftX, y: shiftY }}
              initial={false}
              animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.02 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
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
