'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import SwiperComps, { Slide } from '@/components/hero/components/SwiperComps'
import { heroCollection } from '@/config/hero-collection'

interface HeroProps {
  btnText: string
  settings?: any
}

const Hero = ({ settings, btnText }: HeroProps) => {
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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}">${(index + 1)
          .toString()
          .padStart(2, '0')}</span>`
      },
    },
    navigation: false,
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideChange,
    onSlideChangeTransitionStart,
    onSlideChangeTransitionEnd,
  }

  return (
    <div className="hero-area">
      <div className="container-fluid">
        <SwiperComps sliderCName="hero-collection" settings={settings}>
          {heroCollection?.map((heroCollectionItem, idx) => (
            <Slide key={heroCollectionItem.id}>
              <div className="slide-inner flex h-[550px] items-center bg-[#f1f1f1] xl:h-[900px]">
                <div className="container">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 self-center md:col-span-6">
                      <div className="slide-content pt-[50px] md:pt-0">
                        <motion.span
                          className="mb-[15px] block text-[20px] text-primary lg:mb-[25px] lg:text-[24px]"
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
                        >
                          {heroCollectionItem.subtitle}
                        </motion.span>
                        <motion.h2
                          className="mb-[30px] text-[30px] sm:text-[34px] lg:text-[60px] lg:leading-[66px]"
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
                        >
                          {heroCollectionItem.title}
                        </motion.h2>
                        <motion.p
                          className="hidden fixed-lg:text-[15px] md:block"
                          dangerouslySetInnerHTML={{
                            __html: heroCollectionItem.desc,
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
                          className="mt-[20px] lg:mt-[60px]"
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
                            className="flex items-center text-[18px] transition-all hover:text-primary"
                          >
                            {btnText}
                            <IoArrowForwardOutline className="light-stroke ml-[5px]" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                    <div className="col-span-8 lm:col-span-7 md:col-span-6">
                      <div className="slide-img pt-[50px] md:pt-0">
                        <img
                          className="ml-auto"
                          src={heroCollectionItem.image}
                          alt={heroCollectionItem.imageAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
          <div className="swiper-pagination" />
        </SwiperComps>
      </div>
    </div>
  )
}

export default Hero
