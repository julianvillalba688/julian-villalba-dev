import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { portfolioContent } from '../data/portfolioContent'
import '../index.css'

export const metadata: Metadata = {
  title: portfolioContent.metadata.title,
  description: portfolioContent.metadata.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
