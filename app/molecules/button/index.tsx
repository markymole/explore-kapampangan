import React, { ReactNode } from "react";

interface buttonProps {
  children?: ReactNode;
  text?: ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, link, children, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="animate w-full rounded-md border-2 border-black bg-black px-4 py-1.5 font-inter font-medium text-white hover:border-black hover:bg-transparent hover:text-black md:w-fit md:py-2"
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
