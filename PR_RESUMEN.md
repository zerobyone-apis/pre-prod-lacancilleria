# Resumen de cambios — feature/landing/mobile-ui-improvements

## Arquitectura y configuración
- Migración completa a Next.js 14 con App Router: `app/layout.tsx` concentra navegación, pie minimal, botón flotante de contacto, React Query, tooltips/toasts y Analytics de Vercel.
- Middleware de mantenimiento (`middleware.ts`): controla `MAINTENANCE_MODE` y redirige a `/wip` fuera de localhost/previews; se añadió landing WIP dedicada.
- Integración de PostHog (cliente y servidor) con rewrites `/ingest/*` en `next.config.mjs` y proveedor `PostHogProvider`.
- Nuevo endpoint `/api/send` que usa Resend para enviar mensajes del formulario con `FROM_EMAIL`/`TO_EMAIL`.
- i18n movido a `app/i18n/` con recursos ampliados en `en.json` y `es.json`; paths actualizados en `tsconfig.json`.

## Experiencia de usuario
- Home (`app/page.tsx`): hero con video, nueva introducción, carrusel horizontal “Quick Facts” animado con GSAP, divisores visuales y sección de contacto Figma-style.
- The Estate (`app/estate/page.tsx`): hero en video, slider de propiedades filtradas (Cancillería y Griega), bloque de servicios unificados, timeline y carrusel de galería introductoria.
- Location (`app/location/page.tsx`): sección Mapbox interactiva con POIs, cálculo de distancias/tiempos, separadores visuales, distancias destacadas y nueva galería curada.
- Se agregó página `/wip` y página de 404 (`app/not-found.tsx`) con estética consistente.

## Componentes y utilidades
- Navbar nuevo con logo dinámico, estados por scroll, selector de idioma y menú móvil con sheet.
- Nuevos layouts/CTAs: `PageContainer`, `SectionHeader`, `NewFigmaContactSection`, `ContactForm`, `FooterMinimal`, `FloatingContactButton`, `SwipeHint`.
- Secciones nuevas o reescritas: timeline responsiva (desktop/mobile), slider de propiedades, sliders de imágenes, servicios multi-formato, distancias y galerías de ubicación, mapas narrativos.
- Hooks y helpers: `useMediaQuery`, `useCenteredCard`, mejoras en `useGsapAnimation`, utilidades de ubicación (`LocationFunctions`, `ILocationDistance`, `IMobileListItem`), helpers de animación en secciones.

## Estilos y assets
- `app/globals.css` incorpora tipografías Danmark/Inter, tokens de color actualizados y estilos para popups de Mapbox.
- Gran actualización de assets públicos: nuevos logos, videos (home/location/estate), imágenes de quick facts, timeline, sliders, amenities y galerías de location/estate; limpieza de imágenes legacy.

## Scripts y documentación
- `MIGRATION_COMPLETE.md` documenta los pasos de migración `src/ → app/`.
- `fix-imports.js` facilita la corrección masiva de imports al nuevo árbol `app/`.

## Notas y pendientes
- Repositorio contiene artefactos de build (`.next/`, `bun.lockb`); ideal limpiarlos antes del PR final.
- Variables necesarias: `NEXT_PUBLIC_POSTHOG_KEY/HOST`, `NEXT_PUBLIC_MAPBOX_TOKEN`, `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`, `MAINTENANCE_MODE`.
