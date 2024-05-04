import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

import Link from "next/link";
import Button from "@/app/molecules/Button";
import Eyebrow from "@/app/molecules/Eyebrow";

export interface slidesProps {
  page: string;
  title: string;
  description: string;
  link: string;
  image: string;
  active?: boolean;
}

const SlideCard = ({
  page,
  title,
  description,
  link,
  image,
  active,
}: slidesProps) => {
  return (
    <div className="flex h-full flex-col justify-between gap-10 rounded-lg border p-4 lg:grid lg:grid-cols-12 lg:items-center lg:border-none lg:px-20 lg:py-16">
      <div className="flex h-full flex-col gap-4 lg:col-span-7">
        {page && (
          <p className="font-inter font-semibold text-gray-800 lg:text-lg">
            {page}
          </p>
        )}
        {title && (
          <h6 className="font-poppins text-xl font-bold text-eerie md:text-2xl lg:text-3xl">
            {title}
          </h6>
        )}
        {description && (
          <div className="font-inter text-gray-800 lg:text-lg">
            {parse(description)}
          </div>
        )}
        {link && (
          <Link href={link ? link : ""}>
            <Button hierarchy="primary">Learn More</Button>
          </Link>
        )}
      </div>
      <Image
        src={image}
        className="h-60 w-full shrink-0 rounded-lg object-cover lg:col-span-5 lg:h-80"
        height={1000}
        width={1000}
        alt={image}
      />
    </div>
  );
};

export default SlideCard;
