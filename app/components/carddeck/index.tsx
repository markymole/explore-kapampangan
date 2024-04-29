import React from "react";
import Heading from "../Heading";
import { lorem } from "../Slidebox/featured.data";
import { cardsContent } from "./carddeck.data";
import BlogCard from "@/app/molecules/card/blogCard";

interface CardDeckProps {
  heading: string;
  description?: string;
  button: ButtonProps;
  cards: cardProps[];
}

interface cardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ButtonProps {
  text: string;
  link?: string;
}

const CardDeck = ({ heading, description, button, cards }: CardDeckProps) => {
  return (
    <div className="py-10 lg:py-20">
      <Heading heading={heading} description={lorem} button={button} />
      {cards && (
        <div
          id="cards"
          className="max-width-sm mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards?.map((card) => (
            <BlogCard
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDeck;
