import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import styles from './shop.module.scss';

const ProductItem = ({product}) => {


    return (
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
            src={product.imgUrl} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">${(product.price)}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                <button

                    className="btn btn-primary btn-sm">Add to cart</button>


            </div>
        </div>
     );
}

export default ProductItem;