import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Created with Next.js',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}  min-h-screen  text-white`}>
        <div className=" w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
