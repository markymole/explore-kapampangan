import { lorem } from "./featured.data";

export const SlideboxBuilderConfig = {
  name: "Slidebox",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Discover and explore the flavors of Kapampangan Cuisine",
    },
    {
      name: "description",
      type: "string",
      defaultValue: lorem,
    },
    {
      name: "button",
      type: "object",
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
        },
      ],
    },
  ],
};
