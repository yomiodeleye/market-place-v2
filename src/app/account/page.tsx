'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { accountMenuConfig } from '@/config/header-menu'
import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface AccountPageProps {}

const AccountsPage = ({}) => {
  const [authenticated, setauthenticated] = useState(false)
  const { push } = useRouter()
  const signOut = async () => {
    await Auth.signOut()
    push('/')
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: false })
      .then((result) => {
        setauthenticated(result)
      })
      .catch((err) => push('/account/login'))
  }, [push])

  return (
    <>
      <Breadcrumb
        breadcrumbContainer="container"
        title="Account"
        item="Home"
        itemPath="/account"
        activeItem="Account"
      />
      <div className="account-menu">
        <nav>
          <ul className="flex justify-center border-0 border-y border-[rgba(0,0,0,.25)] bg-transparent p-[10px_35px_10px_0] outline-none focus-visible:border-primary focus-visible:text-primary">
            {accountMenuConfig.map((menuItem) => (
              <li className="last:mr-0` mr-[30px] py-[30px]">
                <Link href={menuItem.href}>{menuItem.title}</Link>
              </li>
            ))}
            <li className="last:mr-0` mr-[30px] py-[30px]">
              <Link href="/" onClick={signOut}>
                LOG OUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default AccountsPage
