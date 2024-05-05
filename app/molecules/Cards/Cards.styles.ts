import { cva } from "class-variance-authority";

export const ColoredCardVariant = cva(
  [
    "flex group flex-col justify-between gap-4 p-8 rounded-xl shadow-lg col-span-1 hover:shadow-xl animate",
  ],
  {
    variants: {
      theme: {
        Dark: ["bg-eerie text-white"],
        Green: ["bg-mindaro text-eerie"],
        Beige: ["bg-flashWhite text-eerie"],
        White: ["bg-white text-eerie"],
      },
      colSpan: {
        1: ["xl:col-span-1"],
        2: ["xl:col-span-2"],
        3: ["xl:col-span-3"],
      },
    },
  },
);
