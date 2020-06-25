import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

const Header = () => {

  const { itemsCount } = useContext(ShoppingCartContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor02">
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