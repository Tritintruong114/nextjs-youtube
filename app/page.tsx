import {
  AboutUs,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExpert,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <OurExpert />
      <div className="p-4 bg-secondary-950">
        <NewLetter />
      </div>
    </main>
  );
}
