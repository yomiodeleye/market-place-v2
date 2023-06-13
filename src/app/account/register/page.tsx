import Breadcrumb from '@/components/Breadcrumb'
import { SignUp } from '@clerk/nextjs/app-beta'

interface LoginPageProps {}

function RegisterPage({}: LoginPageProps) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer='container'
        title='Register'
        item='Home'
        itemPath='/account/register'
        activeItem='Register'
      />
      <div className='border-b border-[#ededed] pt-[50px] md:pt-[80px] lg:pt-[100px] xl:py-[155px]'>
        <div className='container md:max-w-lg'>
          <div className='login-content tab-style-common active'>
            <SignUp />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
