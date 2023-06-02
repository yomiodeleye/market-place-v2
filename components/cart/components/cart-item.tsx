import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {IoCloseOutline} from 'react-icons/io5';
import {tCartItem} from "@/types/cart";
import {cartActions} from "@/store/cart/cart-slice";

interface CartItemProp {
  item: tCartItem
}

const CartItem = ({item}: CartItemProp) => {
  const dispatch = useDispatch();

  const {image, slug, name, quantity, price} = item;

  const removeItemFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li
      className="item mb-[20px] flex items-start justify-between border-b border-[#dddddd] pb-[25px] last:mb-0 last:border-b-0 last:pb-0">
      <div className="item-img">
        <Link href={slug} className="product-img">
          <img src={image} alt={name}/>
        </Link>
      </div>
      <div className="item-content w-[calc(100%-88px)] pl-[20px]">
        <h3 className="leading-[21px]">
          <Link
            href={slug}
            className="text-[15px] transition-all hover:text-primary"
          >
            {name}
          </Link>
        </h3>
        <div className="text-[15px] font-medium leading-[26px]">
          Qty : <span className="text-[#666666]">{quantity}</span>
        </div>
        <div className="text-[13px] font-medium leading-[23px]">
          Price:{' '}
          <span className="text-[#666666]">${price.toFixed(2)}</span>{' '}
        </div>
      </div>
      <button type="button" className="item-remove flex items-start">
        <IoCloseOutline
          onClick={() => removeItemFromCartHandler(item.id)}
        />
      </button>
    </li>
  );
}

export default CartItem
