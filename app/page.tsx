/* eslint-disable react/no-unescaped-entities */
"use client";

import ArrowRight from "@/public/icons/arrow-right";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className=" h-screen flex  w-screen justify-center items-center overflow-y-scroll no-scrollbar">
      <ul className="w-full">
        {/* First item */}
        <li className="flex w-full cursor-pointer items-center relative group h-fit overflow-hidden font-bebas">
          <div className="flex group w-full">
            <span className="w-full text-[6vw] leading-none relative pt-2 text-white bg-black duration-300 group-hover:-translate-y-full">
              "Creative Development"
            </span>
            <span className="w-full text-[6vw] leading-none absolute pt-2 text-black bg-white duration-300 translate-y-full group-hover:-translate-y-[0%]">
              "Creative Development"
            </span>
          </div>
          <div className="z-10 absolute flex group w-fit overflow-hidden right-0">
            <ArrowRight className="group-hover:translate-x-full w-[6vw] bg-transparent duration-300 fill-white" />
            <ArrowRight className="absolute bg-transparent left-0 -translate-x-full group-hover:translate-x-0 duration-300 fill-black" />
          </div>
        </li>

        {/* Second item */}
        <li className="flex w-full items-center relative group h-fit overflow-hidden">
          <div className="flex group w-full">
            <span className="font-bebas w-full text-[6vw] leading-none relative pt-2 text-white/60 bg-black duration-300">
              "Creative Development"
            </span>
          </div>

          <div className="group-hover:opacity-100 opacity-0 bg-bruno-white px-1 text-bruno-black absolute w-full duration-150 -rotate-2">
            <Marquee speed={15} autoFill>
              <span className="px-1 leading-none py-1 text-[6px] sm:text-[1vw]">
                -coming soon
              </span>
            </Marquee>
          </div>

          <button className="bg-bruno-white ease-in-out duration-300 font-bebas flex h-fit justify-center relative items-center group/button  text-black px-base py-2 rounded right-3  group-hover:bottom-0 -bottom-24">
            <p className="flex flex-col h-fit overflow-hidden">
              <span className=" text-[12px] ease-in-out duration-300  sm:text-[1vw] leading-none group-hover/button:-translate-y-[200%] relative">
                Subscribe
              </span>
              <span className="absolute text-black  ease-in-out text-[12px] sm:text-[1vw] group-hover/button:translate-y-0 translate-y-[200%] duration-300 leading-none">
                Subscribe
              </span>
            </p>
          </button>
        </li>
      </ul>
    </main>
  );
}
