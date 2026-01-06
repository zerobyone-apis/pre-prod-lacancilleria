"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { HomeIntroSection } from "@/app/components/sections/HomeIntroSection";
import { QuickFactsSection } from "@/app/components/sections/QuickFactsSection";
import { TimelineSection } from "@/app/components/sections/TimelineSection";
import { NewFigmaContactSection } from "@/app/components/sections/NewFigmaContactSection";
import { ImageDeviderSection } from "./components/sections/ImageDeviderSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        backgroundVideo="/video/home/hero-home.mp4"
      />
      <HomeIntroSection />
      <QuickFactsSection />
      <ImageDeviderSection imageSource='/images/home/deviders/Montoya.webp' />
      <TimelineSection home estate={false} />
      <ImageDeviderSection imageSource='/images/home/deviders/lacancilleria_panoramic.jpg' />
      <NewFigmaContactSection />
    </>
  );
}


