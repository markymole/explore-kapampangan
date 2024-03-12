import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  [
    "animate w-full rounded-md px-4 py-1.5 font-inter font-medium md:w-fit md:py-2",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-2 border-black bg-black text-white hover:border-black hover:bg-transparent hover:text-black",
        ],
        secondary: [
          "border-2 border-white bg-white text-black  hover:border-white hover:bg-transparent hover:text-white",
        ],
        outline: [""],
        link: [""],
      },
      size: {
        xs: ["text-xs"],
        sm: ["text-sm"],
        base: ["text-base"],
        lg: ["text-lg"],
        xl: ["text-xl"],
      },
    },
  },
);
