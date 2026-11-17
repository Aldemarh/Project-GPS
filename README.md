# J&A Tech — Landing de rastreo GPS vehicular

Landing cinematográfica controlada por scroll: un carro realista recorre una ciudad de noche en 3D (Three.js + GSAP ScrollTrigger), seguida de secciones comerciales con fotografía real y un panel de demostración del software.

## Ver en local
Es un solo `index.html` más los recursos de `assets/`. Ábrelo con un servidor estático (no con doble clic: el navegador bloquea la carga del modelo 3D desde `file://`):

```bash
npx serve .
```

Carga GSAP 3.12.5 y Three.js r128 (cdnjs), los complementos de Three.js (jsDelivr) y las fuentes Geist y Geist Mono (Google Fonts).

## Contenido
- `index.html` — la página completa (HTML + CSS + JS, sin build).
- `assets/3d/` — modelo del carro, iluminación HDR, texturas de calle e imagen de respaldo sin WebGL.
- `assets/img/` — fotografías en WebP de las secciones, ya optimizadas.
- `docs/brief.md` — el brief original del proyecto.
- `CLAUDE.md` — contexto y pendientes para continuar con Claude Code.

## Secciones
Película 3D de cinco escenas que avanza con el scroll (inicio, tiempo real, control, alertas, flota) · Funcionalidades · Experiencia del software (panel interactivo de demostración) · Cómo funciona · Beneficios · Soluciones y preguntas frecuentes · Contacto · Pie.

## Configurar
En `index.html`, busca `var CFG=` y cambia el WhatsApp y el mensaje. El correo y la ciudad/horario están en la sección `#contacto` y en el pie. Los enlaces de Instagram y Facebook del pie (`data-social`) todavía apuntan a `#`.

## Recursos 3D
| Archivo | Origen | Licencia |
|---|---|---|
| `assets/3d/car.glb` | «Car Concept», © 2024 Darmstadt Graphics Group GmbH (Eric Chadwick), adaptado (sin texturas, sin interior, menos polígonos) | CC BY 4.0: la atribución debe quedar en el pie |
| `assets/3d/city-night.hdr` | Poly Haven, «hansaplatz»; la mitad inferior se reemplazó por asfalto mojado | CC0 |
| `assets/3d/asphalt*.jpg`, `pavers*.jpg` | Poly Haven, «clean_asphalt» y «concrete_pavers» (en `*-nr.jpg`: normal en R/G y rugosidad en B) | CC0 |

## Mapa del panel
- Librería: [Leaflet](https://leafletjs.com) 1.9.4 (BSD-2), cargada desde cdnjs; su CSS va incrustado en `index.html`.
- Capas: OpenStreetMap (© colaboradores de OpenStreetMap, ODbL) y Esri World Imagery con las capas de referencia de transporte y lugares (© Esri y sus proveedores). La atribución se muestra en el mapa y no se debe quitar.
- Rutas: calles reales de Montería calculadas con [OSRM](https://project-osrm.org) sobre datos de OpenStreetMap y guardadas en la variable `GEO` de `index.html`.
- Uso: el servidor de mosaicos de OpenStreetMap es para tráfico bajo. Para un sitio con muchas visitas conviene un proveedor con clave.

## Fotografías
Vienen de [Unsplash](https://unsplash.com/license) y [Pexels](https://www.pexels.com/license/), ambas con licencia de uso comercial gratuito, sin atribución obligatoria.

Unsplash: el identificador de cada una es el final de su URL `https://unsplash.com/photos/<id>`:

| Archivo | Uso | Foto en Unsplash |
|---|---|---|
| `night.webp` | Seguridad vehicular | `photo-1609521263047-f8f205293f24` |
| `street.webp` | Beneficios | `photo-1493238792000-8113da705763` |
| `sedan.webp` | Particulares | `photo-1619767886558-efdc259cde1a` |
| `city.webp` | Contacto | `photo-1444723121867-7a241cacace9` |

Pexels (motos; el énfasis del sitio es carro y moto, no carga pesada): la foto está en `https://www.pexels.com/photo/<id>/`:

| Archivo | Uso | Foto en Pexels |
|---|---|---|
| `moto-ride.webp` | Control de flotas | `5458449` |
| `moto-night.webp` | Cómo funciona | `18541724` |
| `motos.webp` | Empresas y flotas | `11292415` |

En algunas se ven marcas y placas de los vehículos fotografiados. Si la página se usa en publicidad paga, conviene reemplazarlas por fotos propias de la empresa.
