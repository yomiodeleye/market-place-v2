import { useState } from 'react'
import OtpInput from 'react-otp-input'
import { useLocalStorage } from '@/src/hooks/use-local-storage'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/navigation'

const inputField = `border border-[#cccccc] focus-visible:outline-0 text-[#666666] py-[10px] px-[20px] w-full h-[50px]`
const secondaryButton =
  'flex items-center justify-center bg-secondary text-white leading-[38px] text-[15px] h-[50px] w-full  transition-all hover:bg-[#212529] px-[40px]'

interface OtpVerificationFromProps {}

function OtpVerificationFrom({}: OtpVerificationFromProps) {
  const NUMOFINPUTS = 6
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [otp, setOtp] = useState('')
  const [currentRegisterUserEmailAddress, saveCurrentRegisterUserEmailAddress] =
    useLocalStorage('registerUser', null)

  const { push } = useRouter()
  const clearOtp = () => {
    setOtp('')
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await Auth.confirmSignUp(currentRegisterUserEmailAddress, otp)
      push('/account/login')
    } catch (error) {
      console.log('error', error)
    }
    localStorage.removeItem('registerUser')
  }

  return (
    <div className="border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[155px]">
      <div className="container md:max-w-lg">
        <div className="login-content">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="title mb-[25px] text-[18px]">Verification Code</h3>
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
            <div className="button-wrap">
              <button
                type="submit"
                className={secondaryButton}
                disabled={otp.length < NUMOFINPUTS}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpVerificationFrom
