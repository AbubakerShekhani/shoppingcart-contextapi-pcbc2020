import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const ShoppingCartItem = ({product}) => {

  const { increment, decrement, removeProduct } = useContext(ShoppingCartContext)

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
          <img
          alt={product.name}
          style={{margin: "0 auto", maxHeight: "50px"}}
          src={product.imgUrl} className="img-fluid d-block"/>
      </div>
      <div className="col-sm-4 p-2">
          <h5 className="mb-1">{product.name}</h5>
          <p className="mb-1">Price: {product.price} </p>

      </div>
      <div className="col-sm-2 p-2 text-center ">
            <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-2 p-2 text-right">
            <button
            onClick={() => increment(product)}
            className="btn btn-primary btn-sm mr-2 mb-1">
                +
            </button>

            {
                product.quantity > 1 &&
                <button
              onClick={() => decrement(product)}
              className="btn btn-danger btn-sm mb-1">
                  -
              </button>
            }






      </div>
      <div className="col-sm-2 p-2 text-right">
        <button
          onClick={() => removeProduct(product)}
          className="btn btn-danger btn-sm mb-1">
              x
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartItem