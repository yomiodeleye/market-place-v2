import { configureStore } from '@reduxjs/toolkit'
import storage from './sync_storage'
import productReducer from './slices/product-slice'
import cartReducer from './slices/cart-slice'
import wishlistReducer from './slices/wishlist-slice'
import compareReducer from './slices/compare-slice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
