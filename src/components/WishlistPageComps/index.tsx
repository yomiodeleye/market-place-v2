import Link from 'next/link'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { wishlistActions } from '@/store/wishlist/wishlist-slice'
import EmptyWishlist from './EmptyWishlist'

function WishlistPageComps({ wishlistPageItems }) {
  const initialValue = 0

  const dispatch = useDispatch()

  const wishlistItems = useSelector((state) => state.wishlist.items)

  const removeItemFromWishlistHandler = (id) => {
    dispatch(wishlistActions.removeItemFromWishlist(id))
  }

  const clearAllItemHandler = () => {
    dispatch(wishlistActions.clearAllFromWishlist())
  }

  return (
    <div className="wishlist border-b border-[#ededed] py-[30px] pb-[50px] md:py-[60px] md:pb-[80px] lg:pb-[100px] lg:pt-[80px]">
      <div className="container">
        {wishlistItems.length <= 0 && <EmptyWishlist />}
        {wishlistItems.length <= 0 ||
          (initialValue === 0 && (
            <>
              <div className="overflow-x-auto">
                <table className="wishlist-table w-full bg-[#f4f5f7] text-left text-sm">
                  <thead className="text-[18px]">
                    <tr>
                      {wishlistPageItems[0]?.wishlistThList?.map(
                        (singleWishlistTh) => (
                          <th
                            key={singleWishlistTh.id}
                            scope="col"
                            className={`${singleWishlistTh.thCName} first:pl-[100px]`}
                          >
                            {singleWishlistTh.thName}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  {wishlistItems.map((item) => (
                    <tbody key={item.id}>
                      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td className="flex items-center whitespace-nowrap py-[30px] pr-[25px] font-medium text-gray-900 dark:text-white">
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
                        <td className="py-[30px]">${item.price.toFixed(2)}</td>
                        <td className="py-[30px]">
                          <Link
                            href="https://www.amazon.com"
                            className="inline-flex h-[46px] items-center bg-black px-[12px] text-white transition-all hover:bg-[#222222] sm:px-[42px]"
                          >
                            Buy Now
                          </Link>
                        </td>
                        <td className="py-[30px] text-right">
                          <button
                            type="button"
                            className="item-remove"
                            onClick={() =>
                              removeItemFromWishlistHandler(item.id)
                            }
                          >
                            <IoCloseOutline className="text-[24px] transition-all hover:text-red-500" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
              <div className="group-btn flex justify-end pt-[30px]">
                <div className="btn-wrap">
                  <button
                    onClick={clearAllItemHandler}
                    type="button"
                    className="inline-flex h-[46px] items-center border border-black px-[12px] transition-all hover:bg-[#222222] hover:text-white sm:px-[42px]"
                  >
                    {wishlistPageItems[0]?.clearWishlistBtnText}
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

WishlistPageComps.propTypes = {
  wishlistPageItems: PropTypes.instanceOf(Object).isRequired,
}

export default WishlistPageComps
