"use client";
import { TransitionFourColumns, useTransistionFourColumns } from "@/components";

const AboutPage = () => {
  const { onTransistionFourColumns } = useTransistionFourColumns({});
  return (
    <div>
      <TransitionFourColumns />
      <button onClick={() => onTransistionFourColumns("")}>Home</button>
    </div>
  );
};

export default AboutPage;
