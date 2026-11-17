# Contexto para Claude Code

Proyecto: landing comercial de **J&A TECH** (rastreo y monitoreo GPS vehicular). Dueño: Juan. Idioma de la página y de la conversación: español (Colombia).

## Estado actual
- Un solo `index.html`, sin build. Tecnologías: Three.js r128 (global `THREE`, con GLTFLoader, RGBELoader y postproducción de `examples/js`), GSAP 3.12.5 + ScrollTrigger y CSS propio. Fuentes: Geist y Geist Mono.
- **El cliente quiere la landing cinematográfica del principio: el carro recorre la ciudad mientras se hace scroll.** No convertirla en una página estática ni reemplazar la escena 3D por fotos. Sí pidió que todo se vea realista: nada de vehículos caricaturescos, edificios planos ni emojis.
- Película (`#film`, 780vh): escenario `position: sticky` sobre un `<canvas id="gl">` fijo. Un solo timeline de GSAP con `scrub` mueve el estado `st` (avance del carro, cámara, mapa, alertas) y muestra los textos (`.sc-t`) y paneles (`.sc-p`) de cada escena. Avanza y retrocede con el scroll; nada depende del tiempo salvo la entrada del inicio.
- Escenas: 1 inicio (la cámara rodea el carro), 2 tiempo real (la calle se vuelve mapa, ruta y marcador), 3 panel de control (vista alta), 4 alertas (de vuelta al carro, zona segura), 5 flota (vista alta con otros vehículos).
- Realismo de la escena 3D (`initThree()`):
  - Iluminación y reflejos: `assets/3d/city-night.hdr`, una foto HDR real de una calle de noche (Poly Haven «hansaplatz», CC0). La mitad inferior se reemplazó por asfalto mojado (reflejo atenuado de la ciudad) para que la carrocería refleje un piso de noche, no una plaza iluminada.
  - Calle: shader propio con texturas reales de asfalto y adoquín (`assets/3d/asphalt*.jpg`, `pavers*.jpg`, Poly Haven, CC0), charcos, y reflejo plano de la escena (carro, faroles, ventanas) con fresnel. Al subir la cámara se convierte en el mapa digital (`uMap`).
  - Carro: `assets/3d/car.glb` («Car Concept», CC BY 4.0) con pintura metalizada con barniz, vidrio, cromo y llantas físicamente plausibles; interior negro para tapar uniones. Ruedas que giran según la distancia y doblan en las curvas (trabajo de Aldemar).
  - Ciudad: edificios instanciados con fachadas de concreto, ladrillo y vidrio; las ventanas reflejan el HDR y algunas tienen luz interior. Carros estacionados (copias instanciadas del mismo modelo) y alumbrado público.
  - Postproducción: profundidad de campo (`BokehPass`), brillo de luces (`UnrealBloomPass`), viñeta, grano y leve aberración cromática.
- Calidad adaptativa: si los cuadros tardan más de ~42 ms se apagan en orden la profundidad de campo, el reflejo, la resolución alta y el brillo. En celular no hay profundidad de campo y el reflejo va a menor resolución. Sin WebGL se muestra `assets/3d/poster.webp`.
- Después de la película: `#funciones` (seis tarjetas con fotos), `#software` (panel web de demostración interactivo), `#como` (tres pasos), `#beneficios`, `#soluciones` (incluye `#preguntas`), `#contacto` (WhatsApp + formulario) y pie. Fotos en `assets/img/` (Unsplash).
- Panel de demostración (`#dash`): se dibuja a tamaño fijo y se escala con `transform`. Los botones «Crear zona segura», «Simular exceso de velocidad» y «Mostrar recorrido» actúan sobre ese panel.
- Con `prefers-reduced-motion` o sin GSAP no hay película: se ve una sola imagen fija de la escena detrás del inicio y las demás escenas quedan apiladas.
- Los datos mostrados (velocidad, placas, direcciones, alertas) son **demostrativos** y así se rotulan.

## Pendientes (por prioridad)
1. **Datos reales de contacto:** WhatsApp (`CFG.wa`, hoy `573000000000`), correo (`contacto@tuempresa.co`), ciudad y horario (`[Ciudad y horario de atención]`), enlaces de Instagram y Facebook (`data-social`, hoy `#`) y la dirección de la plataforma que se ve en el panel (`app.tuempresa.co`).
2. **Fotos propias:** las actuales son de Unsplash (ver `README.md`). Reemplazarlas por fotos de vehículos, instalaciones y equipo de la empresa cuando existan.
3. **Capturas reales del software:** cuando la plataforma esté lista, sustituir o complementar el panel de demostración con capturas reales.
4. **Probar en celulares reales** de gama media y baja (la escena 3D es lo más pesado; revisar que la calidad adaptativa responda).
5. SEO: añadir `og:image`, favicon, `sitemap`/`robots` y datos estructurados (LocalBusiness).
6. Formulario: hoy abre WhatsApp con el mensaje armado; no guarda en servidor. Decidir si se necesita backend o correo.
7. Migración opcional a Next.js + TypeScript + Tailwind (stack preferido del brief).

## Reglas del proyecto
- No presentar datos de demostración como GPS real.
- No afirmar cifras ni funciones que la empresa no haya confirmado (clientes, cobertura, apagado remoto, etc.).
- Mantener en el pie la atribución del modelo 3D (CC BY 4.0).
- Probar siempre el scroll hacia adelante y hacia atrás; la película no debe depender del tiempo.
- Respetar `prefers-reduced-motion` y evitar saltos de layout.
- Revisar siempre escritorio, tableta y celular antes de subir cambios.
