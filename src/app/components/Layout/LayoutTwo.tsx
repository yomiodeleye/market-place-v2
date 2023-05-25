import { Fragment } from 'react'
import { HeaderOne } from '../components/Header'
import { FooterTwo } from '../Footer'
import ScrollToTop from '../scroll-to-top'

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterTwo footerBgClass={footerBgClass} />
      <ScrollToTop />
    </Fragment>
  )
}

export default LayoutTwo
