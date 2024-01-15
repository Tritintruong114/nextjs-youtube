"use client";
import { header } from "@/data/header.json";
import { useNavigation } from "../navigation-component/use-navigation";
import { useHeader } from "./use-header";
const MainHeader = () => {
  const { pathname } = useHeader({});
  const { onNavigation } = useNavigation(pathname);

  return (
    <header className="sm:w-screen z-30 sm:block fixed hidden pt-base">
      <nav aria-labelledby="sections-heading">
        <ul className="w-full justify-between items-center flex gap-base px-base">
          {header.map((headerItem, index) => {
            return (
              <li
                key={index}
                className="group relative overflow-hidden border-2 border-bruno-black border-solid w-full"
              >
                <button
                  className={`bg-bruno-white w-full items-center py-3 font-bold capitalize flex flex-col text-fluid-body-lg  group-hover:scale-[0.7] group-hover:opacity-50 duration-500 ${
                    pathname === headerItem.href ? "" : "text-bruno-black"
                  }`}
                >
                  {headerItem.label}
                </button>
                <button
                  onClick={() => onNavigation(headerItem.href)}
                  className={`bg-bruno-black w-full items-center py-3 font-bold capitalize flex flex-col text-bruno-white text-fluid-body-lg  absolute left-0 group-hover:bottom-0 duration-500  
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
