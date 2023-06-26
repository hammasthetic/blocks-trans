'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/GlobalRedux/provider'
import Header from './Header'
const inter = Inter({ subsets: ['latin'] })
import { Web3ContextProvider } from './libs/components/Web3ContextProvider'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Web3ContextProvider>
          <Header/>
          {children}
          </Web3ContextProvider>
        </Providers>
        </body>
    </html>
  )
}
