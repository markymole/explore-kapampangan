import { cva } from "class-variance-authority";

export const SwitchbackLayout = cva([], {
  variants: {
    layout: {
      default: "grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-44 items-center",
      switch: "grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-44 items-center",
    },
  },
});
