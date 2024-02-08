"use client";
import { header } from "@/data/header.json";
import gsap from "gsap";
import { useEffect, useState } from "react";

function calculateWidths(array: typeof header) {
  const baseWidth = 100;
  const increment = baseWidth / array.length;
  return array.map((_, index) => {
    const width = (index + 1) * increment; // Calculate with index and increment
    return `${width}%`; // Apply Tailwind CSS class
  });
}

export default function Home() {
  const [testArray, setTestArray] = useState<string[]>();

  useEffect(() => {
    setTestArray(calculateWidths(header));
  }, []);

  const closeMenu = () => {
    const tl = gsap.timeline();

    const context = gsap.context(() => {
      tl.to(".menu_item", {
        width: 0,
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

    const tl = gsap.timeline();
    const context = gsap.context(() => {});
  };

  return (
    <main className="h-screen overflow-y-scroll  no-scrollbar">
      <button onClick={() => closeMenu()}>Close</button>
      <button onClick={() => openMenu()}>Open</button>
      <ul className="h-full flex flex-col-reverse justify-between">
        {header.map((item, index) => {
          return (
            <li
              key={index}
              style={{ width: `${testArray?.[index]}` }}
              className={`menu_item text-[3vw] font-bold bg-bruno-black h-full text-bruno-white`}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
