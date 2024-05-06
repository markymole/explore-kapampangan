import { cva } from "class-variance-authority";

export const heroLayout = cva([], {
  variants: {
    layout: {
      centered: ["flex flex-col items-center text-center 2xl:w-3/5 gap-4"],
      split: [
        "grid grid-cols-1 lg:grid-cols-2 gap-sm md:gap-md lg:gap-lg xl:gap-xl items-center",
      ],
    },
  },
});

export const heroDescriptionStyle = cva(
  ["font-inter text-gray-800 lg:text-lg "],
  {
    variants: {
      layout: {
        centered: ["lg:w-2/3 2xl:w-1/2"],
        split: [""],
      },
    },
  },
);

export const heroHeadingStyle = cva([
  "font-poppins text-4xl font-semibold md:text-6xl xl:text-7xl break-words",
]);

export const headingContainerStyle = cva(["flex flex-col gap-4"], {
  variants: {
    layout: {
      centered: ["items-center"],
      split: [""],
    },
  },
});
