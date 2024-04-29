import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import { SwitchbackLayout } from "./switchback.styles";
import Button from "@/app/molecules/button";
import Link from "next/link";

interface SwitchbackProps {
  layout: "default" | "switch";
  heading: string;
  image: string;
  description: string;
  type: "image" | "map";
  button?: buttonsProps;
}

interface buttonsProps {
  text: string;
  link?: string;
}

const Switchback = ({
  layout,
  image,
  heading,
  description,
  button,
  type,
}: SwitchbackProps) => {
  return (
    <div className="py-10 lg:py-0">
      <div
        className={twMerge(
          "max-width-sm padding",
          SwitchbackLayout({ layout: layout }),
        )}
      >
        <div
          className={twMerge(
            "flex flex-col gap-4",
            layout === "switch" && "order-2",
          )}
        >
          {heading && (
            <h2 className="font-poppins text-2xl font-semibold lg:text-5xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="font-inter text-gray-800 lg:text-lg">{description}</p>
          )}
          {button?.text && button?.link && (
            <Button variant="primary">
              <Link href={button?.link ? button?.link : ""}>
                {button?.text}
              </Link>
            </Button>
          )}
        </div>
        <div className="order-first lg:order-none">
          {type === "image" ? (
            <Image
              src={image}
              height={1000}
              width={1000}
              alt={image}
              className="h-56 w-full rounded-md object-cover shadow-xl md:h-80 lg:h-[450px]"
            />
          ) : (
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
    </div>
  );
};

export default Switchback;
