'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  IoAddSharp,
  IoBagHandleOutline,
  IoPricetagOutline,
  IoHeartOutline,
  IoRemoveSharp,
} from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import { cartActions } from '@/store/cart/cart-slice'
import { filterActions } from '@/store/product-filter/filter-slice'
import { wishlistActions } from '@/store/wishlist/wishlist-slice'
import QuickView from '@/components/QuickView'

// Tailwind Related Stuff
const addAction =
  'flex justify-center absolute w-full top-1/2 left-auto transform -translate-y-1/2 z-[1]'
const addActionButton =
  'bg-white rounded-full flex justify-center items-center text-[21px] w-[45px] h-[45px] leading-[48px] hover:text-primary transition-all opacity-0 invisible ease-in-out transform translate-y-20 duration-[.5s] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible'
const soldOut = `bg-black text-white block leading-[28px] absolute top-[15px] right-[15px] px-[15px] z-[1]`
const bestSeller = `bg-[#f14705] text-[14px] text-white block rounded-full absolute top-[15px] left-[15px] w-[45px] h-[45px] leading-[45px] text-center z-[1]`
const productOffer = `bg-[#98d8ca] text-[14px] text-white block rounded-full absolute top-[70px] left-[15px] w-[45px] h-[45px] leading-[45px] text-center z-[1]`
const qtybutton = `cursor-pointer text-center absolute w-[24px] leading-[23px]`
const qtyButtonWrap = `relative inline-flex border border-[#dddddd]`
const addtoCartBtn = `bg-black text-white px-[42px] h-[46px] leading-[44px]`
const wishlistBtn = `border border-[#dddddd] text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all hover:text-primary`
const textHover = `transition-all hover:text-primary`

interface ProductItemProps {
  product: any
  productFilter: any
  productFilterPath: string
}

