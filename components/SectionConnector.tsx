"use client";

import { motion } from "framer-motion";

/**
 * The Curiosity Thread — the single line that runs through the logo's
 * clover stem, redrawn here as the connective tissue between sections.
 * Each appearance marks one step of Ikigyan's learning method:
 * Discover → Question → Think → Solve → Discuss → Apply.
 */
export default function SectionConnector({
  step,
  index,
  tone = "cream",
  bg = "bg-cream",
}: {
  step: string;
  index: number;
  tone?: "cream" | "dark";
  bg?: string;
}) {
  const line = tone === "dark" ? "var(--color-cream)" : "var(--color-teal)";

  return (
    <div
      className={`relative flex items-center justify-center py-10 md:py-14 ${bg}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="64"
        viewBox="0 0 400 64"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.35]"
      >
        <motion.path
          d="M0 32 C 60 8, 100 56, 160 32 S 260 8, 320 32 S 380 52, 400 32"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-2.5 rounded-full bg-yellow px-4 py-1.5 shadow-[0_4px_18px_rgba(16,81,81,0.18)]"
      >
        <span className="font-display text-[11px] tracking-wide text-ink/60">
          {String(index).padStart(2, "0")}
        </span>
        <span className={`font-display text-[13px] font-medium tracking-wide text-ink`}>
          {step}
        </span>
      </motion.div>
    </div>
  );
}
