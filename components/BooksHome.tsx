import Image from "next/image";
import Reveal from "./Reveal";
import { books, CONTACT } from "@/lib/data";

export default function BooksHome() {
  const book = books[0];

  return (
    <section id="books" className="bg-cream py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">
                Books
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[26px] leading-[1.16] tracking-[-0.01em] text-ink text-balance sm:text-[30px]">
                Knowledge resources for children.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <a
              href="/books"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-body text-[13.5px] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              View More <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-8 overflow-hidden rounded-[28px] border border-line bg-cream-deep/50 sm:grid-cols-[1fr_1.2fr]">
            <div className="relative aspect-[4/3] w-full bg-cream-hero sm:aspect-auto">
              <Image
                src={book.image}
                alt={book.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <p className="font-display text-[15px] text-teal">{book.tagline}</p>
              <span className="mt-3 w-fit rounded-full bg-teal/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                {book.badge}
              </span>
              <h3 className="mt-4 font-display text-[24px] leading-tight text-ink sm:text-[28px]">
                {book.title}
              </h3>
              <p className="mt-1 font-body text-[14px] font-semibold text-teal">
                {book.subtitle}
              </p>
              <p className="mt-3 max-w-md font-body text-[14.5px] leading-relaxed text-ink-soft">
                {book.shortDescription}
              </p>
              <p className="mt-4 font-body text-[15px] font-semibold text-ink">
                {book.price}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/books"
                  className="rounded-full bg-ink px-6 py-3.5 font-body text-[13.5px] font-semibold text-cream transition-transform hover:-translate-y-0.5"
                >
                  View Book
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 font-body text-[13.5px] font-semibold text-teal"
                >
                  Order on WhatsApp <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
