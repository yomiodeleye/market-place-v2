'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Amplify, Auth } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { userAuthSchema, userRegisterSchema } from '@/lib/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import ForgetPasswordRequestForm from '@/app/account/components/forget-password-form/forget-password'

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

function ForgetPasswordForm({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const { push } = useRouter()

  const onSubmitForgotPassword = async (data: any) => {
    setIsLoading(true)
    try {
      console.log(data, '>>>>>><<<<<')
      // Auth.forgotPassword(username)
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
      setIsLoading(false)
    } catch (error) {
      setErrorMessage(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content tab-style-common active">
          {!username && (
            <ForgetPasswordRequestForm
              onSubmit={onSubmitForgotPassword}
              isLoading={isLoading}
            />
          )}
          {username && (
            <ForgetPasswordRequestForm
              onSubmit={onSubmitForgotPassword}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordForm
