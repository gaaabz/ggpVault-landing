import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - ggGGP',
    default: 'ggGGP - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en" className={clsx('h-full scroll-smooth antialiased')}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  )
}
