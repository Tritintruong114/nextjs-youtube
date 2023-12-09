"use client";

import { TransitionDropDown, useTransistionDropDown } from "@/components";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const { onTransistionDropDown } = useTransistionDropDown({});

  const comp = useRef(null);
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
          ease: "power2.inOut",
        }
      );
    }, comp);

    // tl.from(".clip-top .marquee, .clip-bottom .marquee", {
    //   duration: 5,
    //   delay: 1,
    //   left: "100%",
    //   ease: "power3.inOut",
    // });

    // tl.from(".clip-center .marquee", {
    //   duration: 5,
    //   delay: 1,
    //   left: "-50%",
    //   ease: "power4.inOut",
    // });

    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* <div ref={comp} className="loader">
        <div className="loader-clip clip-top">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>Bruno</span>
              <span>Bruno</span>
              Bruno
              <span>Bruno</span>
              <span>Bruno</span>
            </div>
          </div>
        </div>

        <div className="loader-clip clip-bottom">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>Bruno</span>
              <span>Bruno</span>
              Bruno
              <span>Bruno</span>
              <span>Bruno</span>
            </div>
          </div>
        </div>

        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>Bruno</span>
              <span>Bruno</span>
              Bruno
              <span>Bruno</span>
              <span>Bruno</span>
            </div>
          </div>
        </div>

        <div className="container__wrapper w-full h-screen">
          <div className="nav">
            <div className="logo font-house">Bruno</div>
            <div className="nav-items">
              <a href="#">Work</a>
              <a href="#">Contact</a>
              <a href="#">Services</a>
            </div>
          </div>

          <div className="footer">
            <p>Creative Development</p>
            <p>High Quality Web Production</p>
            <p>Made in Ho Chi Minh</p>
          </div>
        </div>
      </div> */}

      <TransitionDropDown />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistionDropDown("about")
          }
        >
          About
        </button>
      </div>
    </>
  );
}
