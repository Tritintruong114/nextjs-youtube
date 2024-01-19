"use client";
import { useCursor } from "./use-cursor";

const Cursor = () => {
  const {} = useCursor();
  return (
    <div
      className="cursor flex justify-center items-center bg-bruno-yellow  h-[15px] w-[15px] overflow-hidden"
      id="cursor"
    ></div>
  );
};

export default Cursor;
