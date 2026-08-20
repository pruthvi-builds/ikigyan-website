"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

function DidYouKnowCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="group relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-cream p-8 text-left transition-shadow hover:shadow-[0_18px_40px_rgba(27,28,38,0.08)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
          Did You Know?
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-teal/25 font-display text-[15px] text-teal transition-transform group-hover:rotate-45">
          {flipped ? "×" : "+"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.p
            key="q"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-display text-[24px] leading-snug text-ink md:text-[26px]"
          >
            What was the world&rsquo;s first form of money made from?
          </motion.p>
        ) : (
          <motion.p
            key="a"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-body text-[16px] leading-relaxed text-ink-soft"
          >
            The earliest coins were struck over 2,600 years ago in ancient
            Lydia, from <em>electrum</em> — a natural blend of gold and
            silver panned straight from riverbeds.
          </motion.p>
        )}
      </AnimatePresence>

      <span className="font-body text-[12.5px] font-semibold text-teal">
        {flipped ? "Tap to see the question" : "Tap to reveal"}
      </span>
    </button>
  );
}

function CuriosityOfWeekCard() {
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[24px] bg-teal p-8 text-cream">
      <div className="flex items-center justify-between">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-yellow-soft">
          Curiosity of the Week
        </span>
        <span className="font-display text-[20px] text-yellow-soft">?</span>
      </div>
      <p className="font-display text-[24px] leading-snug md:text-[26px]">
        Why does the sky turn orange at sunset, but stay blue all afternoon?
      </p>
      <p className="font-body text-[13.5px] leading-relaxed text-cream/70">
        One question, explored properly, every single week — in the app and
        in class.
      </p>
    </div>
  );
}

function PuzzleOfWeekCard() {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[24px] border-2 border-yellow bg-cream p-8">
      <div className="flex items-center justify-between">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
          Puzzle of the Week
        </span>
        <span className="font-display text-[13px] text-ink/40">
          {stage === 0 ? "Think" : stage === 1 ? "Hint" : "Solved"}
        </span>
      </div>

      <div>
        <p className="font-display text-[21px] leading-snug text-ink md:text-[23px]">
          I have cities, but no houses. I have mountains, but no trees. I
          have water, but no fish. What am I?
        </p>
        <AnimatePresence>
          {stage >= 1 && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 font-body text-[14px] text-ink-soft"
            >
              Hint: you use me to find your way.
            </motion.p>
          )}
          {stage === 2 && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-body text-[15px] font-semibold text-teal"
            >
              Answer: a map.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 0))}
        className="self-start rounded-full bg-ink px-5 py-2.5 font-body text-[13px] font-semibold text-cream transition-transform hover:-translate-y-0.5"
      >
        {stage === 0 ? "Get a hint" : stage === 1 ? "Reveal answer" : "Try another"}
      </button>
    </div>
  );
}

export default function WeeklyFeatures() {
  return (
    <section id="curiosity" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
              Fresh every week
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[32px] leading-[1.14] tracking-[-0.01em] text-ink text-balance sm:text-[40px] md:text-[46px]">
              Small doses of wonder, on repeat.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.1}>
            <DidYouKnowCard />
          </Reveal>
          <Reveal delay={0.18}>
            <CuriosityOfWeekCard />
          </Reveal>
          <Reveal delay={0.26}>
            <PuzzleOfWeekCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
