'use client'

import { Spectral } from 'next/font/google'
import { HeroSliderEight } from '@/app/components/HeroSlider'
import { ImageTextContent, VideoIconContent } from '@/app/components/About'
import { ProductSliderThree } from '@/app/components/ProductSlider'
import { BrandLogoTwo } from '@/app/components/BrandLogo'
import { ImageCtaFour } from '@/app/components/Cta'
import { ImageSliderOne } from '@/app/components/ImageSlider'
import { useSelector } from 'react-redux'
import { getProducts } from '@/lib/product'
import { RootState } from '@/store'

import heroSliderData from '../data/hero-sliders/hero-slider-eight.json'
import brandLogoData from '../data/brand-logos/brand-logo-one.json'
import imageSliderData from '../data/image-sliders/image-slider-one.json'

const spectral = Spectral({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const { products }: any = useSelector((state: RootState) => state.product)
  const popularProducts = getProducts(products, 'jewelry', 'popular', 9)
  return (
    <>
      <style jsx global>
        {`
          :root {
            --ff-spectral: ${spectral.style.fontFamily};
          }
        `}
      </style>
      {/* hero slider */}
      <HeroSliderEight
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--30"
      />
      {/* video icon content */}
      <VideoIconContent />

      {/* product slider */}
      <ProductSliderThree products={popularProducts} />

      {/* image text content */}
      <ImageTextContent />

      {/* brand logo */}
      <BrandLogoTwo brandLogoData={brandLogoData} />

      {/* cta */}
      <ImageCtaFour />

      {/* image slider */}
      <ImageSliderOne imageSliderData={imageSliderData} />
    </>
  )
}
