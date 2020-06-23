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

  const increment = (payload) => {

    dispatch({type: 'INCREMENT', payload})
  }

  const decrement = (payload) => {
    dispatch({type: 'DECREMENT', payload})
  }

  const handleCheckOut = () => {
    dispatch({type: 'CHECKOUT'})
  }

  return (
    <ShoppingCartContext.Provider value= {
      {...state,
      addProduct,
      removeProduct,
      clearCart,
      increment,
      decrement,
      handleCheckOut
      }
    }
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider


