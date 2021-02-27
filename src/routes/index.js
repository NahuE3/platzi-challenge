//Import de librerias.
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Import de vistas.
import { Home, NotFound, Login, Recipes } from '../components/containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/recipes" component={Recipes} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;
