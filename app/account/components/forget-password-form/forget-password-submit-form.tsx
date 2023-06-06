import { useForm } from 'react-hook-form'
import OtpInput from 'react-otp-input'
import { useState } from 'react'

interface ForgetPasswordSubmitRequestFormProps {
  onSubmit: (data: any) => void
  isLoading: boolean
}

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

const ForgetPasswordSubmitRequestForm = ({
  onSubmit,
  isLoading,
}: ForgetPasswordSubmitRequestFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [otp, setOtp] = useState('')
  const NUMOFINPUTS = 6

  const handleOnSubmit = (data: any) => {
    onSubmit({ ...data, otp })
  }

  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content tab-style-common active">
          <form
            className="forget-password-form"
            onSubmit={handleSubmit(handleOnSubmit)}
            noValidate
          >
            <h3 className="title mb-[25px] text-[18px]">
              Please enter your email address below to receive a password reset
              code.
            </h3>
            <div className="single-field mb-[30px]">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={NUMOFINPUTS}
                renderSeparator={<span>-</span>}
                inputStyle={{ width: '100px' }}
                inputType="number"
                renderInput={(props) => (
                  <input {...props} className={inputField} />
                )}
              />
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
            <div className="button-wrap">
              <button
                type="submit"
                className={secondaryButton}
                disabled={isLoading}
              >
                RESET MY PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordSubmitRequestForm
