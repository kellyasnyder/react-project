import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Clothes from './Clothes';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/contact" component={Contact} />
    <Route path="/clothes" component={Clothes} />
  </Switch>
)

export default Main;