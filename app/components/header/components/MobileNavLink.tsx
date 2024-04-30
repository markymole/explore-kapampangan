import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon, { IconIds } from "@/app/molecules/icon";

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

const MobileNavLink = ({
  text,
  link,
  delay,
  active,
  subLinks,
  ...props
}: navProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const Element = subLinks && subLinks.length > 0 ? "button" : Link;

  const handleNavClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Element
      href={link ? link : ""}
      onClick={() => {
        subLinks && subLinks.length > 0 && handleNavClick();
      }}
      tabIndex={0}
      className={twMerge(
        "p-4",
        subLinks && subLinks.length > 0 && "text-start",
      )}
    >
      <div
        {...props}
        className={twMerge(
          "animate relative flex items-center justify-between gap-2 font-poppins font-medium hover:drop-shadow-sm",
          subLinks && subLinks.length > 0 && open && "pb-4",
          open ? "text-black" : "text-gray-800",
        )}
      >
        {text}
        {subLinks && subLinks.length > 0 && (
          <Icon
            icon="chevron-down"
            size={16}
            className={twMerge("animate stroke-current", open && "rotate-180")}
          />
        )}
      </div>
      <div className="">
        <AnimatePresence>
          {subLinks && open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 md:gap-4"
            >
              {subLinks.map((item) => (
                <Link
                  href={item.url}
                  key={item.link}
                  className="animate flex w-full gap-3 rounded-md p-4 text-black hover:bg-gray-100"
                >
                  {item.icon && (
                    <Icon
                      icon={item.icon}
                      size={24}
                      className="shrink-0 fill-black stroke-black text-black"
                    />
                  )}
                  <div className="flex flex-col gap-1">
                    <h6 className="text-sm font-semibold"> {item.link}</h6>
                    <p className="hidden font-inter text-sm text-gray-400 md:block">
                      {item.description && item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Element>
  );
};

export default MobileNavLink;
