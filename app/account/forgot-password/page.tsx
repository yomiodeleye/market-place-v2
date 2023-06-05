import Breadcrumb from '@/components/Breadcrumb'
import ForgetPasswordForm from '@/app/account/components/forget-password-form/forget-password-form'

function ForgetPasswordPage({}) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer="container"
        title="Forget Password"
        item="Home"
        itemPath="/"
        activeItem="forget password"
      />
      <ForgetPasswordForm />
    </>
  )
}

export default ForgetPasswordPage
