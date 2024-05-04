import React from "react";
import parse from "html-react-parser";

import Icon, { IconIds } from "../../Icon";
import { twMerge } from "tailwind-merge";
import { ColoredCardVariant } from "../Cards.styles";
import Link from "next/link";

export interface ColoredCardProps {
  theme: "Dark" | "Green" | "Beige" | "White";
  icon: IconIds;
  title: string;
  description?: string;
  link?: string;
}

const ColoredCard = ({
  theme,
  icon,
  title,
  description,
  link,
}: ColoredCardProps) => {
  return (
    <div className={twMerge(ColoredCardVariant({ theme }))}>
      {icon && (
        <Icon
          icon={icon}
          size={48}
          className={twMerge(theme === "Dark" ? "fill-white" : "")}
        />
      )}
      {title && <h5 className="font-poppins text-lg font-medium">{title}</h5>}
      {description && <div className="fon-inter">{parse(description)}</div>}
      {link && (
        <Link
          href={link ? link : ""}
          className="animate mt-2 inline-flex items-center gap-2 font-poppins font-medium hover:gap-4"
        >
          Learn More
          <Icon
            icon="arrow-forward"
            size={18}
            className={twMerge(
              "stroke-4",
              theme === "Dark" ? "fill-white" : "",
            )}
          />
        </Link>
      )}
    </div>
  );
};

export default ColoredCard;
