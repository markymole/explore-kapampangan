import {
  buttonConfig,
  descriptionConfig,
  eyebrowConfig,
  headingConfig,
} from "@/app/utils/builderShortcuts";
import { lorem } from "../Slidebox/featured.data";
import { iconIds } from "@/app/molecules/Icon";

export const CardDeckBuilderConfig = {
  name: "Card Deck",
  inputs: [
    eyebrowConfig,
    headingConfig,
    descriptionConfig,
    buttonConfig,
    {
      name: "type",
      enum: ["Default", "Bento", "Blog"],
      defaultValue: "Default",
    },
    {
      name: "customColumn",
      type: "boolean",
      defaultValue: false,
      helperText: "Toggle to customize column number.",
    },
    {
      name: "maxColumns",
      enum: [1, 2, 3, 4, 5],
      defaultValue: 3,
      showIf: "options.get('customColumn') === true",
    },
    {
      name: "cards",
      type: "list",
      showIf: 'options.get("type") !== "Blog"',
      subFields: [
        {
          name: "theme",
          enum: ["Dark", "Green", "Beige", "White"],
          defaultValue: "Dark",
        },
        {
          name: "icon",
          enum: iconIds,
          defaultValue: "widget",
        },
        {
          name: "title",
          type: "string",
          defaultValue: "Place title here",
        },
        {
          name: "description",
          type: "richText",
          defaultValue: lorem,
        },
        {
          name: "link",
          type: "string",
          helperText:
            "Link must start with slash and must not have trailing slash",
        },
      ],
    },
    {
      name: "cards",
      type: "list",
      showIf: 'options.get("type") === "Blog"',
      subFields: [
        {
          name: "blog",
          type: "reference",
        },
      ],
    },
  ],
};
