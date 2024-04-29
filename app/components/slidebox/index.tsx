"use client";

import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import projects, { lorem } from "./featured.data";
import Slides from "./Slides";
import Heading from "../Heading";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./index.css";

interface SlideboxProps {
  heading: string;
  description: string;
  button?: ButtonProps;
  slides?: slideProps[];
}

interface slideProps {
  image: string;
}

interface ButtonProps {
  text: string;
  link?: string;
}

const Slidebox = ({ heading, description, button, slides }: SlideboxProps) => {
  const ref = useRef<Splide>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    ref.current.splide?.on("move", () => {
      const index = ref?.current?.splide?.index as number;
      setCurrentIndex(index);
      console.log("active: ", index);
    });
  }, []);

  return (
    <div className="py-10 lg:py-20">
      <Heading heading={heading} description={description} button={button} />
      <div id="slidebox" className="mt-10">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            arrows: false,
            pagination: false,
            perMove: 1,
            snap: true,
            focus: "center",
            autoWidth: true,
            autoHeight: true,
            padding: "17%",
            gap: "2rem",
            breakpoints: {
              600: { padding: "0%", gap: "1rem" },
              1024: { padding: "0%" },
              1400: { padding: "10%" },
              1600: { padding: "10%" },
            },
          }}
          ref={ref}
          Aria-label="Featured Projects"
        >
          {slides?.map((project, index) => (
            <SplideSlide key={`Featured-${project.image}`}>
              <Slides image={project.image} active={currentIndex === index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slidebox;
