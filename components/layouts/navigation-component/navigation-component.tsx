"use client";
import React from "react";
import { useNavigation } from "./use-navigation";

const NavigationComponent = () => {
  const {} = useNavigation();
  return (
    <div className="bg-bruno-yellow navigation_container text-center flex items-center justify-center h-0 w-screen bottom-0 fixed z-20">
      <div className="text-bruno-black gap-1 flex font-bold h-fit overflow-hidden">
        <p className="navigation_title relative -bottom-96 text-fluid-h1 font-bebas">
          Bruno
        </p>
        <p className="navigation_title relative -bottom-96 text-fluid-h1 font-bebas">
          Truong
        </p>
      </div>
    </div>
  );
};

export default NavigationComponent;
