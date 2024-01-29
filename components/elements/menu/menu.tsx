"use client";
import { header } from "@/data/header.json";
import gsap from "gsap";
import { useState } from "react";

const MainMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      timeline
        .to(".menu_item", {
          top: "-100vh",
          stagger: 0.1,
        })
        .to(".overlay", {
          width: "50vw",
          height: "50vh",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(".overlay", {
          height: "0%",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(".main_menu", {
          display: "none",
        });
    });
  };

  const openMenu = () => {
    setToggleMenu(true);
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      gsap.to(".main_menu", {
        display: "flex",
      });
      timeline
        .to(".overlay", {
          height: "50%",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(".overlay", {
          width: "100vw",
          height: "100vh",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(".menu_item", {
          top: 0,
          stagger: 0.1,
        });
    });
  };
  return (
    <>
      <button
        onClick={() => openMenu()}
        className={`text-white font-bebas fixed z-10 duration-500 delay-700 right-0 top-0 p-base ${
          toggleMenu === false ? "right-0" : "-right-96"
        }`}
      >
        Menu
      </button>
      <button
        onClick={() => closeMenu()}
        className={`text-black font-bebas fixed z-10 right-0 delay-700 duration-500 top-0 p-base ${
          toggleMenu === true ? "right-0" : "-right-96"
        }`}
      >
        Close
      </button>
      <div className="main_menu absolute h-screen w-screen flex justify-center items-center">
        <div className="overlay absolute bg-bruno-yellow w-1/2 h-0">
          <div className="absolute font-bebas text-[9vw] bottom-0 left-0 overflow-hidden w-full">
            <p className="overflow-hidden flex-col flex w-full">
              {header.map((item, index) => {
                return (
                  <>
                    <span className="menu_item relative px-base pt-2 duration-150 -top-[100vh] leading-none hover:bg-black hover:text-bruno-yellow w-full">
                      {item.label}
                    </span>
                  </>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
