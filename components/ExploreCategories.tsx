"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { categories } from "@/lib/data";

export default function ExploreCategories() {
  return (
    <section className="bg-cream-deep py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                Explore
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[40px] md:text-[46px]">
                A knowledge universe children can wander into.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-xs font-body text-[14.5px] leading-relaxed text-ink-soft">
              Eight ways into the world — from the solar system to the
              science hiding in your kitchen. New topics added every week.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.a
              href="#"
              key={c.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: "easeOut" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-line bg-cream px-6 py-7 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_34px_rgba(27,28,38,0.08)]"
            >
              <span className="font-display text-[13px] text-ink/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-8">
                <h3 className="font-display text-[19px] leading-snug text-ink">
                  {c.label}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-ink-soft">
                  {c.copy}
                </p>
              </div>
              <span className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 font-body text-[14px] text-ink/60 transition-all group-hover:border-teal group-hover:bg-teal group-hover:text-cream">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
