'use client';

import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { ContactForm } from '@/app/components/layout/ContactForm';
import Image from 'next/image';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact-section"
      className="
        relative w-full overflow-hidden 
        text-mar 
        px-6 md:px-12 lg:px-24 
        pt-40 pb-32
           bg-gradient-to-b 
           from-[#F7F5F1]  /* mismo color base del HomeIntro */
           end-[#F7F5F1] 
       "
      //   via-[#E6DCCF]
    >
      {/* ========================================================= */}
      {/* 🔶 SOMBRAS SUPERIORES IGUALES AL HOME INTRO */}
      {/* ========================================================= */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[20]">
        {/* Izquierda */}
        <Image
          src="/images/home/shadows/Recursos/Re_3.png"
          alt=""
          width={900}
          height={600}
          className="absolute opacity-[0.9] hidden md:block"
          style={{
            top: '-30px',
            left: '10px',
            transform: 'scale(1)',
            objectFit: 'contain',
            opacity: 0.9, // suavizado elegante
          }}
        />

        {/* Derecha */}
        <Image
          src="/images/home/shadows/Recursos/Re_4.png"
          alt=""
          width={900}
          height={600}
          className="absolute hidden md:block"
          style={{
            top: '600px',
            right: '80px',
            transform: 'scale(1.5)',
            objectFit: 'contain',
            opacity: 0.9, // suavizado elegante
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* 🔶 CONTENIDO */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 mt-10">
          <SectionHeader
            title={t('home.contact.header.title')}
            description={t('home.contact.header.subtitle')}
            align="center"
            to={t('home.contact.header.to')}
          />
        </div>

        {/* FORM */}
        <ContactForm />
      </div>
    </section>
  );
};
