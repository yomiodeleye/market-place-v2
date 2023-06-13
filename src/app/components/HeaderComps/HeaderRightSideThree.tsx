import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  IoBagHandleOutline,
  IoMenuOutline,
  IoSearchOutline
} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

import Cart from '../cart'
import FullscreenSearchBar from './FullscreenSearchBar'
import OffcanvasComps from './OffcanvasComps'

let isInitial = true

const badge =
  'bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white'

function HeaderRightThree({ headerItems }) {
  const [fullscreenSearch, setFullscreenSearch] = useState(false)
  const showFullscreenSearch = () => setFullscreenSearch(!fullscreenSearch)

  const [offcanvas, setOffcanvas] = useState(false)
  const showOffcanvas = () => setOffcanvas(!offcanvas)

  const [minicart, setMiniCart] = useState(false)
  const showMiniCart = () => setMiniCart(!minicart)

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
    }
  }, [cart, dispatch])

  return (
    <>
      <div className='flex justify-end'>
        <div className='search-item mr-[35px]'>
          <button
            type='button'
            className='text-2xl'
            onClick={showFullscreenSearch}
          >
            <IoSearchOutline />
          </button>
        </div>
        <div className='minicart-item mr-[35px]'>
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
      <FullscreenSearchBar
        headerItems={headerItems}
        fullscreenSearch={fullscreenSearch}
        showFullscreenSearch={showFullscreenSearch}
      />
      <Cart minicart={minicart} showMiniCart={showMiniCart} />
    </>
  )
}

HeaderRightThree.propTypes = {
  headerItems: PropTypes.instanceOf(Object).isRequired
}

export default HeaderRightThree
