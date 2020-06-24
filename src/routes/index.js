import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shop from '../pages/shop';
import Cart from "../pages/cart";


const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
    </Router>
  );
}

export default Routes;