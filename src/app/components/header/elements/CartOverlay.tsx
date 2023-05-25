import { IoIosClose } from 'react-icons/io'
import CustomScroll from 'react-custom-scroll'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'
import Anchor from '../../anchor'

const CartOverlay = ({ activeStatus, getActiveStatus }: any) => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state: any) => state.cart)
  let cartTotalPrice = 0

  return (
    <div className={clsx('cart-overlay', activeStatus && 'active')}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false)
          // @ts-ignore
          document.querySelector('body').classList.remove('overflow-hidden')
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false)
            // @ts-ignore
            document.querySelector('body').classList.remove('overflow-hidden')
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">Cart</h3>
          {cartItems.length >= 1 ? (
            <div className="cart-product-wrapper">
              <div className="cart-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {cartItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount,
                    ).toFixed(2)

                    cartTotalPrice += discountedPrice * product.quantity

                    return (
                      <div className="single-cart-product" key={i}>
                        <span className="cart-close-icon">
                          <button
                            onClick={() =>
                              dispatch(deleteFromCart(product.cartItemId))
                            }
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Anchor path={`/shop/product-basic/${product.slug}`}>
                            <img
                              src={
                                process.env.PUBLIC_URL + product.thumbImage[0]
                              }
                              className="img-fluid"
                              alt=""
                            />
                          </Anchor>
                        </div>
                        <div className="content">
                          <h5>
                            <Anchor
                              path={`/shop/product-basic/${product.slug}`}
                            >
                              {product.name}
                            </Anchor>
                          </h5>
                          {product.selectedProductColor &&
                          product.selectedProductSize ? (
                            <div className="cart-item-variation">
                              <span>Color: {product.selectedProductColor}</span>
                              <span>Size: {product.selectedProductSize}</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <p>
                            <span className="cart-count">
                              {product.quantity} x{' '}
                            </span>{' '}
                            <span className="discounted-price">
                              ${discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </CustomScroll>
              </div>
              {/*=======  subtotal calculation  =======*/}
              <p className="cart-subtotal">
                <span className="subtotal-title">Subtotal:</span>
                <span className="subtotal-amount">
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </p>
              {/*=======  cart buttons  =======*/}
              <div className="cart-buttons">
                <Anchor path="/other/cart">view cart</Anchor>
                <Anchor path="/other/checkout">checkout</Anchor>
              </div>
              {/*=======  free shipping text  =======*/}
              <p className="free-shipping-text">
                Free Shipping on All Orders Over $100!
              </p>
            </div>
          ) : (
            'No items found in cart'
          )}
        </div>
      </div>
    </div>
  )
}

export default CartOverlay
