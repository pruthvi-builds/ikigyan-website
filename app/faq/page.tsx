import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import faq from "@/content/pages/faq.json";

export const metadata: Metadata = {
  title: "FAQ — Ikigyan",
  description: "Questions parents and schools ask us about Ikigyan.",
};

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow={faq.header.eyebrow}
          title={faq.header.title}
        />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
