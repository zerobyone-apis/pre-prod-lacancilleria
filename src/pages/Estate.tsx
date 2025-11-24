import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { EstateIntroSection } from "@/components/sections/EstateIntroSection";
import { ServicesOption3Alternated } from "@/components/sections/ServicesOption3Alternated";
import { EstateServicesSection } from "@/components/sections/EstateServicesSection";
import { EstateGallerySection } from "@/components/sections/EstateGallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { ExperienceDividerSection } from "@/components/sections/ExperienceDividerSection";
import { FooterMinimal } from "@/components/layout/FooterMinimal";

const Estate = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t("estate.hero.title")}
        subtitle={t("estate.hero.subtitle")}
        backgroundImage="/images/estate-hero.jpg"
      />
      <EstateIntroSection />
      <EstateServicesSection />
      <ServicesOption3Alternated />
      <EstateGallerySection />
      <ExperienceDividerSection />
      <CTASection titleKey={t("estate.cta.title")} descriptionKey={t("estate.cta.description")} />
      <FooterMinimal />
    </PageContainer>
  );
};

export default Estate;
