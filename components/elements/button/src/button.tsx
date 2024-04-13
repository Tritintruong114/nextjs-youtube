import React from "react";
import { ButtonStylesProps } from "../styles/button.styles";
import { useButton } from "../utils/hooks";

interface ButtonDataProps extends ButtonStylesProps {
  children: React.ReactNode;
}
function Button(props: ButtonDataProps) {
  const { styles } = useButton({ ...props });

  return <button className={styles}>{props.children}</button>;
}

export { Button };
