# Dirección visual: Índice de obra

Un portafolio para clientes y reclutadores que pone primero trabajo verificable y trayectoria concreta. La primera pantalla es una declaración tipográfica; el desplazamiento descubre tres casos de estudio, perfil técnico, experiencia y contacto. La navegación es un objeto flotante y los casos alternan proporciones y alineaciones, sin una cuadrícula de tarjetas repetidas.

## Referencias investigadas

- [Editorial New en Awwwards](https://www.awwwards.com/editorial-new-variable-typeface-by-locomotive-wins-site-of-the-month-october.html): tipografía como material expresivo y movimiento ligado al contenido.
- [Marco Cornacchia en Godly](https://godly.website/website/marco-cornacchia-860): composición de portafolio con grid inusual e interacción.
- [Guía de excelencia móvil de Awwwards](https://www.awwwards.com/mobile-excellence-guidelines.pdf): rendimiento, navegación legible y acciones principales visibles.

Estas son referencias de archivo accesibles; la búsqueda no permitió verificar una selección curada publicada específicamente esta semana. La dirección es una interpretación propia, sin reproducir una plantilla.

## Sistema

- **Paleta:** tinta `#141714`, bosque `#1b231f`, papel `#eeeae0`, lima `#d9f568`, coral `#fb9073`. Los tokens equivalentes están en `tailwind.config.ts` y las variables CSS en `src/index.css`.
- **Tipografía:** Manrope para lectura y navegación; Instrument Serif para titulares, citas y números. Ambas se sirven localmente.
- **Grid:** titular descentrado, índices laterales, proyectos con alternancia de columnas y áreas visuales vacías. En móvil, una sola columna preserva jerarquía y enlaces.
- **Movimiento:** titular escalonado al cargar, secciones que aparecen al entrar en viewport, progreso de lectura con CSS cuando el navegador lo admite y transiciones breves en controles. Se animan solo `opacity` y `transform`; sin biblioteca adicional. El contenido permanece visible si JavaScript falla y `prefers-reduced-motion` elimina el movimiento.
- **Evidencia:** nombre, cargos, fechas, formación, certificaciones y contacto provienen del CV. Proyectos enlazan a repositorios reales. No se inventan métricas ni resultados.
