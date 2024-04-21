import { AboutUs, Features, Hero, Metrics, OurExperts } from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <OurExperts />
    </main>
  );
}
