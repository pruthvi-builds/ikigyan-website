import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Pillars from "@/components/Pillars";
import ExploreCategories from "@/components/ExploreCategories";
import explore from "@/content/pages/explore.json";

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
          eyebrow={explore.header.eyebrow}
          title={explore.header.title}
          copy={explore.header.copy}
        />
        <Pillars />
        <ExploreCategories />
      </main>
      <Footer />
    </>
  );
}
