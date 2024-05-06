import { builder } from "@builder.io/sdk";

import { RenderBuilderContent } from "../components/builder";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getDataModelData, getPageModelData } from "../utils/builderFunctions";

interface PageProps {
  params: {
    page: string[];
  };
}

const model = "page";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

export default async function Page(props: PageProps) {
  const path = "/" + (props?.params?.page?.join("/") || "");
  const content = await getPageModelData(path, model);
  const headerData = await getDataModelData("header");
  const footerData = await getDataModelData("footer");

  return (
    <>
      <Header
        logo={headerData.data.logo}
        logoTitle={headerData.data.logoTitle}
        logoSubTitle={headerData.data.logoSubTitle}
        links={headerData.data.links}
        cta={headerData.data.cta}
      />
      <RenderBuilderContent content={content} model={model} />
      <Footer
        logo={footerData.data.logo}
        title={footerData.data.title}
        description={footerData.data.description}
        links={footerData.data.links}
      />
    </>
  );
}
