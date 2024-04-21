import { AboutUs, Features, Hero } from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-3">
        <Features />
      </div>
      <AboutUs />
    </main>
  );
}
