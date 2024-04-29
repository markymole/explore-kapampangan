export const NewsletterBuilderConfig = {
  name: "Newsletter",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Get our latest updates",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday so subscribe to get latest news and updates.",
    },
    {
      name: "button",
      type: "object",
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Subsribe",
        },
      ],
    },
  ],
};
