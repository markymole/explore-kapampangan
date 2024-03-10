import React from "react";
import { twMerge } from "tailwind-merge";
import { headingLayout } from "./heading.styles";

interface headingProps {
  heading: string;
  description: string;
  button: string;
}

const Heading = ({ heading, description, button }: headingProps) => {
  return (
    <div>
      <div
        className={twMerge("max-width", headingLayout({ layout: "centered" }))}
      >
        <h1 className="font-poppins text-2xl font-semibold lg:text-5xl">
          {heading}
        </h1>
        <p className="font-inter text-gray-800 lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
