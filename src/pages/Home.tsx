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

const Home = () => {
  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title="La Cancillería"
        subtitle="Punta del Este, Uruguay"
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
    </PageContainer>
  );
};

export default Home;
