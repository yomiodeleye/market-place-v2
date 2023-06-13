'use client'

import Breadcrumb from '@/components/Breadcrumb'
import FooterCompsThree from '@/components/FooterComps/index-3'
import OtpVerificationFrom from '@/app/account/components/otp-verification-form'
import RegisterForm from '@/app/account/components/register-form'

import { Header } from '@/components/layout/headerTemp'
import { footerItem } from '../../../config/footer-data'

interface VerificationPageProps {}

function VerificationPage({}: VerificationPageProps) {
  return (
    <>
      <Breadcrumb
        breadcrumbContainer='container'
        title='Verification'
        item='Home'
        itemPath='/account/verification'
        activeItem='Verification'
      />
      <OtpVerificationFrom />
    </>
  )
}

export default VerificationPage
