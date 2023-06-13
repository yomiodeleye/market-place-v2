import Link from 'next/link'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { Slide } from '../SwiperComps'

function Brand({ brandItems, settings }) {
  const SwiperComps = dynamic(() => import('../SwiperComps'), {
    ssr: false
  })
  settings = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 5
      }
    }
  }
  return (
    <div className='brand py-[50px] md:py-[80px] lg:py-[100px]'>
      <div className='homebox-container relative mx-[15px] xl:mx-[100px]'>
        <div className='slider-wrap relative'>
          <SwiperComps settings={settings}>
            {brandItems?.map(brandItem => (
              <Slide key={brandItem.id}>
                <Link href='#' className='slide-inner'>
                  <img
                    className='opacity-[0.35] transition-all duration-500 hover:opacity-100'
                    src={brandItem.brandImg}
                    alt={brandItem.brandImgAlt}
                  />
                </Link>
              </Slide>
            ))}
          </SwiperComps>
          <div className='swiper-button-wrap hidden lg:block'>
            <div className='swiper-button-prev after:!text-[24px] after:!text-[#666666] lg:!left-[-15px] xl:!left-[-40px]' />
            <div className='swiper-button-next after:!text-[24px] after:!text-[#666666] lg:!right-[-15px] xl:!right-[-40px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

Brand.propTypes = {
  brandItems: PropTypes.instanceOf(Object).isRequired,
  settings: PropTypes.shape({
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    autoplay: PropTypes.bool,
    breakpoints: PropTypes.shape({})
  })
}

export default Brand
