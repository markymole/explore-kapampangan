import {
  buttonConfig,
  descriptionConfig,
  eyebrowConfig,
  headingConfig,
} from "@/app/utils/builderShortcuts";
import { lorem } from "./featured.data";
import { iconIds } from "@/app/molecules/Icon";

export const SlideboxBuilderConfig = {
  name: "Slidebox",
  inputs: [
    eyebrowConfig,
    headingConfig,
    descriptionConfig,
    buttonConfig,
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "icon",
          enum: iconIds,
          defaultValue: "widget",
        },
        {
          name: "page",
          type: "string",
          defaultValue: "Place page here",
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
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fd101c4dffa3e49f39d6a6db62c893c52%2Fc31ee992e7794c469814336c8c571472",
        },
      ],
    },
  ],
};
