"use client";
import { horizontalLoop } from "@/utils/gsap";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  const onPrev = () => {
    console.log("Click");
    gsap.to(".hero_location", {
      transform: "translate3d(-100%,0,0)",
    });
  };
  const onNext = () => {
    console.log("Click");
    gsap.to(".hero_location", {
      transform: "translate3d(0,0,0)",
    });
  };
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const loop = horizontalLoop(boxes, { paused: true });

    // add click listeners so you can click a box to have it move to the first slot
    boxes.forEach((box: any, i) =>
      box.addEventListener("click", () =>
        loop.toIndex(i, { duration: 1, ease: "power1.inOut" })
      )
    );

    // make the "next" and "previous" buttons call the appropriate methods on the timeline
    document
      .querySelector(".next")
      ?.addEventListener("click", () =>
        loop.next({ duration: 1, ease: "power1.inOut" })
      );
    document
      .querySelector(".prev")
      ?.addEventListener("click", () =>
        loop.previous({ duration: 1, ease: "power1.inOut" })
      );
  });
  return (
    <section className="no-scrollbar relative h-screen w-screen py-24">
      <div className="flex justify-center items-center h-full">
        <div className="h-screen absolute w-screen flex top-0 justify-center items-center">
          <Image
            src="/images/hero_1.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-[15%] z-10 overflow-hidden">
          <h1 className="h-fit gap-3 flex text-white font-geo">
            <div className="hero-section_title flex flex-col gap-3 translate-x-[0%]">
              <p className="text-4xl leading-none">Triangular Prism</p>
              <button
                onClick={() => onPrev()}
                className="text-base w-fit font-light border rounded-full px-6 py-1"
              >
                Next
              </button>
              <button
                onClick={() => onNext()}
                className="text-base w-fit font-light border rounded-full px-6 py-1"
              >
                Prev
              </button>
            </div>
          </h1>
        </div>
        <div className="absolute bottom-0 flex items-center sm:flex-row justify-between w-full">
          <div className="flex p-6 text-white font-bold text-xl">
            <span>01</span>
            <span>-</span>
            <span>05</span>
          </div>
          <div className="flex sm:flex-row gap-3 sm:items-start font-man flex-col sm:w-1/3 justify-between  bg-white p-6">
            <div className="sm:w-1/3 relative overflow-hidden flex">
              <p>Upcoming Exhibition</p>
            </div>
            <div className="sm:w-1/3">
              <p>30 Apr - 26 Aug 2024</p>
            </div>
            <div className="sm:w-1/3 overflow-hidden flex items-start flex-grow-0 flex-shrink-0">
              <p className="hero_location  box">Viet Nam</p>
              <p className="hero_location  box">Viet Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
