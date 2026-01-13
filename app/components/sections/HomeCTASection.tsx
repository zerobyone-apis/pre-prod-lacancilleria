/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { NavLink } from '../NavLink';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const HomeCTASection = ({ textCta, fromHome }: any) => {
  const { t } = useTranslation();

  console.log('2-Is contact from Home', fromHome);

  return (
    <div className="relative flex flex-col items-center text-center pt-20 md:pt-24 pb-0 md:pb-32 bg-none">
      <h2
        className="
        text-h1-sm md:text-h1-md lg:text-h1-lg
        font-serif text-mar/90
        leading-[1.35]
        tracking-[0.015em]
        max-w-[800px]
        md:max-w-[1200px]
        mb-10
        md:mb-10
      "
      >
        <Trans i18nKey={textCta} />
      </h2>

      {fromHome ? (
        <div className="flex flex-row items-center justify-center gap-3 md:gap-6">
          <NavLink to="/estate" className="w-auto">
            <Button
              size="lg"
              className="
          w-auto
          px-4 sm:px-4 md:px-8 py-2.5 md:py-3
          text-[14px] sm:text-cta_bottn
          bg-mar text-white
          rounded-[6px]
          tracking-wide
          transition-all duration-500
          hover:bg-piel/80 hover:shadow-xl hover:-translate-y-1
          inline-flex items-center justify-center gap-2
          whitespace-nowrap
          min-w-[140px] sm:min-w-[160px]
        "
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('home.cta.estate')}
            </Button>
          </NavLink>

          <NavLink to="/location" className="w-auto">
            <Button
              size="lg"
              className="
          w-auto
          px-2 sm:px-4 md:px-8 py-2.5 md:py-3
          text-[14px] sm:text-cta_bottn
          bg-mar text-white
          rounded-[6px]
          tracking-wide
          transition-all duration-500
          hover:bg-piel/80 hover:shadow-xl hover:-translate-y-1
          inline-flex items-center justify-center gap-2
          whitespace-nowrap
          min-w-[140px] sm:min-w-[160px]
        "
            >
              {t('home.cta.location')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </NavLink>
        </div>
      ) : (
        <Button
          onClick={() =>
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          size="lg"
          className="
                  px-2 md:px-6 py-3 md:py-3
                  text-cta_bottn md:text-cta_bottn
                  bg-mar text-white
                  rounded-[6px]
                  tracking-wide
                  transition-all duration-500
                  hover:bg-piel/80 hover:shadow-xl hover:-translate-y-1
                "
        >
          {t('home.cta.button')}
        </Button>
      )}
    </div>
  );
};
