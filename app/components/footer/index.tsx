import Link from "next/link";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import Button from "@/app/molecules/Button";

interface footerProps {
  logo?: string;
  title?: string;
  description?: string;
  links?: footerLinkProps[];
}

interface footerLinkProps {
  link?: string;
  url?: string;
  subLinks?: subLinkProps[];
}

interface subLinkProps {
  link: string;
  url: string;
}

const Footer = ({ logo, title, description, links }: footerProps) => {
  return (
    <footer className="padding mt-20 bg-eerie text-white">
      <div className="max-width px-4 py-4 md:px-14 md:py-6">
        <div className="flex w-full flex-col items-start justify-between gap-16 md:flex-row md:flex-wrap lg:gap-20">
          <div className="flex flex-col gap-4 lg:max-w-sm">
            {!logo ? (
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <h1
                    id="logo"
                    className="font-poppins text-base font-semibold leading-tight tracking-wide md:text-2xl"
                  >
                    {title}
                  </h1>
                </Link>
                {description && (
                  <div className="font-inter text-sm text-gray-400 md:text-base">
                    {parse(description)}
                  </div>
                )}
              </div>
            ) : (
              <Image
                src={logo}
                height={1000}
                width={1000}
                className="w-36"
                alt={logo}
              />
            )}
            <div className="relative flex w-full flex-col items-center gap-2 sm:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full grow rounded-lg border-2 bg-black/20 py-2 ps-3 font-poppins text-sm font-medium text-white placeholder-white/50 focus:outline-none"
              />

              <Button hierarchy="secondary" className="shrink-0" size="sm">
                Subscribe Now
              </Button>
            </div>
          </div>
          <div>
            <div className="space-evenly flex w-full flex-row flex-wrap gap-10 sm:grid sm:grid-cols-3 sm:gap-14">
              {links &&
                links.map((link) => (
                  <div key={link.link} className="flex flex-col gap-4">
                    <p className="font-poppins text-lg font-semibold lg:text-xl">
                      {link.link}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {link.subLinks &&
                        link.subLinks.map((subLink) => (
                          <li
                            key={subLink.link}
                            className="animate font-inter text-gray-400 hover:text-white"
                          >
                            <Link href={subLink.url ? subLink.url : ""}>
                              {subLink.link}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-10 border-t border-t-gray-400/30 py-10 md:flex-row md:flex-wrap md:items-center">
          <p className="font-poppins text-sm font-light text-gray-300">
            Copyright Explore Kapampangan 2024
          </p>
          <div className="flex flex-wrap items-center gap-10 font-poppins text-sm font-light text-gray-300 ">
            <Link href="/privacy-policy" className="hover:text-gray-100">
              Privacy Policy
            </Link>
            <div className="hover:text-gray-100">Cookie Setting</div>
            <Link href="/terms-of-use" className="hover:text-gray-100">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
