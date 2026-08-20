import Reveal from "./Reveal";
import { videos } from "@/lib/data";

export default function WatchDiscover() {
  const featured = videos.slice(0, 3);

  return (
    <section id="watch" className="bg-cream-deep py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                Watch &amp; Discover
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[26px] leading-[1.16] tracking-[-0.01em] text-ink text-balance sm:text-[30px]">
                A curated shelf, not an endless feed.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <a
              href="/watch"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-[13.5px] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              View More <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((v, i) => (
            <Reveal key={v.topic} delay={i * 0.08}>
              <a
                href="/watch"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-cream transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(27,28,38,0.08)]"
              >
                <div className="relative flex aspect-video items-center justify-center bg-teal-deep">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 font-body text-[16px] text-teal transition-transform group-hover:scale-110">
                    ▶
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[18px] leading-snug text-ink">
                    {v.topic}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-5 font-body text-[12.5px] text-ink-soft">
                    <span>{v.source}</span>
                    <span className="rounded-full bg-teal/8 px-2.5 py-1 font-semibold text-teal">
                      {v.age}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
