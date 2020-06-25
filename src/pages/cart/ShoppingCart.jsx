import React, { useContext } from 'react'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCartItem from './ShoppingCartItem';

import styles from './ShoppingCart.module.scss';

const ShoppingCart = () => {

  const {shopCartItems, itemsCount, totalAmount, clearCart, handleCheckOut  } = useContext(ShoppingCartContext)

  return (

      <div className={`${styles.p__container} row`}>
          <div className="card card-body col-md-8">
              {
                  shopCartItems.map(product =>
                    <ShoppingCartItem key={product.id} product={product}/>)
              }

          </div>

          {
              shopCartItems.length > 0 &&

                  <div className="card card-body col-md-3 col-sm-3 p-3 ml-2">
                      <p className="mb-1">Total Items</p>
                      <h4 className=" mb-3 txt-right">{itemsCount}</h4>
                      <p className="mb-1">Total Price</p>
                      <h3 className="m-0 txt-right">{totalAmount}</h3>
                      <hr className="my-4"/>
                      <div className="text-center">
                          <button type="button" className="btn btn-primary mb-2" onClick={handleCheckOut}>CHECKOUT</button>
                          <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                      </div>

                  </div>

          }

      </div>


  )

}

export default ShoppingCart