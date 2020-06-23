import React from 'react';
import { Helmet } from 'react-helmet-async'
import 'bootswatch/dist/pulse/bootstrap.css'
import Header from './Header';
import Footer from './Footer';


const Main = ({title, description, children }) => {
  return (<>
      <Helmet>
        <title>{ title ? title + " - Abubaker's Store" : "Abubaker's Store" }</title>
        <meta name = "description" content={ description || "Abubaker's Store" } />
      </Helmet>
      <Header />

      <main className="container">
        { children }
      </main>
    <Footer />
  </>)
}

export default Main