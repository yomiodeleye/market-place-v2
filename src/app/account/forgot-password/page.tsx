import Breadcrumb from '@/src/components/Breadcrumb'
import ForgetPasswordForm from '@/src/app/account/components/forget-password-form/forget-password-form'

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
