import { cva } from "class-variance-authority";

export const SwitchbackLayout = cva([], {
  variants: {
    layout: {
      Default:
        "grid grid-cols-1 lg:grid-cols-2 gap-sm md:gap-md lg:gap-lg xl:gap-xl items-center",
      Switch:
        "grid grid-cols-1 lg:grid-cols-2 gap-sm md:gap-md lg:gap-lg xl:gap-xl items-center",
    },
  },
});
