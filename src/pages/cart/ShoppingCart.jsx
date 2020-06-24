import React, { useContext } from 'react'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCartItem from './ShoppingCartItem';

import styles from './Cart.module.scss';

const ShoppingCart = () => {

  const {shopCartItems } = useContext(ShoppingCartContext)

  return (

      <div className={styles.p__container}>
          <div className="card card-body border-0">
              {
                  shopCartItems.map(product =>
                    <ShoppingCartItem key={product.id} product={product}/>)
              }

          </div>
      </div>


  )

}

export default ShoppingCart