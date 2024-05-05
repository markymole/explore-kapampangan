import React from "react";
import parse from "html-react-parser";

import Icon, { IconIds } from "../../Icon";
import { twMerge } from "tailwind-merge";
import { ColoredCardVariant } from "../Cards.styles";
import Link from "next/link";

export interface ColoredCardProps {
  colSpan?: 1 | 2 | 3;
  theme: "Dark" | "Green" | "Beige" | "White";
  icon: IconIds;
  title: string;
  description?: string;
  link?: string;
}

const ColoredCard = ({
  colSpan = 1,
  theme,
  icon,
  title,
  description,
  link,
}: ColoredCardProps) => {
  const Element = link ? Link : "div";

  return (
    <Element
      href={link ? link : ""}
      className={twMerge(ColoredCardVariant({ theme, colSpan }))}
    >
      <div className="space-y-4">
        {icon && (
          <Icon
            icon={icon}
            size={48}
            className={twMerge(theme === "Dark" ? "fill-white" : "")}
          />
        )}
        {title && (
          <h5 className="font-poppins text-xl font-semibold lg:text-2xl">
            {title}
          </h5>
        )}
        {description && <div className="font-inter">{parse(description)}</div>}
      </div>
      {link && (
        <div className="animate mt-2 inline-flex items-center gap-2 font-poppins font-medium group-hover:gap-4">
          Learn More
          <Icon
            icon="arrow-forward"
            size={18}
            className={twMerge(
              "stroke-4",
              theme === "Dark" ? "fill-white" : "",
            )}
          />
        </div>
      )}
    </Element>
  );
};

export default ColoredCard;
