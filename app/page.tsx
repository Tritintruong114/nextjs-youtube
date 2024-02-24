"use client";

import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const animate = () => {
    const timeline = gsap.timeline({});
    const path1 = [
      { x: 0, y: 0 },
      { x: 70, y: 120 },
      { x: 80, y: 90 },
      { x: 90, y: 30 },
      { x: 600, y: -450 },
      { x: -600, y: -500 },
      { x: 90, y: 1000 },
    ];
    timeline;
    gsap.to(".content_container", {
      scale: 0.9,
      ease: "power4.inOut",
      duration: 2,
    });
    timeline
      .fromTo(
        ".transition_videos",
        {
          motionPath: {
            path: path1,
            type: "cubic",
            curviness: 2,
          },
          display: "block",
          duration: 1.5,
          transform: "rotateX(0deg) scale(1)",
          stagger: 0.1,
        },
        {
          motionPath: {
            path: path1,
            type: "cubic",
            curviness: 2,
          },
          duration: 1.5,
          transform: "scale(0.7) rotateX(0deg)",
          stagger: 0.1,
          display: "none",
        }
      )
      .fromTo(
        ".transition_videos",
        {
          display: "block",
          duration: 0.3,
          transform: "translate(-20%, -100%) rotateX(90deg) scale(0.6)",
          stagger: 0.1,
        },
        {
          duration: 0.3,
          transform: "translate(0, 0) rotateX(0deg) scale(1)",
          stagger: 0.1,
        }
      );

    gsap.to(".content_container", {
      scale: 1,
      delay: 2,
      ease: "power4.inOut",
    });
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
          src="https://cdn.dribbble.com/userupload/13086267/file/original-d0c0d582a79ff618e642a4ed1d4b08f9.mp4"
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
