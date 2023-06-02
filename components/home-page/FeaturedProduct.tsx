import PropTypes from 'prop-types'
import Link from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'

interface FeaturedProduct {
  featuredProduct: any
}

function FeaturedProduct({ featuredProduct }) {
  const outlineButton =
    'inline-flex items-center border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white leading-[38px] text-[15px] h-[38px] px-[35px]'

  return (
    <>
      <div
        className="featured-product relative pt-[50px] before:absolute before:bottom-[-60px] before:right-0 before:z-[1] before:text-[40px] before:font-semibold before:text-[#F5F4F7] before:content-[attr(data-count)] before:sm:bottom-[-15px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] before:xl:text-[70px]"
        data-count="Wood coth"
      >
        <div className="container">
          <div className="group grid grid-cols-12 gap-y-[30px] lm:gap-x-[30px] md:grid-cols-2 md:gap-y-0">
            <div className="col-span-12 md:col-span-1">
              <Link
                href={featuredProduct[0]?.path}
                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
              >
                <img
                  src={featuredProduct[0]?.image}
                  alt={featuredProduct[0]?.altImage}
                />
              </Link>
            </div>
            <div className="col-span-12 self-center md:col-span-1">
              <div className="featured-product-content">
                <span className="mb-[5px] block text-[14px] font-medium uppercase leading-5 text-[#999999]">
                  {featuredProduct[0]?.subTitle}
                </span>
                <h2 className="relative mb-[30px] pb-[10px] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[70px] after:bg-primary">
                  <Link
                    href={featuredProduct[0]?.path}
                    className="transition-all hover:text-primary"
                  >
                    {featuredProduct[0]?.title}
                  </Link>
                </h2>
                <p>{featuredProduct[0]?.excerpt}</p>
                <div className="mt-[60px]">
                  <Link
                    href={featuredProduct[0]?.path}
                    className={outlineButton}
                  >
                    {featuredProduct[0]?.buttonText}
                    <IoArrowForwardOutline className="ml-[5px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="featured-product relative pt-[65px] before:absolute before:bottom-[-75px] before:left-0 before:z-[1] before:text-[40px] before:font-semibold before:text-[#F5F4F7] before:content-[attr(data-count)]  md:pt-[95px] lg:pt-[115px] xl:pt-[135px] before:xl:text-[80px] before:xxl:text-[150px]"
        data-count="Pine"
      >
        <div className="container">
          <div className="group grid grid-cols-12 gap-y-[30px] lm:gap-x-[30px] md:grid-cols-2 md:gap-y-0">
            <div className="order-2 col-span-12 md:col-span-1">
              <Link
                href={featuredProduct[1]?.path}
                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
              >
                <img
                  src={featuredProduct[1]?.image}
                  alt={featuredProduct[1]?.altImage}
                />
              </Link>
            </div>
            <div className="order-1 col-span-12 self-center md:col-span-1">
              <div className="featured-product-content">
                <span className="mb-[5px] block text-[14px] font-medium uppercase leading-5 text-[#999999]">
                  {featuredProduct[1]?.subTitle}
                </span>
                <h2 className="relative mb-[30px] pb-[10px] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[70px] after:bg-primary">
                  <Link
                    href={featuredProduct[1]?.path}
                    className="transition-all hover:text-primary"
                  >
                    {featuredProduct[1]?.title}
                  </Link>
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: featuredProduct[1]?.excerpt,
                  }}
                />
                <div className="mt-[60px]">
                  <Link
                    href={featuredProduct[1]?.path}
                    className={outlineButton}
                  >
                    {featuredProduct[1]?.buttonText}
                    <IoArrowForwardOutline className="ml-[5px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="featured-product relative pb-[60px] pt-[50px] before:absolute before:bottom-[35px] before:right-0 before:z-[1] before:text-[40px] before:font-semibold before:text-[#F5F4F7] before:content-[attr(data-count)] md:pt-[80px] lg:pb-[90px]  lg:pt-[100px] xl:pb-[110px] xl:pt-[120px] before:xl:text-[80px] before:xxl:text-[150px]"
        data-count="Art Deco"
      >
        <div className="container">
          <div className="group grid grid-cols-12 gap-y-[30px] lm:gap-x-[30px] md:grid-cols-2 md:gap-y-0">
            <div className="col-span-12 md:col-span-1">
              <Link
                href={featuredProduct[2]?.path}
                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
              >
                <img
                  src={featuredProduct[2]?.image}
                  alt={featuredProduct[2]?.altImage}
                />
              </Link>
            </div>
            <div className="col-span-12 self-center md:col-span-1">
              <div className="featured-product-content">
                <span className="mb-[5px] block text-[14px] font-medium uppercase leading-5 text-[#999999]">
                  {featuredProduct[2]?.subTitle}
                </span>
                <h2 className="relative mb-[30px] pb-[10px] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[70px] after:bg-primary">
                  <Link
                    href={featuredProduct[2]?.path}
                    className="transition-all hover:text-primary"
                  >
                    {featuredProduct[2]?.title}
                  </Link>
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: featuredProduct[2]?.excerpt,
                  }}
                />
                <div className="mt-[60px]">
                  <Link
                    href={featuredProduct[2]?.path}
                    className={outlineButton}
                  >
                    {featuredProduct[2]?.buttonText}
                    <IoArrowForwardOutline className="ml-[5px]" />
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

export default FeaturedProduct
