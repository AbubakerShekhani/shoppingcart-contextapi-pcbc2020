import React, { createContext, useState, useReducer } from 'react'
import { initialProducts } from '../services/fakedata'

export const ProductsContext = createContext(initialProducts)

const ProductsContextProvider = ({children}) => {

const [state, dispatch] = useReducer(AppReducer, initialProducts)


  return (
    <ProductsContextProvider.Provider
      value={{
        products: state.products
      }}
      >
        {children}
      </ProductsContextProvider.Provider>
  )
}

export default ProductsContextProvider;