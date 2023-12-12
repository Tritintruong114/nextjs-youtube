"use client";

import { TransitionFourColumns, useTransistionFourColumns } from "@/components";

const About = () => {
  const { onTransistionFourColumns } = useTransistionFourColumns({});

  return (
    <>
      <TransitionFourColumns />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button onClick={() => onTransistionFourColumns("/")}>Home</button>
      </div>
    </>
  );
};

export default About;
