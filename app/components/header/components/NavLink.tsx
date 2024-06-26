import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon, { IconIds } from "@/app/molecules/Icon";

interface navProps {
  text: string;
  link?: string;
  delay: string;
  active: boolean;
  subLinks?: subLinkProps[];
}

interface subLinkProps {
  link: string;
  url: string;
  description?: string;
  icon?: IconIds;
}

const NavLinks = ({
  text,
  link,
  delay,
  active,
  subLinks,
  ...props
}: navProps) => {
  const [current, setCurrent] = useState<string | null>(null);

  const Element = subLinks && subLinks.length > 0 ? "button" : Link;

  return (
    <Element
      href={link ? link : ""}
      onMouseEnter={() => {
        subLinks && subLinks.length > 0 && setCurrent(text);
      }}
      onFocus={() => {
        subLinks && subLinks.length > 0 && setCurrent(text);
      }}
      onBlur={() => {
        subLinks && subLinks.length > 0 && setCurrent(null);
      }}
      onMouseLeave={() => {
        subLinks && subLinks.length > 0 && setCurrent(null);
      }}
      tabIndex={0}
      className={twMerge(
        "group p-4 lg:py-8 xl:px-6",
        subLinks && subLinks.length > 0 && "text-start",
      )}
    >
      <div
        {...props}
        className={twMerge(
          "animate group/menu relative flex h-full items-center justify-between gap-2 font-poppins font-medium text-gray-600 hover:text-black hover:drop-shadow-sm",
        )}
      >
        <p className="relative z-10"> {text}</p>
        {subLinks && subLinks.length > 0 && (
          <Icon
            icon="chevron-down"
            size={16}
            className="animate relative z-10 stroke-current group-hover:rotate-180"
          />
        )}
        <div
          className={twMerge(
            "animate absolute bottom-0 z-0 h-1/2 w-0 bg-mindaro group-hover/menu:w-full",
            subLinks && current === text ? "w-full" : "",
          )}
        ></div>
      </div>
      <div className="hidden lg:block">
        <AnimatePresence>
          {subLinks && current === text && (
            <div className="fixed left-1/2 top-[88px] w-fit -translate-x-1/2 transform ">
              <motion.div
                initial={{ opacity: 0, y: "-4%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-4%" }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-2 gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
              >
                {subLinks.map((item) => (
                  <Link
                    href={item.url}
                    key={item.link}
                    className="animate group/submenu flex max-w-96 gap-3 rounded-lg p-4 hover:bg-gray-200/50"
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        size={24}
                        className="shrink-0 fill-current group-hover/submenu:text-black"
                      />
                    )}
                    <div className="flex flex-col text-black">
                      <h6 className="text-sm font-semibold"> {item.link}</h6>
                      <p className="font-inter text-sm text-gray-400 group-hover/submenu:text-gray-500">
                        {item.description && item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Element>
  );
};

export default NavLinks;
