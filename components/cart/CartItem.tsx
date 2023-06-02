import Link from 'next/link';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { cartActions } from '../../store/cart/cart-slice';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const { image, slug, title, quantity, price } = item;

    const removeItemFromCartHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <li className="item flex items-start justify-between border-b border-[#dddddd] pb-[25px] mb-[20px] last:mb-0 last:pb-0 last:border-b-0">
            <div className="item-img">
                <Link href={slug} className="product-img">
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="item-content w-[calc(100%-88px)] pl-[20px]">
                <h3 className="leading-[21px]">
                    <Link
                        href={slug}
                        className="text-[15px] transition-all hover:text-primary"
                    >
                        {title}
                    </Link>
                </h3>
                <div className="font-medium text-[15px] leading-[26px]">
                    Qty : <span className="text-[#666666]">{quantity}</span>
                </div>
                <div className="font-medium text-[13px] leading-[23px]">
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

CartItem.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
};

export default CartItem;
