import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface navProps {
  text: string;
  link?: string;
  delay: string;
}

const Nav = ({ text, link, delay, ...props }: navProps) => {
  return (
    <Link href={link ? link : ""}>
      <motion.p
        initial={{ opacity: delay !== "0" ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay !== "0" ? parseFloat(delay) : 0 }}
        {...props}
        className="animate font-poppins text-gray-600 hover:text-black"
      >
        {text}
      </motion.p>
    </Link>
  );
};

export default Nav;
