import { tCategory } from '@/types/category'

export type tProduct = {
  id: string
  sku: string
  name: string
  slug: string
  price: number
  discount: number
  new: boolean
  rating: number
  ratingCount: number
  saleCount: number
  category: tCategory[]
  tag: tCategory[]
  stock: number
  thumbImage: string[]
  image: string[]
  shortDescription: string
  fullDescription: string
}
