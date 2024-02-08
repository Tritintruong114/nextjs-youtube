"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const onToggleMenu = () => {
    const el = document.querySelectorAll(".menu_item");
    el?.forEach((item) => {
      item.classList.toggle("active");
    });
    setShowMenu((prev) => !prev);
  };

  return (
    <main className="rounded-3xl h-screen w-screen overflow-y-scroll  no-scrollbar ">
      <div className="fixed z-30 p-base">
        <button
          onClick={() => onToggleMenu()}
          className="text-bruno-grey bg-bruno-black rounded-full px-base py-1"
        >
          {showMenu ? "Menu" : "Close"}
        </button>
      </div>
      <aside
        className={`menu_container w-full sm:w-3/4 h-full absolute right-0 ${
          showMenu ? "opacity-0 delay-300 pointer-events-none" : ""
        }`}
      >
        <ul>
          <li className="menu_item ease-in-out transition-all bg-white z-40 absolute right-0 top-0 border-b-2 border-black border-l-2 group hover:bg-bruno-yellow duration-500 p-base font-bebas text-[3vw] h-1/4 w-1/4">
            <Link href="/">
              <div className="h-full flex justify-start group-hover:text-bruno-ximen items-end">
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li className="menu_item ease-in-out transition-all bg-white absolute z-30 right-0 top-0 border-b-2 border-black border-l-2 group hover:bg-bruno-yellow duration-500 p-base font-bebas text-[3vw] h-2/4 w-2/4">
            <Link href="/">
              <div className="h-full flex justify-start group-hover:text-bruno-ximen items-end">
                <p>Blog</p>
              </div>
            </Link>
          </li>
          <li className="menu_item ease-in-out transition-all bg-white absolute z-20 right-0 top-0 border-b-2 border-black border-l-2 group hover:bg-bruno-yellow duration-500 p-base font-bebas text-[3vw] h-3/4 w-3/4">
            <Link href="/">
              <div className="h-full flex justify-start group-hover:text-bruno-ximen items-end">
                <p>Contact</p>
              </div>
            </Link>
          </li>
          <li className="menu_item ease-in-out transition-all bg-white absolute z-10 right-0 top-0 border-b-2 border-black border-l-2 group hover:bg-bruno-yellow duration-500 p-base font-bebas text-[3vw] h-full w-full">
            <Link href="/">
              <div className="h-full flex justify-start group-hover:text-bruno-ximen items-end">
                <p>Work</p>
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </main>
  );
}
