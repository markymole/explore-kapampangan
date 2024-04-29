"use client";

import React, { useEffect, useState } from "react";
import Button from "@/app/molecules/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navlinks from "@/app/molecules/navlinks";
import Icon, { IconIds } from "@/app/molecules/icon";

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

interface linkProps {
  link: string;
  url?: string;
  sublinks: subLinkProps[];
}

interface subLinkProps {
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
          <Link href="/">
            <h1
              id="logo"
              className="font-poppins text-base font-semibold leading-tight tracking-wide md:text-lg"
            >
              Explore Pampanga
            </h1>
            <p className="font-inter text-[10.5px] uppercase text-gray-600 md:text-xs">
              Unveiling Local Treasures
            </p>
          </Link>
          <ul className="hidden items-center font-poppins lg:flex">
            {links?.map((link) => (
              <Navlinks
                key={link.link}
                text={link.link}
                link={link.url}
                subLinks={link.sublinks}
                delay={"0"}
                active={link.url === path}
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex lg:items-center">
            {/* <form
            action=""
            className="flex items-center rounded-full border-2 border-gray-800 px-4 py-2"
          >
            <input
              type="text"
              placeholder="search"
              className="max-w-36 font-poppins text-sm focus:outline-none"
            />
            <button>
              <Icon icon="search" width="24" />
            </button>
          </form> */}
            <button className="">
              <Icon icon="search" width="24" />
            </button>
            {cta && (
              <Button variant="primary" size="base" weight="semibold">
                {cta.link}
              </Button>
            )}
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setOpen(!open)}>
              <div className="space-y-1.5">
                <span
                  className={twMerge(
                    "block h-1 w-7 origin-center rounded-md bg-black transition-transform ease-in-out",
                    open ? "translate-y-2.5 rotate-45" : "",
                  )}
                ></span>
                <span
                  className={twMerge(
                    "block h-1 w-7 origin-center rounded-md bg-green-900 transition-transform ease-in-out",
                    open ? "scale-0 opacity-0" : "",
                  )}
                ></span>
                <span
                  className={twMerge(
                    "block h-1 w-7 origin-center rounded-md bg-green-700 transition-transform ease-in-out",
                    open ? "-translate-y-2.5 -rotate-45" : "",
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col justify-between bg-white p-4 md:px-14"
            >
              <div className="flex flex-col gap-4">
                {links?.map((link, index) => {
                  const delay = `0.${2 + index}`;

                  return (
                    <Navlinks
                      key={link.link}
                      text={link.link}
                      link={link.url}
                      subLinks={link.sublinks}
                      delay={"0"}
                      active={link.url === path}
                    />
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full"
              >
                <Button variant="primary"> Contact Us</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
