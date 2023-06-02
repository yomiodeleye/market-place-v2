'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ReactNode } from 'react'

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Thumbs, EffectFade])

interface SwiperCompsProps {
  children: ReactNode
  settings: {
    spaceBetween: number
    breakpoints: any
  }
  sliderCName?: string
}

function SwiperComps({ children, sliderCName, settings }: SwiperCompsProps) {
  const sliderOptions = {
    ...settings,
  }
  return (
    <Swiper className={`${sliderCName}`} {...sliderOptions}>
      {children}
    </Swiper>
  )
}

export { SwiperSlide as Slide }
export default SwiperComps
