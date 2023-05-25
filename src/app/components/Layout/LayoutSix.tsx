import { Fragment } from 'react'
import { HeaderThree } from '../components/Header'
import { FooterTwo } from '../Footer'
import ScrollToTop from '../scroll-to-top'

const LayoutThree = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  )
}

export default LayoutThree
