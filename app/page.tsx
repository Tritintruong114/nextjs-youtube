"use client";
import HomepageCta from "@/pages/homepage/cta";
import HompageHero from "@/pages/homepage/hero";
import HomepageProject from "@/pages/homepage/project";
import HomepageValue from "@/pages/homepage/value";
export default function Home() {
  return (
    <>
      <HompageHero />
      <HomepageCta />
      <HomepageProject />
      <HomepageValue />
    </>
  );
}
