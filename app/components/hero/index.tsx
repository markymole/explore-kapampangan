import React from "react";
import parse from "html-react-parser";

import { twMerge } from "tailwind-merge";
import Button from "@/app/molecules/Button";
import Image from "next/image";
import {
  headingContainerStyle,
  heroDescriptionStyle,
  heroHeadingStyle,
  heroLayout,
} from "./Hero.styles";
import Link from "next/link";
import BentoGrid, { type bentoImageProps } from "./components/BentoGrid";
import headingGradientHighlight from "@/app/utils/headingHighlight";
import type { buttonsProps } from "@/app/utils/sharedTypes";

interface heroProps {
  heading: string;
  layout: "centered" | "split";
  contentType: "bento" | "image" | "video" | "map";
  bentoImages?: bentoImageProps[];
  description: string;
  buttons: buttonsProps[];
}

const Hero = ({
  heading,
  description,
  layout,
  contentType,
  bentoImages,
  buttons,
}: heroProps) => {
  const highlight = headingGradientHighlight(
    heading,
    "text-transparent bg-clip-text bg-gradient-to-r from-black via-lime to-eerie",
  );

  return (
    <div>
      <div
        className={twMerge("max-width padding", heroLayout({ layout: layout }))}
      >
        <div className={twMerge(headingContainerStyle({ layout }))}>
          {heading && (
            <h1 className={twMerge(heroHeadingStyle())}>{highlight}</h1>
          )}
          {description && (
            <div className={twMerge(heroDescriptionStyle({ layout }))}>
              {parse(description)}
            </div>
          )}
          {buttons && buttons.length > 0 && (
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              {buttons.map((button) => (
                <Button
                  key={button.text}
                  hierarchy={button.hierarchy}
                  size={button.size}
                >
                  {button.link ? (
                    <Link href={button.link}>{button.text}</Link>
                  ) : (
                    button.text
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
        {contentType === "bento" && bentoImages && (
          <div className="mt-10">
            <BentoGrid images={bentoImages} layout={layout} />
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
