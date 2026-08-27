import Image from "next/image";
import type { ReactNode } from "react";
import { socialLinks, siteMeta } from "@/lib/data";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Explore", href: "/explore" },
      { label: "Watch", href: "/watch" },
      { label: "Books", href: "/books" },
      { label: "Schools", href: "/schools" },
    ],
  },
  {
    title: "Ikigyan",
    links: [
      { label: "Parents", href: "/#parents" },
      { label: "FAQ", href: "/faq" },
      { label: "About", href: "/#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Shipping & Refunds", href: "#" },
      { label: "Contact", href: "/faq" },
    ],
  },
];

const SOCIAL_ICON: Record<string, ReactNode> = {
  Instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: <path d="M14 21v-7h2.3l.4-3H14V9c0-.9.2-1.5 1.5-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7Z" />,
  YouTube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <circle cx="7.5" cy="8" r="1" fill="currentColor" stroke="none" />
      <path d="M7.5 11v6M11 11v6M11 13.5c0-1.5 1-2.5 2.5-2.5s2 1 2 2.5V17" />
    </>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-cream">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-12 border-b border-cream/12 pb-14 md:flex-row">
          <div className="max-w-xs">
            <Image
              src="/logo.png"
              alt="Ikigyan"
              width={200}
              height={140}
              className="h-14 w-auto brightness-0 invert md:h-16"
            />
            <p className="mt-5 font-body text-[14px] leading-relaxed text-cream/60">
              {siteMeta.footerTagline}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-yellow hover:text-yellow"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {SOCIAL_ICON[s.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-cream/45">
                  {c.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="font-body text-[14px] text-cream/75 transition-colors hover:text-yellow"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-[12.5px] text-cream/45">
            © {new Date().getFullYear()} Ikigyan. All rights reserved.
          </p>
          <p className="font-display text-[13px] font-semibold text-cream/45">
            {siteMeta.footerSignoff}
          </p>
        </div>
      </div>
    </footer>
  );
}
