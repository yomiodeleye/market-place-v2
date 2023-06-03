'use client'

import Link from 'next/link'

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

interface RegisterFormProps {}

function RegisterForm({}: RegisterFormProps) {
  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content">
          <form className="login-form">
            <h3 className="title mb-[25px] text-[18px]">Register An Account</h3>
            <div className="single-field mb-[30px]">
              <input
                className={inputField}
                type="text"
                placeholder="First name"
              />
            </div>
            <div className="single-field mb-[30px]">
              <input
                className={inputField}
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="single-field mb-[30px]">
              <input
                className={inputField}
                type="email"
                placeholder="Email address"
              />
            </div>
            <div className="single-field">
              <input
                className={inputField}
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="mb-[25px] mt-[20px] lg:max-w-[495px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <Link href="/privacy" className="ml-[5px]">
                privacy policy.
              </Link>
            </p>
            <div className="button-wrap">
              <button type="submit" className={secondaryButton}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
