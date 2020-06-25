import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

const Header = () => {

  const { itemsCount } = useContext(ShoppingCartContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ">

            <li className="nav-item">
              <Link to='/' className="nav-link">Shop Now</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/cart' className="nav-link">View Cart ({itemsCount})</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;