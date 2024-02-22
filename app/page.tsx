"use client";

import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline({
      smoothChildTiming: true,
    });
    timeline.fromTo(
      ".transition_videos",
      {
        bottom: "0px",
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      },
      {
        top: "0px",
        scale: "0.7",
        transform: "rotateX(30deg)",
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      }
    );
  });
  return (
    <main className="rounded-3xl h-screen overflow-y-scroll bg-bruno-white  no-scrollbar flex items-center justify-center">
      <div className="transition_container perspective-600 h-full w-full relative bottom-0 flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos w-[600px] rounded-3xl absolute bottom-0"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos w-[600px] rounded-3xl absolute bottom-0"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos w-[600px] rounded-3xl absolute bottom-0"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos w-[600px] rounded-3xl absolute bottom-0"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
      </div>
    </main>
  );
}
