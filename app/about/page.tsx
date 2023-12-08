"use client";
import { TransitionVertical } from "@/animation";
import { useTransistionVertical } from "@/hooks";

const About = () => {
  const { onTransistionVertical } = useTransistionVertical({});

  return (
    <>
      <TransitionVertical />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistionVertical("/")
          }
        >
          Home
        </button>
      </div>
    </>
  );
};

export default About;
