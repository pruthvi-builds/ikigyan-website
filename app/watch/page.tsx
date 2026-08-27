import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { videos } from "@/lib/data";
import watch from "@/content/pages/watch.json";

export const metadata: Metadata = {
  title: "Watch & Discover — Ikigyan",
  description: "A curated shelf of hand-picked, age-tagged educational videos.",
};

export default function WatchPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow={watch.header.eyebrow}
          title={watch.header.title}
          copy={watch.header.copy}
        />

        <section className="bg-cream pb-24">
          <div className="container-wide">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => (
                <Reveal key={v.topic} delay={(i % 6) * 0.06}>
                  <a
                    href="#"
                    className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-cream-deep/40 transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(27,28,38,0.08)]"
                  >
                    <div className="relative flex aspect-video items-center justify-center bg-teal-deep">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 font-body text-[16px] text-teal transition-transform group-hover:scale-110">
                        ▶
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                        {v.category}
                      </span>
                      <h3 className="mt-2 font-display text-[18px] leading-snug text-ink">
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

            <Reveal delay={0.2}>
              <div className="mt-14 rounded-[24px] border border-dashed border-line px-8 py-10 text-center">
                <p className="font-display text-[19px] text-ink/60">
                  {watch.footnote}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
