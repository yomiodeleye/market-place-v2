import Breadcrumb from '@/components/Breadcrumb'
import { SignIn } from '@clerk/nextjs/app-beta'

const LoginPage = async ({ searchParams }) => {
  const { redirectUrl } = searchParams
  return (
    <>
      <Breadcrumb
        breadcrumbContainer='container'
        title='Login'
        item='Home'
        itemPath='/'
        activeItem='Login'
      />
      <div className='border-b border-[#ededed] pt-[50px] md:pt-[80px] lg:pt-[100px] xl:py-[155px]'>
        <div className='container md:max-w-lg'>
          <div className='login-content tab-style-common active'>
            <SignIn redirectUrl={redirectUrl || '/'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginPage
