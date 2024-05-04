import {
  buttonConfig,
  descriptionConfig,
  eyebrowConfig,
  headingConfig,
} from "@/app/utils/builderShortcuts";
import { lorem } from "../Slidebox/featured.data";

export const SwitchbackBuilderConfig = {
  name: "Switchback",
  inputs: [
    {
      name: "layout",
      enum: ["Default", "Switch"],
      defaultValue: "default",
    },
    eyebrowConfig,
    headingConfig,
    descriptionConfig,
    {
      name: "type",
      enum: ["Image", "Map", "Frame", "Column Content"],
      defaultValue: "image",
    },
    {
      name: "columnContent",
      type: "list",
      showIf: "options.get('type') === 'Column Content'",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Our Vision",
        },
        {
          name: "description",
          type: "richText",
          defaultValue: lorem,
        },
      ],
    },
    {
      name: "image",
      type: "file",
      showIf:
        "options.get('type') === 'Frame'|| options.get('type') === 'Image'",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fd101c4dffa3e49f39d6a6db62c893c52%2Fc31ee992e7794c469814336c8c571472",
    },
    buttonConfig,
  ],
};
