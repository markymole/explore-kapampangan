"use client";

import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Heading from "../Heading";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import type { buttonsProps } from "@/app/utils/sharedTypes";
import SlideCard from "./components/SlideCard";
import SlideTabs from "./components/SlideTabs";
import { IconIds } from "@/app/molecules/Icon";

interface SlideboxProps {
  eyebrow?: string;
  heading: string;
  description: string;
  buttons?: buttonsProps[];
  slides?: slideProps[];
}

interface slideProps {
  icon: IconIds;
  title: string;
  page: string;
  description: string;
  link: string;
  image: string;
}

const Slidebox = ({
  heading,
  description,
  eyebrow,
  buttons,
  slides,
}: SlideboxProps) => {
  const mainRef = useRef<Splide>(null);
  const thumbnailRef = useRef<Splide>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    mainRef.current.splide?.on("move", () => {
      const index = mainRef?.current?.splide?.index as number;
      setCurrentIndex(index);

      if (thumbnailRef.current) {
        const splideInstance = thumbnailRef.current.splide;
        if (splideInstance) {
          splideInstance.go(index);
        }
      }
    });
  }, []);

  const handleSlide = (index: number) => {
    if (mainRef.current) {
      const splideInstance = mainRef.current.splide;
      if (splideInstance) {
        splideInstance.go(index);
        setCurrentIndex(index);
      }
    }

    if (thumbnailRef.current) {
      const splideInstance = thumbnailRef.current.splide;
      if (splideInstance) {
        splideInstance.go(index);
        setCurrentIndex(index);
      }
    }
  };

  return (
    <div className="py-10 lg:py-20">
      <Heading
        heading={heading}
        eyebrow={eyebrow}
        description={description}
        buttons={buttons}
      />
      <div className="max-width mt-10">
        <div id="selectors">
          <Splide
            options={{
              type: "slide",
              arrows: false,
              pagination: false,
              drag: false,
              autoWidth: true,
              perMove: 1,
              breakpoints: {
                600: { padding: "0%", trimSpace: false, focus: "center" },
              },
            }}
            ref={thumbnailRef}
            Aria-label="Slidebox Selectors"
          >
            {slides?.map((slide, index) => (
              <SplideSlide key={slide.title}>
                <SlideTabs
                  title={slide.page}
                  icon={slide.icon}
                  active={currentIndex === index}
                  onClick={() => handleSlide(index)}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div id="slides" className="mt-10 h-full">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              arrows: false,
              pagination: true,
              perMove: 1,
              snap: true,
              focus: "center",
              gap: "3rem",
              perPage: 1,
            }}
            ref={mainRef}
            Aria-label="Slidebox slides"
          >
            {slides?.map((slide, index) => (
              <SplideSlide key={`Featured-${slide.title}`}>
                <SlideCard
                  page={slide.page}
                  title={slide.title}
                  description={slide.description}
                  link={slide.link}
                  image={slide.image}
                  active={currentIndex === index}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Slidebox;
