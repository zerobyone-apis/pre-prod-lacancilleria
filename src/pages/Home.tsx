import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { HomeIntroSection } from '@/components/sections/HomeIntroSection';
import { PropertiesSliderSection } from '@/components/sections/PropertiesSliderSection';
import { QuickFactsSection } from '@/components/sections/QuickFactsSection';
import { LifestyleImageSection } from '@/components/sections/LifestyleImageSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { HomeDividerSection } from '@/components/sections/HomeDividerSection';
import { HomeCTASection } from '@/components/sections/HomeCTASection';
import { ExperienceDividerSection } from '@/components/sections/ExperienceDividerSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import { FloatingContactButton } from '@/components/ui/FloatingContactButton';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        backgroundImage="/images/house-hero.jpg"
      />
      <HomeIntroSection />
      <PropertiesSliderSection />
      <QuickFactsSection />
      <LifestyleImageSection />
      <TimelineSection />
      <HomeDividerSection />
      <HomeCTASection />
      <ExperienceDividerSection />
      <ContactSection />
      <FooterMinimal />
      <FloatingContactButton />
    </PageContainer>
  );
};

export default Home;
