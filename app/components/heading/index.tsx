import React from "react";
import parse from "html-react-parser";
import { twMerge } from "tailwind-merge";

import { headingLayout } from "./heading.styles";
import Button from "@/app/molecules/Button";
import Link from "next/link";
import type { buttonsProps } from "@/app/utils/sharedTypes";
import headingGradientHighlight from "@/app/utils/headingHighlight";
import Eyebrow from "@/app/molecules/Eyebrow";

interface headingProps {
  layout?: "Centered" | "Split";
  eyebrow?: string;
  heading: string;
  description?: string;
  buttons?: buttonsProps[];
}

const Heading = ({
  layout = "Centered",
  heading,
  description,
  buttons,
  eyebrow,
}: headingProps) => {
  const highlight = headingGradientHighlight(heading, "text-lime");

  return (
    <div>
      <div className={twMerge("max-width", headingLayout({ layout }))}>
        {eyebrow && <Eyebrow text={eyebrow} />}
        {heading && (
          <h1 className="font-poppins text-2xl font-semibold lg:text-5xl">
            {highlight}
          </h1>
        )}
        {description && (
          <div className="font-inter text-gray-800 lg:text-lg">
            {parse(description)}
          </div>
        )}
        {buttons && buttons.length > 0 && (
          <div className="mt-3 flex flex-col gap-4 md:flex-row">
            {buttons.map((button) => (
              <Button
                key={button.text}
                hierarchy={button.hierarchy}
                size={button.size}
              >
                {button.link ? (
                  <Link href={button.link}>{button.text}</Link>
                ) : (
                  button.text
                )}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Heading;
