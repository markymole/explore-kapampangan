import { lorem } from "../Slidebox/featured.data";

export const HeroBuilderConfig = {
  name: "Hero",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Kapampangan Cuisine",
    },
    {
      name: "layout",
      enum: ["centered", "split"],
      defaultValue: "split",
    },
    {
      name: "description",
      type: "string",
      defaultValue: lorem,
    },
    {
      name: "contentType",
      enum: ["image", "grid", "video", "map"],
      defaultValue: "grid",
    },
    {
      name: "button",
      type: "object",
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Call to action",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
  ],
};
