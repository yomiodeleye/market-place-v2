import { Header } from '@/src/components/header'
import { Hero } from '@/src/components/hero'
import FeaturedProduct from '@/src/components/home-page/FeaturedProduct'
import { featureProduct, productFilter, products } from '@/src/config/product'
import BestSellingProduct from '@/src/components/HomePage/BestSellingProduct'
import OfferColection from '@/src/components/OfferColection'
import { offerCollection } from '@/src/config/offer-collection'
import { blogData } from '@/src/config/blog'
import LatestBlog from '@/src/components/HomePage/LatestBlog'
import NewsletterComps from '@/src/components/NewsletterComps'
import { footerItem } from '@/src/config/footer-data'
import FooterCompsThree from '@/src/components/FooterComps/index-3'

export default async function IndexPage() {
  return (
    <>
      <Header />
      <Hero btnText="Shop Now" />
      <FeaturedProduct featuredProduct={featureProduct} />
      <BestSellingProduct
        products={products}
        productFilter={productFilter}
        sectionTitle="Best Selling"
        productFilterPath="left-sidebar"
      />
      <OfferColection offerColection={offerCollection} />
      <LatestBlog blogs={blogData} sectionTitle="Our Blog" />
      <NewsletterComps sectionTitle="Our Newsletter" />
      <FooterCompsThree footerItems={footerItem} />
    </>
  )
}
