export const LocationGallery = () => {
  return (
    <section className="w-full py-4 md:py-6 ">
      <div className="w-full h-[85vh] flex gap-4 md:gap-6 flex-col md:flex-row overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-[30%] h-1/2 md:h-full overflow-hidden">
          <img
            src="/images/location/gallery/la-huella-main.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[70%] h-1/2 md:h-full overflow-hidden">
          <img
            src="/images/location/gallery/galeria.webp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full mt-4 md:mt-6 h-[85vh] flex gap-4 md:gap-6 flex-col md:flex-row overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-[70%] h-1/2 md:h-full overflow-hidden">
          <img
            src="/images/location/gallery/cabalgata_2.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[30%] h-1/2 md:h-full overflow-hidden">
          <img
            src="/images/location/gallery/cabalgata_1.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
