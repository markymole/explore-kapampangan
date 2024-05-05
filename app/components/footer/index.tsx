import Link from "next/link";
import Image from "next/image";
import React from "react";
import { footerLinks } from "./footer.data";
import { linkProps } from "../Header";

interface footerProps {
  logo?: string;
  logoTitle?: string;
  logoSubTitle?: string;
  links?: linkProps[];
}

const Footer = ({ logo, logoTitle, logoSubTitle, links }: footerProps) => {
  return (
    <footer className="max-width mt-20 flex items-center justify-between border-t bg-white py-4 md:py-6">
      <div className="flex w-full flex-col items-start justify-between gap-8 px-2 py-2 md:flex-row md:flex-wrap md:px-6">
        <div>
          {!logo ? (
            <Link href="/">
              <h1
                id="logo"
                className="font-poppins text-base font-semibold leading-tight tracking-wide md:text-lg"
              >
                {logoTitle}
              </h1>
              <p className="font-inter text-[10.5px] uppercase text-gray-600 md:text-xs">
                {logoSubTitle}
              </p>
            </Link>
          ) : (
            <Image
              src={logo}
              height={1000}
              width={1000}
              className="w-36"
              alt={logo}
            />
          )}
        </div>
        <div>
          <div className="items-center">
            <ul className="flex flex-col items-start gap-4 font-poppins text-sm md:flex-row md:items-center md:gap-10">
              {footerLinks?.map((item) => (
                <Link key={item.page} href={item.link}>
                  {item.page}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="Links"></div>
    </footer>
  );
};

export default Footer;
