"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
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
      gsap.to(".subtilte", {
        duration: 1,
        delay: 6.5,
        opacity: 1,
        ease: "power2.in",
      });
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
      <div ref={comp} className="loader">
        <div className="loader-clip clip-top">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>ManhHieu</span>
              <span>ManhHieu</span>
              ManhHieu
              <span>ManhHieu</span>
              <span>ManhHieu</span>
            </div>
          </div>
        </div>

        <div className="loader-clip clip-bottom">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>ManhHieu</span>
              <span>ManhHieu</span>
              ManhHieu
              <span>ManhHieu</span>
              <span>ManhHieu</span>
            </div>
          </div>
        </div>

        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container font-house">
              <span>ManhHieu</span>
              <span>ManhHieu</span>
              <h1 className="text-center">
                ManhHieu <br />{" "}
                <span className="subtilte opacity-0 font-great">
                  Unmasking the Soul of Architecture
                </span>
              </h1>
              <span>ManhHieu</span>
              <span>ManhHieu</span>
            </div>
          </div>
        </div>

        <div className="container__wrapper w-full h-screen">
          <div className="nav">
            <div className="logo font-house">ManhHieu</div>

            <div className="nav-items">
              <a className="duration-500" href="#">
                Work
              </a>
              <a className="duration-500" href="#">
                Contact
              </a>
              <a className="duration-500" href="#">
                Projects
              </a>
            </div>
          </div>

          <div className="footer">
            <p>Through the Architect's Lens</p>
            <p>The Harmony of Architectural Lines</p>
            <p>A Nha Trang Architectural Storyteller</p>
          </div>
        </div>
      </div>

      {/* <TransitionDropDown />
      <div className="h-screen w-screen  flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistionDropDown("about")
          }
        >
          About
        </button>
      </div> */}
    </>
  );
}
