import React from 'react'
import Main from '../../components/Main'
import ProductList from '../shop/ProductList'

const Shop = () => {

  return (
    <Main title="Shop Now" description="Store page" >
      <div>
        <div className="text-center mt-5">
          <h1>Fashion Store</h1>
        </div>
        <ProductList />
      </div>
    </Main>
   );
}

export default Shop;