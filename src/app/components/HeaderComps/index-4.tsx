import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LogoComps from '../LogoComps';
import HeaderRightThree from './HeaderRightSideThree';
import HeaderMenu from './HeaderMenu';

function HeaderFour({ headerItems }) {
    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;

        scrollTop >= 90
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    //   End Here

    return (
        <header ref={header}
            className="flex items-center h-[120px] w-full md:absolute top-0 z-30"
        >
            <div className="container-fluid relative lg:px-[100px] px-[15px]">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-4 col-span-6 self-center">
                        <LogoComps
                            headerItems={headerItems}
                            headerLogoCName="flex"
                            logoPath="/home-collection"
                        />
                    </div>
                    <div className="lg:col-span-4 hidden lg:block">
                        <HeaderMenu
                            headerItems={headerItems}
                            differentPositionCName="home-collection-megamenu-holder flex justify-center"
                        />
                    </div>
                    <div className="lg:col-span-4 col-span-6 self-center">
                        <HeaderRightThree headerItems={headerItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}

HeaderFour.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HeaderFour;
