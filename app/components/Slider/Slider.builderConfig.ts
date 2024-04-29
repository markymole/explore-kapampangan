export const SliderBuilderConfig = {
  name: "Slider",
  inputs: [
    {
      name: "eyebrow",
      type: "string",
      defaultValue: "Discover",
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Kapampangan Cuisine",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "link",
      type: "string",
    },
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "richText",
        },
      ],
    },
  ],
};
