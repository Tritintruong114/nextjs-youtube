"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const TransitionDropDown = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".menu_open",
      {
        height: "100%",
      },
      {
        duration: 1,
        ease: "power4.inOut",
        height: 0,
        stagger: 0.1,
      }
    ),
      gsap.to(".overlay_open", {
        opacity: 0,
        delay: 0.5,
      });
  }, []);

  return (
    <>
      <div className="flex z-10 h-screen flex-row-reverse rotate-180 absolute w-screen top-0 pointer-events-none">
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30"></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30"></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30"></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30"></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30"></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30 "></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30 "></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30 "></div>
        <div className="menu_open h-full w-1/4 bg-[#97FEED] z-30 "></div>
        <div className="w-screen overlay_open h-screen bg-black absolute duration-300 pointer-events-none"></div>
      </div>

      <div className="flex z-10 h-screen absolute w-screen top-0 pointer-events-none">
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30"></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30"></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30"></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30"></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30"></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30 "></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30 "></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30 "></div>
        <div className="menu_close w-1/4 h-0 bg-[#97FEED] z-30 "></div>
        <div className="w-screen overlay_close h-screen bg-black absolute duration-300 pointer-events-none opacity-0"></div>
      </div>
    </>
  );
};

export { TransitionDropDown };
