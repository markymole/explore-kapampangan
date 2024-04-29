import React from "react";
import Heading from "../Heading";

interface SliderProps {
  eyebrow?: string;
  heading: string;
  description: string;
  link?: string;
  slides: slideProps[];
}

interface slideProps {
  title: string;
  description: string;
}

const Slider = ({
  eyebrow,
  heading,
  description,
  subheading,
  slides,
}: SliderProps) => {
  return (
    <div className="padding">
      <Heading heading={heading} description={description} />
      <div className="max-width ">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Slider;
