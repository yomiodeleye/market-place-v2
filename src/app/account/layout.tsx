import { Header } from '@/components/header'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'

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
