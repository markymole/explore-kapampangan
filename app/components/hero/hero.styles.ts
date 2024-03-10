import { cva } from "class-variance-authority";

export const heroLayout = cva([], {
  variants: {
    layout: {
      centered: ["flex flex-col items-center text-center lg:w-1/2 gap-4"],
      split: [""],
      grid: ["grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44 items-center"],
    },
  },
});
