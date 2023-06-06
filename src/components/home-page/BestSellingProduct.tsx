import SwiperComps, { Slide } from '@/src/components/hero/components/SwiperComps'
import ProductItem from '@/src/components/Products/ProductItem'

interface BestSellingProductsProps {
  products: any
  productFilter: any
  sectionTitle: string
  productFilterPath?: string
  settings: any
}

function BestSellingProduct({
  products,
  productFilter,
  productFilterPath,
  sectionTitle,
  settings,
}: BestSellingProductsProps) {
  settings = {
    spaceBetween: 25,
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  }
  return (
    <div className="best-selling-product pt-[5px] lg:pt-[60px] xl:pt-[120px]">
      <div className="container">
        <div className="section-title relative mb-[50px] pb-[10px] text-center after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[70px] after:-translate-x-1/2 after:bg-primary">
          <h2>{sectionTitle}</h2>
        </div>
        <div className="slider-wrap relative">
          <SwiperComps settings={settings}>
            {products.slice(0, 5)?.map((product) => (
              <Slide key={product.slug}>
                <ProductItem
                  product={product}
                  productFilter={productFilter}
                  productFilterPath={productFilterPath}
                />
              </Slide>
            ))}
          </SwiperComps>
          <div className="swiper-button-wrap">
            <div className="swiper-button-prev after:!text-[24px] after:!text-[#666666] xxl:!left-[-40px]" />
            <div className="swiper-button-next after:!text-[24px] after:!text-[#666666] xxl:!right-[-40px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellingProduct
