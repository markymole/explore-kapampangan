import { buttonConfig, headingConfig } from "@/app/utils/builderShortcuts";
import { lorem } from "../Slidebox/featured.data";

export const HeroBuilderConfig = {
  name: "Hero",
  inputs: [
    {
      name: "layout",
      enum: ["centered", "split"],
      defaultValue: "split",
    },
    headingConfig,
    {
      name: "description",
      type: "richText",
      defaultValue: lorem,
    },
    {
      name: "contentType",
      enum: ["image", "bento", "video", "map"],
      defaultValue: "bento",
    },
    {
      name: "bentoImages",
      type: "list",
      showIf: "options.get('contentType') === 'bento'",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "png", "svg"],
        },
      ],
    },
    buttonConfig,
  ],
};
