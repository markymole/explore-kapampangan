"use client";

import { Builder } from "@builder.io/react";

import type { Component } from "@builder.io/sdk";
import dynamic from "next/dynamic";

import { SwitchbackBuilderConfig } from "./Switchback/Switchback.buiderConfig";
import { HeroBuilderConfig } from "./Hero/Hero.builderConfig";
import { SlideboxBuilderConfig } from "./Slidebox/Slidebox.builderConfig";
import { NewsletterBuilderConfig } from "./Newsletter/Newsletter.builderConfig";
import { CardDeckBuilderConfig } from "./CardDeck/CardDeck.builderConfig";
import { HeroMapBuilderConfig } from "./Hero/HeroMap/HeroMap.builderConfig";
import { SliderBuilderConfig } from "./Slider/Slider.builderConfig";

const customComponents = [
  {
    component: dynamic(() => import("@/app/components/Switchback")),
    config: SwitchbackBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/Hero")),
    config: HeroBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/Slidebox")),
    config: SlideboxBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/Newsletter")),
    config: NewsletterBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/CardDeck")),
    config: CardDeckBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/Hero/HeroMap")),
    config: HeroMapBuilderConfig,
  },
  {
    component: dynamic(() => import("@/app/components/Slider")),
    config: SliderBuilderConfig,
  },
];

customComponents.forEach(({ component, config }) => {
  Builder.registerComponent(component, config as Component);
});
