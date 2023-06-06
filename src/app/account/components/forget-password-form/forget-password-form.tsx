'use client'
import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import ForgetPasswordRequestForm from '@/src/app/account/components/forget-password-form/forget-password'
import ForgetPasswordSubmitRequestForm from '@/src/app/account/components/forget-password-form/forget-password-submit-form'

function ForgetPasswordForm({}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const { push } = useRouter()

  const onRequestForPasswordReset = async (data: any) => {
    setIsLoading(true)
    try {
      const { email } = data
      setUsername(email)
      await Auth.forgotPassword(email)
      setIsLoading(false)
    } catch (error) {
      setErrorMessage(error)
      setIsLoading(false)
    }
  }

  const onSubmitPasswordRequest = async (data: any) => {
    setIsLoading(true)
    const { password, otp } = data
    try {
      if (username) {
        await Auth.forgotPasswordSubmit(username, otp, password)
        push('/account/login')
      }
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
              onSubmit={onRequestForPasswordReset}
              isLoading={isLoading}
            />
          )}
          {username && (
            <ForgetPasswordSubmitRequestForm
              onSubmit={onSubmitPasswordRequest}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordForm
