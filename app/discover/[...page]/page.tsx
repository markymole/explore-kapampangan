// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getModelData } from "@/app/utils/builderFunctions";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

interface PageProps {
  params: {
    page: string[];
  };
}

const model = "discover";

export default async function Page(props: PageProps) {
  const { params } = props;

  const path = params?.page
    ? `/discover/${params?.page?.join("/") || ""}`
    : "/discover";

  const content = await getModelData(path, model);

  const links = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Explore",
      link: "/explore",
    },
    {
      page: "Discover",
      link: "/discover",
    },
    {
      page: "Resources",
      link: "/resources",
    },
    {
      page: "About",
      link: "/about-us",
    },
  ];

  return (
    <>
      {/* Render the Builder page */}
      <Header links={links} />
      <RenderBuilderContent content={content} model={model} />
      <Footer />
    </>
  );
}
