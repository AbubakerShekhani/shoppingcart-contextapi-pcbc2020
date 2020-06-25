const sumCartItems = (cartItems) => {
  let itemsCount = cartItems.reduce((total, product) => total + product.quantity, 0)
  let totalAmount = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  return { itemsCount, totalAmount }
}

export const AppReducer = (state, action) => {
  switch(action.type) {

    case "ADD_CART_ITEM":

      if (!state.shopCartItems.find(item => item.id === action.payload.id)) {
        state.shopCartItems.push({
          ...action.payload,
          quantity: 1
        })
      }

      return {
        ...state,
        ...sumCartItems(state.shopCartItems),
        shopCartItems: [...state.shopCartItems]
      }

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        ...sumCartItems(state.shopCartItems.filter(item => item.id !== action.payload.id)),
        shopCartItems: [...state.shopCartItems.filter(item => item.id !== action.payload.id)]
      }

    case "CLEAR_CART":
        return {
          shopCartItems: [],
          itemsCount: 0,
          total: 0,
          checkOut: false
        }

    case "INCREMENT":
      state.shopCartItems[state.shopCartItems.findIndex(item => item.id === action.payload.id)].quantity++

      return {
        ...state,
        ...sumCartItems(state.shopCartItems),
        shopCartItems: [...state.shopCartItems]
      }

    case "DECREMENT":
      state.shopCartItems[state.shopCartItems.findIndex(item => item.id === action.payload.id)].quantity--

      return {
        ...state,
        ...sumCartItems(state.shopCartItems),
        shopCartItems: [...state.shopCartItems]
      }

    case "CHECKOUT":
      return {
        shopCartItems: [],
        itemsCount: 0,
        total: 0,
        checkOut: true
      }


    default:
      return state;
  }
}