"use client";
import React from "react";
import { useHeader } from "./use-header";
import Link from "next/link";

const MainHeader = () => {
  const { pathname, onNavigation, scrollDirection } = useHeader({});

  console.log(pathname);
  return (
    <header className="sm:w-screen z-20 sm:block hidden">
      <ul className="w-full justify-between items-center flex px-base">
        <div className="group relative overflow-hidden border-2 border-bruno-black border-solid  w-fit">
          <button
            className={`bg-bruno-black font-bold capitalize flex flex-col text-fluid-body-lg py-3 px-12  w-fit group-hover:scale-[0.7] group-hover:opacity-50 duration-500 ${
              pathname === "/"
                ? "bg-bruno-yellow text-bruno-black"
                : "text-bruno-white"
            }`}
          >
            Home
          </button>
          <button
            className={`bg-bruno-yellow font-bold capitalize flex flex-col text-bruno-black text-fluid-body-lg py-3 px-12  w-fit absolute left-0 -bottom-32 group-hover:bottom-0 duration-500 `}
          >
            <Link href="/">Home</Link>
          </button>
        </div>
        <div className="group relative overflow-hidden border-2 border-bruno-black border-solid  w-fit">
          <button
            className={`bg-bruno-black font-bold capitalize flex flex-col  text-fluid-body-lg py-3 px-12  w-fit group-hover:scale-[0.7] group-hover:opacity-50 duration-500 ${
              pathname === "/playround"
                ? "bg-bruno-yellow text-bruno-black"
                : "text-bruno-white"
            }`}
          >
            <Link href="/playround">Play Ground</Link>
          </button>
          <button
            className={`bg-bruno-yellow font-bold capitalize flex flex-col text-bruno-black text-fluid-body-lg py-3 px-12  w-fit absolute left-0 -bottom-32 group-hover:bottom-0 duration-500 `}
          >
            <Link href="/playround">Play Ground</Link>
          </button>
        </div>
      </ul>
    </header>
  );
};

export default MainHeader;
