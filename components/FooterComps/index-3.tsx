'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  IoLocationSharp,
  IoCallSharp,
  IoArrowForwardOutline,
} from 'react-icons/io5'
import * as FaIcons from 'react-icons/fa'
import PropTypes from 'prop-types'

function FooterCompsThree({ footerItems }) {
  const footer = useRef()
  useEffect(() => {
    window.addEventListener('scroll', isSticky)

    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = (e) => {
    const scrollTop = window.scrollY

    scrollTop < 0
      ? footer.current.classList.add('is-sticky')
      : footer.current.classList.remove('is-sticky')
  }
  return (
    <footer
      className="sm:inset-x-0 sm:bottom-0 sm:z-[-1] sm:w-full sm:bg-[#f4f5f7]"
      ref={footer}
    >
      <div className="footer-top py-[50px] md:py-[75px] lg:py-[95px] xl:py-[115px]">
        <div className="homecarousel-container mx-[15px] md:mx-[100px]">
          <div className="grid grid-cols-12 max-md:gap-y-[30px] sm:gap-x-[30px]">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:self-center">
              <div className="footer-widget">
                <div className="footer-logo mb-[15px]">
                  <Link href={footerItems[0]?.footerLogoPath}>
                    <img
                      src={footerItems[0]?.footerLogo}
                      alt={footerItems[0]?.footerLogoAlt}
                      width={120}
                      height={30}
                    />
                  </Link>
                </div>
                <ul>
                  <li className="mb-[5px] flex items-center">
                    <IoLocationSharp />
                    <span className="ml-[10px]">{footerItems[0]?.address}</span>
                  </li>
                  <li className="flex items-center">
                    <IoCallSharp />
                    <Link
                      href={footerItems[0]?.contactNumber}
                      className="ml-[10px] font-normal transition-all hover:text-primary"
                    >
                      {footerItems[0]?.contactNumberText}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="footer-widget">
                <h2 className="mb-[15px] text-[18px]">
                  {footerItems[0]?.infoTitle}
                </h2>
                <ul>
                  {footerItems[0]?.infoList?.map((item) => (
                    <li className="mb-[5px] last:mb-0" key={item.id}>
                      <Link
                        href={item?.path}
                        className="font-normal transition-all hover:text-primary"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <div className="footer-widget">
                <h2 className="mb-[15px] text-[18px]">
                  {footerItems[0]?.aboutTitle}
                </h2>
                <ul>
                  {footerItems[0]?.aboutList?.map((item) => (
                    <li className="mb-[5px] last:mb-0" key={item.id}>
                      <Link
                        href={item?.path}
                        className="font-normal transition-all hover:text-primary"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="footer-widget mx-auto lm:max-w-[410px]">
                <h2 className="mb-[15px] text-[18px]">
                  {footerItems[0]?.newsletterTitle}
                </h2>
                <form>
                  <div className="input-field relative ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full border-0 border-b border-[rgba(0,0,0,.25)] bg-transparent p-[10px_35px_10px_0] outline-none focus-visible:border-primary focus-visible:text-primary"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-[20px] text-[#99999] opacity-70"
                    >
                      <IoArrowForwardOutline />
                    </button>
                  </div>
                </form>
                <ul className="flex pt-[50px]">
                  {footerItems[0]?.menuList?.map((item) => (
                    <li
                      className="mr-[20px] last:mr-0 xl:mr-[30px]"
                      key={item.id}
                    >
                      <Link
                        href={item?.path}
                        className="font-normal transition-all hover:text-primary"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="homecarousel-container mx-[15px] md:mx-[100px]">
          <div className="inner-container border-t border-[#ededed] pb-[25px] pt-[35px]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 max-md:order-2 lg:col-span-6">
                <span className="flex items-center justify-center pt-[10px] lg:justify-start">
                  © {new Date().getFullYear()} Helendo.
                  <Link
                    href={footerItems[0]?.copyrightLink}
                    className="ml-[5px] font-normal transition-all hover:text-primary"
                  >
                    All Rights Reserved.
                  </Link>
                </span>
              </div>
              <div className="col-span-12 max-md:order-1 lg:col-span-6">
                <div className="social-link flex justify-center lg:justify-end">
                  <h2 className="pr-[65px] text-[16px]">
                    {footerItems[0]?.socialTitle}
                  </h2>
                  <ul className="flex">
                    {footerItems[0]?.socialList?.map((item) => {
                      const Social = FaIcons[item.socialIcon]
                      return (
                        <li className="mr-[25px] last:mr-0" key={item.id}>
                          <Link
                            href={item?.path}
                            className="transition-all hover:text-primary"
                          >
                            <Social />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterCompsThree.propTypes = {
  footerItems: PropTypes.instanceOf(Object).isRequired,
}

export default FooterCompsThree
