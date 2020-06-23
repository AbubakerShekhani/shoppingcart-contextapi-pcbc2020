import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index'
import { HelmetProvider } from 'react-helmet-async'
import ProductsContextProvider from './contexts/ProductContext';

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
