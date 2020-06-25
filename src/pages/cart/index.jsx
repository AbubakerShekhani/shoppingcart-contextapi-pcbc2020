import React, { useContext } from 'react';
import Main from '../../components/Main';

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCart from './ShoppingCart';

const Cart = () => {

  const { shopCartItems, checkOut } = useContext(ShoppingCartContext)

  return (
    <Main title="Cart" description="Shopping Cart" >
          <div className="text-center mt-5">
            <h1>Shopping Cart</h1>
          </div>

            {
              shopCartItems.length > 0 &&
                <ShoppingCart />
            }

            { (checkOut === false && shopCartItems.length === 0) &&
              <div className="card card-body text-center text-muted">
                <h2>Your cart is empty</h2>
              </div>
            }

            { checkOut &&
              <div className="card card-body text-center text-muted">
                <h2>Thank you for your order</h2>
              </div>
            }
    </Main>
  )
}

export default Cart
