import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoMenuOutline,
  IoPersonOutline
} from 'react-icons/io5'
import { useSelector } from 'react-redux'

import Cart from '../cart'
import OffcanvasComps from './OffcanvasComps'

// Tailwind Related Stuff
const badge =
  'bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white'

function HeaderRight({ headerItems }) {
  const [offcanvas, setOffcanvas] = useState(false)
  const showOffcanvas = () => setOffcanvas(!offcanvas)

  const [minicart, setMiniCart] = useState(false)
  const showMiniCart = () => setMiniCart(!minicart)

  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const wishlistQuantity = useSelector(state => state.wishlist.totalQuantity)

  return (
    <>
      <div className='flex justify-end'>
        <div className='user-item mr-[15px] sm:mr-[25px] md:mr-[35px]'>
          <Link
            href='/auth'
            className='text-2xl transition-all hover:text-primary'
          >
            <IoPersonOutline />
          </Link>
        </div>
        <div className='wishlist-item mr-[15px] sm:mr-[25px] md:mr-[35px]'>
          <Link
            href='/wishlist'
            className='group relative block text-2xl transition-all hover:text-primary'
          >
            <IoHeartOutline />
            <span className={badge}>{wishlistQuantity}</span>
          </Link>
        </div>
        <div className='minicart-item mr-[15px] sm:mr-[25px] md:mr-[35px]'>
          <button
            type='button'
            className='group relative text-2xl transition-all hover:text-primary'
            onClick={showMiniCart}
          >
            <IoBagHandleOutline />
            <span className={badge}>{cartQuantity}</span>
          </button>
        </div>
        <div className='menu-item'>
          <button
            type='button'
            className='text-2xl transition-all hover:text-primary'
            onClick={showOffcanvas}
          >
            <IoMenuOutline />
          </button>
        </div>
      </div>

      <OffcanvasComps
        headerItems={headerItems}
        offcanvas={offcanvas}
        showOffcanvas={showOffcanvas}
      />
      <Cart minicart={minicart} showMiniCart={showMiniCart} />
    </>
  )
}

HeaderRight.propTypes = {
  headerItems: PropTypes.instanceOf(Object).isRequired
}

export default HeaderRight
