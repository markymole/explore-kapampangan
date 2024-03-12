import React from "react";
import Heading from "../heading";
import { lorem } from "../slidebox/featured.data";
import { cardsContent } from "./carddeck.data";
import BlogCard from "@/app/molecules/card/blogCard";

const CardDeck = () => {
  return (
    <div className="py-10 lg:py-20">
      <Heading
        heading="Additional resources on discovering kapampangan cuisine"
        description={lorem}
        button="Discover"
      />
      <div
        id="cards"
        className="max-width-sm mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {cardsContent?.map((card) => (
          <BlogCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
