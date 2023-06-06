import { Header } from '@/src/components/header'
import { footerItem } from '@/src/config/footer-data'
import FooterCompsThree from '@/src/components/FooterComps/index-3'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <FooterCompsThree footerItems={footerItem} />
    </>
  )
}
