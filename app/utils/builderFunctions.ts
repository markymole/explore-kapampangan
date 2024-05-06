import { builder } from "@builder.io/sdk/";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

type BuilderDataModelFetchProps = "header" | "footer";

export const getPageModelData = async (slug: string, model: string) => {
  const result = await builder
    .get(model, {
      userAttributes: {
        urlPath: slug,
      },
      prerender: false,
    })
    .toPromise();

  return result;
};

export const getDataModelData = async (model: BuilderDataModelFetchProps) => {
  const data = await builder.get(model, {
    fields: "data",
    options: { noTargeting: true },
  });

  return data;
};
