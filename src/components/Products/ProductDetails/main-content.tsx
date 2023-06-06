import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoAddSharp, IoHeartOutline, IoRemoveSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/cart/cart-slice'
import { wishlistActions } from '@/store/wishlist/wishlist-slice'

// Tailwind Related Stuff
const soldOut = `bg-black text-white block leading-[28px] absolute top-[15px] right-[15px] px-[15px] z-[1]`
const bestSeller = `bg-[#f14705] text-[14px] text-white block rounded-full absolute top-[15px] left-[15px] w-[45px] h-[45px] leading-[45px] text-center z-[1]`
const productOffer = `bg-[#98d8ca] text-[14px] text-white block rounded-full absolute top-[70px] left-[15px] w-[45px] h-[45px] leading-[45px] text-center z-[1]`
const qtybutton = `cursor-pointer text-center absolute w-[24px] leading-[23px]`
const qtyButtonWrap = `relative inline-flex border border-[#dddddd]`
const addtoCartBtn = `bg-black text-white px-[42px] h-[46px] leading-[44px]`
const wishlistBtn = `border border-[#dddddd] text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all hover:text-primary`

function MainContent({ product }) {
  const {
    id,
    title,
    price,
    discountPrice,
    totalPrice,
    soldOutSticker,
    bestSellerSticker,
    offerSticker,
  } = product
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

  return (
    <div className="product-detail border-b border-[#ededed] py-[50px] md:py-[90px]">
      <div className="container">
        <div className="grid grid-cols-12 max-md:gap-y-[25px] lg:gap-x-[25px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="product-detail-img relative">
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
                src={`/images/products/${product?.slug}/${product?.mdImage}`}
                alt={product?.altImage}
                width={585}
                height={585}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="product-detail-content">
              <h3 className="mb-[10px]">{product?.title}</h3>
              {price && !discountPrice && (
                <span className="product-price mb-[25px] text-[30px] leading-[42px] text-[#999999]">
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

              <p className="text-[14px] leading-[24px] lg:max-w-[450px]">
                {product?.desc}
              </p>
              <div className="group-btn flex py-[30px]">
                <div className={`${qtyButtonWrap} mr-[15px]`}>
                  <div className="flex w-[120px] justify-center">
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
              <div className="other-info">
                <div className="sku-wrap font-medium">
                  <span>SKU:</span>
                  <span className="ml-[5px] text-[#666666]">
                    {product?.sku}
                  </span>
                </div>
                <div className="category-wrap font-medium">
                  <span>Categories:</span>
                  <span className="ml-[5px] text-[#666666]">
                    {product?.category}
                  </span>
                </div>
                <div className="category-wrap font-medium">
                  <span>Tags:</span>
                  <span className="ml-[5px] text-[#666666]">
                    {product?.tag}
                  </span>
                </div>
                <div className="social-wrap flex pt-[65px]">
                  <span className="font-medium text-black">
                    Share this items :
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MainContent.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
}

export default MainContent
