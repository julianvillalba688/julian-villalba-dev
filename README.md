# Portafolio de Julián Villalba

Portafolio modular en Next.js 16, React 19, TypeScript y Tailwind CSS 4. Se exporta como sitio estático. La información profesional procede del CV local `Julian_Villalba_Resume_v5.pdf` y de los repositorios públicos de [GitHub](https://github.com/julianvillalba688). LinkedIn se enlaza como perfil público; no se extrajo contenido porque el sitio bloquea la lectura automatizada.

## Desarrollo

```sh
npm install
npm run dev
```

Abre `http://localhost:8081/`. Para generar y servir la versión estática:

```sh
npm run build
npm run preview
```

La compilación utiliza Webpack porque Turbopack no puede abrir su proceso auxiliar de PostCSS en este entorno. `npm run format:check` comprueba el formato.

## Editar contenido y capturas

Todo el texto, enlaces, experiencia y proyectos están en [`src/data/portfolioContent.ts`](src/data/portfolioContent.ts). Las áreas visuales de los casos están vacías por decisión del propietario. Guarda capturas reales en `public/images/` y asigna `imageSrc` y `imageAlt` al proyecto correspondiente. El componente contiene una etiqueta `<img>` con dimensiones, carga diferida y decodificación asíncrona. No hay capturas simuladas ni interfaces de navegador dibujadas con CSS.

El CV descargable está en `public/Julian_Villalba_Resume_v5.pdf`; contiene los datos de contacto facilitados por el propietario. Las fuentes locales y sus licencias OFL están en `public/fonts/`.
