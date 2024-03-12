import React from "react";
import { twMerge } from "tailwind-merge";
import { heroLayout } from "./hero.styles";
import Button from "@/app/molecules/button";
import Image from "next/image";

interface heroProps {
  heading: string;
  layout: "centered" | "split" | "grid";
  description: string;
  button: string;
}

const Hero = ({ heading, description, layout, button }: heroProps) => {
  return (
    <div>
      <div
        className={twMerge("max-width padding", heroLayout({ layout: layout }))}
      >
        <div className={twMerge("flex flex-col gap-4")}>
          <h1 className="font-poppins text-4xl font-semibold lg:text-6xl">
            {heading}
          </h1>
          <p className="font-inter text-gray-800 lg:text-lg">{description}</p>
          <Button variant="primary">{button}</Button>
        </div>
        {layout === "grid" && (
          <div className="grid h-[40rem] grid-cols-1 grid-rows-9 gap-4 lg:grid-cols-2 lg:grid-rows-12">
            <div className="col-span-1 row-span-3 grid grid-cols-2 gap-4 lg:row-span-7 lg:grid-cols-1 lg:grid-rows-5">
              <div className="row-span-5 overflow-hidden rounded-md bg-black shadow-xl lg:row-span-3">
                <Image
                  width={500}
                  height={500}
                  src="/images/featured/featured_2.jpg"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="row-span-5 overflow-hidden rounded-md shadow-xl lg:row-span-2">
                <Image
                  width={500}
                  height={500}
                  src="/images/featured/featured_1.jpg"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="row-span-3 overflow-hidden rounded-md shadow-xl lg:col-span-1 lg:row-span-7">
              <Image
                width={500}
                height={500}
                src="/images/featured/featured_4.jpg"
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-3 overflow-hidden rounded-md shadow-xl lg:col-span-2 lg:row-span-5">
              <Image
                width={500}
                height={500}
                src="/images/featured/featured_3.jpg"
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
