# Contexto para Claude Code

Proyecto: landing comercial de **J&A TECH** (rastreo y monitoreo GPS vehicular). Dueño: Juan. Idioma de la página y de la conversación: español (Colombia).

## Estado actual
- Un solo `index.html`, sin build. Tecnologías: GSAP 3.12.5 + ScrollTrigger y CSS propio. Fuentes: Geist y Geist Mono.
- Estilo: fotografía real (carpeta `assets/img/`, WebP), fondo grafito con secciones claras intercaladas, acento azul `--blue`, verde para «en línea» y ámbar para alertas. **No** usar modelos 3D, edificios ni vehículos dibujados, ni emojis: el cliente los rechazó.
- Secciones: `#inicio` (hero con foto), `#plataforma`, `#funciones` (seis tarjetas), `#software` (panel web de demostración), `#como` (tres pasos), `#beneficios`, `#soluciones` (incluye `#preguntas`), `#contacto` (WhatsApp + formulario) y pie.
- Mapa: es un dibujo vectorial propio, definido una sola vez en `<g id="map">` y reutilizado con `<use href="#map">` dentro de un grupo girado `rotate(-14 600 400)`. Las rutas usan las coordenadas de las calles principales (x: 116, 320, 514, 750, 928; y: 81, 207, 337, 522, 661).
- Panel de demostración (`#dash`): se dibuja a tamaño fijo y se escala con `transform` para que se vea como una captura. Los vehículos se mueven con `requestAnimationFrame` solo mientras el panel está en pantalla. Los botones «Crear zona segura», «Simular exceso de velocidad» y «Mostrar recorrido» actúan sobre ese panel.
- Animaciones: aparición al hacer scroll (`data-rv`), entrada del hero (`data-in`), parallax suave en fotos (`data-px`) y rutas que se dibujan (`data-route`). Con `prefers-reduced-motion` o sin GSAP todo el contenido queda visible y sin movimiento.
- Los datos mostrados (velocidad, placas, direcciones, alertas) son **demostrativos** y así se rotulan.

## Pendientes (por prioridad)
1. **Datos reales de contacto:** WhatsApp (`CFG.wa`, hoy `573000000000`), correo (`contacto@tuempresa.co`), ciudad y horario (`[Ciudad y horario de atención]`), enlaces de Instagram y Facebook (`data-social`, hoy `#`) y la dirección de la plataforma que se ve en el panel (`app.tuempresa.co`).
2. **Fotos propias:** las actuales son de Unsplash (ver `README.md`). Reemplazarlas por fotos de vehículos, instalaciones y equipo de la empresa cuando existan.
3. **Capturas reales del software:** cuando la plataforma esté lista, sustituir o complementar el panel de demostración con capturas reales.
4. **Probar en celulares reales** de gama media y baja.
5. SEO: añadir `og:image`, favicon, `sitemap`/`robots` y datos estructurados (LocalBusiness).
6. Formulario: hoy abre WhatsApp con el mensaje armado; no guarda en servidor. Decidir si se necesita backend o correo.
7. Migración opcional a Next.js + TypeScript + Tailwind (stack preferido del brief).

## Reglas del proyecto
- No presentar datos de demostración como GPS real.
- No afirmar cifras ni funciones que la empresa no haya confirmado (clientes, cobertura, apagado remoto, etc.).
- Respetar `prefers-reduced-motion` y evitar saltos de layout.
- Revisar siempre escritorio, tableta y celular antes de subir cambios.
