import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shop from '../pages/shop';


const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Shop}/>
        </Switch>
    </Router>
  );
}

export default Routes;