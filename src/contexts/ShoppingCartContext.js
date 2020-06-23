import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const initialState = {
              shopCartItems: [],
              itemsCount: 0,
              totalAmount: 0,
              checkOut: false }

export const ShoppingCartContext = createContext()

const ShoppingCartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_CART_ITEM', payload})
  }

  const removeProduct = (payload) => {
    dispatch({type: 'REMOVE_CART_ITEM', payload})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

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


