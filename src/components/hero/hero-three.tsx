'use client'
import Link from 'next/link'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { Slide } from '../SwiperComps'

function HeroThree({ heroCarouselItems, settings }) {
  const SwiperComps = dynamic(() => import('../SwiperComps'), {
    ssr: false,
  })
  settings = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    loop: true,
    slidesPerView: 'auto',
    breakpoints: {
      0: {
        centeredSlides: false,
        spaceBetween: 30,
      },
      576: {
        centeredSlides: false,
        spaceBetween: 30,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 30,
      },
      992: {
        centeredSlides: false,
        spaceBetween: 50,
      },
      1400: {
        centeredSlides: true,
        spaceBetween: 100,
      },
    },
  }

  return (
    <div className="hero-area">
      <div className="container-fluid">
        <SwiperComps
          settings={settings}
          sliderCName="hero-carousel xl:!px-[260px] md:!px-[100px]"
        >
          {heroCarouselItems?.map((heroCarouselItem) => (
            <Slide key={heroCarouselItem.id}>
              <div className="slide-inner">
                <div
                  className={`${heroCarouselItem.heroBG
                    .split(' ')
                    .join(' ')} h-[500px] md:h-[600px]`}
                >
                  <div className="hero-content ml-[15px] md:ml-[50px] xxl:ml-[100px]">
                    <h2
                      className="relative mb-[5px] pb-[15px] text-[40px] leading-[1.1] lg:text-[60px]"
                      dangerouslySetInnerHTML={{
                        __html: heroCarouselItem.title,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: heroCarouselItem.desc,
                      }}
                    />
                    <div className="button-wrap mt-[30px]">
                      <Link
                        href="/products/left-sidebar"
                        className="border-b border-black text-[18px] leading-[18px] transition-all hover:border-primary hover:text-primary"
                      >
                        Discover now
                      </Link>
                    </div>
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

HeroThree.propTypes = {
  heroCarouselItems: PropTypes.instanceOf(Object).isRequired,
  settings: PropTypes.shape({
    spaceBetween: PropTypes.number,
    autoplay: PropTypes.bool,
    breakpoints: PropTypes.shape({}),
  }),
}

export default HeroThree
