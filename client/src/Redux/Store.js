import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './ProductsSlice'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'


export const store = configureStore({
  reducer: {Product:ProductsSlice , Cart:cartSlice , Order:orderSlice},
})