"use client";

import { TransitionFourColumns, useTransistionFourColumns } from "@/components";

export default function Home() {
  const { onTransistionFourColumns } = useTransistionFourColumns({});
  return (
    <>
      <TransitionFourColumns />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button onClick={() => onTransistionFourColumns("about")}>About</button>
      </div>
    </>
  );
}
