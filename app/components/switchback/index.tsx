import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

import { twMerge } from "tailwind-merge";

import { SwitchbackLayout } from "./switchback.styles";
import Button from "@/app/molecules/Button";
import Link from "next/link";
import headingGradientHighlight from "@/app/utils/headingHighlight";
import type { buttonsProps } from "@/app/utils/sharedTypes";
import Frame from "@/app/molecules/Frame";
import Eyebrow from "@/app/molecules/Eyebrow";

interface SwitchbackProps {
  layout: "Default" | "Switch";
  eyebrow?: string;
  heading: string;
  image: string;
  description: string;
  type: "Image" | "Map" | "Frame" | "Column Content";
  buttons?: buttonsProps[];
  columnContent?: columnContentProps[];
}

interface columnContentProps {
  title: string;
  description: string;
}

const Switchback = ({
  layout,
  eyebrow,
  heading,
  description,
  buttons,
  type,
  image,
  columnContent,
}: SwitchbackProps) => {
  const highlight = headingGradientHighlight(heading, "text-lime");

  return (
    <div className="py-10 lg:py-0">
      <div
        className={twMerge(
          "max-width padding",
          SwitchbackLayout({ layout: layout }),
        )}
      >
        <div
          className={twMerge(
            "flex flex-col gap-4",
            layout === "Switch" && "lg:order-2",
          )}
        >
          {eyebrow && <Eyebrow text={eyebrow} />}
          {heading && (
            <h2 className="font-poppins text-2xl font-semibold leading-loose lg:text-5xl">
              {highlight}
            </h2>
          )}
          {description && (
            <div className="font-inter text-gray-800 lg:text-lg">
              {parse(description)}
            </div>
          )}
          {buttons && buttons.length > 0 && (
            <div
              className={twMerge(
                "mt-3 flex-col gap-4 md:flex-row",
                layout === "Default" ? "hidden lg:flex" : "flex",
              )}
            >
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
        <div
          className={twMerge(
            "lg:order-none",
            layout === "Switch" ? "order-first" : "order-second",
          )}
        >
          {type === "Column Content" && columnContent && (
            <div className="grid grid-cols-1 justify-center gap-10">
              {columnContent.map((content) => (
                <div key={content.title} className="flex flex-col gap-2">
                  {content.title && (
                    <h5 className="font-poppins text-lg font-semibold lg:text-2xl">
                      {content.title}
                    </h5>
                  )}
                  {content.title && (
                    <div className="h-1 w-20 bg-mindaro lg:w-24"></div>
                  )}
                  {content.description && (
                    <div className="font-inter text-gray-800">
                      {parse(content.description)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {type === "Image" && (
            <Image
              src={image}
              height={1000}
              width={1000}
              alt={image}
              className="h-56 w-full rounded-md object-cover shadow-xl md:h-80 lg:h-[450px]"
            />
          )}
          {type === "Frame" && <Frame image={image} />}
          {type === "Map" && (
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
          {layout === "Default" && buttons && buttons.length > 0 && (
            <div
              className={twMerge(
                "mt-8 flex-col gap-4 md:flex-row",
                layout === "Default" ? "flex lg:hidden" : "hidden",
              )}
            >
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
      </div>
    </div>
  );
};

export default Switchback;
