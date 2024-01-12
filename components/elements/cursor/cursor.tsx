"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useCursor } from "./use-cursor";

const Cursor = () => {
  const {} = useCursor();
  return (
    <div
      className="cursor flex justify-center items-center bg-bruno-yellow h-[15px] w-[15px] overflow-hidden"
      id="cursor"
    >
      <div className="cursor_marquee h-full justify-center items-center hidden">
        <Marquee>
          <p className="text-fluid-body-xl font-bold text-bruno-black font-dm">
            - View
          </p>
          <p className="text-fluid-body-xl font-bold text-bruno-black font-dm">
            - View
          </p>
          <p className="text-fluid-body-xl font-bold text-bruno-black font-dm">
            - View
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Cursor;
