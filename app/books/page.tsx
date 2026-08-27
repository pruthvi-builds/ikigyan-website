import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { books, CONTACT } from "@/lib/data";
import booksCopy from "@/content/pages/books.json";

export const metadata: Metadata = {
  title: "Books — Ikigyan",
  description: "Knowledge resources for children, starting with Educonomy.",
};

export default function BooksPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow={booksCopy.header.eyebrow}
          title={booksCopy.header.title}
          copy={booksCopy.header.copy}
        />

        <section className="bg-cream pb-24">
          <div className="container-wide flex flex-col gap-14">
            {books.map((book, i) => (
              <div key={book.slug} className="flex flex-col gap-10">
                <Reveal delay={i * 0.08}>
                  <div className="rounded-[28px] border border-line bg-cream-deep/40 p-8 sm:p-11">
                    <span className="w-fit rounded-full bg-teal/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                      {book.intro.badge}
                    </span>
                    <h2 className="mt-4 font-display text-[24px] leading-tight text-ink sm:text-[28px]">
                      {book.title}
                    </h2>
                    <p className="mt-1.5 font-body text-[15px] font-semibold text-teal">
                      {book.intro.strapline}
                    </p>
                    <p className="mt-4 max-w-2xl font-body text-[15.5px] leading-relaxed text-ink-soft">
                      {book.intro.description}
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
                      {book.audiences.map((a) => (
                        <div key={a.label}>
                          <p className="font-body text-[12.5px] font-semibold text-teal">
                            {a.label}
                          </p>
                          <p className="mt-1 font-body text-[12.5px] leading-relaxed text-ink-soft">
                            {a.copy}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={i * 0.08 + 0.06}>
                <div className="grid gap-8 overflow-hidden rounded-[28px] border border-line bg-cream-deep/40 sm:grid-cols-[1fr_1.2fr]">
                  <div className="relative aspect-[4/3] w-full bg-cream-hero sm:aspect-auto">
                    <Image
                      src={book.image}
                      alt={book.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-11">
                    <span className="w-fit rounded-full bg-teal/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                      {book.badge} — {book.title}
                    </span>
                    <h2 className="mt-4 font-display text-[26px] leading-tight text-ink sm:text-[30px]">
                      {book.headline}
                    </h2>
                    <p className="mt-1.5 font-body text-[15px] font-semibold text-teal">
                      {book.subtitle}
                    </p>
                    <p className="mt-4 max-w-lg font-body text-[15.5px] leading-relaxed text-ink-soft">
                      {book.fullDescription}
                    </p>

                    <p className="mt-6 font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-teal">
                      Explore
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {book.exploreTopics.map((t) => (
                        <li
                          key={t.label}
                          className="flex items-start gap-2.5 font-body text-[13.5px] leading-snug text-ink-soft"
                        >
                          <span aria-hidden>{t.icon}</span>
                          {t.label}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 font-display text-[16px] text-ink">
                      {book.closingLine}
                    </p>

                    <p className="mt-5 font-display text-[20px] text-ink">
                      {book.price}
                    </p>

                    <ul className="mt-3 flex flex-col gap-2">
                      {book.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 font-body text-[13.5px] text-ink-soft"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-teal" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                          `Hi! I'd like to order ${book.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener"
                        className="rounded-full bg-ink px-6 py-3.5 font-body text-[14px] font-semibold text-cream transition-transform hover:-translate-y-0.5"
                      >
                        Order on WhatsApp
                      </a>
                      <a
                        href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                          `Bulk order enquiry — ${book.title}`
                        )}`}
                        className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-teal"
                      >
                        Bulk / School Orders <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              </div>
            ))}

            <Reveal delay={0.2}>
              <div className="rounded-[24px] border border-dashed border-line px-8 py-10 text-center">
                <p className="font-display text-[19px] text-ink/60">
                  {booksCopy.footnote}
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
