import { cva } from "class-variance-authority";

export const headingLayout = cva([], {
  variants: {
    layout: {
      Centered: ["flex flex-col items-center text-center 2xl:w-1/2 gap-4"],
      Split: ["flex flex-col items-start w-full"],
    },
  },
});
