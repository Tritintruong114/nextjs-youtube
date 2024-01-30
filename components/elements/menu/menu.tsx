"use client";
import { header } from "@/data/header.json";
import gsap from "gsap";
import { useState } from "react";

const MainMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      gsap.to(".menu_logo", {
        stagger: 0.05,
        bottom: "-32px",
        ease: "power4.inOut",
      });
      timeline
        .to(".menu_item", {
          top: "-100vh",
          stagger: 0.05,
        })
        .to(".overlay", {
          width: "50vw",
          height: "50vh",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(".overlay", {
          height: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(".main_menu", {
          display: "none",
        });
      setToggleMenu(false);
    });
  };

  const openMenu = () => {
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      gsap.to(".main_menu", {
        display: "flex",
      });
      gsap.to(".menu_logo", {
        delay: 1,
        bottom: 0,
        stagger: 0.05,
        duration: 0.1,
        ease: "power4.inOut",
      });
      timeline
        .to(".overlay", {
          height: "50%",
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(".overlay", {
          duration: 0.4,
          width: "100vw",
          height: "100vh",
          ease: "power2.inOut",
        })
        .to(".menu_item", {
          top: 0,
          stagger: 0.05,
        });
      setToggleMenu(true);
    });
  };

  return (
    <header>
      <div className="flex justify-between w-full fixed z-20">
        <div className="h-fit font-bebas overflow-hidden pl-base pt-base flex gap-[2px] text-xl">
          <span className="menu_logo -bottom-32 relative duration-300">
            Build
          </span>
          <span className="menu_logo -bottom-32 relative duration-300">
            with
          </span>
          <span className="menu_logo -bottom-32 relative duration-300">
            Bruno
          </span>
        </div>

        <div>
          <button
            onClick={() => openMenu()}
            className={`text-bruno-yellow font-bebas absolute z-10 text-xl duration-500 top-0 p-base ${
              toggleMenu === false ? "right-0" : "-right-96"
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => closeMenu()}
            className={`text-black font-bebas absolute z-10 text-xl duration-500 top-0 p-base ${
              toggleMenu === true ? "right-0" : "-right-96"
            }`}
          >
            Close
          </button>
        </div>
      </div>
      <div className="main_menu absolute h-screen w-screen flex justify-center items-center">
        <div className="overlay absolute bg-bruno-yellow w-1/2 h-0">
          <div className="absolute font-bebas text-[9vw] bottom-0 left-0 overflow-hidden w-full">
            <div className="flex-col flex w-full">
              {header.map((item, index) => {
                return (
                  <>
                    <p className="overflow-hidden flex-col flex w-full">
                      <span className="menu_item relative px-base pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-bruno-yellow w-full">
                        {item.label}
                      </span>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
