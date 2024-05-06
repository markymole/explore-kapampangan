import React from "react";
import Heading from "../Heading";

import { twMerge } from "tailwind-merge";
import ColoredCard, {
  ColoredCardProps,
} from "@/app/molecules/Cards/ColoredCard";
import { gridLayout } from "./CardDeck.styles";
import { buttonsProps } from "@/app/utils/sharedTypes";

interface CardDeckProps {
  heading: string;
  description?: string;
  type: "Default" | "Bento" | "Blog";
  customColumn?: boolean;
  maxColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
            className={twMerge(
              customColumn && gridLayout({ columns: maxColumns }),
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
