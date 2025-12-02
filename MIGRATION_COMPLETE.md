# Migración Completada: src/ → app/

## ✅ Archivos Migrados

### 1. **app/lib/**
- ✅ `utils.ts` - Utilidades (cn function)
- ✅ `posthog.ts` - Cliente PostHog para servidor

### 2. **app/hooks/**
- ✅ `useGsapAnimation.ts` - Hooks de animación GSAP
- ✅ `use-toast.ts` - Hook de toast notifications
- ✅ `use-mobile.tsx` - Hook para detectar mobile

### 3. **app/i18n/**
- ✅ `config.ts` - Configuración de i18next
- ✅ `locales/en.json` - Traducciones en inglés
- ✅ `locales/es.json` - Traducciones en español

### 4. **app/assets/** (PENDIENTE - Copiar manualmente)
Las siguientes imágenes necesitan ser copiadas manualmente desde `src/assets/` a `app/assets/`:

```bash
# Ejecuta este comando en tu terminal:
cp -r src/assets/* app/assets/
```

O manualmente copia estos archivos:
- `staff-chef.jpg`
- `staff-driver.jpg`
- `staff-massage.jpg`
- `staff-nanny.jpg`
- `staff-yoga.jpg`

## ✅ Imports Actualizados

Todos los imports han sido actualizados de `@/src/...` a `@/app/...`:
- ✅ `@/src/lib/utils` → `@/app/lib/utils`
- ✅ `@/src/hooks/...` → `@/app/hooks/...`
- ✅ `@/src/assets/...` → `@/app/assets/...`
- ✅ `@/i18n/config` → `@/app/i18n/config`

## ✅ tsconfig.json Actualizado

Los paths ahora apuntan a `app/`:
- `@/lib/*` → `./app/lib/*`
- `@/hooks/*` → `./app/hooks/*`
- `@/i18n/*` → `./app/i18n/*`

## 📋 Próximos Pasos

1. **Copiar las imágenes de assets:**
   ```bash
   cp -r src/assets/* app/assets/
   ```

2. **Verificar que todo funciona:**
   ```bash
   npm run dev
   ```

3. **Si todo funciona correctamente, puedes eliminar `src/`:**
   ```bash
   # Primero verifica que no hay errores
   npm run build
   
   # Si el build es exitoso, puedes eliminar src/
   rm -rf src/
   ```

## ⚠️ Archivos que NO se migraron (no se usan)

Estos archivos en `src/` NO se están usando y pueden eliminarse:
- `src/pages/` - Ya migrado a `app/`
- `src/App.tsx` - Ya migrado a `app/layout.tsx`
- `src/App.css` - No se usa
- `src/index.css` - Ya migrado a `app/globals.css`
- `src/main.tsx` - Ya eliminado (era entrypoint de Vite)
- `src/vite-env.d.ts` - No se usa en Next.js

## ✅ Estado Final

- ✅ Todos los imports actualizados
- ✅ Sin errores de linter
- ✅ Estructura lista para eliminar `src/`
- ⚠️ Solo falta copiar las imágenes de `src/assets/` a `app/assets/`

