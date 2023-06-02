'use client'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import SwiperComps, { Slide } from '../SwiperComps'

function HeroOne({ heroDefaultItems, settings }) {
  const [activeIdx, setActiveId] = useState(0)
  const onSlideChange = (SwiperComps) => {
    const { activeIndex } = SwiperComps
    setActiveId(activeIndex)
  }
  const onSlideChangeTransitionStart = () => {
    setActiveId(-1)
  }

  const onSlideChangeTransitionEnd = (SwiperComps) => {
    const { activeIndex } = SwiperComps
    setActiveId(activeIndex)
  }

  settings = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true, type: 'bullets' },
    navigation: false,
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideChange,
    onSlideChangeTransitionStart,
    onSlideChangeTransitionEnd,
  }

  // Tailwind Related Stuff
  const secondaryButton =
    'inline-flex items-center bg-secondary text-white leading-[38px] text-[15px] h-[38px] px-5'

  return (
    <div className="hero-area">
      <div className="container-fluid mt-[15px] px-[15px]">
        <SwiperComps sliderCName="pagination-bg-primary" settings={settings}>
          {heroDefaultItems?.map((heroDefaultItem, idx) => (
            <Slide key={heroDefaultItem.id}>
              <div
                className={`${heroDefaultItem.heroBG
                  .split(' ')
                  .join(' ')} h-[540px] md:h-[800px]`}
              >
                <div className="container">
                  <div className="hero-content">
                    <motion.span
                      className="mb-[5px] block font-medium text-primary"
                      dangerouslySetInnerHTML={{
                        __html: heroDefaultItem.subtitle,
                      }}
                      initial="hidden"
                      animate={idx === activeIdx ? 'visible' : 'exit'}
                      exit="exit"
                      variants={{
                        hidden: {
                          y: '100%',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.3,
                          },
                        },
                        exit: {
                          y: '100%',
                          opacity: 0,
                          transition: {
                            duration: 1,
                            delay: 0.3,
                          },
                        },
                      }}
                    />
                    <motion.h2
                      className="relative mb-[30px] pb-[15px] text-[34px] leading-[1.1] after:absolute after:bottom-0 after:left-0 after:max-h-[4px] after:min-h-[4px] after:min-w-[70px] after:max-w-[70px] after:bg-primary md:text-[60px]"
                      dangerouslySetInnerHTML={{
                        __html: heroDefaultItem.title,
                      }}
                      initial="hidden"
                      animate={idx === activeIdx ? 'visible' : 'exit'}
                      exit="exit"
                      variants={{
                        hidden: {
                          y: '100%',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.6,
                          },
                        },
                        exit: {
                          y: '100%',
                          opacity: 0,
                          transition: {
                            duration: 1,
                            delay: 0.6,
                          },
                        },
                      }}
                    />
                    <motion.p
                      dangerouslySetInnerHTML={{
                        __html: heroDefaultItem.desc,
                      }}
                      initial="hidden"
                      animate={idx === activeIdx ? 'visible' : 'exit'}
                      exit="exit"
                      variants={{
                        hidden: {
                          y: '100%',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.9,
                          },
                        },
                        exit: {
                          y: '100%',
                          opacity: 0,
                          transition: {
                            duration: 1,
                            delay: 0.9,
                          },
                        },
                      }}
                    />
                    <motion.div
                      className="mt-[30px]"
                      initial="hidden"
                      animate={idx === activeIdx ? 'visible' : 'exit'}
                      exit="exit"
                      variants={{
                        hidden: {
                          y: '100%',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 1.2,
                          },
                        },
                        exit: {
                          y: '100%',
                          opacity: 0,
                          transition: {
                            duration: 1,
                            delay: 1.2,
                          },
                        },
                      }}
                    >
                      <Link
                        href="/products/left-sidebar"
                        className={secondaryButton}
                      >
                        Shop Now
                        <IoArrowForwardOutline className="ml-[5px] text-white" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </SwiperComps>
      </div>
    </div>
  )
}

HeroOne.propTypes = {
  heroDefaultItems: PropTypes.instanceOf(Object).isRequired,
  settings: PropTypes.shape({
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    breakpoints: PropTypes.shape({}),
  }),
}

export default HeroOne
