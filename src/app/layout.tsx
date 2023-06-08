'use client'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

import '@/styles/globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'

import store, { persistor } from 'src/store'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

// Font files can be colocated inside `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Provider store={store}>
          {/*<PersistGate loading={null} persistor={persistor}>*/}
          {children}
          <TailwindIndicator />
          {/*</PersistGate>*/}
        </Provider>
      </body>
    </html>
  )
}
