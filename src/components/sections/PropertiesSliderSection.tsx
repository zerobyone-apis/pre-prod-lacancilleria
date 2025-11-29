import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PropertiesSliderSectionProps {
  propertyFilter?: "cancilleria" | "griega";
}

export const PropertiesSliderSection = ({ propertyFilter }: PropertiesSliderSectionProps = {}) => {
  const { t } = useTranslation();

  const allProperties = [
    {
      key: "cancilleria",
      type: "images" as const,
      images: ["/images/house-hero.jpg", "/images/house-gallery-1.jpg", "/images/house-gallery-2.jpg"],
    },
    {
      key: "griega",
      type: "images" as const,
      images: ["/images/estate-gallery-1.jpg", "/images/estate-gallery-2.jpg", "/images/estate-gallery-3.jpg"],
    },
  ];

  const properties = propertyFilter 
    ? allProperties.filter(p => p.key === propertyFilter)
    : allProperties;

  return (
    <Section className="py-12 md:py-24">
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
              <div className="space-y-8 md:space-y-12">
                {/* Property Info */}
                <div className="text-center space-y-4 md:space-y-6 px-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">{t(`home.properties.${property.key}.name`)}</h2>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    {t(`home.properties.${property.key}.description`)}
                  </p>
                </div>
                
                {/* Media Content */}
                <div className="relative px-2 md:px-0">
                  <Carousel
                    className="w-full"
                    opts={{
                      duration: 20,
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {property.images?.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video overflow-hidden rounded-sm mx-2 md:mx-0">
                            <img
                              src={image}
                              alt={`${t(`home.properties.${property.key}.name`)} - ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background h-8 w-8 md:h-10 md:w-10" />
                    <CarouselNext className="right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background h-8 w-8 md:h-10 md:w-10" />
                  </Carousel>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};
