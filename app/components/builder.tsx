// components/builder.tsx
"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

import "./builder-registry";

interface BuilderPageProps {
  content?: BuilderContent;
  model?: string;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

export function RenderBuilderContent({
  content,
  model = "page",
}: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
