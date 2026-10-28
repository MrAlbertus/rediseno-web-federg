# Aprendizaje – rediseño de la web de FEDERG

> Proyecto de formación. No es la web oficial de FEDERG.

## 1. WordPress (CMS tradicional) frente a JAMstack / sitios estáticos

**Cómo funciona cada uno**

- **WordPress:** cada vez que alguien visita una página, el servidor ejecuta PHP, consulta la base de datos MySQL y monta el HTML en ese momento.
- **Sitio estático (JAMstack):** el HTML se genera **una vez**, al publicar (`npm run build`). El hosting solo entrega ficheros ya hechos, como si fueran imágenes.

| Aspecto | WordPress | Sitio estático (Astro) |
| --- | --- | --- |
| **Ventajas** | Panel de edición visual listo para usar; miles de temas y plugins; cualquiera publica sin saber código. | Muy rápido (HTML ya hecho y servido desde una CDN); ligero; control total del código; el contenido está versionado en Git. |
| **Límites** | Se vuelve lento con muchos plugins (la web actual carga 39 scripts y 27 hojas de estilo); el diseño depende del tema. | Sin panel de edición por defecto; las funciones dinámicas (formularios, login, comentarios) necesitan servicios externos; cada cambio requiere volver a publicar. |
| **Seguridad** | Superficie de ataque grande: PHP, base de datos, panel `/wp-admin` y plugins de terceros. Hay que actualizar a menudo. | Casi nada que atacar: no hay base de datos ni código ejecutándose en el servidor. El riesgo pasa a las dependencias y a la cuenta del hosting. |
| **Mantenimiento** | Actualizaciones constantes de núcleo, tema y plugins, que a veces rompen la web; copias de seguridad de la base de datos. | Actualizar dependencias de vez en cuando; el contenido son ficheros (la copia de seguridad es el propio repositorio). |
| **Coste** | Hosting con PHP y MySQL (de unos pocos euros al mes en adelante) más plugins o temas de pago. | Hosting estático gratuito para proyectos de este tamaño (Netlify, Cloudflare Pages, GitHub Pages). |

**Resumen:** WordPress gana en facilidad de edición para gente no técnica; un sitio estático gana en velocidad, seguridad y coste.

## 2. Por qué Astro y qué alternativas se valoraron

- **Astro (elegido):** genera HTML estático y por defecto no envía JavaScript al navegador; solo se añade donde hace falta (aquí, el menú, las animaciones al hacer scroll y el buscador). Tiene componentes con CSS propio, *content collections* para Markdown con validación de datos y buena documentación.
- **Next.js:** muy potente para aplicaciones web con React, pero añade un runtime de JavaScript que una web de contenido no necesita.
- **Hugo:** compila rapidísimo, pero sus plantillas en Go son más difíciles de aprender y su sistema de componentes es más limitado.
- **Eleventy:** muy ligero y flexible, pero sin componentes con estilos propios ni validación del contenido de serie.

## 3. Cómo se gestionan los contenidos y quién los editaría

- Cada noticia, evento, historia, colaboración o actualización es un fichero **Markdown** en `src/content/`. Arriba tiene unos datos (título, fecha, resumen…) y debajo el texto.
- `src/content.config.ts` define qué datos lleva cada tipo. Si falta uno o una fecha está mal escrita, la publicación falla y dice en qué fichero.
- **Para publicar:** añadir o editar el fichero, ejecutar `npm run build` y subir la carpeta `dist/` a Netlify.
- **Quién lo editaría:**
  - *Hoy:* alguien con nociones básicas (editar texto en Markdown y ejecutar un comando).
  - *Si editara personal no técnico:* conectar el proyecto a GitHub y añadir **Decap CMS**, un panel web que escribe los mismos ficheros Markdown. Netlify publicaría automáticamente cada cambio. No habría que rehacer nada.

## 4. Lighthouse: web actual frente a la nueva

### Cómo medirlo

**Opción A – navegador (Chrome o Edge)**

1. Abre la página que quieras medir.
2. Pulsa F12 y ve a la pestaña **Lighthouse**.
3. Elige **Mobile** o **Desktop**, marca las cuatro categorías y pulsa **Analyze page load**.
4. Repite cada medición 2 o 3 veces y anota la mediana: los resultados varían un poco entre pasadas.
5. Hazlo en una ventana de incógnito, para que las extensiones no alteren el resultado.

**Opción B – script del proyecto** (mide móvil y escritorio de una vez y guarda los informes en `lighthouse-reports/`):

```bash
npm run lighthouse -- https://federg.org/
```

```bash
npm run lighthouse -- https://fastidious-pony-0a539b.netlify.app/
```

Si el ordenador no tiene Chrome, hay que indicar dónde está Edge con la variable `CHROME_PATH` (ver `scripts/lighthouse.mjs`).

### Tabla para rellenar

| Categoría | Actual – móvil | Actual – escritorio | Nueva – móvil | Nueva – escritorio |
| --- | --- | --- | --- | --- |
| Rendimiento | | | | |
| Accesibilidad | | | | |
| Buenas prácticas | | | | |
| SEO | | | | |
| LCP (s) | | | | |
| Peso total de la página (KB) | | | | |
| Número de peticiones | | | | |

Referencia medida en local antes de publicar (nueva web, 8 páginas): Rendimiento 100, Accesibilidad 100, Buenas prácticas 100 y SEO 63 en móvil y escritorio. El SEO baja por el `noindex` intencionado; sin él da 100.

## 5. Aprendizajes, dificultades y qué haría distinto

### Aprendizajes
- ¿Qué entiendo ahora sobre la diferencia entre una web dinámica y una estática que antes no entendía?
- ¿Qué concepto nuevo me ha resultado más útil (componentes, Markdown y content collections, accesibilidad, rendimiento…)?
- ¿Qué he aprendido sobre accesibilidad que no sabía (contraste, orden del foco, reduced motion)?

### Dificultades
- ¿En qué fase me atasqué más y por qué?
- ¿Hubo algo del hosting o la publicación que no saliera a la primera? ¿Cómo lo resolví?
- ¿Qué decisión me costó más tomar (por ejemplo, mantener el `noindex` aunque bajara el SEO)?

### Qué haría distinto
- ¿Qué haría antes o de otra manera si empezara de cero?
- ¿Qué añadiría con más tiempo (vídeo propio, CMS, más páginas, otros idiomas…)?
- ¿Qué le recomendaría a otra persona que fuera a hacer este mismo ejercicio?
