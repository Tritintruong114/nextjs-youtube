"use client";
import HomepageCta from "@/pages/homepage/cta";
import HomepageExpertise from "@/pages/homepage/expertise";
import HompageHero from "@/pages/homepage/hero";
import HomepageProject from "@/pages/homepage/project";
import HomepageValue from "@/pages/homepage/value";
export default function Home() {
  return (
    <main className="rounded-3xl h-fit overflow-y-scroll  no-scrollbar">
      <HompageHero />
      <HomepageCta />
      <HomepageProject />
      <HomepageExpertise />
      <HomepageValue />
    </main>
  );
}
