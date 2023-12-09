"use client";

import { TransitionDropDown, useTransistionDropDown } from "@/components";

const About = () => {
  const { onTransistionDropDown } = useTransistionDropDown({});

  return (
    <>
      <TransitionDropDown />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistionDropDown("/")
          }
        >
          Home
        </button>
      </div>
    </>
  );
};

export default About;
