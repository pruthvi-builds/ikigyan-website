"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { pillars } from "@/lib/data";
import explore from "@/content/pages/explore.json";

const c = explore.pillars;

const ICONS: Record<string, ReactNode> = {
  financial: (
    <>
      <path d="M12 3v18M8 7.5c0-1.7 1.8-3 4-3s4 1.1 4 2.6c0 3.4-8 1.6-8 5 0 1.5 1.8 2.6 4 2.6s4-1.3 4-3" />
    </>
  ),
  emotional: (
    <>
      <path d="M12 20.5c-4.4-2.8-8-6-8-9.8A4.7 4.7 0 0 1 12 7.4a4.7 4.7 0 0 1 8 3.3c0 3.8-3.6 7-8 9.8Z" />
    </>
  ),
  physical: (
    <path d="M2.5 12h4l1.6-4.4L11 16.4l2-8.8 1.4 4.4H21.5" />
  ),
  social: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M3.5 19c.6-3 2.2-4.6 4.5-4.6S12.4 16 13 19M11 19c.6-3 2.2-4.6 4.5-4.6S20 16 20.5 19" />
    </>
  ),
  digital: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="1.4" />
      <path d="M2 20h20M9.5 16v2M14.5 16v2" />
      <path d="M9.5 10.2 8 12l1.5 1.8M14.5 10.2 16 12l-1.5 1.8" />
    </>
  ),
};

export default function Pillars() {
  return (
    <section id="explore" className="bg-cream-deep py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
              {c.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[40px] md:text-[46px]">
              {c.heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex min-h-[280px] flex-col justify-between bg-cream p-7 transition-colors duration-500 hover:bg-teal"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal transition-colors duration-500 group-hover:text-yellow"
              >
                {ICONS[p.key]}
              </svg>

              <div>
                <h3 className="font-display text-[20px] leading-snug text-ink transition-colors duration-500 group-hover:text-cream">
                  {p.label}
                </h3>
                <p className="mt-2.5 font-body text-[13.5px] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-cream/75">
                  {p.copy}
                </p>
                <p className="mt-5 font-body text-[11.5px] font-semibold uppercase tracking-[0.1em] text-teal transition-colors duration-500 group-hover:text-yellow">
                  {p.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="font-display text-[19px] text-ink/70 md:text-[22px]">
            {c.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
