import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import {
  IoArrowBackSharp,
  IoCloseOutline,
  IoAddSharp,
  IoRemoveSharp,
} from 'react-icons/io5'
import { cartActions } from '@/store/cart/cart-slice'
import EmptyCart from './EmptyCart'

const qtybutton = `cursor-pointer text-center absolute`
const qtyButtonWrap = `relative inline-flex`

function CartPageComps({ cartPageItems }) {
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)
  const [quantityCount, setQuantityCount] = useState({
    empty: true,
  })

  useEffect(() => {
    if (quantityCount.empty && cartItems.length) {
      const tempObj = {}
      cartItems.forEach((item) => {
        tempObj[item.id] = item.quantity
      })

      setQuantityCount(tempObj)
    }
  }, [cartItems, quantityCount.empty])

  useEffect(() => {
    if (!quantityCount.empty) {
      dispatch(cartActions.updateItemQuantityFromCart(quantityCount))
    }
  }, [dispatch, quantityCount])

  const removeItemFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const clearAllItemHandler = () => {
    dispatch(cartActions.clearAllFromCart())
  }

  const initialValue = 0
  const SubTotal = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue,
  )

  return (
    <div className="cart border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[90px]">
      <div className="container">
        {cartItems.length <= 0 && <EmptyCart />}
        {cartItems.length <= 0 ||
          (initialValue === 0 && (
            <>
              <div className="relative overflow-x-auto">
                <table className="cart-table w-full text-left text-sm">
                  <thead className="bg-[#f4f5f7] text-[18px]">
                    <tr>
                      {cartPageItems[0]?.cartThList?.map((singleCartTh) => (
                        <th
                          key={singleCartTh.id}
                          scope="col"
                          className={`${singleCartTh.thCName} first:pl-[100px]`}
                        >
                          {singleCartTh.thName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {cartItems.map((item) => (
                    <tbody key={item.id}>
                      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td className="product-name flex items-center whitespace-nowrap py-4 pr-[25px] font-medium text-gray-900 dark:text-white">
                          <Link
                            href={item.slug}
                            className="product-img w-[100px]"
                          >
                            <img src={item.image} alt={item.name} />
                          </Link>
                          <h2 className="product-name">
                            <Link
                              href={item.slug}
                              className="text-[14px] transition-all hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </h2>
                        </td>
                        <td className="py-4">${item.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className={`${qtyButtonWrap} mr-[15px]`}>
                            <div className="flex w-[120px] justify-center">
                              <button
                                type="button"
                                className={`${qtybutton} dec left-[4px] top-1/2 -translate-y-1/2`}
                                onClick={() => {
                                  setQuantityCount((prevData) => ({
                                    ...prevData,
                                    [item.id]:
                                      prevData[item.id] > 0
                                        ? prevData[item.id] - 1
                                        : prevData[item.id],
                                  }))
                                }}
                              >
                                <IoRemoveSharp />
                              </button>
                              <input
                                className="qty-input h-[46px] w-[100px] px-[15px] text-center leading-[40px] outline-none"
                                type="number"
                                name="qtybutton"
                                value={quantityCount[item.id] || item.length}
                                onChange={(e) => {
                                  const userInput = Number(e.target.value)
                                  if (userInput.toString() !== 'NaN') {
                                    setQuantityCount((prevData) => ({
                                      ...prevData,
                                      [item.id]: userInput,
                                    }))
                                  }
                                }}
                              />
                              <button
                                type="button"
                                className={`${qtybutton} inc right-[4px] top-1/2 -translate-y-1/2`}
                                onClick={() => {
                                  setQuantityCount((prevData) => ({
                                    ...prevData,
                                    [item.id]: prevData[item.id] + 1,
                                  }))
                                }}
                              >
                                <IoAddSharp />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">${item.totalPrice.toFixed(2)}</td>
                        <td className="py-4 text-right">
                          <button
                            type="button"
                            className="item-remove flex items-start text-[20px]"
                            onClick={() => removeItemFromCartHandler(item.id)}
                          >
                            <IoCloseOutline />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
              <div className="group-btn flex justify-between pt-[50px]">
                <Link
                  href="/products/left-sidebar"
                  className="inline-flex h-[46px] items-center bg-black px-[12px] text-white transition-all hover:bg-[#222222] sm:px-[42px]"
                >
                  <IoArrowBackSharp className="mr-[5px]" />
                  {cartPageItems[0]?.shopPageBtnText}
                </Link>
                <div className="btn-wrap">
                  <button
                    onClick={clearAllItemHandler}
                    type="button"
                    className="inline-flex h-[46px] items-center border border-black px-[12px] transition-all hover:bg-[#222222] hover:text-white sm:px-[42px]"
                  >
                    {cartPageItems[0]?.clearCartBtnText}
                  </button>
                </div>
              </div>
              <div className="cart-info pt-[50px]">
                <div className="grid grid-cols-12 max-lm:gap-y-[30px] md:gap-x-[30px]">
                  <div className="col-span-12 md:col-span-6">
                    <div className="coupon flex flex-col lg:max-w-[400px]">
                      <h2 className="title mb-[30px] text-[18px]">
                        {cartPageItems[0]?.couponTitle}
                      </h2>
                      <p className="desc mb-[15px]">
                        {cartPageItems[0]?.couponDesc}
                      </p>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Coupon code"
                        className="border border-[#cccccc] p-[15px_15px_13px] outline-none"
                      />
                      <div className="btn-wrap inline-flex items-center pt-[30px]">
                        <button
                          type="submit"
                          className=" h-[46px] border border-black px-[42px] transition-all hover:bg-[#222222] hover:text-white"
                        >
                          {cartPageItems[0]?.couponBtnText}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="cart-subtotal ml-auto lg:max-w-[400px]">
                      <div className="border border-[#bfbfbf] bg-[#f9f9f9] px-[30px]">
                        <ul className="content py-[30px]">
                          <li className="item mb-[17px] flex justify-between border-b border-[#cdcdcd] pb-[16px]">
                            <span className="font-bold">Subtotal:</span>
                            <span>${SubTotal.toFixed(2)}</span>
                          </li>
                          <li className="item flex justify-between">
                            <span className="font-bold">Total:</span>
                            <span>${SubTotal.toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="btn-wrap flex justify-center pt-[30px]">
                        <Link
                          href="/checkout"
                          className="h-[46px] w-full bg-black px-[42px] text-center leading-[46px] text-white transition-all hover:bg-[#222222]"
                        >
                          {cartPageItems[0]?.proceedBtnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

CartPageComps.propTypes = {
  cartPageItems: PropTypes.instanceOf(Object).isRequired,
}

export default CartPageComps
