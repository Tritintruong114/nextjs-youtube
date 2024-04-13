import { MouseEventHandler, ReactNode, useMemo } from "react";
import { buttonStyles, ButtonStylesProps } from "../../styles/button.styles";

interface Props extends ButtonStylesProps {
  startContent?: ReactNode;

  endContent?: ReactNode;

  spinner?: ReactNode;

  spinnerPlacement?: "start" | "end";

  isLoading?: boolean;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useButton = (props: Props) => {
  const { variant, size } = props;

  const styles = useMemo(
    () => buttonStyles({ variant, size }),
    [variant, size]
  );

  return { styles };
};

export { useButton };
