import { clsx } from 'clsx'
import type { Viewport } from 'next'
import 'uplord-ui/dist/uplord-ui.css'

import { inter, nunito } from '@/app/fonts'
import '@/styles/index.scss'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

export const metadata = {
  title: 'Uplord',
  description: 'Uplord',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#000000"
        />
      </head>
      <body
        className={clsx(inter.className, nunito.className)}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
