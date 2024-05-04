import React from "react";
import Image from "next/image";

const Frame = ({ image }: { image: string }) => {
  return (
    <div className="mx-auto w-full text-center md:w-11/12">
      <div className="relative z-0 mt-8 w-full">
        <div className="relative overflow-hidden shadow-2xl">
          <div className="from-lime flex h-11 flex-none items-center rounded-xl rounded-b-none bg-gradient-to-r to-mindaro px-4">
            <div className="flex space-x-1.5">
              <div className="h-3 w-3 rounded-full border-2 border-white"></div>
              <div className="h-3 w-3 rounded-full border-2 border-white"></div>
              <div className="h-3 w-3 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <Image
            src={image}
            alt={image}
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
