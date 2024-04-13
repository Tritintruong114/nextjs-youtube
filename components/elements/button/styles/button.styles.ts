import { cva, VariantProps } from "class-variance-authority";

export const buttonStyles = cva("button", {
  variants: {
    variant: {
      primary: "bg-blue-700",
      secondary: "bg-black",
      danger: "bg-red-600",
    },
    size: {
      small: "py-1 px-3",
      medium: "py-3 px-6",
    },
    defaultVariants: {
      intent: "primary",
    },
  },
});

export interface ButtonStylesProps extends VariantProps<typeof buttonStyles> {}
