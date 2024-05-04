import { lorem } from "../components/Slidebox/featured.data";

export const headingConfig = {
  name: "heading",
  type: "string",
  defaultValue: "Kapampangan Cuisine",
  helperText: "Wrap text in {% Sample text %} to highlight text.",
};

export const descriptionConfig = {
  name: "description",
  type: "richText",
  defaultValue: lorem,
};

export const eyebrowConfig = {
  name: "eyebrow",
  type: "string",
};

export const buttonConfig = {
  name: "buttons",
  type: "list",
  helperText: "Limit button entry to 2 for layout concern.",
  subFields: [
    {
      name: "hierarchy",
      enum: ["primary", "secondary", "tertiary", "outline", "link"],
      defaultValue: "primary",
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Call to action",
    },
    {
      name: "link",
      type: "string",
    },
    {
      name: "size",
      enum: ["xs", "sm", "base", "lg", "xl"],
      default: "base",
    },
  ],
};
