import React, { lazy } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface BentoGridProps {
  images: bentoImageProps[];
  layout?: "centered" | "split";
}

export interface bentoImageProps {
  image: string;
}

const BentoGrid = ({ images, layout }: BentoGridProps) => {
  return (
    <div className="grid w-full auto-rows-max grid-cols-3 gap-4">
      {images.map((image, i) => (
        <div
          key={i}
          className={twMerge(
            "row-span-1 ",
            i === 3 || i == 6 ? "col-span-2" : "",
          )}
        >
          <Image
            src={image.image}
            alt={image.image}
            height={1000}
            width={1000}
            className={twMerge(
              "w-full rounded-lg object-cover",
              layout === "centered" ? "h-80" : "h-44 2xl:h-52",
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
