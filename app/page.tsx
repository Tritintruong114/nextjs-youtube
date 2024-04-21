import { AboutUs, Features, Hero, Metrics, OurExpert } from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-3">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <OurExpert />
    </main>
  );
}
