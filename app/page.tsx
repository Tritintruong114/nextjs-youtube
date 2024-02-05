/* eslint-disable react/no-unescaped-entities */
"use client";

import ArrowRight from "@/public/icons/arrow-right";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className=" h-screen flex  w-screen justify-center items-center overflow-y-scroll no-scrollbar">
      <ul className="w-full">
        <li className="flex w-full items-center relative group h-fit overflow-hidden">
          <div className="flex group w-full">
            <span className="font-bebas w-full text-[6vw] leading-none relative pt-2 text-white bg-black duration-300 ease-in-out transition-transform group-hover:-translate-y-[100%]">
              "Creative Development"
            </span>
            <span className="font-bebas w-full text-[6vw] leading-none absolute pt-2 text-black bg-white duration-300 ease-in-out transition-transform translate-y-[100%] group-hover:-translate-y-[0%]">
              "Creative Development"
            </span>
          </div>
          <div className="z-10 absolute flex group w-fit overflow-hidden right-0">
            <ArrowRight className="group-hover:translate-x-full w-[30px] sm:w-[60px] md:w-[90px] bg-transparent duration-300 fill-white" />
            <ArrowRight className="absolute bg-transparent left-0 -translate-x-full group-hover:translate-x-0 duration-300 fill-black" />
          </div>
        </li>
        <li className="flex w-full items-center relative group h-fit overflow-hidden">
          <div className="flex group w-full">
            <span className="font-bebas w-full text-[6vw] leading-none relative pt-2 text-white/60 bg-black duration-300">
              "Creative Development"
            </span>
          </div>

          <div className="group-hover:opacity-100 opacity-0 bg-black px-1 text-white absolute w-full duration-150 -rotate-3">
            <Marquee speed={15} autoFill>
              <span className="px-1 ">-coming soon</span>
            </Marquee>
          </div>

          <button className="bg-white flex h-fit justify-center relative items-center group/button overflow-hidden text-black px-base py-1 rounded right-3 duration-300 group-hover:bottom-0 -bottom-24">
            <span className="duration-150 leading-none    group-hover/button:-translate-y-[120%] relative">
              Subscribe
            </span>
            <span className="absolute text-black duration-150   group-hover/button:translate-y-0 translate-y-[120%] leading-none">
              Subscribe
            </span>
          </button>
        </li>
      </ul>
    </main>
  );
}
