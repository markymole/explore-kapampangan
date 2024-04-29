import { lorem } from "../Slidebox/featured.data";

export const CardDeckBuilderConfig = {
  name: "Blogs Card Deck",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Recent Blogs",
    },
    {
      name: "description",
      type: "richText",
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
      name: "cards",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Place title here",
        },
        {
          name: "description",
          type: "string",
          defaultValue: lorem,
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
        },
        {
          name: "link",
          type: "string",
          helperText:
            "Link must start with slash and must not have trailing slash",
        },
      ],
    },
  ],
};
