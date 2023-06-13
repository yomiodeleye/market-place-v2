'use client'

import Link from 'next/link'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import SwiperComps, { Slide } from '../SwiperComps'

function HeroTwo({ heroBoxedItems, settings }) {
  const [activeIdx, setActiveId] = useState(0)
  const onSlideChange = SwiperComps => {
    const { activeIndex } = SwiperComps
    setActiveId(activeIndex)
  }
  const onSlideChangeTransitionStart = () => {
    setActiveId(-1)
  }

  const onSlideChangeTransitionEnd = SwiperComps => {
    const { activeIndex } = SwiperComps
    setActiveId(activeIndex)
  }

  settings = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideChange,
    onSlideChangeTransitionStart,
    onSlideChangeTransitionEnd
  }

  return (
    <div className='hero-area'>
      <div className='container-fluid mt-[15px] px-[15px] xl:px-[100px]'>
        <SwiperComps settings={settings}>
          {heroBoxedItems?.map((heroBoxedItem, idx) => (
            <Slide key={heroBoxedItem.id}>
              <div className='flex h-[500px] items-center bg-[#f1f1f1] md:h-[600px]'>
                <div className='container xl:pl-[70px]'>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-12 pl-[15px] sm:col-span-6 lg:ml-[60px]'>
                      <div className='hero-content'>
                        <motion.span
                          className='mb-[20px] block text-[#999999]'
                          initial='hidden'
                          animate={idx === activeIdx ? 'visible' : 'exit'}
                          exit='exit'
                          variants={{
                            hidden: {
                              y: '100%',
                              opacity: 0
                            },
                            visible: {
                              y: '0',
                              opacity: 1,
                              transition: {
                                duration: 1,
                                delay: 0.3
                              }
                            },
                            exit: {
                              y: '100%',
                              opacity: 0,
                              transition: {
                                duration: 1,
                                delay: 0.3
                              }
                            }
                          }}
                        >
                          {heroBoxedItem.subtitle}
                        </motion.span>
                        <motion.h2
                          className='tracking-full relative text-[30px] leading-[1.1] md:text-[40px] lg:text-[60px]'
                          dangerouslySetInnerHTML={{
                            __html: heroBoxedItem.title
                          }}
                          initial='hidden'
                          animate={idx === activeIdx ? 'visible' : 'exit'}
                          exit='exit'
                          variants={{
                            hidden: {
                              y: '100%',
                              opacity: 0
                            },
                            visible: {
                              y: '0',
                              opacity: 1,
                              transition: {
                                duration: 1,
                                delay: 0.6
                              }
                            },
                            exit: {
                              y: '100%',
                              opacity: 0,
                              transition: {
                                duration: 1,
                                delay: 0.6
                              }
                            }
                          }}
                        />
                        <motion.div
                          className='mt-[20px] lg:mt-[80px]'
                          initial='hidden'
                          animate={idx === activeIdx ? 'visible' : 'exit'}
                          exit='exit'
                          variants={{
                            hidden: {
                              y: '100%',
                              opacity: 0
                            },
                            visible: {
                              y: '0',
                              opacity: 1,
                              transition: {
                                duration: 1,
                                delay: 0.9
                              }
                            },
                            exit: {
                              y: '100%',
                              opacity: 0,
                              transition: {
                                duration: 1,
                                delay: 0.9
                              }
                            }
                          }}
                        >
                          <Link
                            href='/products/left-sidebar'
                            className='hover:text-primary text-[18px] leading-[18px] transition-all'
                          >
                            Discover now
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                    <div className='col-span-12 sm:col-span-6'>
                      <div className='hero-img lg:absolute lg:right-[50px]'>
                        <img
                          className='object-cover object-center'
                          src={heroBoxedItem.image}
                          alt={heroBoxedItem.imageAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
          <div className='swiper-button-wrap hidden lg:block'>
            <div className='swiper-button-prev after:!text-[26px] after:!text-[#666666] lg:!left-[15px]' />
            <div className='swiper-button-next after:!text-[26px] after:!text-[#666666] lg:!right-[15px]' />
          </div>
        </SwiperComps>
      </div>
    </div>
  )
}

HeroTwo.propTypes = {
  heroBoxedItems: PropTypes.instanceOf(Object).isRequired,
  settings: PropTypes.shape({
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    breakpoints: PropTypes.shape({})
  })
}

export default HeroTwo
