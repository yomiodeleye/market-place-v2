import { Fragment } from 'react'
import { HeaderThree } from '../components/Header'
import { FooterThree } from '../Footer'
import ScrollToTop from '../scroll-to-top'

const LayoutThree = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterThree />
      <ScrollToTop />
    </Fragment>
  )
}

export default LayoutThree
