'use client'

import { Header } from '@/components/header'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'
import Breadcrumb from '@/components/Breadcrumb'
import RegisterForm from '@/app/account/components/register-form'
import OtpVerificationFrom from '@/app/account/components/otp-verification-form'

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
