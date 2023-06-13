import NewsletterComps from '@/components/NewsletterComps'
import { blogData } from '@/config/blog'
import LatestBlog from '@/components/HomePage/LatestBlog'
import OfferColection from '@/components/OfferColection'
import { offerCollection } from '@/config/offer-collection'
import BestSellingProduct from '@/components/HomePage/BestSellingProduct'
import FeaturedProduct from '@/components/HomePage/FeaturedProduct'
import { Hero } from '@/components/hero'
import { getProductByCategory } from '@/lib/swell/products'

const Page = async () => {
  const featureProduct = await getProductByCategory('featured-product')
  const bestSellingProduct = await getProductByCategory('best-selling')

  return (
    <>
      <Hero btnText='Shop Now' />
      <FeaturedProduct products={featureProduct.results} />
      <BestSellingProduct
        products={bestSellingProduct.results}
        sectionTitle='Best Selling'
      />
      <OfferColection offerColection={offerCollection} />
      <LatestBlog blogs={blogData} sectionTitle='Our Blog' />
      <NewsletterComps sectionTitle='Our Newsletter' />
    </>
  )
}

export default Page
