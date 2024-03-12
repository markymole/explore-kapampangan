import React, { ReactNode } from "react";
import { buttonVariant } from "./button.styles";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  children?: ReactNode;
  variant: "primary" | "secondary" | "outline" | "link";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  size = "base",
  onClick,
  ...props
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={twMerge(buttonVariant({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
