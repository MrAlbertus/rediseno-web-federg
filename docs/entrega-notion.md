# Rediseño web FEDERG – proyecto de formación

> **Training project – not the official FEDERG website.** Ejercicio de aprendizaje: no tiene relación con la asociación ni sustituye a https://federg.org/. Todo el contenido es de ejemplo y las historias de pacientes son ficticias.

## Links

- **Web publicada:** https://fastidious-pony-0a539b.netlify.app
- Páginas para revisar:
  - Home: https://fastidious-pony-0a539b.netlify.app/
  - About: https://fastidious-pony-0a539b.netlify.app/about/
  - News & Events: https://fastidious-pony-0a539b.netlify.app/news/
  - Patient Stories: https://fastidious-pony-0a539b.netlify.app/patient-stories/
  - Contact (formulario de demostración, no envía nada): https://fastidious-pony-0a539b.netlify.app/contact/
  - Buscador: https://fastidious-pony-0a539b.netlify.app/search/?q=dialysis
- Consejo: probadla también en el móvil y abrid el menú (☰).

## Qué hemos hecho

1. **Análisis de la web actual (WordPress).** La home carga 86 recursos: 39 scripts y 27 hojas de estilo (jQuery, Bootstrap, sliders, varios packs de iconos, Google Maps sin mapa visible…). También había problemas de contenido y accesibilidad: un `h2` antes del `h1`, imágenes sin texto alternativo, fechas de eventos incorrectas y erratas.
2. **Nueva web con Astro.** HTML estático y casi nada de JavaScript (solo el menú, las animaciones al hacer scroll y el buscador).
3. **Hero** adaptado de una plantilla de referencia: dos columnas, tarjeta de vídeo con marcadores, menú lateral con desenfoque, animaciones escalonadas y versión móvil a pantalla completa.
4. **Resto de la web:** home completa y 25 páginas (About, Members, Governance, Collaborations, News & Events, eventos, Member activities, Representations, Patient Stories, Contact, Search y 404).
5. **Contenido en Markdown:** cada noticia, evento o historia es un fichero de texto. Si falta un dato, la web no se publica y el error dice en qué fichero está.
6. **Buscador estático** con Pagefind, sin servidor ni base de datos.
7. **Pulido:** responsive (320 px → 1440 px sin scroll horizontal), accesibilidad (teclado, contraste AA, foco visible, reduced motion) y rendimiento.
8. **Publicación en Netlify** (plan gratuito).

## Identidad conservada

- Logo SVG original, sin redibujar.
- Naranja `#FF6400` (acentos), azul marino `#1F1F3F` (texto y fondos) y azul de la bandera europea del logo `#233E90` (color secundario).
- El blanco sobre naranja no llega al contraste AA (2,97:1), así que el naranja se usa solo en acentos y en fondos grandes con texto azul marino (5,3:1).

## Resultados de Lighthouse (nueva web)

Medido en 8 páginas, en móvil y en escritorio:

| Categoría | Móvil | Escritorio |
| --- | --- | --- |
| Rendimiento | 100 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 63* | 63* |

\* El SEO baja **a propósito**: todas las páginas llevan `noindex` para que Google nunca muestre esta web como la oficial de FEDERG. Sin `noindex`, el SEO da 100.

Tiempo hasta ver el contenido principal (LCP): 1,2–1,4 s en móvil y 0,3 s en escritorio.

## Decisiones principales

- **Astro** frente a Next.js (pensado para aplicaciones, mete JavaScript que esta web no necesita), Hugo (plantillas más difíciles) y Eleventy (sin componentes con estilos propios de serie).
- **Markdown** en lugar de un CMS. Es gratis y no necesita servidor ni login. Si más adelante editara gente no técnica, se podría añadir Decap CMS encima de los mismos ficheros.
- **Netlify** en lugar de Cloudflare Pages. Cloudflare ha movido Pages dentro de Workers y nos costó encontrarlo; Netlify permite publicar arrastrando una carpeta.
- **`noindex`** en las páginas y en las cabeceras del servidor, para no suplantar la web oficial.

## Limitaciones conocidas

- El vídeo del hero es un fondo provisional (degradado de marca con estrellas). Está preparado para cambiarlo por un vídeo propio en un único fichero de configuración.
- El formulario de contacto es solo visual: no envía datos.
- Las asociaciones miembro, los eventos y el correo de contacto son de ejemplo.
- Los eventos pasan de "próximos" a "pasados" cuando se vuelve a publicar la web.

## Nuestros comentarios

*(Para rellenar por el equipo)*

- ¿Qué parte nos ha resultado más útil para aprender?
- ¿Qué fue lo más difícil y cómo lo resolvimos?
- ¿Qué cambiaríamos del diseño o del contenido?
- ¿Qué haríamos distinto si empezáramos de nuevo?

## Feedback

*(Espacio para comentarios de Jose)*
