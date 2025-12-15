export type LocationPOI = {
    id: string;
    name: string;
    category:
      | 'beach'
      | 'landmark'
      | 'restaurant'
      | 'nature'
      | 'culture'
      | 'town';
    coordinates: [number, number];
    image: string;
    description: string;
    distanceKm?: number;
    travelTimeCar?: string;
    travelTimeWalk?: string;
  };

  export const BASE_LOCATION: [number, number] = [-54.84617, -34.909796];

  