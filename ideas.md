# Ideas de Diseño — El Globo Link-in-Bio

## Tres enfoques estilísticos

### Opción A — "Pizarrón Mágico"
Estética de tiza sobre pizarrón oscuro, con tipografía manuscrita y elementos dibujados a mano. Evoca el aula de teatro y la creatividad infantil.
**Probabilidad:** 0.04

### Opción B — "Globo de Colores"
Diseño vibrante y lúdico con formas orgánicas, colores saturados (violeta, naranja, amarillo) y tipografía redondeada. Energía de juego y arte.
**Probabilidad:** 0.07

### Opción C — "Acuarela Cálida"
Fondos con textura de papel acuarela, paleta suave (crema, lavanda, durazno), tipografía serif expresiva. Sensación artesanal y acogedora.
**Probabilidad:** 0.03

---

## Enfoque elegido: **Opción B — "Globo de Colores"**

### Design Movement
Neo-Playful Branding — inspirado en la identidad visual de estudios creativos para infancias (Pentagram x Sesame Street, Superflux). Formas orgánicas, color como protagonista, tipografía con carácter.

### Core Principles
1. **Color como emoción**: cada ciudad tiene su propia temperatura de color dentro de la misma paleta.
2. **Formas vivas**: bordes ondulados, blobs y círculos que evocan globos y movimiento.
3. **Jerarquía clara**: el selector de ciudad es el protagonista absoluto de la pantalla.
4. **Mobile-first radical**: pensado para ser visto desde el celular, como toda página link-in-bio.

### Color Philosophy
- **Violeta profundo** `oklch(0.42 0.18 295)` — color firma de la marca, usado en header y acentos.
- **Naranja cálido** `oklch(0.72 0.18 50)` — energía, acción, Buenos Aires.
- **Verde pizarra** `oklch(0.55 0.12 165)` — naturaleza, Bariloche, montaña.
- **Crema suave** `oklch(0.97 0.02 85)` — fondo, calidez, papel.
- **Amarillo sol** `oklch(0.88 0.15 90)` — detalles decorativos, destellos.

### Layout Paradigm
Pantalla única vertical, centrada en mobile. El selector de ciudad ocupa el 40% superior con dos tarjetas grandes tipo "elige tu aventura". Al seleccionar, el contenido de links se despliega con animación suave hacia abajo. Sin scroll innecesario.

### Signature Elements
1. **Globo SVG animado** en el header — flota suavemente con keyframe.
2. **Tarjetas con borde ondulado** (SVG clip-path) para los botones de ciudad.
3. **Fondo con manchas de acuarela** generadas como imagen de fondo.

### Interaction Philosophy
Seleccionar ciudad = transición suave con fade + slide. Los botones de acción tienen micro-animación de escala al presionar. Todo se siente táctil y responsivo.

### Animation
- Header globe: `translateY(-6px)` loop de 3s ease-in-out.
- City cards: hover `scale(1.03)` 200ms ease-out.
- Links reveal: stagger 80ms por ítem, fade + translateY(12px→0).
- Button press: `scale(0.96)` 150ms.

### Typography System
- **Display**: `Fredoka` (Google Fonts) — redondeada, amigable, con carácter propio.
- **Body**: `DM Sans` — legible, moderna, sin ser genérica.
- Jerarquía: título 2.5rem bold, subtítulos 1.1rem medium, botones 1rem semibold.

### Brand Essence
*El espacio donde los chicos descubren el inglés jugando — para familias que eligen aprender diferente.*
Personalidad: **Cálido · Creativo · Confiable**

### Brand Voice
Directo, cercano, sin tecnicismos. Habla como una maestra que también es amiga.
- "Elegí tu ciudad y conectate con nosotros"
- "¿Querés saber más? Escribinos, te contamos todo."

### Wordmark & Logo
Un globo terráqueo estilizado con una letra "G" integrada, en violeta sobre fondo transparente.

### Signature Brand Color
**Violeta profundo** `oklch(0.42 0.18 295)` — inconfundiblemente El Globo.
