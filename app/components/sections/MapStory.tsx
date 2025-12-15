'use client';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

type Chapter = {
  id: string;
  title: string;
  description: string;
  image: string;
  point: [number, number];
  zoom?: number;
  pitch?: number;
  bearing?: number;
};

const chapters: Chapter[] = [
  {
    id: 'cancilleria',
    title: 'La Cancillería',
    description:
      'Nuestra ubicación exacta, en un área exclusiva rodeada de naturaleza.',
    image: '/images/galery/Pasillo_Entrada.jpg',
    point: [-54.84617, -34.909796],
    zoom: 15,
    pitch: 50,
    bearing: 0,
  },
  {
    id: 'Playa Montoya',
    title: 'Playa Montoya',
    description: 'Una de las playas más famosas de Punta del Este.',
    image: '/images/galery/playa_montoya.png',
    point: [-54.846843, -34.910802],
    zoom: 15,
    pitch: 50,
    bearing: -10,
  },
  {
    id: 'barra',
    title: 'La Barra',
    description:
      'Restaurantes, galerías de arte y un ambiente relajado frente al mar.',
    image: '/images/galery/playa_bikini.png',
    point: [-54.84815, -34.91698],
    zoom: 15,
    pitch: 50,
    bearing: -10,
  },
  {
    id: 'Punta del Este',
    title: 'Punta del Este',
    description: 'El icónico destino turístico de Uruguay.',
    image: '/images/galery/punta_del_este.png',
    point: [-54.943239, -34.963499],
    zoom: 15,
    pitch: 50,
    bearing: -10,
  },
];


export default function MapStory() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObj = useRef<mapboxgl.Map | null>(null);

  const [activeChapter, setActiveChapter] = useState<Chapter | null>(
    chapters[0]
  );

  // ---------------------------------------------------------
  // INIT MAP
  // ---------------------------------------------------------
  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: chapters[0].point,
      zoom: 14,
      pitch: 50,
      bearing: 0,
    });

    map.on('load', () => {
      // Add markers
      chapters.forEach((ch) => {
        const marker = new mapboxgl.Marker({ color: '#4CC9FE' })
          .setLngLat(ch.point)
          .addTo(map);
        marker.getElement().addEventListener('click', () => {
          setActiveChapter(ch);
          map.flyTo({
            center: ch.point,
            zoom: ch.zoom ?? 15,
            pitch: ch.pitch ?? 50,
            bearing: ch.bearing ?? 0,
            duration: 1500,
          });
        });
      });
    });

    mapObj.current = map;
  }, []);
  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------
  return (
    <div className="relative w-full h-screen text-white overflow-x-hidden">
      {/* MAP (BEHIND EVERYTHING) */}
      <div ref={mapRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      <div className="relative z-20 pointer-events-auto">
        {/* FLOATING CARD */}
        {activeChapter && (
          <div className="sticky top-10 z-10 flex justify-center pointer-events-none">
            <div className="bg-black/70 p-6 rounded-xl w-[360px] backdrop-blur-lg shadow-xl pointer-events-auto">
              <div className="relative h-44 w-full rounded-lg overflow-hidden mb-3">
                <Image
                  src={activeChapter.image}
                  alt={activeChapter.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold">{activeChapter.title}</h2>
              <p className="text-white/70 mt-1">{activeChapter.description}</p>
            </div>
          </div>
        )}

        {/* SCROLL SECTIONS */}
        <div className="relative z-20 pointer-events-auto">
          {chapters.map((ch) => (
            <section
              key={ch.id}
              id={ch.id}
              className="h-[90vh] flex flex-col justify-end px-10 pb-20"
            >
              <h2 className="text-5xl font-extrabold">{ch.title}</h2>
              <p className="text-white/60 mt-4 text-xl">{ch.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
