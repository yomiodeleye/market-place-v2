import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import SearchBarComps from '../SearchBarComps'
import LogoComps from '../LogoComps'
import HeaderRight from './HeaderRightSide'

function TransparentHeader({ headerItems }) {
  const header = useRef()
  useEffect(() => {
    window.addEventListener('scroll', isSticky)

    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = e => {
    const scrollTop = window.scrollY

    scrollTop >= 90
      ? header.current?.classList.add('is-sticky')
      : header.current?.classList.remove('is-sticky')
  }

  return (
    <header
      ref={header}
      className='absolute top-0 z-30 flex h-[90px] w-full items-center px-[20px]'
    >
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='max-lm:hidden md:col-span-4'>
            <SearchBarComps placeholdertext='Search Anything...' />
          </div>
          <div className='col-span-4 sm:col-span-6 md:col-span-4'>
            <LogoComps
              headerItems={headerItems}
              headerLogoCName='flex md:justify-center'
              logoPath='/'
            />
          </div>
          <div className='col-span-8 self-center sm:col-span-6 md:col-span-4'>
            <HeaderRight headerItems={headerItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

TransparentHeader.propTypes = {
  headerItems: PropTypes.instanceOf(Object).isRequired
}

export default TransparentHeader
