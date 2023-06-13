import swell from './client'
import { PRODUCTS_PER_PAGE } from '../constants'

interface tFilterProducts {
  page?: number
  sort?: any
  filters?: any
  limit?: number
}

export const getProducts = async ({
  page = 1,
  sort = '',
  filters = {},
  limit = PRODUCTS_PER_PAGE
}: tFilterProducts) => {
  return await swell.products.list({
    page,
    limit,
    sort,
    $filters: filters,
    expand: ['variants', 'categories']
  })
}

export const getProductByCategory = async (category: string = '') => {
  return await swell.products.list({
    category,
    limit: 5,
    page: 1
  })
}

export const getProductBySlugOrId = async slugOrId => {
  return await swell.products.get(slugOrId)
}
