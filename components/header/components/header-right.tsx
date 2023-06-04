'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoMenuOutline,
  IoPersonOutline,
  IoSearchOutline,
} from 'react-icons/io5'
import {
  FullscreenSearchBar,
  OffcanvasComps,
} from '@/components/header/components/index'
import { Cart } from '@/components/cart'
import Link from 'next/link'

const badge =
  'bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white'

const HeaderRight = ({}) => {
  let isInitial = true

  const [fullscreenSearch, setFullscreenSearch] = useState(false)
  const showFullscreenSearch = () => setFullscreenSearch(!fullscreenSearch)

  const [offcanvas, setOffcanvas] = useState(false)
  const showOffcanvas = () => setOffcanvas(!offcanvas)

  const [minicart, setMiniCart] = useState(false)
  const showMiniCart = () => setMiniCart(!minicart)

  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  )
  const wishlistQuantity = useSelector(
    (state: RootState) => state.wishlist.totalQuantity,
  )

  useEffect(() => {
    if (isInitial) {
      isInitial = false
    }
  }, [])

  return (
    <>
      <div className="flex justify-end">
        <div className="user-item mr-[15px] sm:mr-[25px] md:mr-[35px]">
          <Link
            href="/account/login"
            className="text-2xl transition-all hover:text-primary"
          >
            <IoPersonOutline />
          </Link>
        </div>
        <div className="wishlist-item mr-[15px] sm:mr-[25px] md:mr-[35px]">
          <Link
            href="/wishlist"
            className="group relative block text-2xl transition-all hover:text-primary"
          >
            <IoHeartOutline />
            <span className={badge}>{wishlistQuantity}</span>
          </Link>
        </div>
        <div className="search-item mr-[35px]">
          <button
            type="button"
            className="text-2xl"
            onClick={showFullscreenSearch}
          >
            <IoSearchOutline />
          </button>
        </div>
        <div className="minicart-item mr-[35px]">
          <button
            type="button"
            className="group relative text-2xl transition-all hover:text-primary"
            onClick={showMiniCart}
          >
            <IoBagHandleOutline />
            <span className={badge}>{cartQuantity}</span>
          </button>
        </div>
        <div className="menu-item">
          <button
            type="button"
            className="text-2xl transition-all hover:text-primary"
            onClick={showOffcanvas}
          >
            <IoMenuOutline />
          </button>
        </div>
      </div>

      <OffcanvasComps offcanvas={offcanvas} showOffcanvas={showOffcanvas} />
      <FullscreenSearchBar
        fullscreenSearch={fullscreenSearch}
        showFullscreenSearch={showFullscreenSearch}
      />
      <Cart minicart={minicart} showMiniCart={showMiniCart} />
    </>
  )
}

export default HeaderRight
