import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import FeaturedProduct from '@/components/home-page/FeaturedProduct'
import { featureProduct, productFilter, products } from '@/config/product'
import BestSellingProduct from '@/components/HomePage/BestSellingProduct'
import OfferColection from '@/components/OfferColection'
import { offerCollection } from '@/config/offer-collection'
import { blogData } from '@/config/blog'
import LatestBlog from '@/components/HomePage/LatestBlog'
import NewsletterComps from '@/components/NewsletterComps'
import { footerItem } from '@/config/footer-data'
import FooterCompsThree from '@/components/FooterComps/index-3'

export default async function IndexPage() {
  return (
    <>
      {/*<Header />*/}
      {/*<Hero btnText="Shop Now" />*/}
      {/*<FeaturedProduct featuredProduct={featureProduct} />*/}
      {/*<BestSellingProduct*/}
      {/*  products={products}*/}
      {/*  productFilter={productFilter}*/}
      {/*  sectionTitle="Best Selling"*/}
      {/*  productFilterPath="left-sidebar"*/}
      {/*/>*/}
      {/*<OfferColection offerColection={offerCollection} />*/}
      {/*<LatestBlog blogs={blogData} sectionTitle="Our Blog" />*/}
      {/*<NewsletterComps sectionTitle="Our Newsletter" />*/}
      {/*<FooterCompsThree footerItems={footerItem} />*/}
    </>
  )
}
