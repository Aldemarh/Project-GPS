# J&A Tech — Landing de rastreo GPS vehicular

Landing cinematográfica controlada por scroll, con fotografía real y un panel de demostración del software (GSAP + ScrollTrigger).

## Ver en local
Es un solo `index.html` más las fotos de `assets/img/`. Ábrelo con cualquier servidor estático:

```bash
npx serve .
```

Carga GSAP 3.12.5 (cdnjs) y las fuentes Geist y Geist Mono (Google Fonts).

## Contenido
- `index.html` — la página completa (HTML + CSS + JS, sin build).
- `assets/img/` — fotografías en WebP, ya optimizadas.
- `docs/brief.md` — el brief original del proyecto.
- `CLAUDE.md` — contexto y pendientes para continuar con Claude Code.

## Secciones
Película de cinco escenas que avanza con el scroll (inicio, tiempo real, control, alertas, flota) · Funcionalidades · Experiencia del software (panel interactivo de demostración) · Cómo funciona · Beneficios · Soluciones y preguntas frecuentes · Contacto · Pie.

## Configurar
En `index.html`, busca `var CFG=` y cambia el WhatsApp y el mensaje. El correo y la ciudad/horario están en la sección `#contacto` y en el pie. Los enlaces de Instagram y Facebook del pie (`data-social`) todavía apuntan a `#`.

## Fotografías
Vienen de [Unsplash](https://unsplash.com/license) y [Pexels](https://www.pexels.com/license/), ambas con licencia de uso comercial gratuito, sin atribución obligatoria.

Unsplash: el identificador de cada una es el final de su URL `https://unsplash.com/photos/<id>`:

| Archivo | Uso | Foto en Unsplash |
|---|---|---|
| `hero.webp`, `hero-m.webp` | Inicio | `photo-1503376780353-7e6692767b70` |
| `suv.webp` | Escena 3 (control) | `photo-1617469767053-d3b523a0b982` |
| `night.webp` | Escena 4 (alertas), Seguridad vehicular | `photo-1609521263047-f8f205293f24` |
| `aerial.webp` | Escena 5 (flota) | `photo-1465447142348-e9952c393450` |
| `road.webp` | Escena 2 (tiempo real) |
| `street.webp` | Beneficios | `photo-1493238792000-8113da705763` | `photo-1568605117036-5fe5e7bab0b7` |
| `sedan.webp` | Particulares | `photo-1619767886558-efdc259cde1a` |
| `city.webp` | Contacto | `photo-1444723121867-7a241cacace9` |

Pexels (motos; el énfasis del sitio es carro y moto, no carga pesada): la foto está en `https://www.pexels.com/photo/<id>/`:

| Archivo | Uso | Foto en Pexels |
|---|---|---|
| `moto-ride.webp` | Control de flotas | `5458449` |
| `moto-night.webp` | Cómo funciona | `18541724` |
| `motos.webp` | Empresas y flotas | `11292415` |

En algunas se ven marcas y placas de los vehículos fotografiados. Si la página se usa en publicidad paga, conviene reemplazarlas por fotos propias de la empresa.
