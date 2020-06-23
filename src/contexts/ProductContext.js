import React, { createContext, useState, useReducer } from 'react'
import { dummyProducts } from '../services/fakedata'
import {AppReducer} from './AppReducer'

export const ProductsContext = createContext(dummyProducts)

const ProductsContextProvider = ({children}) => {

  //const [state, dispatch] = useReducer(AppReducer, dummyProducts)
  const [products] = useState(dummyProducts);

  return (
    <ProductsContext.Provider
      value={{
        products: products
      }}
      >
        {children}
      </ProductsContext.Provider>
  )
}

export default ProductsContextProvider;