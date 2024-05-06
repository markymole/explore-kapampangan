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
        4: ["xl:col-span-4"],
        5: ["xl:col-span-5"],
        6: ["xl:col-span-6"],
        7: ["xl:col-span-7"],
        8: ["xl:col-span-8"],
        9: ["xl:col-span-9"],
        10: ["xl:col-span-10"],
        11: ["xl:col-span-11"],
        12: ["xl:col-span-12"],
      },
    },
  },
);
