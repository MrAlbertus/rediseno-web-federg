# FEDERG – rediseño (proyecto de formación)

> **Training project – not the official FEDERG website.**
> Ejercicio de aprendizaje. No tiene relación con la asociación ni sustituye a su web oficial (https://federg.org/).
> Todo el contenido es de ejemplo y las historias de pacientes son ficticias.

Rediseño de la web de FEDERG como sitio estático: moderno, rápido y accesible, conservando el logo y los colores corporativos.

- **Web publicada:** https://fastidious-pony-0a539b.netlify.app
- **Stack:** [Astro](https://astro.build/) · contenido en Markdown (content collections) · búsqueda estática con [Pagefind](https://pagefind.app/) · Plus Jakarta Sans autoalojada (@fontsource)
- **Lighthouse (móvil y escritorio, 8 páginas):** Rendimiento 100 · Accesibilidad 100 · Buenas prácticas 100 · SEO 63*

\* El SEO baja solo porque las páginas llevan `noindex` a propósito, para que los buscadores nunca las muestren como la web oficial. Compilando sin `noindex` (`INDEXABLE=true npm run build`), el SEO da 100.

## Cómo arrancarlo

Requisitos: Node.js 22 o superior.

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera la web en dist/ y el índice de búsqueda
npm run preview    # sirve dist/ (aquí funciona el buscador)
npm run lighthouse # mide Lighthouse contra el preview (ver scripts/lighthouse.mjs)
```

## Estructura

```
docs/hero-reference.md     Especificación original de la plantilla del hero
public/                    Logo, favicon y _headers (noindex en el hosting)
scripts/lighthouse.mjs     Medición de Lighthouse móvil + escritorio
src/
  config/hero.ts           Vídeo y póster del hero (una sola constante)
  config/site.ts           Menú, redes sociales y aviso de proyecto de formación
  content/                 Contenido en Markdown: news, events, stories, collaborations, updates, pages
  content.config.ts        Esquemas: qué campos lleva cada tipo de contenido
  components/              Hero, Nav, NavSheet, PageHeader, Footer, tarjetas…
  layouts/                 BaseLayout (todas las páginas) e InnerLayout (páginas interiores)
  pages/                   Una ruta por fichero
  styles/global.css        Colores, tipografía, animaciones y estilos compartidos
```

## Cómo añadir contenido

Crea un fichero `.md` en la carpeta que toque. Por ejemplo, una noticia en `src/content/news/mi-noticia.md`:

```md
---
title: Mi noticia
date: 2026-11-01
excerpt: Resumen de una o dos frases.
tags: [Members]
---

Texto de la noticia en Markdown.
```

Si falta un campo obligatorio o una fecha está mal escrita, `npm run build` falla e indica el fichero.

## Cambiar el vídeo del hero

Pon los ficheros en `public/media/` y rellena `HERO_MEDIA` en `src/config/hero.ts` (MP4 de menos de 3 MB, WebM opcional y póster WebP). El vídeo solo se carga en pantallas de más de 768 px y si el usuario no ha pedido menos movimiento (reduced motion); en móvil se muestra el póster.

## Despliegue (Netlify)

1. `npm run build`
2. En Netlify → *Deploys*, arrastra la carpeta `dist/`.

`public/_headers` añade `X-Robots-Tag: noindex`. Netlify y Cloudflare Pages leen ese fichero.
