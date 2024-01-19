"use client";
import { useParams } from "next/navigation";

const NavigationComponent = () => {
  const pathname = useParams();
  return (
    <div className="bg-bruno-dark-grey border-4 border-bruno-white rounded-3xl h-screen navigation_container text-center flex items-center justify-center w-screen fixed z-20">
      <div className="text-bruno-white gap-1 flex font-bold h-fit overflow-hidden">
        <p className="navigation_title relative text-fluid-h1 font-bebas">
          Bruno
        </p>
        <p className="navigation_title relative text-fluid-h1 font-bebas">
          Truong
        </p>
      </div>
    </div>
  );
};

export default NavigationComponent;
