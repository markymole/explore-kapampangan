import React from "react";
import { twMerge } from "tailwind-merge";
import { headingLayout } from "./heading.styles";
import Button from "@/app/molecules/button";
import Link from "next/link";

interface headingProps {
  heading: string;
  description: string;
  button?: ButtonProps;
}

interface ButtonProps {
  text: string;
  link?: string;
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
        {button?.text && button?.link && (
          <Button variant="primary">
            {button?.link ? (
              <Link href={button.link}>{button?.text}</Link>
            ) : (
              button?.text
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Heading;
