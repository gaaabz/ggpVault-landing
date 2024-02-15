import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - xGGP',
    default: 'xGGP - Earn yield on your GGP',
  },
  description:
    'Earn GGP every rewards cycle, without running a minipool or staking AVAX',
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
