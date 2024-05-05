import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../Icon";
import { twMerge } from "tailwind-merge";

interface blogCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const BlogCard = ({ title, description, image, link }: blogCardProps) => {
  const Element = link ? Link : "div";

  return (
    <Element
      href={link ? link : ""}
      className="animate group relative flex h-full flex-col overflow-hidden rounded-xl border shadow-lg hover:shadow-xl"
    >
      <div className="h-50 overflow-hidden md:h-56 xl:h-60">
        <Image
          src={image}
          alt={image}
          width={500}
          height={500}
          className="animate h-full w-full object-cover group-hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col justify-between gap-6 p-6">
        <div className="space-y-2">
          {title && (
            <h5 className="font-poppins text-lg font-semibold">{title}</h5>
          )}
          {description && (
            <p className="line-clamp-5 font-inter text-gray-700">
              {description}
            </p>
          )}
        </div>
        {link && (
          <div className="animate mt-3 inline-flex items-center gap-2 font-poppins font-medium group-hover:gap-4">
            Read More{" "}
            <Icon
              icon="arrow-forward"
              size={18}
              className={twMerge("stroke-4")}
            />
          </div>
        )}
      </div>
    </Element>
  );
};

export default BlogCard;
