import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../contexts/ProductContext'

import styles from './ProductList.module.scss'

const ProductList = () => {

  const { products } = useContext(ProductsContext)

  return (
        <div className={styles.p__container}>

          <div className={styles.p__grid}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className="row">
              <div className="col-sm-8">
                  <div className="py-3">
                      {products.length} Products
                  </div>
              </div>
            </div>
            <div className={styles.p__footer}>

            </div>

        </div>
    )
}

export default ProductList