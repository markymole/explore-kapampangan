"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Map from "../../Map";

import { towns } from "./HeroMap.data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

interface HeroMapProps {
  selectedTown: string;
}

const HeroMap = ({ selectedTown }: HeroMapProps) => {
  const splideOptions = {
    type: "slide",
    autoWidth: true,
    arrows: false,
    pagination: false,
    gap: "3rem",
  };

  return (
    <div className="max-width-no-padding relative my-20 w-full">
      {towns && (
        <div className="block rounded-sm bg-white p-3 md:hidden">
          <Splide options={splideOptions}>
            {towns?.map((town) => (
              <SplideSlide key={town.name}>
                <Link
                  href={town.link}
                  type="button"
                  className="font-poppins text-sm font-medium text-black"
                >
                  {town.name}
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
      <Map
        className="h-[25rem] w-full md:h-[36rem] md:rounded-lg"
        selectedTown={selectedTown}
      />
      {towns && (
        <div className="absolute bottom-6 left-1/2 hidden w-[75%] -translate-x-1/2 transform rounded-sm bg-white px-6 py-3 md:block md:w-[60%]">
          <Splide options={splideOptions}>
            {towns?.map((town) => (
              <SplideSlide key={town.name}>
                <Link
                  type="button"
                  href={town.link}
                  className="font-poppins font-medium text-black"
                >
                  {town.name}
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default HeroMap;
