import React, { ReactNode } from "react";
import { buttonVariant } from "./button.styles";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  children?: ReactNode;
  variant: "primary" | "secondary" | "outline" | "link";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  size = "base",
  weight = "medium",
  onClick,
  ...props
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={twMerge(buttonVariant({ variant, size, weight }))}
    >
      {children}
    </button>
  );
};

export default Button;
