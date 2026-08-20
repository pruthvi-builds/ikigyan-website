"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Explore", href: "/explore" },
  { label: "Watch", href: "/watch" },
  { label: "Books", href: "/books" },
  { label: "Schools", href: "/schools" },
  { label: "Parents", href: "/#parents" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-3.5">
        <Link href="/#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Ikigyan"
            width={180}
            height={126}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[13.5px] font-medium tracking-wide text-ink/75 transition-colors hover:text-teal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/schools"
            className="rounded-full border border-ink/15 px-4 py-2 font-body text-[13px] font-semibold text-ink/80 transition-colors hover:border-teal hover:text-teal"
          >
            For Schools
          </a>
          <a
            href="/books"
            className="rounded-full bg-teal px-5 py-2.5 font-body text-[13px] font-semibold text-cream shadow-sm transition-all hover:bg-teal-deep hover:shadow-md"
          >
            Order Book
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${
              open ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <ul className="container-wide flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-body text-[15px] font-medium text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-3">
              <a
                href="/schools"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-ink/15 px-4 py-2.5 text-center font-body text-[13px] font-semibold"
              >
                For Schools
              </a>
              <a
                href="/books"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-teal px-4 py-2.5 text-center font-body text-[13px] font-semibold text-cream"
              >
                Order Book
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
