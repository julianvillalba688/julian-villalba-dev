import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { portfolioContent } from '../data/portfolioContent'
import '../index.css'

const siteUrl = 'https://www.julianvillalba.tech'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: portfolioContent.metadata.title,
  description: portfolioContent.metadata.description,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: `${siteUrl}/`,
    siteName: 'Julián David Villalba Pertuz',
    title: portfolioContent.metadata.title,
    description: portfolioContent.metadata.description,
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Julián David Villalba Pertuz — desarrollo full-stack en Barranquilla',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioContent.metadata.title,
    description: portfolioContent.metadata.description,
    images: ['/og-card.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: portfolioContent.brand.fullName,
      alternateName: portfolioContent.brand.name,
      url: `${siteUrl}/`,
      jobTitle: 'Full-Stack Developer',
      description: portfolioContent.metadata.description,
      homeLocation: { '@type': 'Place', name: 'Barranquilla, Colombia' },
      knowsAbout: [
        'React',
        'TypeScript',
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'desarrollo web full-stack',
      ],
      sameAs: [
        'https://github.com/julianvillalba688',
        'https://www.linkedin.com/in/julian-villalba-pertuz-216238292/',
      ],
      subjectOf: {
        '@type': 'SoftwareSourceCode',
        name: 'Código fuente del portafolio de Julián David Villalba Pertuz',
        codeRepository: 'https://github.com/julianvillalba688/julian-villalba-dev',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#services`,
      name: 'Desarrollo web full-stack — Julián David Villalba Pertuz',
      url: `${siteUrl}/`,
      description:
        'Servicios de desarrollo de interfaces web, APIs y aplicaciones full-stack desde Barranquilla, Colombia.',
      founder: { '@id': `${siteUrl}/#person` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barranquilla',
        addressRegion: 'Atlántico',
        addressCountry: 'CO',
      },
      areaServed: [{ '@type': 'Country', name: 'Colombia' }],
      email: portfolioContent.contact.email,
      telephone: portfolioContent.contact.phone,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Portafolio de Julián David Villalba Pertuz',
      inLanguage: 'es-CO',
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CO">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
