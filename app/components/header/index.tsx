"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/molecules/Button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Icon, { IconIds } from "@/app/molecules/Icon";
import NavLinks from "./components/NavLink";
import MobileNavLink from "./components/MobileNavLink";

interface headerProps {
  logo?: string;
  logoTitle?: string;
  logoSubTitle?: string;
  links?: linkProps[];
  cta?: ctaProps;
}

interface ctaProps {
  link: string;
  url: string;
}

export interface linkProps {
  link: string;
  url?: string;
  sublinks: subLinkProps[];
}

export interface subLinkProps {
  link: string;
  url: string;
  description?: string;
  icon?: IconIds;
}

const Header = ({ logo, logoTitle, logoSubTitle, links, cta }: headerProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white py-3 shadow-lg shadow-gray-200/40 md:py-4 lg:py-0">
      <nav className="max-width flex items-center justify-between">
        <div className="flex items-center gap-10">
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
        <ul className="hidden items-center font-poppins lg:flex">
          {links?.map((link) => (
            <NavLinks
              key={link.link}
              text={link.link}
              link={link.url}
              subLinks={link.sublinks}
              delay={"0"}
              active={link.url === path}
            />
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="">
            <Icon icon="search" width="24" />
          </button>
          <div className="hidden items-center gap-4 md:flex lg:items-center">
            {cta && (
              <Button hierarchy="primary" size="base" weight="semibold">
                {cta.link}
              </Button>
            )}
          </div>
          <div className=" flex flex-col justify-center lg:hidden">
            <button onClick={() => setOpen(!open)}>
              <div className="space-y-1">
                <span
                  className={twMerge(
                    "block h-[3px] w-6 origin-center rounded-md bg-black transition-transform ease-in-out",
                    open ? "translate-y-2 rotate-45" : "",
                  )}
                ></span>
                <span
                  className={twMerge(
                    "block h-[3px] w-6 origin-center rounded-md bg-green-900 transition-transform ease-in-out",
                    open ? "scale-0 opacity-0" : "",
                  )}
                ></span>
                <span
                  className={twMerge(
                    "block h-[3px] w-6 origin-center rounded-md bg-green-700 transition-transform ease-in-out",
                    open ? "-translate-y-1.5 -rotate-45" : "",
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.div className="absolute top-[60.75px] h-[calc(100dvh-60.75px)] w-full overflow-hidden md:top-[77px] md:h-[calc(100dvh-77px)] lg:hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between overflow-y-scroll bg-white md:px-14"
            >
              <div className="flex flex-col">
                {links?.map((link, index) => {
                  const delay = `0.${2 + index}`;

                  return (
                    <MobileNavLink
                      key={link.link}
                      text={link.link}
                      link={link.url}
                      subLinks={link.sublinks}
                      delay={delay}
                      active={link.url === path}
                    />
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="w-full p-4"
              >
                <Button hierarchy="primary"> Contact Us</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
