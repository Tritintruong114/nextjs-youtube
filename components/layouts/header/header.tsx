"use client";
import { header } from "@/data/header.json";
import { useHeader } from "./use-header";
const MainHeader = () => {
  const { pathname, scrollDirection, onNavigation } = useHeader({});

  return (
    <header
      className={`sm:w-screen z-30 sm:block fixed hidden pt-base duration-500 ${
        scrollDirection === "down" ? "-top-96" : "top-0"
      }`}
    >
      <nav
        aria-labelledby="sections-heading"
        className="w-full flex justify-center items-center"
      >
        <ul
          className={`items-center flex gap-base px-base justify-center bg-[#ffffff]  duration-300 w-fit py-2 rounded-xl border-2 border-bruno-black`}
        >
          {header.map((headerItem, index) => {
            return (
              <li key={index} className="group relative overflow-hidden">
                <button
                  className={`  items-center px-4 py-1 rounded-xl font-bold capitalize flex flex-col text-fluid-body-lg  group-hover:scale-[0.7] group-hover:opacity-50 duration-300 ${
                    pathname === headerItem.href ? "" : "text-bruno-black"
                  }`}
                >
                  {headerItem.label}
                </button>
                <button
                  onClick={() => onNavigation(headerItem.href)}
                  className={`bg-bruno-dark-grey items-center px-4 py-1 rounded-xl  font-bold capitalize flex flex-col text-bruno-white text-fluid-body-lg  absolute left-0 group-hover:bottom-0 duration-300  
                  ${pathname === headerItem.href ? "bottom-0" : "-bottom-32"}
                  `}
                >
                  {headerItem.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
