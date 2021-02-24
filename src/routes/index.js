import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, NotFound } from '../components/containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;
