"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { method } from "@/lib/data";

const DETAIL: Record<(typeof method)[number], string> = {
  Discover: "A fact, story or object that opens a door — no lecture, just a spark.",
  Question: "Children ask what, why and what if, before anyone gives them an answer.",
  Think: "Space to reason it out loud, alone or with the group.",
  Solve: "A puzzle or activity that turns the idea into a small, real challenge.",
  Discuss: "Sharing thinking with others — where understanding actually sharpens.",
  Apply: "Carrying the idea into a real decision, at home or in the world.",
};

export default function DiscoverMethod() {
  const [active, setActive] = useState<(typeof method)[number]>("Discover");

  return (
    <section className="relative overflow-hidden bg-teal-deep py-16 text-cream md:py-24 lg:py-32">
      <svg
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-cream/[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container-wide relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-yellow">
              How Ikigyan learns
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-balance sm:text-[40px] md:text-[46px]">
              We don&rsquo;t want children to just remember things.
              <br />
              <span className="text-yellow-soft">We want them to understand.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal delay={0.15}>
            <ol className="flex flex-col">
              {method.map((step, i) => {
                const isActive = active === step;
                return (
                  <li key={step}>
                    <button
                      onClick={() => setActive(step)}
                      className="flex w-full items-center gap-5 border-t border-cream/15 py-5 text-left last:border-b"
                    >
                      <span
                        className={`font-display text-[15px] transition-colors ${
                          isActive ? "text-yellow" : "text-cream/35"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-[24px] transition-colors sm:text-[28px] ${
                          isActive ? "text-cream" : "text-cream/45"
                        }`}
                      >
                        {step}
                      </span>
                      <motion.span
                        animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                        className="ml-auto text-yellow"
                      >
                        →
                      </motion.span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="relative flex min-h-[220px] items-center rounded-[28px] border border-cream/12 bg-cream/[0.04] p-9 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="font-display text-[13px] text-yellow">
                    Step {method.indexOf(active) + 1} of {method.length}
                  </span>
                  <p className="mt-3 font-display text-[26px] leading-snug text-cream md:text-[30px]">
                    {active}.
                  </p>
                  <p className="mt-4 max-w-md font-body text-[15.5px] leading-relaxed text-cream/70">
                    {DETAIL[active]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
