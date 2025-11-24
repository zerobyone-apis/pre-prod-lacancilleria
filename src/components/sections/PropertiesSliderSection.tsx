import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const PropertiesSliderSection = () => {
  const { t } = useTranslation();

  const properties = [
    {
      key: "cancilleria",
      type: "images" as const,
      images: ["/images/house-hero.jpg", "/images/house-gallery-1.jpg", "/images/house-gallery-2.jpg"],
    },
    {
      key: "griega",
      type: "video" as const,
      videoUrl: "/videos/sample-video.mp4", // Replace with your video URL
    },
  ];

  return (
    <Section className="py-24">
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
                {/* Property Info */}
                <div className="text-center space-y-6 px-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">{t(`home.properties.${property.key}.name`)}</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    {t(`home.properties.${property.key}.description`)}
                  </p>
                </div>
                
                {/* Media Content */}
                {property.type === "images" ? (
                  <div className="relative">
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
                            <div className="relative aspect-video overflow-hidden rounded-sm">
                              <img
                                src={image}
                                alt={`${t(`home.properties.${property.key}.name`)} - ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </div>
                ) : (
                  <div className="relative aspect-video overflow-hidden rounded-sm">
                    <video
                      src={property.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                )}
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
