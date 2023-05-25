import { useState, useEffect, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  IoIosSearch,
  IoMdPerson,
  IoIosHeartEmpty,
  IoIosCart,
  IoIosMenu,
  IoIosArrowDown,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from 'react-icons/io'
import Navigation from '@/app/components/header/elements/Navigation'
import AboutOverlay from '@/app/components/header/elements/AboutOverlay'
import SearchOverlay from '@/app/components/header/elements/SearchOverlay'
import CartOverlay from '@/app/components/header/elements/CartOverlay'
import WishlistOverlay from '@/app/components/header/elements/WishlistOverlay'
import MobileMenu from '@/app/components/header/elements/MobileMenu'
import Anchor from '../anchor'

const HeaderFive = ({ aboutOverlay }) => {
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false)
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false)
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false)
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false)
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] =
    useState(false)

  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)

  useEffect(() => {
    const header = document.querySelector('header')
    setHeaderTop(header.offsetTop)
    setHeaderHeight(header.offsetHeight)
    window.addEventListener('scroll', handleScroll)
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <Fragment>
      <header
        className={`topbar-shadow ${scroll > headerTop ? 'is-sticky' : ''}`}
      >
        <div className="header-top-area border-bottom--grey space-pt--10 space-pb--10 d-none d-lg-block">
          <Container className="wide">
            <div className="header-top">
              <div className="header-top__left">
                <div className="language-change change-dropdown">
                  <span>English</span> <IoIosArrowDown />
                  <ul>
                    <li>
                      <button>English</button>
                    </li>
                    <li>
                      <button>Deustch</button>
                    </li>
                  </ul>
                </div>
                <span className="header-separator">|</span>
                <div className="currency-change change-dropdown">
                  <span>USD</span> <IoIosArrowDown />
                  <ul>
                    <li>
                      <button>USD</button>
                    </li>
                    <li>
                      <button>EUR</button>
                    </li>
                  </ul>
                </div>
                <span className="header-separator">|</span>
                <div className="order-online-text">
                  Order Online Call
                  <span className="number">(0123) 456789</span>
                </div>
              </div>
              <div className="header-top__right">
                <div className="signup-link">
                  <Anchor path="/other/login-register">Signup / Login</Anchor>
                </div>
                <span className="header-separator">|</span>
                <div className="top-social-icons">
                  <ul>
                    <li>
                      <a href="https://www.twitter.com" target="_blank">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank">
                        <IoLogoInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com" target="_blank">
                        <IoLogoYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="header-bottom-area">
          <Container className="wide">
            <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
              {/* logo */}
              <div className="header-content__logo space-pr--15">
                <Anchor path="/">
                  <img
                    src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                    className="img-fluid"
                    alt=""
                  />
                </Anchor>
              </div>

              {/* navigation */}
              <Navigation />

              {/* icons */}
              <div className="header-content__icons space-pl--15">
                <ul className="d-none d-lg-block">
                  <li>
                    <button
                      onClick={() => {
                        setOffCanvasSearchActive(true)
                        document
                          .querySelector('body')
                          .classList.add('overflow-hidden')
                      }}
                    >
                      <IoIosSearch />
                    </button>
                  </li>
                  <li>
                    <Anchor path="/other/login-register">
                      <IoMdPerson />
                    </Anchor>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setOffCanvasWishlistActive(true)
                        document
                          .querySelector('body')
                          .classList.add('overflow-hidden')
                      }}
                    >
                      <IoIosHeartEmpty />
                      {wishlistItems.length >= 1 ? (
                        <span className="count">
                          {wishlistItems.length ? wishlistItems.length : ''}
                        </span>
                      ) : (
                        ''
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setOffCanvasCartActive(true)
                        document
                          .querySelector('body')
                          .classList.add('overflow-hidden')
                      }}
                    >
                      <IoIosCart />
                      {cartItems.length >= 1 ? (
                        <span className="count">
                          {cartItems.length ? cartItems.length : ''}
                        </span>
                      ) : (
                        ''
                      )}
                    </button>
                  </li>
                </ul>

                <ul className="d-block d-lg-none">
                  <li>
                    <Anchor path="/other/wishlist">
                      <IoIosHeartEmpty />
                      {wishlistItems.length >= 1 ? (
                        <span className="count">
                          {wishlistItems.length ? wishlistItems.length : ''}
                        </span>
                      ) : (
                        ''
                      )}
                    </Anchor>
                  </li>
                  <li>
                    <Anchor path="/other/cart">
                      <IoIosCart />
                      {cartItems.length >= 1 ? (
                        <span className="count">
                          {cartItems.length ? cartItems.length : ''}
                        </span>
                      ) : (
                        ''
                      )}
                    </Anchor>
                  </li>
                  <li>
                    <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                      <IoIosMenu />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ''
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />

      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* wishlist overlay */}
      <WishlistOverlay
        activeStatus={offCanvasWishlistActive}
        getActiveStatus={setOffCanvasWishlistActive}
      />
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  )
}

export default HeaderFive;
