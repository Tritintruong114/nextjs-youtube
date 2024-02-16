"use client";
import { header } from "@/data/header.json";
import gsap from "gsap";
import { useEffect, useState } from "react";

function calculateWidths(array: typeof header) {
  const baseWidth = 100;
  const increment = baseWidth / array.length;
  return array.map((_, index) => {
    const width = (index + 1) * increment;
    return `${width}%`;
  });
}

export default function Home() {
  const [testArray, setTestArray] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const tl = gsap.timeline();
  const closeMenu = () => {
    const context = gsap.context(() => {
      gsap.to(".menu_item", {
        width: 0,
        delay: 0.3,
        stagger: 0.1,
        ease: "power4.inOut",
      });
      gsap.to(".menu_right-side", {
        height: 0,
        ease: "power1.in",
      });
      tl.to(".menu_label", {
        top: "6rem",
        duration: 0.3,
        ease: "power4.inOut",
        stagger: 0.1,
      });
    });
  };

  const openMenu = () => {
    testArray?.forEach((_, index) => {
      const menuItem = document.querySelectorAll(".menu_item")[index]; // Select the specific menu item
      gsap.to(menuItem, {
        width: testArray[index], // Apply the width from the array
        ease: "power4.inOut",
        delay: index * 0.1,
      });
    });

    const context = gsap.context(() => {
      tl.to(".menu_right-side", {
        height: "100%",
        ease: "power1.in",
      }).to(".menu_label", {
        top: 0,
        delay: 0.3,
        stagger: 0.1,
      });
    });
  };

  useEffect(() => {
    setTestArray(calculateWidths(header));
    closeMenu();
    tl.to(".loading_label", {
      top: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
      .to(".loading_label", {
        delay: 1,
        top: "3rem",
        ease: "power1.inOut",
      })
      .to(".loading_item", {
        height: 0,
        stagger: 0.1,
        ease: "power4.inOut",
      })
      .to(".loading_container", {
        opacity: 0,
        display: "none",
      });
  }, []);

  return (
    <main className="h-screen overflow-y-scroll  no-scrollbar">
      {/* Overlay */}
      <div className="loading_container grid grid-cols-6 bg-black absolute z-20 h-screen w-screen">
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="loading_item h-screen col-span-1 bg-bruno-yellow"></div>
        <div className="absolute h-screen w-screen text-center flex justify-center items-center">
          <p className="h-fit overflow-hidden">
            <span className="loading_label relative top-12 font-bebas">
              Expo Agency
            </span>
          </p>
        </div>
      </div>
      <button onClick={() => closeMenu()}>Close</button>
      <button onClick={() => openMenu()}>Open</button>
      {/* Main Menu */}
      <ul className="menu_container relative grid grid-cols-1 h-full grid-rows-6 justify-between">
        <div
          style={{
            width: `${100 / testArray?.length + "%"}`,
          }}
          className="menu_right-side absolute row-end-6 bg-bruno-yellow h-full right-0"
        ></div>
        {header.map((item, index) => {
          return (
            <li
              key={index}
              style={{ width: `${testArray?.[index]}` }}
              className={`menu_item flex justify-end items-center sm:text-[3vw] font-bold bg-bruno-black h-full text-bruno-white`}
            >
              <p className=" overflow-hidden h-fit pr-base">
                <span className="relative menu_label leading-none top-24">
                  {item.label}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
