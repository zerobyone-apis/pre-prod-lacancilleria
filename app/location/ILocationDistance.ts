export interface DistanceItem {
    key: string; // Identificador único del item
    image: string; // Ruta de la imagen
    label: string; // i18nKey para el texto
  }
  
  export interface LocationDistancesMobileProps {
    title: string; // i18nKey del título
    description?: string; // i18nKey del description
    items: DistanceItem[]; // Lista dinámica de items
  }