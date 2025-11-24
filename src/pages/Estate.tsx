import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { EstateIntroSection } from '@/components/sections/EstateIntroSection';
import { ServicesOption3Alternated } from '@/components/sections/ServicesOption3Alternated';
import { EstateServicesSection } from '@/components/sections/EstateServicesSection';
import { EstateGallerySection } from '@/components/sections/EstateGallerySection';
import { CTASection } from '@/components/sections/CTASection';
import { FooterMinimal } from '@/components/layout/FooterMinimal';

const Estate = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t('estate.hero.title')}
        subtitle={t('estate.hero.subtitle')}
        backgroundImage="/images/estate-hero.jpg"
      />
      <EstateIntroSection />
      <ServicesOption3Alternated />
      <EstateServicesSection />
      <EstateGallerySection />
      <CTASection 
        titleKey="estate.cta.title"
        descriptionKey="estate.cta.description"
      />
      <FooterMinimal />
    </PageContainer>
  );
};

export default Estate;
