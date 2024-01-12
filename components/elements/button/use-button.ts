import { ButtonPropsType } from "./button";

export const useButton = ({ children, setProjectTitle }: ButtonPropsType) => {
  const onHoverButton = () => {
    setProjectTitle(children);
  };
  return { onHoverButton };
};
