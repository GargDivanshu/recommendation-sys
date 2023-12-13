import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import {React} from 'react'
import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/fonts/google'

const inter = Inter({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-spaceGrotesk',
})


export const metadata:Metadata = {
  title : 'NextJS',
  description : 'NextJS',
  icons: {
    icon: '/assets/images/site-logo.svg',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        formActionLink: 'primary-text-gradient hover:text-primary-500',
      }
    }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}