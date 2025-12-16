'use client';

import { Trans, useTranslation } from "react-i18next";
import { Section } from "@/app/components/layout/Section";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useState } from "react";

import staffChef from "../../../public/images/the_estate/la_griega/staff/staff-chef.jpg";
import staffNanny from "../../../public/images/the_estate/la_griega/staff/staff-nanny.jpg";
import staffDriver from "../../../public/images/the_estate/la_griega/staff/staff-driver.jpg";
import staffYoga from "../../../public/images/the_estate/la_griega/staff/staff-yoga.jpg";
import staffMassage from "../../../public/images/the_estate/la_griega/staff/staff-massage.jpg";

const STAFF_SERVICES = [
  { id: "chef", image: staffChef },
  { id: "nanny", image: staffNanny },
  { id: "driver", image: staffDriver },
  { id: "yoga", image: staffYoga },
  { id: "massage", image: staffMassage },
];

export const EstateStaffSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleActivate = (index: number) => {
    if (window.innerWidth < 768) {
      // Mobile → usar click
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <Section className="py-24 md:py-32 overflow-visible bg-[##F7F5F0]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label={t("estate.griega.staff.description")}
          title={t("estate.griega.staff.title")}
          align="center"
          className="mb-16"
        />

        <div className="relative">
          {STAFF_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                className="relative"
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
                onClick={() => handleActivate(index)}
              >
                {/* TEXT */}
                <div className="py-6 md:py-8 cursor-pointer text-center">
                  <h3
                    className={`
                      text-xl md:text-2xl lg:text-3xl font-serif transition-colors duration-300
                      ${isActive ? "text-piel" : "text-mar/60"}
                    `}
                  >
                    <Trans i18nKey={`estate.griega.staff.items.${service.id}`} />
                  </h3>

                  {/* UNDERLINE + DOT */}
                  <div className="relative mx-auto mt-3 h-[1px] w-full max-w-xs bg-mar/10">
                    <div
                      className={`
                        absolute left-0 top-0 h-[1px] bg-piel transition-all duration-500
                        ${isActive ? "w-full" : "w-0"}
                      `}
                    />
                    <span
                      className={`
                        absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-piel
                        transition-opacity duration-500
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </div>
                </div>

                {/* FLOAT IMAGE — DESKTOP ONLY */}
                <div
                  className={`
                    hidden md:block
                    absolute top-1/2 -translate-y-1/2
                    w-48 md:w-64 lg:w-80 aspect-[4/3]
                    rounded-lg overflow-hidden shadow-xl z-10 pointer-events-none
                    transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${isEven ? "right-0 translate-x-[65%]" : "left-0 -translate-x-[65%]"}
                    ${isActive ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-45%]"}
                  `}
                >
                  <img
                    src={
                      typeof service.image === "string"
                        ? service.image
                        : service.image.src
                    }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
