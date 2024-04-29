import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/app/molecules/button";
import Image from "next/image";
import { heroLayout } from "./Hero.styles";
import Link from "next/link";

interface heroProps {
  heading: string;
  layout: "centered" | "split";
  contentType: "grid" | "image" | "video" | "map";
  description: string;
  button: buttonsProps;
}

interface buttonsProps {
  text: string;
  link?: string;
}

const Hero = ({
  heading,
  description,
  layout,
  contentType,
  button,
}: heroProps) => {
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
          {button && (
            <Button variant="primary">
              {button.link ? (
                <Link href={button.link}>{button.text}</Link>
              ) : (
                button.text
              )}
            </Button>
          )}
        </div>
        {contentType === "grid" && (
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
        {contentType === "image" && (
          <Image
            width={500}
            height={500}
            src="/images/featured/featured_3.jpg"
            alt="Image"
            className="h-[480px] w-full rounded-lg object-cover shadow-xl"
          />
        )}
        {contentType === "video" && (
          <Image
            width={500}
            height={500}
            src="/images/featured/featured_3.jpg"
            alt="Image"
            className="h-[400px] w-full rounded-lg object-cover shadow-xl"
          />
        )}
        {contentType === "map" && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246618.99679330882!2d120.49270677117158!3d15.024766868048559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f4848d776319%3A0x55a57880b7da26f8!2sPampanga!5e0!3m2!1sen!2sph!4v1710645303261!5m2!1sen!2sph"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-xl"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Hero;
