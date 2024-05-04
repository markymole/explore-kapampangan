import Icon, { IconIds } from "@/app/molecules/Icon";
import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface SlideTabsProps {
  icon?: IconIds;
  title: string;
  active: boolean;
  onClick?: () => void;
}

const SlideTabs = ({ icon, title, active, onClick }: SlideTabsProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={twMerge(
        "relative flex flex-col items-center gap-2 px-10 py-4",
      )}
    >
      <div className="relative h-full w-fit">
        {title && (
          <p className="relative z-10 font-poppins text-lg font-semibold ">
            {title}
          </p>
        )}
        {active && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="absolute bottom-0 left-0 z-0 h-1/2 bg-mindaro"
          ></motion.div>
        )}
      </div>
      {/* {active ? (
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 h-[2.5px] bg-mindaro underline"
          layoutId="underline"
        />
      ) : null} */}
      <div className="absolute bottom-0 left-0 h-[2.5px] w-full bg-gray-400"></div>
    </motion.button>
  );
};

export default SlideTabs;
