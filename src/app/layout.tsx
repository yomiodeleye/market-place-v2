import { ClerkProvider } from '@clerk/nextjs/app-beta'
import { Inter } from 'next/font/google'

import './globals.css'
import Footer from '@/app/components/layout/footer'
import { Header } from '@/components/layout/header'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'next ecommerce',
  description: 'Created by Hamed Bahram'
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col text-stone-700'>
        <ClerkProvider>
          <Header />
          <main className='relative bg-white'>{children}</main>
          <FooterCompsThree footerItems={footerItem} />
          <div id='quickview-root' />
          <div id='notification-root' />
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
