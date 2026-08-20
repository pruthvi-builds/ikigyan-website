import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Pillars from "@/components/Pillars";
import ExploreCategories from "@/components/ExploreCategories";

export const metadata: Metadata = {
  title: "Explore — Ikigyan",
  description:
    "Five ways to understand the world, and a knowledge universe of categories children can wander into.",
};

export default function ExplorePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Explore"
          title="Real-world learning, one curious topic at a time."
          copy="Everything we teach starts from five real-world pillars, and branches into dozens of curiosity-led topics."
        />
        <Pillars />
        <ExploreCategories />
      </main>
      <Footer />
    </>
  );
}
