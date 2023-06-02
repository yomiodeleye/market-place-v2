export type tCartItem = {
  id: string
  price: number
  quantity: number
  totalPrice: number
  name: string
  image: string
  slug: string
}

export type tCart = {
  items: tCartItem[]
  totalQuantity: number
  changed: boolean
}
