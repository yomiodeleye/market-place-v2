import { Header } from '@/src/components/header'
import { footerItem } from '@/src/config/footer-data'
import FooterCompsThree from '@/src/components/FooterComps/index-3'
import Breadcrumb from '@/src/components/Breadcrumb'
import RegisterForm from '@/src/app/account/components/register-form'

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
