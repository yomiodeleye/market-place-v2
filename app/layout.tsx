'use client'
import { Amplify } from 'aws-amplify'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import awsExports from '@/aws-exports'

import store, { persistor } from '@/store'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

// Font files can be colocated inside `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

Amplify.configure({ ...awsExports, ssr: true })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
            <Analytics />
            <Toaster />
            <TailwindIndicator />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
