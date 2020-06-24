import React, { useContext } from 'react';
import Main from '../../components/Main';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCart from './ShoppingCart';

const Cart = () => {

  const { shopCartItems, itemsCount, totalAmount, increment, decrement, clearCart, checkOut, handleCheckOut } = useContext(ShoppingCartContext)



  return (
    <Main title="Cart" description="Shopping Cart" >
      Items: {itemsCount} <br/>
      Amount: { totalAmount }

      { shopCartItems.length > 0 ?


        <ShoppingCart />


        :

        <div className="p-3 text-muted">
          Your cart is empty
        </div>




      }


    </Main>
  )
}

export default Cart