function ProductItem({ product, productFilter, productFilterPath }) {
  const {
    id,
    title,
    price,
    discountPrice,
    totalPrice,
    soldOutSticker,
    bestSellerSticker,
    offerSticker,
    desc,
  } = product

  const productImageSrc = `/images/products/${product?.slug}/${product?.smImage}`

  const [isOpen, setIsOpen] = useState(false)

  const [quantityCount, setQuantityCount] = useState(1)

  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        quantity: quantityCount,
        totalPrice,
        image: `/images/products/${product?.slug}/${product?.xsImage}`,
        slug: `/products/${product?.slug}`,
      }),
    )
  }

  const filterChangeHandler = (isAdd, data) => {
    if (isAdd) {
      dispatch(filterActions.addFilter(data))
    } else {
      dispatch(filterActions.removeFilter(data))
    }
  }

  const addToWishlistHandler = () => {
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        price,
        totalPrice,
        image: `/images/products/${product?.slug}/${product?.xsImage}`,
        slug: `/products/${product?.slug}`,
      }),
    )
  }

  // @ts-ignore
  return (
    <>
      <div className="product-item">
        <div className="product-img group relative after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgba(0,0,0,.1)] after:opacity-0 after:transition-all hover:after:opacity-100">
          <Link href={`/products/${product?.slug}`} className="block">
            {soldOutSticker && (
              <span className={`${soldOutSticker ? `${soldOut}` : ''}`}>
                {soldOutSticker}
              </span>
            )}
            {bestSellerSticker && (
              <span className={`${bestSellerSticker ? `${bestSeller}` : ''}`}>
                {bestSellerSticker}
              </span>
            )}
            {offerSticker && (
              <span className={`${offerSticker ? `${productOffer}` : ''}`}>
                {offerSticker}
              </span>
            )}
            <img
              className="w-full"
              src={productImageSrc}
              alt={product?.altImage}
              width={300}
              height={300}
            />
          </Link>
          <div className={addAction}>
            <button
              type="button"
              className={`${addActionButton} group-hover:delay-[0s] mr-[15px]`}
              onClick={() => setIsOpen(true)}
            >
              <IoAddSharp />
            </button>
            <div className={`${soldOutSticker ? `cursor-not-allowed` : ''}`}>
              {!bestSellerSticker && (
                <button
                  type="button"
                  onClick={addToCartHandler}
                  className={`${
                    soldOutSticker ? `pointer-events-none brightness-75` : ''
                  }  ${addActionButton} group-hover:delay-[.15s] mr-[15px]`}
                >
                  <IoBagHandleOutline />
                </button>
              )}
              {bestSellerSticker && (
                <Link
                  href={`/products/${product?.slug}`}
                  className={`${
                    soldOutSticker ? `pointer-events-none brightness-75` : ''
                  }  ${addActionButton} group-hover:delay-[.15s] mr-[15px]`}
                >
                  <IoPricetagOutline />
                </Link>
              )}
            </div>
            <button
              onClick={addToWishlistHandler}
              type="button"
              className={`${addActionButton} group-hover:delay-[.3s]`}
            >
              <IoHeartOutline />
            </button>
          </div>
        </div>
        <div className="product-content text-center">
          <h3 className="mb-[5px]">
            <Link
              href={`/products/${product?.slug}`}
              className="text-[16px] transition-all hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          {price && !discountPrice && (
            <span className="product-price text-[18px] leading-[31px] text-[#666666]">
              ${price.toFixed(2)}
            </span>
          )}
          {price && discountPrice && (
            <div className="product-price-wrap mb-[10px] flex justify-center">
              <span className="product-price block text-[18px] leading-[31px] text-[#666666]">
                ${price.toFixed(2)}
              </span>
              <span className="product-price relative block text-[18px] leading-[31px] text-[#666666] before:mx-[10px] before:content-['-']">
                ${discountPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </div>

      <QuickView open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="quickview-body h-[700px] w-full overflow-y-auto md:h-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="product-img md:h-full">
              <Link
                href={`/products/${product?.slug}`}
                className="relative block md:h-full"
              >
                {soldOutSticker && (
                  <span className={`${soldOutSticker ? `${soldOut}` : ''}`}>
                    {soldOutSticker}
                  </span>
                )}
                {bestSellerSticker && (
                  <span
                    className={`${bestSellerSticker ? `${bestSeller}` : ''}`}
                  >
                    {bestSellerSticker}
                  </span>
                )}
                {offerSticker && (
                  <span className={`${offerSticker ? `${productOffer}` : ''}`}>
                    {offerSticker}
                  </span>
                )}
                <img
                  className="w-full md:h-full md:object-cover"
                  src={`/images/products/${product?.slug}/${product?.mdImage}`}
                  alt={product?.altImage}
                  width={585}
                  height={585}
                />
              </Link>
            </div>
            <div className="product-content px-[30px] py-[40px]">
              <h2 className="mb-[15px] text-[24px]">{title}</h2>
              {price && !discountPrice && (
                <span className="product-price mb-[25px] block text-[30px] leading-[42px] text-[#999999]">
                  ${price.toFixed(2)}
                </span>
              )}
              {price && discountPrice && (
                <div className="product-price-wrap mb-[10px] flex">
                  <span className="product-price block text-[30px] leading-[42px] text-[#999999]">
                    ${price.toFixed(2)}
                  </span>
                  <span className="product-price relative block text-[30px] leading-[42px] text-[#999999] before:mx-[10px] before:content-['-']">
                    ${discountPrice.toFixed(2)}
                  </span>
                </div>
              )}
              <h3 className="stock mb-[20px] text-[14px] font-semibold">
                Available:
                <span className="ml-[5px] text-[#3bc604]">
                  {product?.availability}
                </span>
              </h3>
              <p>{desc}</p>
              <div className="group-btn flex py-[30px] max-xs:flex-wrap">
                <div className={`${qtyButtonWrap} mr-[15px] max-xs:mb-[10px]`}>
                  <div className="flex w-[100px] justify-center lg:w-[120px]">
                    <button
                      type="button"
                      className={`${qtybutton} dec left-[4px] top-1/2 -translate-y-1/2`}
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1,
                        )
                      }
                    >
                      <IoRemoveSharp />
                    </button>
                    <input
                      className="qty-input h-[46px] w-[100px] px-[15px] text-center leading-[40px] outline-none"
                      type="text"
                      name="qtybutton"
                      value={quantityCount}
                      onChange={(e) => {
                        const userInput = Number(e.target.value)
                        if (userInput.toString() !== 'NaN') {
                          setQuantityCount(userInput)
                        }
                      }}
                    />
                    <button
                      type="button"
                      className={`${qtybutton} inc right-[4px] top-1/2 -translate-y-1/2`}
                      onClick={() =>
                        setQuantityCount(
                          quantityCount >= 0
                            ? quantityCount + 1
                            : quantityCount,
                        )
                      }
                    >
                      <IoAddSharp />
                    </button>
                  </div>
                </div>
                <div
                  className={`${soldOutSticker ? `cursor-not-allowed` : ''}`}
                >
                  <button
                    type="button"
                    className={`${addtoCartBtn} ${
                      soldOutSticker ? `pointer-events-none` : ''
                    } mr-[15px]`}
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                </div>
                <button
                  onClick={addToWishlistHandler}
                  type="button"
                  className={`${wishlistBtn}`}
                >
                  <IoHeartOutline />
                </button>
              </div>
              <div className="sku-wrap font-medium">
                <span>SKU:</span>
                <span className="ml-[5px] text-[#666666]">{product?.sku}</span>
              </div>
              <div className="category-wrap flex max-xs:flex-wrap">
                <span className="font-medium text-black">Categories:</span>
                {productFilter[0]?.categoryList?.map((singleCategoryList) => (
                  <Link
                    href={`/products/${productFilterPath}`}
                    key={singleCategoryList.id}
                  >
                    <button
                      type="button"
                      className={`${textHover} ml-[10px] font-medium capitalize text-[#666666] after:content-[","] last:after:content-none`}
                      onClick={() =>
                        filterChangeHandler(true, {
                          title: singleCategoryList.categoryListTitle,
                          key: singleCategoryList.categoryListTitle,
                          group: 'category',
                        })
                      }
                    >
                      {singleCategoryList.categoryListTitle}
                    </button>
                  </Link>
                ))}
              </div>
              <div className="tag-wrap flex max-xs:flex-wrap">
                <span className="font-medium text-black">Tags:</span>
                {productFilter[0]?.tagList?.map((singleTagList) => (
                  <Link
                    href={`/products/${productFilterPath}`}
                    key={singleTagList.id}
                  >
                    <button
                      type="button"
                      className={`${textHover} ml-[10px] font-medium capitalize text-[#666666] after:content-[","] last:after:content-none`}
                      onClick={() =>
                        filterChangeHandler(true, {
                          title: singleTagList.tagTitle,
                          key: singleTagList.tagTitle,
                          group: 'tag',
                        })
                      }
                    >
                      <span className={`${singleTagList.tagTitle}`}>
                        {singleTagList.tagTitle}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
              <div className="social-wrap flex pt-[65px]">
                <span className="font-medium text-black">
                  Share this items :
                </span>
              </div>
            </div>
          </div>
        </div>
      </QuickView>
    </>
  )
}

export default ProductItem
