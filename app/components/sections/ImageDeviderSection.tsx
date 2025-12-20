import { useGsapParallax } from '@/hooks/useGsapAnimation';

interface props {
  imageSource: string;
}

export const ImageDeviderSection = (props: props) => {
  const { imageSource } = props;
  const parallaxRef = useGsapParallax(0.5);

  return (
    <section
      className="
          relative 
          w-full 
          overflow-hidden
          h-[260px]        /* mobile */
          sm:h-[340px]     /* tablets */
          md:h-screen      /* desktop full screen */
        "
    >
      <div className="absolute inset-0 w-full h-[120%]">
        <div ref={parallaxRef} className="w-full h-full">
          <img
            src={imageSource}
            alt="La Barra, Punta del Este, and José Ignacio area"
            className="
              w-full h-full
              object-cover
              object-top    /* mobile: nada de zoom */
              md:object-cover     /* desktop: rellena pantalla */
            "
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
        </div>
      </div>
    </section>
  );
};
