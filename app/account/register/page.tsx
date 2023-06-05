import { Header } from '@/components/header'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'
import Breadcrumb from '@/components/Breadcrumb'
import RegisterForm from '@/app/account/components/register-form'

interface LoginPageProps {}

function RegisterPage({}: LoginPageProps) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer="container"
        title="Register"
        item="Home"
        itemPath="/account/register"
        activeItem="Register"
      />
      <RegisterForm />
    </>
  )
}

export default RegisterPage
