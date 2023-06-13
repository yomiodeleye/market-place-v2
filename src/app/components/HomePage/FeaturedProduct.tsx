import PropTypes from 'prop-types'
import { Product } from 'swell-js'
import Link from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'

interface FeaturedProductProps {
  products: Product[]
}

function FeaturedProduct({ products }: FeaturedProductProps) {
  const outlineButton =
    'inline-flex items-center border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white leading-[38px] text-[15px] h-[38px] px-[35px]'

  return (
    <>
      {products.map(
        ({ sku, slug, images, name, metaDescription, id }, index) => {
          const {
            file: { url }
          } = images[0]

          const isEven = index % 2 == 0
          return (
            <>
              <div
                className={`
                featured-product
                relative
                pt-[${isEven ? '65px' : '50px'}]
                before:absolute
                before:bottom-[${isEven ? '-75px' : '-60px'}]
                before:${isEven ? 'left-0' : 'right-0'}
                before:z-[1]
                before:text-[40px]
                before:font-semibold
                before:text-[#F5F4F7]
                before:content-[attr(data-count)]
                ${isEven ? '' : 'before:sm:bottom-[-15px]'}
                before:sm:bottom-[-15px]
                ${isEven ? 'md:pt-[95px]' : 'md:pt-[80px]'}
                ${isEven ? 'lg:pt-[115px]' : 'lg:pt-[100px]'}
                ${isEven ? 'xl:pt-[135px]' : 'xl:pt-[120px]'}
                ${isEven ? 'before:xl:text-[80px]' : 'before:xl:text-[70px]'}
                `}
                data-count={name}
                key={id}
              >
                <div className='container'>
                  <div className='group grid grid-cols-12 gap-y-[30px] lm:gap-x-[30px] md:grid-cols-2 md:gap-y-0'>
                    <div className='col-span-12 md:col-span-1'>
                      <Link
                        href={`products/${slug}`}
                        className='featured-product-img block transition-all duration-500 group-hover:scale-[1.05]'
                      >
                        <img src={url} alt={`${name}-${sku}`} />
                      </Link>
                    </div>
                    <div className='col-span-12 self-center md:col-span-1'>
                      <div className='featured-product-content'>
                        <span className='mb-[5px] block text-[14px] font-medium uppercase leading-5 text-[#999999]'>
                          featured
                        </span>
                        <h2 className='relative mb-[30px] pb-[10px] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[70px] after:bg-primary'>
                          <Link
                            href={`products/${slug}`}
                            className='transition-all hover:text-primary'
                          >
                            {name}
                          </Link>
                        </h2>
                        <p>{metaDescription}</p>
                        <div className='mt-[60px]'>
                          <Link
                            href={`products/${slug}`}
                            className={outlineButton}
                          >
                            Show
                            <IoArrowForwardOutline className='ml-[5px]' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      )}
    </>
  )
}

export default FeaturedProduct
