"use client";

import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const animate = () => {
    const timeline = gsap.timeline({});
    const path1 = [
      { x: 0, y: 0 },
      { x: 0, y: -120 },
      { x: 0, y: -150 },
      { x: 0, y: -180 },
      { x: 0, y: -210 },
      { x: 0, y: -150 },
      { x: 0, y: -120 },
      { x: 0, y: 0 },
      { x: 0, y: 200 },
      { x: 0, y: 1000 },
    ];

    timeline.fromTo(
      ".transition_videos",
      {
        motionPath: {
          path: path1,
          type: "cubic",
          curviness: 2,
        },
        display: "block",
        duration: 3,
        transform: "rotateX(-20deg) scale(0.3)",
        stagger: 0.1,
      },
      {
        motionPath: {
          path: path1,
          type: "cubic",
          curviness: 2,
        },
        duration: 3,
        transform: "scale(1.5) rotateX(20deg)",
        stagger: 0.1,
        display: "none",
      }
    );
  };

  return (
    <main className="rounded-3xl h-screen overflow-y-scroll bg-bruno-white  no-scrollbar flex items-center justify-center">
      <div className="transition_container perspective-600 h-full w-full relative bottom-0 flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos hidden w-full h-full rounded-3xl absolute"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos hidden w-full h-full rounded-3xl absolute"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos hidden w-full h-full rounded-3xl absolute"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />

        <video
          loop
          muted
          autoPlay
          preload="none"
          className="transition_videos hidden w-full h-full rounded-3xl absolute"
          src="https://cdn.dribbble.com/userupload/13136622/file/original-fc4f1c8b734c4133bf7f33ecbc5242cd.mp4"
        />
      </div>
      <button
        onClick={() => animate()}
        className="absolute font-bebas text-bruno-black bg-bruno-yellow px-base pt-1 rounded-full"
      >
        Animate
      </button>
    </main>
  );
}
