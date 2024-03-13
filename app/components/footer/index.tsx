import Link from "next/link";
import React from "react";
import { footerLinks } from "./footer.data";

const Footer = () => {
  return (
    <footer className="max-width mt-20 flex items-center justify-between border-t bg-white py-4 md:py-6">
      <div className="flex w-full flex-col items-start justify-between gap-8 px-2 py-2 md:flex-row md:flex-wrap md:px-6">
        <div>
          <Link href="/">
            <h1
              id="logo"
              className="font-poppins text-base font-semibold uppercase leading-tight md:text-lg"
            >
              Flavors of Pampanga
            </h1>
            <p className="font-inter text-[10.5px] tracking-wider text-green-900 md:text-xs">
              Discovering Kapampangan Cuisine
            </p>
          </Link>
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
    </footer>
  );
};

export default Footer;
