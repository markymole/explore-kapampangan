import { buttonsProps } from "@/app/utils/sharedTypes";
import React from "react";
import Heading from "../Heading";

import { twJoin, twMerge } from "tailwind-merge";
import ColoredCard, {
  ColoredCardProps,
} from "@/app/molecules/Cards/ColoredCard";

interface CardDeckProps {
  heading: string;
  description?: string;
  type: "Default" | "Bento" | "Blog";
  customColumn?: boolean;
  maxColumns?: 1 | 2 | 3 | 4 | 5;
  buttons: buttonsProps[];
  cards?: cardProps[];
}

interface cardProps extends ColoredCardProps {}

const CardDeck = ({
  heading,
  description,
  type,
  buttons,
  customColumn,
  maxColumns,
  cards,
}: CardDeckProps) => {
  return (
    <div className="py-10 lg:py-20">
      <div className="max-width">
        <Heading
          heading={heading}
          description={description}
          buttons={buttons}
        />
        {cards && (
          <div
            className={twJoin(
              "mt-10 grid grid-cols-1 gap-8 md:grid-cols-2",
              customColumn && maxColumns
                ? `xl:grid-cols-${maxColumns}`
                : "xl:grid-cols-3",
            )}
          >
            {(type === "Default" || type === "Bento") &&
              cards.map((card) => (
                <ColoredCard
                  key={Math.random()}
                  colSpan={card.colSpan}
                  theme={card.theme}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDeck;
