"use client";

import { TransitionVertical, useTransistionVertical } from "@/components";

export default function Home() {
  const { onTransistionVertical } = useTransistionVertical({});

  return (
    <>
      <TransitionVertical />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistionVertical("about")
          }
        >
          About
        </button>
      </div>
    </>
  );
}
