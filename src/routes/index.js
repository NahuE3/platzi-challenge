import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Cart, Favorites, Home, NotFound } from '../components/containers';
import { UserForm } from '../controller';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={UserForm} />
      <Route exact path='/register' component={UserForm} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/favorites' component={Favorites} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;
