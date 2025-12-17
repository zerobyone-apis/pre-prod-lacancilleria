/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type LocationPOI = {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  image: string; // placeholder for now
  category: string;
};

const BASE_LOCATION: [number, number] = [-54.84617, -34.909796]; // La Cancillería (Montoya / La Barra)

// ---------------------------------------------
// Distance (Haversine) + simple travel time
// ---------------------------------------------
function getDistanceKm(
  [lng1, lat1]: [number, number],
  [lng2, lat2]: [number, number]
) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getTravelTimes(km: number) {
  // "nice defaults" para placeholder: 40km/h auto, 5km/h caminando
  const carMin = Math.max(1, Math.round((km / 40) * 60));
  const walkMin = Math.max(1, Math.round((km / 5) * 60));
  return { car: `${carMin} min`, walk: `${walkMin} min` };
}

export const LocationMapSection = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const LOCATIONS: LocationPOI[] = useMemo(
    () => [
      {
        id: 'playa-mansa',
        name: 'Playa Mansa',
        coordinates: [-54.9411, -34.9527],
        description: 'Costa tranquila, ideal para atardeceres y familias.',
        image: '/image?query=Playa+Mansa+Punta+del+Este+atardecer&aspect=4:3',
        category: 'beach-15',
      },
      {
        id: 'playa-brava',
        name: 'Playa Brava (La Mano)',
        coordinates: [-54.9372, -34.9578],
        description:
          'La clásica playa oceánica con la icónica escultura de La Mano.',
        image: '/image?query=Escultura+La+Mano+Punta+del+Este&aspect=4:3',
        category: 'beach-15',
      },
      {
        id: 'puerto-pde',
        name: 'Puerto de Punta del Este',
        coordinates: [-54.9494, -34.9617],
        description: 'Paseo, gastronomía y avistamiento de lobos marinos.',
        image:
          '/image?query=Puerto+Punta+del+Este+yachts+lobos+marinos&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'isla-gorriti',
        name: 'Isla Gorriti',
        coordinates: [-54.9716, -34.9533],
        description:
          'Reserva natural frente a la península con playas y bosques.',
        image: '/image?query=Isla+Gorriti+playa+bosque&aspect=4:3',
        category: 'viewpoint-15',
      },
      {
        id: 'isla-lobos',
        name: 'Isla de Lobos',
        coordinates: [-54.8836, -35.0273],
        description:
          'Hogar de la reserva de lobos marinos más grande del hemisferio sur.',
        image: '/image?query=Isla+de+Lobos+Uruguay+lobos+marinos&aspect=4:3',
        category: 'viewpoint-15',
      },
      {
        id: 'av-gorlero',
        name: 'Avenida Gorlero',
        coordinates: [-54.9408, -34.9594],
        description: 'La avenida principal, centro comercial y neurálgico.',
        image: '/image?query=Avenida+Gorlero+Punta+del+Este+shops&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'calle-20',
        name: 'Calle 20 (Fashion Road)',
        coordinates: [-54.942, -34.961],
        description: 'Boutiques de lujo y marcas internacionales.',
        image: '/image?query=Calle+20+Punta+del+Este+fashion&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'faro-pde',
        name: 'Faro de Punta del Este',
        coordinates: [-54.9516, -34.9688],
        description: 'Vista panorámica histórica desde 1860.',
        image: '/image?query=Faro+Punta+del+Este+historic&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'playa-montoya',
        name: 'Playa Montoya',
        coordinates: [-54.8465, -34.9142],
        description:
          'Playa ancha de olas fuertes, favorita del surf y la juventud.',
        image: '/image?query=Playa+Montoya+La+Barra+surf&aspect=4:3',
        category: 'beach-15',
      },
      {
        id: 'playa-bikini',
        name: 'Playa Bikini',
        coordinates: [-54.8253, -34.9094],
        description: 'El parador de moda en Manantiales, música y atardeceres.',
        image: '/image?query=Playa+Bikini+Manantiales+summer&aspect=4:3',
        category: 'beach-15',
      },
      {
        id: 'puente-la-barra',
        name: 'Puente de La Barra',
        coordinates: [-54.8725, -34.9109],
        description: 'El famoso puente ondulante de Leonel Viera.',
        image: '/image?query=Puente+Ondulante+La+Barra+Leonel+Viera&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'centro-la-barra',
        name: 'Centro de La Barra',
        coordinates: [-54.865, -34.9156],
        description: 'Vida nocturna, galerías de arte y estilo bohemio-chic.',
        image: '/image?query=Centro+La+Barra+Punta+del+Este+night&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'museo-del-mar',
        name: 'Museo del Mar',
        coordinates: [-54.8703, -34.8989],
        description: 'Increíble colección de historia natural y marina.',
        image:
          '/image?query=Museo+del+Mar+Punta+del+Este+collection&aspect=4:3',
        category: 'museum-15',
      },
      {
        id: 'pueblo-manantiales',
        name: 'Pueblo Manantiales',
        coordinates: [-54.8153, -34.8972],
        description: 'Gastronomía de alto nivel y tiendas de diseño.',
        image:
          '/image?query=Pueblo+Manantiales+Punta+del+Este+street&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'casapueblo',
        name: 'Casapueblo',
        coordinates: [-55.0446, -34.9088],
        description: 'La escultura habitable de Carlos Páez Vilaró.',
        image: '/image?query=Casapueblo+Punta+Ballena+sunset&aspect=4:3',
        category: 'museum-15',
      },
      {
        id: 'maca-atchugarry',
        name: 'Fundación Pablo Atchugarry (MACA)',
        coordinates: [-54.8207, -34.8661],
        description: 'Museo de Arte Contemporáneo y parque de esculturas.',
        image: '/image?query=Museo+MACA+Atchugarry+architecture&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'ralli',
        name: 'Museo Ralli',
        coordinates: [-54.9269, -34.9291],
        description: 'Arte latinoamericano y surrealista en Beverly Hills.',
        image: '/image?query=Museo+Ralli+Punta+del+Este+exterior&aspect=4:3',
        category: 'museum-15',
      },
      {
        id: 'faro-jose-ignacio',
        name: 'Faro de José Ignacio',
        coordinates: [-54.6297, -34.8461],
        description: 'El símbolo del pueblo pesquero más exclusivo.',
        image: '/image?query=Faro+Jose+Ignacio+view&aspect=4:3',
        category: 'landmark-15',
      },
      {
        id: 'parador-la-huella',
        name: 'Parador La Huella',
        coordinates: [-54.6328, -34.8463],
        description: 'Restaurante de playa reconocido mundialmente.',
        image:
          '/image?query=Parador+La+Huella+Jose+Ignacio+restaurant-15&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'laguna-garzon',
        name: 'Laguna Garzón',
        coordinates: [-54.55, -34.79],
        description: 'Área protegida para kitesurf y naturaleza.',
        image: '/image?query=Laguna+Garzon+aerial&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'laguna-garzon-bridge',
        name: 'Puente Laguna Garzón',
        coordinates: [-54.5721, -34.8024],
        description: 'Innovador puente circular arquitectónico.',
        image:
          '/image?query=Puente+Laguna+Garzon+Rafael+Vinoly+circular&aspect=4:3',
        category: 'restaurant-15',
      },
      {
        id: 'bodega-garzon',
        name: 'Bodega Garzón',
        coordinates: [-54.629, -34.5696],
        description: 'Enoturismo de lujo entre colinas y viñedos.',
        image: '/image?query=Bodega+Garzon+architecture+vineyards&aspect=4:3',
        category: 'restaurant-15',
      },

      {
        id: 'pueblo-garzon',
        name: 'Pueblo Garzón',
        coordinates: [-54.543, -34.5933],
        description: 'Pueblo rural revitalizado con encanto y aceite de oliva.',
        image: '/image?query=Pueblo+Garzon+plaza+general&aspect=4:3',
        category: 'landmark-15',
      },
    ],
    []
  );

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;
    if (!mapboxgl.accessToken) {
      console.error('Missing NEXT_PUBLIC_MAPBOX_TOKEN');
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      config: {
        basemap: {
          colorMotorways: '#2b3e4e',
          showPointOfInterestLabels: false,
        },
      },
      center: [-54.86, -34.91],
      zoom: 10.6,
      pitch: 60,
      bearing: -20,
    });

    mapRef.current = map;

    // UX: no scroll-zoom by default (so page scroll works)
    map.scrollZoom.disable();

    // We will only enable interactions when user intentionally interacts:
    // - ctrl/cmd + wheel => zoom
    // - click on map => enable drag temporarily
    // - mouse leave => disable again
    const container = mapContainerRef.current;

    const onWheel = (e: WheelEvent) => {
      // If ctrl/cmd pressed, allow map zoom + prevent page zoom/scroll glitch
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        map.scrollZoom.enable();
      } else {
        map.scrollZoom.disable();
      }
    };

    const onMouseEnter = () => {
      // Keep scroll zoom disabled unless ctrl/cmd
      map.scrollZoom.disable();
    };

    const onMouseLeave = () => {
      // Disable interactions when leaving map area (prevents "stuck" map)
      map.scrollZoom.disable();
      map.dragPan.disable();
    };

    const onClick = () => {
      // click-to-enable drag (user intention)
      map.dragPan.enable();
    };

    // Important: passive:false so preventDefault works
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('click', onClick);

    // Controls
    map.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'top-right'
    );

    // Fog for softer depth (optional, but nice on light)
    map.on('style.load', () => {
      map.setPaintProperty('water', 'fill-color', '#AEE0F7');
      map.setPaintProperty('land', 'background-color', '#F7F5F1');

      map.addSource('pois', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: LOCATIONS.map((poi) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: poi.coordinates,
            },
            properties: {
              title: poi.name,
              icon: poi.category,
            },
          })),
        },
      });

      map.addLayer({
        id: 'poi-layer',
        type: 'symbol',
        source: 'pois',
        layout: {
          'icon-image': ['get', 'icon'], // ← usa iconos nativos de Mapbox
          'icon-size': 1.2,
          'icon-allow-overlap': true,
          'text-field': ['get', 'title'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': 12,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#A67752',
        },
      });

      map.setFog({
        range: [0.5, 10],
        color: '#f8f4ef',
        'high-color': '#e8e2db',
        'space-color': '#dcd7d0',
        'horizon-blend': 0.05,
      });
    });

    // Add base marker (La Cancillería)
    const baseEl = document.createElement('div');
    baseEl.className = 'location-marker location-marker--base';
    const basePopup = new mapboxgl.Popup({
      offset: 18,
      closeButton: false,
      className: 'location-popup',
    }).setHTML(`
      <div class="location-card">
        <div class="location-card__img" style="background-image:url('/images/placeholders/location.jpg')"></div>
        <div class="location-card__body">
          <div class="location-card__title">La Cancillería</div>
          <div class="location-card__desc">Ubicación de referencia.</div>
          <div class="location-card__meta">0.0 km · 0 min</div>
        </div>
      </div>
    `);

    new mapboxgl.Marker({ element: baseEl })
      .setLngLat(BASE_LOCATION)
      .setPopup(basePopup)
      .addTo(map);

    // Add POI markers
    const bounds = new mapboxgl.LngLatBounds();

    bounds.extend(BASE_LOCATION);

    LOCATIONS.forEach((poi) => {
      bounds.extend(poi.coordinates);

      const km = getDistanceKm(BASE_LOCATION, poi.coordinates);
      const time = getTravelTimes(km);

      const popup = new mapboxgl.Popup({
        offset: [0, -20],
        closeButton: false,
        className: 'location-popup',
      }).setHTML(`
        <div class="location-card">
          <div class="location-card__img" style="background-image:url('${
            poi.image
          }')"></div>
          <div class="location-card__body">
            <div class="location-card__title">${poi.name}</div>
            <div class="location-card__desc">${poi.description}</div>
            <div class="location-card__meta">${km.toFixed(1)} km · Auto ${
        time.car
      } · A pie ${time.walk}</div>
          </div>
        </div>
      `);


      const marker = new mapboxgl.Marker()
        .setLngLat(poi.coordinates)
        .setPopup(popup)
        .addTo(map);

      // Hover opens popup (minimal + elegant)
      marker.getElement().addEventListener("mouseenter", () => {
        popup.setLngLat(poi.coordinates); // Posición fija EXPLÍCITA
        popup.addTo(map);                 // Muestra el popup sin toggle
      });
      
      marker.getElement().addEventListener("mouseleave", () => {
        popup.remove();
      });
    });

    // Fit bounds to show whole region nicely
    map.once('load', () => {
      map.fitBounds(bounds, {
        padding: { top: 80, bottom: 80, left: 80, right: 80 },
        duration: 800,
        maxZoom: 12.5,
      });
      map.dragPan.disable(); // keep disabled until click
    });

    map.once('load', () => {
      // Vista general overview
      map.flyTo({
        center: [-54.9, -34.92], // un punto medio entre PDE y José Ignacio
        zoom: 9.3, // mucho más alejado
        pitch: 45,
        bearing: -10,
        duration: 2000,
      });

      setTimeout(() => {
        // Zoom hacia la casa (La Cancillería)
        map.flyTo({
          center: BASE_LOCATION,
          zoom: 14.2,
          pitch: 55,
          bearing: 20,
          duration: 2500,
          essential: true,
        });

        // solo después de la animación liberamos controles
        setTimeout(() => {
          map.scrollZoom.enable();
          map.dragPan.enable();
        }, 2600);
      }, 2300);
    });

    return () => {
      container.removeEventListener('wheel', onWheel as any);
      container.removeEventListener('mouseenter', onMouseEnter as any);
      container.removeEventListener('mouseleave', onMouseLeave as any);
      container.removeEventListener('click', onClick as any);

      map.remove();
      mapRef.current = null;
    };
  }, [LOCATIONS]);

  return (
    <section className="w-full bg-[#F7F5F1]">
      {/* MAP FULL WIDTH */}
      <div className="relative w-full">
        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setIsInfoOpen((v) => !v)}
          className="
              absolute
              top-8
              left-6
              z-30
              bg-white/90 backdrop-blur-md
              rounded-full
              px-10 py-2
              text-sm
              font-medium
              text-mar
              shadow-lg
              border border-black/5
              hover:bg-white
              transition
            "
        >
          Scroll Info
        </button>
        <div
          ref={mapContainerRef}
          className="
              w-full
              h-[100vh] md:h-[120vh]
              rounded-none
              pointer-events-auto
            "
        />

        {/* INFO CARD */}
        {/* INFO CARD (TOGGLEABLE) */}
        <div
          className={`
            absolute
            top-20
            left-6
            z-20
            w-[360px]
            transition-all duration-300 ease-out
            ${
              isInfoOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div
            className="
      bg-white/95 backdrop-blur-md
      rounded-2xl
      px-8 py-6
      shadow-xl
      border border-black/5
    "
          >
            <h2 className="text-mar font-serif text-3xl tracking-tight">
              Information
            </h2>

            <p className="text-mar/70 mt-3 leading-relaxed text-sm">
              Explora Punta del Este, La Barra, Montoya y José Ignacio.
              <br />
              Para mover el mapa: click dentro del mapa.
              <br />
              Para zoom: Ctrl / Cmd + scroll.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
