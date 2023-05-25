import { useState, useEffect, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import clsx from 'clsx'
import Anchor from '../anchor'

const HeaderTwo = () => {
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)

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
        className={clsx(
          'topbar-shadow position-absolute',
          scroll > headerTop && 'is-sticky',
        )}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          paddingTop: '25px',
        }}
      >
        <Container className="wide">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
            {/* logo */}
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <Anchor path="/">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                  className="img-fluid"
                  alt=""
                />
              </Anchor>
            </div>
          </div>
        </Container>
      </header>
    </Fragment>
  )
}

export default HeaderTwo;
