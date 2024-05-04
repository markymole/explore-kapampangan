import { cva } from "class-variance-authority";

export const ButtonVariant = cva(
  ["animate w-full rounded-lg px-6 py-2 md:w-fit md:py-2.5"],
  {
    variants: {
      hierarchy: {
        primary: ["bg-eerie text-white hover:bg-raisin/80"],
        secondary: ["bg-mindaro text-eerie hover:bg-lime"],
        tertiary: ["bg-teaGreen text-eerie hover:bg-teaGreen/80"],
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
      weight: {
        normal: ["font-normal"],
        medium: ["font-medium"],
        semibold: ["font-semibold"],
        bold: ["font-bold"],
      },
    },
  },
);
