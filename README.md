# El Globo — Link-in-Bio

Una página web moderna y responsiva tipo **link-in-bio** para El Globo, un espacio de teatro e inglés para niños con sedes en Buenos Aires y Bariloche.

## 🎨 Características

- **Selector de ciudad interactivo**: Los usuarios eligen entre Buenos Aires o Bariloche
- **Links contextuales**: Cada ciudad muestra sus propios canales de contacto
- **Diseño "Globo de Colores"**: Estética neo-playful con ilustraciones acuarela generadas
- **Animaciones suaves**: Transiciones fluidas y micro-interacciones
- **Mobile-first**: Optimizado para celular (donde se usan las link-in-bio)
- **Paleta de colores distintiva**: Violeta firma, naranja para Buenos Aires, verde para Bariloche

## 🚀 Stack Técnico

- **React 19** con TypeScript
- **Tailwind CSS 4** para estilos
- **Wouter** para enrutamiento client-side
- **Vite** como bundler
- **shadcn/ui** para componentes base

## 📁 Estructura del Proyecto

```
elglobo-linkinbio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          ← Página principal (selector + links)
│   │   │   └── NotFound.tsx
│   │   ├── components/           ← Componentes reutilizables
│   │   ├── App.tsx               ← Rutas y layout
│   │   ├── main.tsx              ← Entry point
│   │   └── index.css             ← Estilos globales y tokens
│   ├── public/                   ← Archivos estáticos
│   └── index.html
├── server/                       ← Placeholder (no se usa en static)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Cómo Hacer Cambios Comunes

### 1. Cambiar los Links

Abre `client/src/pages/Home.tsx` y busca la sección `const cities = { ... }`:

```typescript
const cities = {
  baires: {
    links: [
      {
        id: "ig",
        label: "Seguinos en Instagram",
        sublabel: "@elglobo.teatroeingles",
        href: "https://www.instagram.com/elglobo.teatroeingles",  // ← Cambiar acá
        bg: "oklch(0.72 0.18 50)",
        fg: "#fff",
      },
      // ... más links
    ]
  }
}
```

### 2. Cambiar Colores

Los colores están definidos en `client/src/index.css` en la sección `:root`:

```css
:root {
  --color-brand-violet: oklch(0.42 0.18 295);      /* Color firma */
  --color-brand-orange: oklch(0.72 0.18 50);       /* Buenos Aires */
  --color-brand-green: oklch(0.52 0.12 165);       /* Bariloche */
  --color-brand-yellow: oklch(0.88 0.15 90);       /* Acentos */
  --color-brand-cream: oklch(0.97 0.02 85);        /* Fondo */
}
```

Usa el formato OKLCH (más intuitivo que RGB/HEX). Podés probar colores en [oklch.com](https://oklch.com).

### 3. Cambiar Textos

En `Home.tsx`, busca los strings que quieras cambiar:

```typescript
<h1 className="text-4xl font-bold">El Globo</h1>  {/* ← Cambiar acá */}
<p>Teatro e Inglés para niños</p>                  {/* ← O acá */}
```

### 4. Cambiar Imágenes

Las imágenes están referenciadas al inicio de `Home.tsx`:

```typescript
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/...";
const BAIRES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/...";
```

Reemplazá las URLs con tus propias imágenes.

### 5. Agregar una Nueva Ciudad

En `Home.tsx`, agrega una entrada en el objeto `cities`:

```typescript
const cities = {
  baires: { /* ... */ },
  brc: { /* ... */ },
  nuevaCiudad: {
    label: "Nueva Ciudad",
    emoji: "🌆",
    tagline: "Ubicación",
    accentColor: "oklch(0.72 0.18 50)",
    image: "https://...",
    links: [
      // Links aquí
    ]
  }
}
```

Luego agrega el botón en la sección de selector:

```typescript
<CityCard city="nuevaCiudad" data={cities.nuevaCiudad} onSelect={setSelectedCity} delay={260} />
```

## 🛠️ Desarrollo Local

### Requisitos

- Node.js 18+ 
- pnpm (o npm/yarn)

### Instalación

```bash
# Clonar el repo
git clone https://github.com/arizlaura/elglobo-linkinbio.git
cd elglobo-linkinbio

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

La página estará disponible en `http://localhost:5173`

### Build para Producción

```bash
pnpm build
```

Genera los archivos optimizados en `dist/`.

## 📱 Responsive Design

La página está optimizada para:

- **Mobile** (390px): Pantalla principal
- **Tablet** (768px): Layout adaptado
- **Desktop** (1024px+): Centrado con max-width

Todos los breakpoints usan Tailwind CSS estándar.

## 🎨 Paleta de Colores

| Color | OKLCH | Uso |
|-------|-------|-----|
| Violeta | `oklch(0.42 0.18 295)` | Firma de marca, header, acentos |
| Naranja | `oklch(0.72 0.18 50)` | Buenos Aires, botones |
| Verde | `oklch(0.52 0.12 165)` | Bariloche, botones |
| Amarillo | `oklch(0.88 0.15 90)` | Detalles decorativos |
| Crema | `oklch(0.97 0.02 85)` | Fondo principal |

## ⚡ Animaciones

Las animaciones están definidas en `index.css`:

- `animate-float-globe`: Logo flotante (3.5s)
- `animate-fade-slide-up`: Fade + slide up (0.35s)
- `animate-scale-in`: Scale in (0.3s)
- `animate-pulse-soft`: Pulse suave (2s)

Para deshabilitar animaciones, edita `@media (prefers-reduced-motion: reduce)`.

## 🔗 URLs Importantes

- **Página en vivo**: [elglobo-bio-sxuqtgvq.manus.space](https://elglobo-bio-sxuqtgvq.manus.space)
- **Instagram Buenos Aires**: [@elglobo.teatroeingles](https://instagram.com/elglobo.teatroeingles)
- **Instagram Bariloche**: [@elglobo.brc](https://instagram.com/elglobo.brc)

## 📝 Licencia

MIT — Libre para usar y modificar.

## 🤝 Contribuciones

Si querés mejorar la página, hacé un fork y abrí un pull request.

---

**Creado con ❤️ para El Globo — Teatro e Inglés**
