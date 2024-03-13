"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Map from "../../Map";

import { towns } from "./HeroMap.data";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HeroMap = () => {
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const search = searchParams.get("selected");

  useEffect(() => {
    if (search) {
      setSelected(search);
    }
  }, [search]);

  const splideOptions = {
    type: "slide",
    autoWidth: true,
    arrows: false,
    pagination: false,
    gap: "3rem",
  };

  const handleTownClick = (townName: string) => {
    router.push(`/discover?selected=${townName}`);
  };

  return (
    <div className="max-width-no-padding relative">
      {towns && (
        <div className="block rounded-sm bg-white p-3 md:hidden">
          <Splide options={splideOptions}>
            {towns?.map((town) => (
              <SplideSlide key={town.name}>
                <button
                  type="button"
                  onClick={() => handleTownClick(town.name)}
                  className="font-poppins text-sm font-medium text-black"
                >
                  {town.name}
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
      <Map
        className="h-[25rem] overflow-hidden md:h-[36rem] md:rounded-lg lg:mt-8"
        selectedCity={selected}
      />
      {towns && (
        <div className="absolute bottom-6 left-1/2 hidden w-[75%] -translate-x-1/2 transform rounded-sm bg-white px-6 py-3 md:block md:w-[60%]">
          <Splide options={splideOptions}>
            {towns?.map((town) => (
              <SplideSlide key={town.name}>
                <button
                  type="button"
                  onClick={() => handleTownClick(town.name)}
                  className="font-poppins font-medium text-black"
                >
                  {town.name}
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default HeroMap;
