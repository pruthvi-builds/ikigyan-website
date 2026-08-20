"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "@/lib/data";

export default function FloatingContact() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
        <button
          onClick={() => setFormOpen(true)}
          aria-label="Send an enquiry"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-cream shadow-[0_10px_26px_rgba(16,81,81,0.35)] transition-transform hover:-translate-y-0.5 md:h-14 md:w-14"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16v11H8l-4 4V5Z" />
            <path d="M7.5 9h9M7.5 12.5h6" />
          </svg>
        </button>

        <a
          href={`tel:${CONTACT.phone}`}
          aria-label="Call Ikigyan"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-[0_10px_26px_rgba(27,28,38,0.3)] transition-transform hover:-translate-y-0.5 md:h-14 md:w-14"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 3.5h3.5l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3 4.6 1.5 1.5 0 0 1 4.5 3.5Z" />
          </svg>
        </a>

        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener"
          aria-label="Message Ikigyan on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_26px_rgba(37,211,102,0.4)] transition-transform hover:-translate-y-0.5 md:h-14 md:w-14"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.06c-1.7 0-3.28-.5-4.61-1.35l-.33-.2-3.05.8.81-2.96-.21-.33a8.03 8.03 0 0 1-1.24-4.28c0-4.46 3.63-8.08 8.63-8.08 4.6 0 8.34 3.62 8.34 8.08 0 4.46-3.74 8.32-8.34 8.32Z" />
          </svg>
        </a>
      </div>

      <AnimatePresence>
        {formOpen && <ContactFormModal onClose={() => setFormOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function ContactFormModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi Ikigyan, I'd like to get in touch.`,
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      `Message: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    onClose();
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-[24px] bg-cream p-7 shadow-[0_30px_70px_rgba(27,28,38,0.35)] sm:p-9"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          ✕
        </button>

        <p className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-teal">
          Get in touch
        </p>
        <h2 className="mt-2 font-display text-[22px] leading-tight text-ink">
          Send us an enquiry.
        </h2>
        <p className="mt-1.5 font-body text-[13.5px] text-ink-soft">
          We&rsquo;ll open WhatsApp with your message ready to send.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="cf-name" className="font-body text-[12.5px] font-semibold text-ink">
              Name
            </label>
            <input
              id="cf-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 font-body text-[14px] text-ink outline-none focus:border-teal"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="font-body text-[12.5px] font-semibold text-ink">
              Phone (optional)
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 font-body text-[14px] text-ink outline-none focus:border-teal"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="cf-message" className="font-body text-[12.5px] font-semibold text-ink">
              Message
            </label>
            <textarea
              id="cf-message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 font-body text-[14px] text-ink outline-none focus:border-teal"
              placeholder="Tell us what you're looking for — school partnership, book order, or a general question."
            />
          </div>

          <button
            type="submit"
            className="mt-1 rounded-full bg-teal px-6 py-3.5 font-body text-[14px] font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Send via WhatsApp
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
