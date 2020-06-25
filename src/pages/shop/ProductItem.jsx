import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';


const ProductItem = ({product}) => {

  const { addProduct, increment, shopCartItems } = useContext(ShoppingCartContext)

  const itemInCart = product => {

    return shopCartItems.find(item => item.id === product.id)
  }



  return (
    <div className="card card-body">
        <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
        src={product.imgUrl} alt=""/>
        <p>{product.name}</p>
        <h3 className="text-left">${(product.price)}</h3>
        <div className="text-right">

            {
              !itemInCart(product) &&
              <button onClick={() => addProduct(product)}
                className="btn btn-primary btn-sm">Add to cart</button>
            }

            {
              itemInCart(product) &&
              <button onClick={() => increment(product)}
                className="btn btn-primary btn-sm">Add more</button>
            }


        </div>
    </div>
  );
}

export default ProductItem;