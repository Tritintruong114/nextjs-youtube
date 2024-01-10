"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const TransitionFourColumns = () => {
  useLayoutEffect(() => {
    gsap.to(".transition_el-up", {
      duration: 2,
      height: 0,
      stagger: 0.2,
      ease: "power4.inOut",
    });
    gsap.to(".transition_el-down", {
      duration: 2,
      height: 0,
      stagger: 0.2,
      ease: "power4.inOut",
    });
    gsap.to(".overlay", {
      duration: 2,
      opacity: 0,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="absolute h-screen w-screen z-10 flex-col flex pointer-events-none">
      <div className="h-1/2 w-full flex justify-center z-10">
        <div className=" transition_el-up h-full w-1/2  bg-black"></div>
        <div className=" transition_el-up h-full w-1/2  bg-black"></div>
      </div>
      <div className="overlay bg-white h-screen w-screen absolute"></div>
      <div className="h-1/2 w-full flex justify-center rotate-180 z-10">
        <div className=" transition_el-down h-full w-1/2  bg-black"></div>
        <div className=" transition_el-down h-full w-1/2  bg-black"></div>
      </div>
    </div>
  );
};

export { TransitionFourColumns };
