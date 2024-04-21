import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExperts,
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
      <OurExperts />
      <div className="p-4 bg-secondary-950">
        <NewLetter />
      </div>

      <Blog />
    </main>
  );
}
