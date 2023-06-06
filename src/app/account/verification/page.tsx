'use client'

import { Header } from '@/src/components/header'
import { footerItem } from '@/src/config/footer-data'
import FooterCompsThree from '@/src/components/FooterComps/index-3'
import Breadcrumb from '@/src/components/Breadcrumb'
import RegisterForm from '@/src/app/account/components/register-form'
import OtpVerificationFrom from '@/src/app/account/components/otp-verification-form'

interface VerificationPageProps {}

function VerificationPage({}: VerificationPageProps) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer="container"
        title="Verification"
        item="Home"
        itemPath="/account/verification"
        activeItem="Verification"
      />
      <OtpVerificationFrom />
    </>
  )
}

export default VerificationPage
