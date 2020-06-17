import React, { createContext, useReducer } from 'react'

const initialState = {
              shopCartItems: [],
              itemsCount: 0,
              totalAmount: 0,
              checkOut: false }

export const ShoppingCartContext = createContext()

const ShoppingCartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <ShoppingCartContext.Provider value= {
      {...state}
    }
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider


