import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { programmeSteps, schoolOffer } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Schools — Ikigyan",
  description:
    "A structured 26-week learning programme for schools, starting with two free demo classes.",
};

export default function SchoolsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow="For schools"
          title="Bringing real-world learning into the classroom."
          copy="A structured 26-week programme that complements academic learning with essential life skills. Ikigyan gives teachers ready-to-use learning experiences, activities and resources that help children discover, think and apply knowledge beyond the textbook."
        />

        <section className="bg-cream py-16 md:py-24">
          <div className="container-wide grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-cream-hero">
                <Image
                  src="/illustrations/hero-journey.png"
                  alt="A winding path connecting a school, a calendar, a puzzle book, a globe and a child climbing stairs made of books toward a star, illustrating the 26-week programme."
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                  The journey
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 font-display text-[26px] leading-[1.16] tracking-[-0.01em] text-ink sm:text-[30px]">
                  The 26-week Ikigyan learning journey.
                </h2>
              </Reveal>

              <ol className="mt-8 flex flex-col">
                {programmeSteps.map((s, i) => (
                  <Reveal key={s.n} delay={(i % 4) * 0.06}>
                    <li className="group flex gap-6 border-t border-line py-6 last:border-b">
                      <span className="font-display text-[15px] text-teal/60 pt-1">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-[20px] leading-snug text-ink transition-colors group-hover:text-teal md:text-[22px]">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 font-body text-[14px] leading-relaxed text-ink-soft">
                          {s.copy}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="enquiry" className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
          <svg
            className="pointer-events-none absolute -bottom-32 -left-32 h-[440px] w-[440px] text-cream/[0.035]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div className="container-wide relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <Reveal>
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-yellow">
                  What&rsquo;s included
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 font-display text-[26px] leading-[1.16] tracking-[-0.01em] text-balance sm:text-[30px]">
                  Everything a school needs to get started.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`mailto:hello@ikigyan.com?subject=School%20Partnership%20Enquiry`}
                    className="rounded-full bg-yellow px-6 py-3.5 font-body text-[14px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    School Partnership Enquiry
                  </a>
                  <a
                    href={`mailto:hello@ikigyan.com?subject=Book%202%20Free%20Demo%20Classes`}
                    className="rounded-full border border-cream/25 px-6 py-3.5 font-body text-[14px] font-semibold text-cream transition-colors hover:border-cream/60"
                  >
                    Book 2 Free Demo Classes
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-cream/12 bg-cream/12 sm:grid-cols-2">
                {schoolOffer.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 bg-ink px-6 py-5 font-body text-[14px] leading-snug text-cream/85"
                  >
                    <span className="mt-0.5 text-yellow">✦</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
