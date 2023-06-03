import { Header } from '@/components/header'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'
import Breadcrumb from '@/components/Breadcrumb'
import LoginForm from '@/app/account/components/login-form'

interface LoginPageProps {
  headerItems: any
  authItems: any
  footerItems: any
}

function LoginPage({ headerItems, authItems, footerItems }: LoginPageProps) {
  return (
    <>
      <Header />
      <Breadcrumb
        breadcrumbContainer="container"
        title="Login"
        item="Home"
        itemPath="/"
        activeItem="Login"
      />
      <LoginForm />
      <FooterCompsThree footerItems={footerItem} />
    </>
  )
}

export default LoginPage
