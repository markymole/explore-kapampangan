import { lorem } from "../Slidebox/featured.data";

export const SwitchbackBuilderConfig = {
  name: "Switchback",
  inputs: [
    {
      name: "layout",
      enum: ["default", "switch"],
      defaultValue: "default",
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Kapampangan Cuisine",
    },
    {
      name: "description",
      type: "string",
      defaultValue: lorem,
    },
    {
      name: "type",
      enum: ["image", "map"],
      defaultvalue: "image",
    },
    {
      name: "image",
      type: "file",
      showIf: "options.get('type') === 'image'",
      allowedFileTypes: ["jpeg", "jpg", "png"],
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
  ],
};
