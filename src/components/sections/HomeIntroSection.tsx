import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
export const HomeIntroSection = () => {
  const {
    t
  } = useTranslation();
  const sectionRef = useGsapStagger('.intro-block');
  return;
};