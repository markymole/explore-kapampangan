import React, { ReactNode } from "react";
import { ButtonVariant } from "./Button.styles";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  children?: ReactNode;
  hierarchy: "primary" | "secondary" | "tertiary" | "outline" | "link";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  onClick?: () => void;
}

const Button = ({
  children,
  hierarchy,
  size = "base",
  weight = "medium",
  onClick,
  ...props
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={twMerge(ButtonVariant({ hierarchy, size, weight }))}
    >
      {children}
    </button>
  );
};

export default Button;
