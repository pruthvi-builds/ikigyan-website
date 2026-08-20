import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";

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
          eyebrow="FAQ"
          title="Straight answers, before you have to ask."
        />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
