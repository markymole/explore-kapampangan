import { townNames } from "./HeroMap.data";

export const HeroMapBuilderConfig = {
  name: "Hero Map",
  inputs: [
    {
      name: "selectedTown",
      enum: townNames,
      defaultValue: "Angeles City",
    },
  ],
};
