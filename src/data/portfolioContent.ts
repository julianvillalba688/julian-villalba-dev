export type PortfolioProject = {
  number: string
  category: string
  name: string
  summary: string
  detail: string
  stack: readonly string[]
  repo: string
  live?: string
  imageSrc: string
  imageAlt: string
}

export const portfolioContent = {
  metadata: {
    title: 'Julián Villalba | Full-Stack Developer en Barranquilla',
    description:
      'Julián David Villalba Pertuz, desarrollador full-stack en Barranquilla, Colombia. Proyectos con React, TypeScript y Node.js; trabajo remoto para equipos.',
  },
  ui: {
    skip: 'Saltar al contenido',
    menu: 'Abrir navegación',
    closeMenu: 'Cerrar navegación',
    source: 'Ver código',
    visit: 'Visitar proyecto',
    imagePending: 'Captura pendiente',
    backTop: 'Volver arriba',
  },
  brand: {
    name: 'Julián Villalba',
    fullName: 'Julián David Villalba Pertuz',
    initials: 'JV',
    role: 'Full-Stack Developer',
    location: 'Barranquilla, Colombia',
  },
  navigation: [
    { label: 'Obra', href: '#obra' },
    { label: 'Perfil', href: '#perfil' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'DESARROLLO FULL-STACK / BARRANQUILLA',
    lineOne: 'Pienso en',
    lineTwo: 'sistemas.',
    lineThree: 'Construyo',
    lineFour: 'experiencias.',
    intro:
      'Soy Julián David Villalba Pertuz, desarrollador full-stack en Barranquilla, Colombia. Trabajo con React, TypeScript y Node.js en interfaces, APIs y productos web.',
    note: 'Código y proyectos disponibles en GitHub.',
    explore: 'Explorar trabajo',
    index: 'PORTAFOLIO / 01—04',
  },
  projects: {
    eyebrow: '01 / OBRA SELECCIONADA',
    title: 'Proyectos web.',
    intro:
      'Tres proyectos con repositorios públicos: un catálogo de comercio, un sistema de reservas y un panel para trabajo de anotación.',
    items: [
      {
        number: '01',
        category: 'COMERCIO / EXPERIENCIA DE COMPRA',
        name: 'Salem Store',
        summary: 'Catálogo web de joyería y accesorios.',
        detail:
          'Landing y catálogo interactivo para joyería y accesorios, con recorrido de compra conectado a WhatsApp.',
        stack: ['JavaScript', 'Frontend', 'WhatsApp'],
        repo: 'https://github.com/julianvillalba688/salem-store-go',
        live: 'https://salem-store-boutique.vercel.app',
        imageSrc: '',
        imageAlt: 'Captura real del catálogo Salem Store',
      },
      {
        number: '02',
        category: 'SERVICIOS / FLUJOS DE RESERVA',
        name: 'Sistema de reservas',
        summary: 'Aplicación web para gestionar reservas.',
        detail:
          'Aplicación orientada a formularios, lógica de cliente y flujos estructurados de reserva, publicada en Vercel.',
        stack: ['Java', 'Web', 'Formularios'],
        repo: 'https://github.com/julianvillalba688/ProyectoReserva',
        live: 'https://proyecto-reserva.vercel.app/reservas',
        imageSrc: '',
        imageAlt: 'Captura real del sistema de reservas',
      },
      {
        number: '03',
        category: 'SAAS / HERRAMIENTAS DE TRABAJO',
        name: 'Annotate Pay',
        summary: 'Panel para registrar tareas y ganancias de anotación.',
        detail:
          'Panel para registrar tareas, tiempo medio de gestión y ganancias con instantáneas inmutables de tarifas.',
        stack: ['TypeScript', 'SaaS', 'Dashboard'],
        repo: 'https://github.com/julianvillalba688/annotate-pay',
        imageSrc: '',
        imageAlt: 'Captura real del panel Annotate Pay',
      },
    ] as const satisfies readonly PortfolioProject[],
  },
  profile: {
    eyebrow: '02 / PERFIL',
    title: 'Desarrollo web de extremo a extremo.',
    description:
      'Desarrollo interfaces con React, Angular y Vue; implemento APIs y persistencia de datos con Node.js, NestJS y SQL; y participo en pruebas, despliegue y monitoreo.',
    approach: 'Mi trabajo cubre interfaz, servicios, datos y operación de aplicaciones web.',
    capabilities: [
      {
        label: '01 / INTERFAZ',
        title: 'Interfaces web',
        description:
          'Diseño responsive, accesibilidad, formularios, dashboards e integración con APIs.',
        tools: ['React', 'TypeScript', 'Angular', 'Vue', 'Tailwind CSS'],
      },
      {
        label: '02 / SISTEMAS',
        title: 'APIs y datos',
        description:
          'Servicios modulares, REST APIs, webhooks, validación y arquitectura reutilizable.',
        tools: ['Node.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Redis'],
      },
      {
        label: '03 / ENTREGA',
        title: 'Pruebas y despliegue',
        description: 'Pruebas, automatización, observabilidad y soporte de despliegue en cloud.',
        tools: ['Docker', 'GitHub Actions', 'Azure', 'AWS', 'Datadog'],
      },
    ],
    toolset: [
      {
        label: 'Frontend',
        items: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'Redux', 'UX/UI'],
      },
      { label: 'Datos', items: ['MySQL', 'SQL Server', 'MongoDB', 'consultas SQL'] },
      {
        label: 'Ingeniería',
        items: [
          'SOLID',
          'Clean Code',
          'pruebas unitarias',
          'documentación',
          'Scrum',
          'code review',
        ],
      },
      {
        label: 'Operación',
        items: ['Kubernetes', 'CI/CD', 'CloudWatch', 'Sentry', 'seguridad web'],
      },
    ],
  },
  experience: {
    eyebrow: '03 / TRAYECTORIA',
    title: 'Experiencia profesional.',
    roles: [
      {
        period: 'MAY 2024 — JUL 2026',
        role: 'Full-Stack Developer',
        company: 'Soluciones Tecnológicas La Bendición de Dios',
        place: 'Remoto / Barranquilla',
        points: [
          'Desarrollo de funcionalidades para flujos fintech, KYC/KYB, APIs REST, webhooks y automatizaciones.',
          'Interfaces con React, Angular, Vue y TypeScript; servicios con Node.js y NestJS.',
          'Trabajo con PostgreSQL, Supabase y Redis; CI/CD con Docker, Kubernetes, GitHub Actions, Azure y AWS.',
          'Pruebas, documentación, depuración y monitoreo con Datadog, CloudWatch y Sentry.',
        ],
      },
      {
        period: 'MAY 2022 — MAY 2024',
        role: 'IT Operations Analyst & Backend Developer',
        company: 'Soluciones Tecnológicas La Bendición de Dios',
        place: 'Remoto / Barranquilla',
        points: [
          'Automatizaciones y herramientas operativas con Python, Java, C# y Terraform.',
          'Administración y optimización de PostgreSQL, SQL Server y MySQL.',
          'Soporte técnico, gestión de incidentes y resolución de problemas de infraestructura.',
        ],
      },
    ],
    educationTitle: 'Formación y credenciales',
    education: [
      'Ingeniería de Sistemas en curso — Universidad Simón Bolívar, Barranquilla',
      'Técnico en Sistemas — SENA, Colombia',
      'Cybersecurity Intermediate Bootcamp — MinTIC & TalentoTech, agosto 2026',
      'EF SET 62/100 — C1 Advanced (lectura C2, escucha B2, escritura B2, habla B1)',
    ],
  },
  contact: {
    eyebrow: '04 / CONTACTO',
    title: 'Trabajemos juntos.',
    intro:
      'Disponible para conversar sobre desarrollo full-stack, interfaces web y APIs desde Barranquilla o en equipos remotos.',
    email: 'vjulian441@gmail.com',
    emailHref: 'mailto:vjulian441@gmail.com',
    phone: '+57 304 677 8813',
    phoneHref: 'tel:+573046778813',
    links: [
      {
        label: 'Código de este portafolio',
        href: 'https://github.com/julianvillalba688/julian-villalba-dev',
      },
      { label: 'GitHub', href: 'https://github.com/julianvillalba688' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-villalba-pertuz-216238292/' },
      { label: 'CV · PDF', href: '/Julian_Villalba_Resume_v5.pdf' },
    ],
  },
  footer: {
    credit: '© {year} Julián David Villalba Pertuz',
    note: 'Desarrollo full-stack desde Barranquilla, Colombia.',
  },
} as const
