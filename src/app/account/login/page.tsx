import Breadcrumb from '@/components/Breadcrumb'
import LoginForm from '@/app/account/components/login-form'

interface LoginPageProps {}

function LoginPage({}: LoginPageProps) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer="container"
        title="Login"
        item="Home"
        itemPath="/"
        activeItem="Login"
      />
      <LoginForm />
    </>
  )
}

export default LoginPage
