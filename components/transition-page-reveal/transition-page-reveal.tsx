/* eslint-disable react/no-unescaped-entities */
"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import "./styles.css";

interface PageRevealProps {
  brandName: string;
  sologan: string;
}
const TransitionPageReveal = (props: PageRevealProps) => {
  const comp = useRef(null);
  const router = useRouter();

  const onNavigation = (path: string) => {
    setTimeout(() => {
      router.push(`/${path}`);
    }, 1500);
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".clip-top, .clip-bottom", {
        duration: 2,
        delay: 1,
        height: "33.3vh",
        ease: "power4.inOut",
      });

      gsap.to(".marquee", {
        duration: 3.5,
        delay: 0.75,
        top: "50%",
        ease: "power4.inOut",
      });

      gsap.from(".clip-top .marquee, .clip-bottom .marquee", {
        duration: 5,
        delay: 1,
        left: "100%",
        ease: "power3.inOut",
      });

      gsap.from(".clip-center .marquee", {
        duration: 5,
        delay: 1,
        left: "-50%",
        ease: "power4.inOut",
      });

      gsap.to(".clip-top", {
        duration: 2,
        delay: 6,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
      });

      gsap.to(".clip-bottom", {
        duration: 2,
        delay: 6,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
      });

      gsap.to(
        ".clip-top .marquee, clip-bottom .marquee, .clip-center .marquee span",
        {
          duration: 1,
          delay: 6,
          opacity: 0,
          display: "none",
          ease: "power2.inOut",
        }
      );
      gsap.to(".heading", {
        duration: 1,
        delay: 6.5,
        opacity: 1,
        ease: "power2.in",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="loader">
      <div className="loader-clip clip-top">
        <div className="marquee">
          <div className="marquee-container font-house">
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
            {props.brandName}
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
          </div>
        </div>
      </div>

      <div className="loader-clip clip-bottom">
        <div className="marquee">
          <div className="marquee-container font-house">
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
            {props.brandName}
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
          </div>
        </div>
      </div>

      <div className="clip-center flex justify-center items-center ">
        <h1 className="text-center opacity-0  heading sm:text-6xl text-3xl font-house">
          {props.brandName} <br />{" "}
          <p className="subtilte font-great sm:text-md">{props.sologan}</p>
        </h1>
        <div className="marquee">
          <div className="marquee-container font-house ">
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
            <span>{props.brandName}</span>
          </div>
        </div>
      </div>

      <div className="container__wrapper w-full h-screen">
        <div className="nav">
          <div className="logo font-house">{props.brandName}</div>

          <div className="nav-items hidden sm:flex items-center justify-center">
            <button
              onClick={() => onNavigation("work")}
              className="duration-500"
            >
              Work
            </button>
            <button
              onClick={() => onNavigation("contact")}
              className="duration-500"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigation("porfolio")}
              className="duration-500"
            >
              Porfolio
            </button>
          </div>
        </div>

        <div className="footer flex flex-col sm:flex-row">
          <p>Through the Architect's Lens</p>
          <p>The Harmony of Architectural Lines</p>
          <p>A Nha Trang Architectural Storyteller</p>
        </div>
      </div>
    </div>
  );
};

export default TransitionPageReveal;
