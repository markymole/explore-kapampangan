import { cva } from "class-variance-authority";

export const ColoredCardVariant = cva(
  ["flex flex-col gap-4 p-8 rounded-lg shadow-lg"],
  {
    variants: {
      theme: {
        Dark: ["bg-eerie text-white"],
        Green: ["bg-mindaro text-eerie"],
        Beige: ["bg-flashWhite text-eerie"],
        White: ["bg-white text-eerie"],
      },
    },
  },
);
