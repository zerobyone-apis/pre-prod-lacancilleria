import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const PropertiesSliderSection = () => {
  const { t } = useTranslation();

  const properties = [
    {
      key: "cancilleria",
      images: ["/images/house-hero.jpg", "/images/house-gallery-1.jpg", "/images/house-gallery-2.jpg"],
    },
    {
      key: "griega",
      images: ["/images/house-gallery-3.jpg", "/images/house-gallery-4.jpg", "/images/house-gallery-5.jpg"],
    },
  ];

  return (
    <Section className="py-24">
      {/* Property Info */}
      <div className="text-center space-y-6 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">{t(`home.properties.${property.key}.name`)}</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {t(`home.properties.${property.key}.description`)}
        </p>
      </div>
      <Carousel
        className="w-full max-w-6xl mx-auto"
        opts={{
          duration: 20,
          loop: true,
        }}
      >
        <CarouselContent>
          {properties.map((property) => (
            <CarouselItem key={property.key}>
              <div className="space-y-12">
                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-sm">
                      <img
                        src={image}
                        alt={`${t(`home.properties.${property.key}.name`)} - ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 -translate-x-12" />
        <CarouselNext className="right-0 translate-x-12" />
      </Carousel>
    </Section>
  );
};
