"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const LoadingScreen = () => {
  const container = useRef<HTMLDivElement>(null); // ✅ Right

  useGSAP(
    () => {
      gsap.to(".box", { scale: 180 });
      return () => {};
    },
    { scope: container }
  );

  return (
    <div ref={container} className="app">
      <div className="box">Hello</div>
    </div>
  );
};
export { LoadingScreen };
