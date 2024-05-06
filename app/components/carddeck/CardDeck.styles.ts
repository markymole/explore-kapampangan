import { cva } from "class-variance-authority";

export const gridLayout = cva(["mt-10 grid grid-cols-1 gap-8 md:grid-cols-2"], {
  variants: {
    columns: {
      1: ["xl:grid-cols-1"],
      2: ["xl:grid-cols-2"],
      3: ["xl:grid-cols-3"],
      4: ["xl:grid-cols-4"],
      5: ["xl:grid-cols-5"],
      6: ["xl:grid-cols-6"],
      7: ["xl:grid-cols-7"],
      8: ["xl:grid-cols-8"],
      9: ["xl:grid-cols-9"],
      10: ["xl:grid-cols-10"],
      11: ["xl:grid-cols-11"],
      12: ["xl:grid-cols-12"],
    },
  },
});
