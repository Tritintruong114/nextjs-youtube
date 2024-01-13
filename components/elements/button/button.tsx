"use client";
import { useButton } from "./use-button";
export type ButtonPropsType = {
  children: React.ReactNode;
  setProjectTitle: React.Dispatch<React.SetStateAction<any>>;
};
const Button = ({ children, setProjectTitle }: ButtonPropsType) => {
  const { onHoverButton } = useButton({ children, setProjectTitle });
  return (
    <button
      onMouseEnter={() => onHoverButton()}
      className="project_button group border border-bruno-yellow relative flex items-center justify-center h-full text-center"
    >
      <span className="bg-bruno-yellow h-0 w-full absolute group-hover:h-full duration-500"></span>
      <span className="relative group-hover:text-bruno-black duration-500 font-bebas text-fluid-body-xl tracking-wider">
        {children}
      </span>
    </button>
  );
};

export default Button;
