import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index'
import { HelmetProvider } from 'react-helmet-async'
import ProductsContextProvider from './contexts/ProductContext';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext';

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Routes />
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
