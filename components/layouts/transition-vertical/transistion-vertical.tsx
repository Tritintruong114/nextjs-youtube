"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const TransitionVertical = () => {
  useLayoutEffect(() => {
    gsap.to(".menu", {
      duration: 1.5,
      ease: "power4.inOut",
      height: 0,
      stagger: 0.2,
    });
    gsap.to(".overlay", {
      opacity: 0,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="flex z-10 h-screen absolute w-screen top-0 pointer-events-none">
      <div className="menu w-1/4 bg-[#A076F9] z-30"></div>
      <div className="menu w-1/4 bg-[#A076F9] z-30"></div>
      <div className="menu w-1/4 bg-[#A076F9] z-30"></div>
      <div className="menu w-1/4 bg-[#A076F9] z-30"></div>
      <div className="menu w-1/4 bg-[#A076F9] z-30"></div>
      <div className="menu w-1/4 bg-[#A076F9] z-30 "></div>
      <div className="w-screen overlay h-screen bg-black absolute duration-300 pointer-events-none"></div>
    </div>
  );
};

export { TransitionVertical };
