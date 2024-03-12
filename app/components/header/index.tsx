"use client";

import React, { useState } from "react";
import Button from "@/app/molecules/button";
import Link from "next/link";
import Nav from "@/app/molecules/nav";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

interface headerProps {
  links?: linkProps[];
}

interface linkProps {
  page: string;
  link?: string;
}

const Header = ({ links }: headerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className="max-width flex items-center justify-between border-b bg-white/50 py-4 md:py-6 ">
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
        <div className="hidden items-center gap-14 lg:flex">
          <ul className="flex items-center gap-10 font-poppins">
            {links?.map((link) => (
              <Nav
                key={link.page}
                text={link.page}
                link={link.link}
                delay={"0"}
              />
            ))}
          </ul>
          <Button variant="primary">Contact Us</Button>
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
      </nav>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.div className="h-[calc(100dvh-68.75px)] w-full overflow-hidden md:h-[calc(100dvh-93px)] lg:hidden">
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
                    <Nav
                      key={link.page}
                      text={link.page}
                      link={link.link}
                      delay={delay}
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
    </div>
  );
};

export default Header;
