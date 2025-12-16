'use client';

import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import Image from 'next/image';
import { NewFigmaContactForm } from '../layout/NewFigmaContactForm';


export const NewFigmaContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact-section"
      className="
        relative w-full overflow-hidden
        text-mar
        sm:px-6 md:px-12 lg:px-24
        pt-0 pb-20
        md:pt-40 md:pb-40
        bg-[#F7F5F1]
      "
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
            top: '500px',
            right: '90px',
            transform: 'scale(1.5)',
            objectFit: 'contain',
            opacity: 0.9, // suavizado elegante
          }}
        />
      </div>

      {/* 🔶 CONTENIDO CENTRADO */}
      <div id="contact" className="relative z-10 max-w-[900px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 mt-8">
          <SectionHeader
            title={t('home.contact.header.title')}
            description={t('home.contact.header.subtitle')}
            align="center"
            to={t('home.contact.header.to')}
          />
        </div>

        {/* 🔶 FORM CONTAINER MEJORADO */}
        <div className="bg-none  mx-auto max-w-[600px]" >
          <NewFigmaContactForm />
        </div>
      </div>
    </section>
  );
};
