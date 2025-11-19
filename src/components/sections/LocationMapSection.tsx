import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

const POINTS_OF_INTEREST = [
  {
    id: 'peninsula',
    name: 'Península de Punta del Este',
    coordinates: [-54.9574, -34.9631] as [number, number],
    description: 'El corazón de Punta del Este con sus icónicas playas Mansa y Brava',
    distance: '15 min'
  },
  {
    id: 'montoya',
    name: 'Montoya',
    coordinates: [-54.8986, -34.8631] as [number, number],
    description: 'Zona exclusiva con playas vírgenes y tranquilidad absoluta',
    distance: '10 min'
  },
  {
    id: 'labarra',
    name: 'La Barra',
    coordinates: [-54.8289, -34.8744] as [number, number],
    description: 'Centro bohemio con galerías de arte, restaurantes y vida nocturna',
    distance: '20 min'
  },
  {
    id: 'joseignacio',
    name: 'José Ignacio',
    coordinates: [-54.6169, -34.8364] as [number, number],
    description: 'Pueblo exclusivo conocido por su gastronomía de clase mundial',
    distance: '30 min'
  }
];

export const LocationMapSection = () => {
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-54.85, -34.92],
      zoom: 10.5,
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers with popups
    POINTS_OF_INTEREST.forEach((poi) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.innerHTML = `
        <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `;

      const popup = new mapboxgl.Popup({
        offset: 25,
        className: 'custom-popup'
      }).setHTML(`
        <div class="p-4 min-w-[250px]">
          <h3 class="text-lg font-serif mb-2 text-foreground">${poi.name}</h3>
          <p class="text-sm text-muted-foreground mb-2">${poi.description}</p>
          <div class="flex items-center gap-2 text-accent text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${poi.distance}
          </div>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat(poi.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.02,
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

  if (!isTokenSet) {
    return (
      <section className="h-screen flex items-center justify-center bg-secondary/30">
        <Card className="p-8 max-w-md space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-serif">MapBox Token Required</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Please enter your MapBox public token to display the interactive map. 
            Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">mapbox.com</a>
          </p>
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="mb-4"
          />
          <button
            onClick={() => setIsTokenSet(true)}
            disabled={!mapboxToken}
            className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Load Map
          </button>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative h-screen">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-8 left-8 bg-background/95 backdrop-blur-sm p-6 rounded-sm shadow-lg max-w-sm">
        <h2 className="text-2xl font-serif mb-2">{t('location.map.title')}</h2>
        <p className="text-sm text-muted-foreground">
          Explora los principales puntos de interés cerca de La Cancillería
        </p>
      </div>
    </section>
  );
};
