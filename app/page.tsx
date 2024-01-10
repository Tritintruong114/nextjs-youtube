"use client";
import TransitionPageReveal from "@/components/transition-page-reveal/transition-page-reveal";

export default function Home() {
  return (
    <>
      <TransitionPageReveal brandName="Bruno" sologan="Creative Designer" />
      <button>Website Content</button>
      <div className="header-revealer"></div>
    </>
  );
}
