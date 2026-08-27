"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { faqs, CONTACT } from "@/lib/data";
import faqCopy from "@/content/pages/faq.json";

const c = faqCopy.section;

export default function FAQ({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const list = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faq" className={`bg-cream ${limit ? "py-16 md:py-20" : "py-16 md:py-24 lg:py-32"}`}>
      <div className="container-narrow">
        <div className={limit ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" : undefined}>
          <div>
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                {c.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className={`mt-4 font-display leading-[1.16] tracking-[-0.01em] text-ink text-balance ${
                limit ? "text-[26px] sm:text-[30px]" : "text-[32px] sm:text-[40px] md:text-[46px]"
              }`}>
                {c.heading}
              </h2>
            </Reveal>
          </div>
          {limit && (
            <Reveal delay={0.14}>
              <a
                href="/faq"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-[13.5px] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
              >
                View More <span aria-hidden>→</span>
              </a>
            </Reveal>
          )}
        </div>

        <div className="mt-10 border-t border-line">
          {list.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-[18px] leading-snug text-ink md:text-[20px]">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 font-display text-[16px] text-teal"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-2xl font-body text-[15px] leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 font-body text-[14.5px] text-ink-soft">
            {c.helpPrefix}{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-teal">
              {c.helpLinkLabel}
            </a>{" "}
            {c.helpSuffix}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
