'use client'

import Link from 'next/link'
import { useState } from 'react'

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

interface LoginFormProps {}

function LoginForm({}: LoginFormProps) {
  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content tab-style-common active">
          <form className="login-form">
            <h3 className="title mb-[25px] text-[18px]">Login your account</h3>
            <div className="single-field mb-[30px]">
              <input
                className={inputField}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="single-field mb-[30px]">
              <input
                className={inputField}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="single-field mb-[30px] flex items-center justify-between">
              <label className="flex" htmlFor="rememberme">
                <input type="checkbox" id="rememberme" />
                <span className="ml-[15px] text-[14px]">Remember me</span>
              </label>
              <Link
                href="/lost-password"
                className="text-[14px] font-normal transition-all hover:text-primary"
              >
                Lost your password?
              </Link>
            </div>
            <div className="button-wrap">
              <button type="submit" className={secondaryButton}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
