import React from "react";
import Image from "next/image";
import Link from "next/link";

interface blogCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const BlogCard = ({ title, description, image, link }: blogCardProps) => {
  return (
    <div className="animate group relative flex h-full flex-col overflow-hidden rounded-md border shadow-xl hover:shadow-2xl">
      <div className="h-50 overflow-hidden md:h-56 xl:h-60">
        <Image
          src={image}
          alt={image}
          width={500}
          height={500}
          className="animate h-full w-full object-cover group-hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col justify-between gap-2 p-6">
        <div className="space-y-2">
          {title && (
            <h5 className="font-poppins text-lg font-semibold">{title}</h5>
          )}
          {description && (
            <p className="font-inter text-gray-700">{description}</p>
          )}
        </div>
        {link && (
          <Link
            href={link ? link : ""}
            className="animate mt-2 inline-flex items-center gap-2 font-poppins font-medium hover:gap-4"
          >
            Read More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
