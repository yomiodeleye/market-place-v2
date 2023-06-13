import { IoCloseOutline } from 'react-icons/io5'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa'
import OffcanvasMenu from '@/components/layout/header/components/offcanvas-menu'
import {
  contactInfo,
  contactInfoTitle,
  currencyList,
  currencyTitle,
  languageList,
  languageTitle,
  socialList,
  socialTitle
} from '@/config/header-menu'

interface OffcanvasCompsProps {
  offcanvas: boolean
  showOffcanvas: () => void
}

const OffcanvasComps = ({ offcanvas, showOffcanvas }: OffcanvasCompsProps) => {
  return (
    <div
      className={offcanvas ? 'offcanvas-menu active' : 'offcanvas-menu'}
      onClick={showOffcanvas}
    >
      <div
        className='offcanvas-menu-inner overflow-y-auto'
        onClick={e => e.stopPropagation()}
      >
        <div className='offcanvas-top flex'>
          <button
            type='button'
            className='offcanvas-close-btn text-[32px]'
            aria-label='Right Align'
          >
            <IoCloseOutline onClick={showOffcanvas} />
          </button>
        </div>
        <div className='offcanvas-setting grid grid-cols-2 pt-[40px]'>
          <div className='language-widget'>
            <h3 className='mb-[15px] text-[16px]'>{languageTitle}</h3>
            <ul>
              {languageList?.map(items => (
                <li className='mb-[10px] last:mb-0' key={items.id}>
                  <Link
                    href={`${items.path}`}
                    className='hover:text-primary block font-normal text-[#999999] transition-all'
                  >
                    {items.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='currency-widget'>
            <h3 className='mb-[10px] text-[16px]'>{currencyTitle}</h3>
            <ul>
              {currencyList?.map(items => (
                <li className='mb-[15px] last:mb-0' key={items.id}>
                  <Link
                    href={items.path}
                    className='hover:text-primary block font-normal text-[#999999] transition-all'
                  >
                    {items.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <OffcanvasMenu />
        <div className='offcanvas-contact-info pt-[60px]'>
          <h3 className='text-[16px]'>{contactInfoTitle}</h3>
          <p
            className='pt-[20px] text-[#666666]'
            dangerouslySetInnerHTML={{
              __html: contactInfo
            }}
          />
          <div className='offcanvas-social-link flex items-center justify-between pt-[55px]'>
            <h3 className='text-[16px]'>{socialTitle}</h3>
            <ul className='flex'>
              {socialList?.map(item => {
                const Social = FaIcons[item.socialIcon]
                return (
                  <li className='mr-[25px] last:mr-0' key={item.id}>
                    <Link
                      href={item?.path}
                      className='hover:text-primary transition-all'
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
  )
}

export default OffcanvasComps
