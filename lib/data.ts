// -----------------------------------------------------------------------------
// All site content is stored as editable JSON under /content and surfaced here.
// The client-facing CMS (see /public/admin) writes to those JSON files, so in
// normal use nobody needs to touch this file — it only re-shapes the raw JSON
// into the objects the components already expect.
// -----------------------------------------------------------------------------
import site from "@/content/site.json";
import methodData from "@/content/method.json";
import pillarsData from "@/content/pillars.json";
import categoriesData from "@/content/categories.json";
import programmeData from "@/content/programme.json";
import booksData from "@/content/books.json";
import videosData from "@/content/videos.json";
import faqsData from "@/content/faqs.json";

export const CONTACT = {
  phone: site.contact.phone,
  whatsapp: site.contact.whatsapp,
  email: site.contact.email,
};

export const siteMeta = {
  footerTagline: site.footerTagline,
  footerSignoff: site.footerSignoff,
};

export const socialLinks = site.social;

// Method step names only — the detailed copy lives in method.json / DiscoverMethod.
export const method = methodData.steps.map((s) => s.name);
export const methodSteps = methodData.steps;

export const pillars = pillarsData.items;

export const categories = categoriesData.items;

export const programmeSteps = programmeData.steps;
export const schoolOffer = programmeData.offer;

// Books — normalised so `book.intro.*` keeps working in the page components.
export const books = booksData.items.map((b) => ({
  ...b,
  intro: {
    badge: b.introBadge,
    strapline: b.introStrapline,
    description: b.introDescription,
  },
}));

export const videos = videosData.items;

export const faqs = faqsData.items;
