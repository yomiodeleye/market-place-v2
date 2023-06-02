import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    IoMenuOutline,
    IoBagHandleOutline,
    IoHeartOutline,
    IoSearchOutline,
} from 'react-icons/io5';

import Cart from '../Cart';
import OffcanvasComps from './OffcanvasComps';
import FullscreenSearchBar from './FullscreenSearchBar';
import LogoComps from '../LogoComps';

let isInitial = true;

const badge =
    'bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white';

function HeaderRightTwo({ headerItems }) {
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    const [fullscreenSearch, setFullscreenSearch] = useState(false);
    const showFullscreenSearch = () => setFullscreenSearch(!fullscreenSearch);

    const [minicart, setMiniCart] = useState(false);
    const showMiniCart = () => setMiniCart(!minicart);

    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
        }
    }, [dispatch]);

    return (
        <>
            <div className="header-right-wrap max-lm:grid max-lm:grid-cols-12">
                <div className="col-span-4">
                    <LogoComps
                        headerItems={headerItems}
                        logoPath="/home-boxed"
                        headerLogoCName="flex justify-start md:hidden"
                    />
                </div>
                <div className="col-span-8">
                    <div className="flex justify-end">
                        <div className="search-item md:mr-[35px] mr-[20px]">
                            <button
                                type="button"
                                className="text-2xl"
                                onClick={showFullscreenSearch}
                            >
                                <IoSearchOutline />
                            </button>
                        </div>
                        <div className="wishlist-item md:mr-[35px] sm:mr-[25px] mr-[15px]">
                            <Link
                                href="/wishlist"
                                className="text-2xl relative group hover:text-primary transition-all"
                            >
                                <IoHeartOutline />
                                <span className={badge}>0</span>
                            </Link>
                        </div>
                        <div className="minicart-item md:mr-[35px] mr-[20px]">
                            <button
                                type="button"
                                className="text-2xl relative group hover:text-primary transition-all"
                                onClick={showMiniCart}
                            >
                                <IoBagHandleOutline />
                                <span className={badge}>{cartQuantity}</span>
                            </button>
                        </div>
                        <div className="menu-item">
                            <button
                                type="button"
                                className="text-2xl hover:text-primary transition-all"
                                onClick={showOffcanvas}
                            >
                                <IoMenuOutline />
                            </button>
                        </div>
                    </div>
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
    );
}

HeaderRightTwo.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HeaderRightTwo;
