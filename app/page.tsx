import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIsIkigyan from "@/components/WhatIsIkigyan";
import SectionConnector from "@/components/SectionConnector";
import ExploreTeaser from "@/components/ExploreTeaser";
import SchoolsHome from "@/components/SchoolsHome";
import BooksHome from "@/components/BooksHome";
import WatchDiscover from "@/components/WatchDiscover";
import Parents from "@/components/Parents";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatIsIkigyan />
        <SectionConnector step="Discover" index={1} />
        <ExploreTeaser />
        <SectionConnector step="Question" index={2} bg="bg-cream-deep" />
        <SchoolsHome />
        <SectionConnector step="Think" index={3} tone="dark" bg="bg-ink" />
        <BooksHome />
        <SectionConnector step="Solve" index={4} />
        <WatchDiscover />
        <SectionConnector step="Discuss" index={5} bg="bg-cream-deep" />
        <Parents />
        <SectionConnector step="Apply" index={6} bg="bg-cream-deep" />
        <FAQ limit={2} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
