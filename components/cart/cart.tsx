import { IoCloseOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { RootState } from '@/store'
import CartItem from '@/components/cart/components/cart-item'

interface CartProps {
  minicart: boolean
  showMiniCart: () => void
}

const minicartGroupBtn = `flex items-center justify-center border border-[#222222]  w-full h-[50px]`
const Cart = ({ minicart, showMiniCart }: CartProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const initialValue = 0
  const SubTotal = cartItems.reduce(
    (accumulator, current) =>
      // @ts-ignore
      accumulator + current.price * current.quantity,
    initialValue,
  )

  return (
    <div
      className={minicart ? 'minicart-area active' : 'minicart-area'}
      onClick={showMiniCart}
    >
      <div className="minicart-inner" onClick={(e) => e.stopPropagation()}>
        <div className="minicart-top ml-[-8px]">
          <IoCloseOutline
            className="cursor-pointer text-[32px] text-[#212121]"
            onClick={showMiniCart}
          />
        </div>
        <div className="minicart-body pt-[25px]">
          <div className="minicart-container">
            {cartItems.length <= 0 && (
              <h2 className="text-[20px]">Your cart is currently empty.</h2>
            )}
            <ul className="max-h-[205px] overflow-auto">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            {cartItems.length <= 0 ||
              (initialValue === 0 && (
                <>
                  <div className="minicart-subtotal flex justify-between pt-[40px] text-[24px] font-medium">
                    <span>Subtotal:</span>
                    <span>${SubTotal.toFixed(2)}</span>
                  </div>
                  <ul className="minicart-group-btn pt-[40px]">
                    <li className="mb-[15px]">
                      <Link
                        href="/cart"
                        className={`${minicartGroupBtn} transition-all duration-500 hover:bg-[#222222] hover:text-white`}
                      >
                        View cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/checkout"
                        className={`${minicartGroupBtn} bg-[#222222] text-white`}
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
