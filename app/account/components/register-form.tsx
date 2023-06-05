'use client'
import { Amplify, Auth } from 'aws-amplify'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import { userRegisterSchema } from '@/lib/auth'
import awsExports from '@/aws-exports'
import { useLocalStorage } from '@/hooks/use-local-storage'

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

interface RegisterFormProps {}

type FormData = z.infer<typeof userRegisterSchema>
Amplify.configure(awsExports)

function RegisterForm({}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [currentRegisterUserEmailAddress, saveCurrentRegisterUserEmailAddress] =
    useLocalStorage('registerUser', null)

  const { push } = useRouter()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const { user } = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          family_name: data.lastName,
          given_name: data.firstName,
        },
        autoSignIn: { enabled: true },
      })
      saveCurrentRegisterUserEmailAddress(data.email)
      push('/account/verification')
      setIsLoading(false)
    } catch (error) {
      let err
      // @ts-ignore
      switch (error.name) {
        case 'UserNotFoundException':
          err = 'User not found. Check email/username.'
          break
        case 'NotAuthorizedException':
          err = 'Incorrect password. Try again.'
          break
        case 'PasswordResetRequiredException':
          err = 'Password reset required. Check email.'
          break
        case 'UserNotConfirmedException':
          err = 'User not confirmed. Verify email.'
          break
        case 'CodeMismatchException':
          err = 'Invalid confirmation code. Retry.'
          break
        case 'ExpiredCodeException':
          err = 'Confirmation code expired. Resend code.'
          break
        case 'InvalidParameterException':
          err = 'Invalid input. Check credentials.'
          break
        case 'InvalidPasswordException':
          err = 'Invalid password. Follow policy.'
          break
        case 'TooManyFailedAttemptsException':
          err = 'Too many failed attempts. Wait.'
          break
        case 'TooManyRequestsException':
          err = 'Request limit reached. Wait and retry.'
          break
        case 'LimitExceededException':
          err = 'User pool full. Retry later.'
          break
        default:
          err = 'Unknown error. Contact support.'
      }
      setErrorMessage(err)
    }
  }

  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content">
          <form
            className="register-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="title mb-[25px] text-[18px]">Register An Account</h3>

            {errorMessage && (
              <div
                id="alert-border-2"
                className="mb-4 flex border-t-4 border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="ml-3 text-sm font-medium">{errorMessage}</div>
                <button
                  type="button"
                  className="-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-red-50 p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                  onClick={() => setErrorMessage(null)}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}

            <div className="single-field mb-[30px]">
              <input
                id="first_name"
                type="text"
                placeholder="First Name"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className={`${inputField} ${
                  errors.firstName ? 'border-red-400 text-red-300' : ''
                }`}
                {...register('firstName', { required: true })}
              />
              {errors.firstName && (
                <div className="text-normal text-red-500 ">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="single-field mb-[30px]">
              <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className={`${inputField} ${
                  errors.lastName ? 'border-red-400 text-red-300' : ''
                }`}
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <div className="text-normal text-red-500 ">
                  {errors.lastName.message}
                </div>
              )}
            </div>
            <div className="single-field mb-[30px]">
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className={`${inputField} ${
                  errors.email ? 'border-red-400 text-red-300' : ''
                }`}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <div className="text-normal text-red-500 ">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="single-field mb-[30px]">
              <input
                id="password"
                type="password"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className={inputField}
                {...register('password')}
              />
            </div>
            <div className="single-field">
              <input
                id="confirm_password"
                type="password"
                placeholder="confirmPassword"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className={`${inputField} ${
                  errors.confirmPassword ? 'border-red-400 text-red-300' : ''
                }`}
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <div className="text-normal text-red-500 ">
                  {errors.confirmPassword.message}
                </div>
              )}
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
              <button
                type="submit"
                className={secondaryButton}
                disabled={isLoading}
                X
              >
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
