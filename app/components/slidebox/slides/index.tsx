import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface slidesProps {
  image: string;
  active: boolean;
}

const Slides = ({ image, active }: slidesProps) => {
  return (
    <div
      className={twMerge(
        "animate w-64 md:w-[35rem] lg:w-[40rem] 2xl:w-[60rem]",
        active
          ? "h-44 opacity-100 md:h-96 2xl:h-[35rem]"
          : "h-36 opacity-80 md:h-80 2xl:h-[32rem]",
      )}
    >
      <Image
        width={1000}
        height={1000}
        src={image}
        alt="title"
        className="h-full w-full rounded-md object-cover"
      />
    </div>
  );
};

export default Slides;
