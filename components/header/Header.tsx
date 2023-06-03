'use client'
import { useEffect, useRef } from 'react'
import { HeaderMenu, HeaderRight, Logo } from '@/components/header/components'
import { headerMenuConfig } from '@/config/header-menu'

const Header = () => {
  // Header Sticky Activation
  const header = useRef<HTMLElement>(null)
  const isSticky = (e) => {
    const scrollTop = window.scrollY

    scrollTop >= 90
      ? header.current?.classList.add('is-sticky')
      : header.current?.classList.remove('is-sticky')
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky)

    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  //   End Here

  return (
    <header
      ref={header}
      className="top-0 z-30 flex h-[120px] w-full items-center"
    >
      <div className="container-fluid relative px-[15px] lg:px-[100px]">
        <div className="grid grid-cols-12">
          <div className="col-span-6 self-center lg:col-span-4">
            <Logo headerLogoClassName="flex" href="/" />
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <HeaderMenu
              headerItems={headerMenuConfig}
              differentPositionCName="home-collection-megamenu-holder flex justify-center"
            />
          </div>
          <div className="col-span-6 self-center lg:col-span-4">
            <HeaderRight />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
