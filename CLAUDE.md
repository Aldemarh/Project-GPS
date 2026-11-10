# Contexto para Claude Code

Proyecto: landing comercial de **J&A TECH** (rastreo y monitoreo GPS vehicular). Dueño: Juan. Idioma de la página y de la conversación: español (Colombia).

## Estado actual
- Un solo `index.html` funcional, sin build. Tecnologías: Three.js r128 (global `THREE`), GSAP 3.12.5 + ScrollTrigger, CSS propio.
- La película del hero (escenas 1–5) es una sección `#film` de 780vh con un escenario `position: sticky`. Todo el avance lo controla UN timeline con `scrub` (`st` = estado de cámara/vehículo; `tl` en `gsap.matchMedia`). No hay animaciones por tiempo salvo la entrada del hero.
- Escena 3D: suelo con shader (asfalto, marcas viales, andenes; el "mapa digital" aparece según la elevación de cámara con `uMap`), edificios instanciados con shader de fachadas (ventanas, locales), postes de luz, cielo, ruta con trazo, vehículo `.glb` (con respaldo de vehículo básico si falla la carga).
- Secciones después de la película: `#senal` (señal satélite→celular, pinned), `#soluciones`, `#dia` (reloj de 24 h, pinned), `#prueba` (simulador interactivo), `#servicio`, `#preguntas`, `#contacto`, `#cta` (plano final con el carro por detrás) y pie.
- Móvil (≤820px): composición y efectos reducidos. `prefers-reduced-motion`: modo estático sin película.
- Datos mostrados (velocidad, coordenadas, historial) son **demostrativos** y así se rotulan.

## Pendientes (por prioridad)
1. **Datos reales de contacto:** WhatsApp (`CFG.wa`, hoy `573000000000`), correo (`contacto@tuempresa.co`), ciudad y horario (`[Ciudad y horario de atención]`).
2. **Selector Carro / Moto:** el cliente debe poder elegir qué vehículo ver en todas las escenas. Falta el modelo de la moto: `.glb` realista, ≤15 MB, licencia que permita uso comercial (CC0 o CC BY). Usar `tools/proc.mjs` para aligerarlo. En el código, el carro se carga en el bloque «vehículo detallado» de `initThree()`; hay que generalizarlo (cargar ambos, alternar visibilidad, ajustar escala/ruedas/cámara).
3. **Realismo de la ciudad:** hoy los edificios son procedurales (se ven como calle de noche, no como foto). Para más realismo: modelo `.glb` de ciudad o fotos/HDRI de cielo. Evaluar costo de rendimiento en móvil.
4. **Probar en celulares reales** (gama media/baja): no se midió FPS con GPU real. Si va pesado: bajar `setPixelRatio`, cantidad de edificios (`bi0..bj1`) o postes.
5. Escena de alertas: un poste puede cruzarse delante del carro en algunos puntos del scroll.
6. **Migración opcional** a Next.js + TypeScript + Tailwind (stack preferido del brief). Conservar la lógica del timeline y los shaders; separar en componentes (`SceneCanvas`, `Film`, `Senal`, `Dia`, `Simulador`, etc.), usar `next/image` y cargar Three.js de forma diferida.
7. SEO: añadir `og:image`, favicon real (hoy no hay archivo), `sitemap`/`robots` si se migra, y datos estructurados (LocalBusiness).
8. Formulario: hoy abre WhatsApp con el mensaje armado; no guarda en servidor. Decidir si se necesita backend/correo.

## Reglas del proyecto
- No presentar datos de demostración como GPS real.
- Mantener la atribución del modelo 3D en el pie de página (CC BY 4.0).
- Probar siempre scroll hacia adelante y hacia atrás; ninguna animación debe depender del tiempo.
- Respetar `prefers-reduced-motion` y evitar saltos de layout.
