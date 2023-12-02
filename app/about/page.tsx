"use client";
import { Transistion } from "@/animation";
import { useTransistion } from "@/hooks";

const About = () => {
  const { onTransistion } = useTransistion({});

  return (
    <>
      <Transistion />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistion("/")
          }
        >
          Home
        </button>
      </div>
    </>
  );
};

export default About;
