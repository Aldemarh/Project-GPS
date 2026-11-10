# J&A Tech — Landing de rastreo GPS vehicular

Landing page cinematográfica controlada por scroll (GSAP ScrollTrigger + Three.js).

## Ver en local
Es un solo `index.html`. Ábrelo con cualquier servidor estático:

```bash
npx serve .
```

Carga GSAP, Three.js r128, GLTFLoader y las fuentes Barlow desde CDN (cdnjs, jsDelivr, Google Fonts).

## Contenido
- `index.html` — la página completa (HTML + CSS + JS). Incluye el modelo del carro incrustado en base64 (`<script id="car-glb">`).
- `assets/car.glb` — el mismo modelo, ya aligerado, por si se quiere cargar como archivo.
- `tools/` — scripts para aligerar/inspeccionar un `.glb` (`node proc.mjs <ratio>`).
- `docs/brief.md` — el brief original del proyecto.
- `CLAUDE.md` — contexto y pendientes para continuar con Claude Code.

## Configurar
En `index.html`, busca `var CFG=` y cambia el WhatsApp y el mensaje. El correo y la ciudad/horario están en la sección `#contacto`.

## Créditos
Modelo 3D del carro: «Car Concept», © 2024 Darmstadt Graphics Group GmbH (Eric Chadwick), licencia CC BY 4.0, adaptado (sin texturas, sin interior, menos polígonos). La atribución debe mantenerse en el pie de página.
