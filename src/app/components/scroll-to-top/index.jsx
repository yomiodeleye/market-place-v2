'use client'

import { IoIosArrowRoundUp } from 'react-icons/io'
import useScrollTop from '../../../hooks/use-scroll-top'

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop()
  if (stick) {
    return (
      <button
        aria-label="Scroll to top"
        type="button"
        className="scroll-top"
        onClick={onClickHandler}
      >
        <IoIosArrowRoundUp />
      </button>
    )
  }
  return null
}

export default ScrollToTop
